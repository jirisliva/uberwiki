var pagedown = require("pagedown")

var head =
  "<!DOCTYPE html>\n" +
  "  <html>\n" +
  "    <head>\n" +
  "      <title>über wiki</title>\n" +
  "        <meta http-equiv='pragma' content='no-cache'>\n" +
  "        <meta http-equiv='cache-control' content='no-cache'/>\n" +
  "        <meta http-equiv='cache-control' content='max-age=0'/>\n" +
  "        <meta http-equiv='expires' content='0'/>\n" +
  "        <meta http-equiv='Content-Type' content='text/html; charset=UTF-8'>\n" +
  "        <link type='text/css' rel='stylesheet' href='/default.css'/>\n" +
  "    </head>\n" + 
  "    <body>\n" +
  "    <div id='header'>"
var headEnding = "    </div>"


var indexLink = "<a href='/index.md'>index</a> | "
var allFilesLink = "<a href='/content'>all files</a> | "

function formatHeader(headerContent) {
  return head + headerContent + headEnding
}

function getWrappedMarkdown(markdown) {
  return "\n<xmp theme='united' style='display:none;'>\n" + markdown + "\n</xmp>\n<script src='http://strapdownjs.com/v/0.2/strapdown.js'></script>\n" 
}

exports.getFooter = function() {
  return "</body></html>"
}   

exports.getEditForm = function(filename, data) {
  return "\n" +
    "      <form action='/save'>\n" +
    "        <input type='hidden' name='filename' value='" + filename + "'/>\n" +
    "        <input type='submit' name='save' value='Save'/><br>\n" +
    "        <textarea name='content' cols='100' rows='40'>" + data + "</textarea>\n" +
    "      </form>\n" 
}

exports.getContentHeader = function() {
  return formatHeader(indexLink + allFilesLink + getSearchForm(''))
}

exports.getEditHeader = function(filename) {
  var title = "<b>" + getShortFileName(filename) + "</b>"
  return formatHeader(indexLink + allFilesLink + title)
}

exports.getHeader = function(filename) {
  var title = "<b>" + getShortFileName(filename) + "</b>"
  return formatHeader(indexLink + allFilesLink + title + " <a href='edit?filename=" + filename + "'>edit</a>" + getSearchForm(''))
}

exports.getFormattedFile = function(data) {
  return getWrappedMarkdown(expandJiraLinks(data))
}

exports.getFileList = function(files) {
  var list = "<ul>"
  for (var index in files) {
    var filename = files[index]
    list += "<li><a href='" + filename + "'>" + filename + "</a></li>"
  }
  list += "</ul>"
  return list
}

exports.getSearchResult = function(pattern, result) {
  var items = "Results for searching phrase **" + pattern + "**."
  for (var r in result) {
    var fileMatches = result[r]
    
    if (fileMatches.matches.length > 0) {
      var delimiter = "files\\"
      var link = fileMatches.file.substring(fileMatches.file.indexOf(delimiter) + delimiter.length)
      items += "\n## [" + link + "](" + link + ")\n\n"
      console.log (" ----------------------------------------"  + link)
      for (var i in fileMatches.matches) {
        var match = fileMatches.matches[i]
        console.log ("'" + match.text +"'")
        if (match.text.length > 0) {
          items += " - `" + match.text + "`\n"
        }
      } 
    }
  }
  return getWrappedMarkdown(items)
}

function expandJiraLinks(data) {
  var exp = /(CC-[0-9]+)/g
  var result = data.replace(exp, "[$1](http://jira2.ids.de/browse/$1)")
  return result
}

function getShortFileName(filename) {
  filename.replace('\\', '/')
  var index = filename.lastIndexOf('/')
  // if (index == -1) {
  //   index = filename.lastIndexOf('\\')  
  // }
  return filename.substring(index + 1);
}

function getSearchForm(pattern) {
  searchForm = "\n" + 
    "      <form action='/search' method='get'>\n" +
    "        <input type='text' name='pattern' value='" + pattern + "'/>\n" +
    "        <input type='submit' value='Search'/>\n" +
    "      </form>\n"
  return searchForm
}