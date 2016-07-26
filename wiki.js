var http = require("http"),
    url = require("url"),
    path = require("path"),
    fs = require("fs")
    port = process.argv[2] || 9999;

var templates = require("./templates")
var fulltext = require("./usearch.js")

var filesFolder = "files/"


if (typeof String.prototype.startsWith != 'function') {
  String.prototype.startsWith = function (str){
    return this.slice(0, str.length) == str;
  };
}

if (typeof String.prototype.endsWith != 'function') {
  String.prototype.endsWith = function (str){
    return this.slice(-str.length) == str;
  };
}

if (typeof String.prototype.replaceAll != 'function') {
  String.prototype.replaceAll = function (search, replacement) {
    return this.replace(new RegExp(search, 'g'), replacement);
  };
}

http.createServer(function(request, response) {
  var uri = url.parse(request.url).pathname;

  if (uri.startsWith("/content")) {
    renderContent(request, response)

  } else if (uri.startsWith("/save")) {  
    saveFile(request, response)

  } else if (uri.startsWith("/edit")) {
    editFile(request, response)

  } else if (uri.startsWith("/search")) {
    search(request, response)

  } else {
    renderFile(request, response)  

  }

}).listen(parseInt(port, 10));


function renderContent(request, response) {
  fs.readdir(filesFolder, function(error, files) {
    if (error) {
      responseWithError(response, error);
      return;
    }

    resposeWithFileList(response, files);
  });
}

function saveFile(request, response) {
  var query = require('url').parse(request.url, true).query;
  var filename = query.filename  

  fs.writeFile(filename, query.content, function (error) {
    if (error) {
      responseWithError(response, error);
      return;
    }
    responseWithFormattedFile(response, filename, query.content, "utf8");
  });
}

function editFile(request, response) {    
  var filename = parseFileName(request)

  fs.readFile(filename, "utf8", function(error, fileContent) {
    if (error) {        
      responseWithError(response, error);
      return;
    }
    responseWithFileEditor(response, filename, fileContent);
  });
}

function search(request, response) {
  var pattern = parseSearchPattern(request)
  var result = fulltext.search("files", ".*" + pattern + ".*")
  responseWithSearchResult(response, pattern, result)
}

function getFilePath(request) {
  var uri = url.parse(request.url).pathname
  if (uri.endsWith('.css')) {
    return createPath(path.join(process.cwd(), uri))
  } else {
    return createPath(path.join(process.cwd(), filesFolder + uri))
  }
}

function createPath(path) {  
  return path.replaceAll("\\\\", "/")
}

function renderFile(request, response) {
  var filename = getFilePath(request)

  fs.exists(filename, function(exists) {

    if (exists) {
      renderExistingFile(response, filename)
    } else { 
      openEditorWithNewFile(response, filename)
    }    
    
  });
}

function renderExistingFile(response, filename) {
  if (isDirectory(filename)) {
      filename += '/index.md';
  }

  fs.readFile(filename, "binary", function(error, fileContent) { //"binary", 
      if (error) {        
        responseWithError(response, error)
        return;
      }
      
      if (isMarkdown(filename)) {
        responseWithFormattedFile(response, filename, fileContent, "binary")
      } else {
        responseWithBinaryFile(response, fileContent)
      }
      
    });
}

function openEditorWithNewFile(response, filename) {
  if (isMarkdown(filename)) {
    fs.writeFile(filename, "", function (error) {
        if (error) {
          responseWithError(response, error);
        }
        responseWithFileEditor(response, filename, "");
      });        
      
  } else {
    responseWithFileNotFound(response, filename)
  }
}

function resposeWithFileList(response, files) {
  response.writeHead(200);
  response.write(templates.getContentHeader());
  response.write(templates.getFileList(files));
  response.write(templates.getFooter());
  response.end();
}

function responseWithFormattedFile(response, filename, content, encoding) {
  response.writeHead(200);
  response.write(templates.getHeader(filename));
  response.write(templates.getFormattedFile(content), encoding);
  response.write(templates.getFooter());
  response.end();
}

function responseWithFileEditor(response, filename, content) {
  response.writeHead(200);
  response.write(templates.getEditHeader(filename));
  response.write(templates.getEditForm(filename, content));
  response.write(templates.getFooter());
  response.end();
}

function responseWithBinaryFile(response, content) {
  response.writeHead(200);
  response.write(content, "binary");
  response.end();
}

function responseWithSearchResult(response, pattern, result) {
  response.writeHead(200);
  response.write(templates.getContentHeader());
  response.write(templates.getSearchResult(pattern, result));
  response.write(templates.getFooter());
  response.end();
}

function responseWithFileNotFound(response, filename) {
  response.writeHead(404);
  response.write(templates.getHeader(filename));
  response.write(filename + ": 404 Not Found\n");
  response.write(templates.getFooter());
  response.end();  
}

function responseWithError(response, error) {
  response.writeHead(500, {"Content-Type": "text/plain"});
  response.write(error + "\n");
  response.end();
}

function parseFileName(request) {
  return url.parse(request.url, true).query.filename
}

function parseSearchPattern(request) {  
  return url.parse(request.url, true).query.pattern;
}

function isDirectory(filename) {
  return fs.statSync(filename).isDirectory()
}

function isMarkdown(filename) {
  var extension = filename.substring(filename.lastIndexOf('.') + 1)
  return (extension == "md")
}

console.log("uber wiki file server running at\n  => http://localhost:" + port + "/\nCTRL + C to shutdown");
