var path = require("path"),
    fs = require("fs")

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

function searchInFile(filename, pattern, result) {
  var fileContent = fs.readFileSync(filename)
  var matches = []
    
  var regexp = new RegExp(pattern, 'ig')    
  while ((match = regexp.exec(fileContent)) != null) {
    matches.push({text: match, line: regexp.lastIndex})
  }

  var fileMatches = {file: filename, matches: matches}
  result.push(fileMatches)
}

function searchInFolder(folder, pattern, result) {
  //console.log("(entering " + folder + ", " + result.length + ")")
  var files = fs.readdirSync(folder);
    
  for (var index in files) {
    var filePath = path.join(folder, files[index])
    var stats = fs.statSync(filePath)

    if (stats.isDirectory()) {
      result = searchInFolder(filePath, pattern, result)
    } else {
      if (filePath.endsWith(".md")) {
        searchInFile(filePath, pattern, result)
      }
    }
  }
  return result
}

function responseWithError(response, error) {
  console.log("ERROR: " + error)
}

exports.search = function(folder, pattern) {
  var result = []
  return searchInFolder(folder, pattern, result)  
}


// var resultExample = [
//   {
//     file: "index.md", 
//     matches: [
//       {line: 12, text: "Hello guys!"},
//       {line: 32, text: "something somewhere"}
//     ],
//   },
//   {
//     file: "end.md", 
//     matches: [
//       {line: 322, text: "That's all guys."},
//       {line: 1231, text: "hooo."},
//       {line: 9999, text: "heeee."}
//     ]
//   }
// ]

//var result = exports.search("files", ".*build.*")

//for (var r in result) {
//  var fileMatches = result[r]
//  if (fileMatches.matches.length > 0) {
//    console.log(" -> " + fileMatches.file + ": ")
//    for (var i in fileMatches.matches) {
//      var match = fileMatches.matches[i]
//      console.log("    " + match.line + ": " + match.text)
//    } 
//  }
//}
//console.log("Total files: " + result.length + ".")