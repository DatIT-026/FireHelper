var websiteName = "Software Repository";

var ready = (callback) => {
  if (document.readyState != "loading") callback();
  else document.addEventListener("DOMContentLoaded", callback);
}

ready(() => {
	
var tbExist = document.querySelector("table");
var trEmpty = tbExist.insertRow(1);
var tdEmpty = trEmpty.insertCell(0);

tdEmpty.setAttribute("colspan", "100");
tdEmpty.id = "not-found";
tdEmpty.innerHTML = "<center>No results found :(</center>";

trEmpty.id = "not-found-border";
trEmpty.hidden = true;
	
// Search engine.
var listItems = [].slice.call(document.querySelectorAll('#list tbody tr'));
var inputElem = document.querySelector('#search');

inputElem.addEventListener("keyup", function() {
    var i,
	
    // Word sequence _matching_ to input. All, except last, words must be _complete_.
    e = "(^|.*[^\\pL])" + this.value.trim().split(/\s+/).join("([^\\pL]|[^\\pL].*[^\\pL])") + ".*$",
    n = RegExp(e, "i"),
	a = true;
	
    listItems.forEach((item) => {
        item.removeAttribute("hidden");
    });
	
    listItems.filter((item) => {
        i = item.querySelector("td").textContent.replace(/\s+/g, " ");
        return !n.test(i);
    }).forEach((item) => {
  	    item.hidden = true;
    });
		
	for (const tr of listItems) {
		if (tr.hidden == false) {
			a = false;
			break;
		}
	}
	
	if (a) trEmpty.hidden = false;
	else trEmpty.hidden = true;
});
	
// Working on nginx HTML and applying settings.
var currentDir = document.querySelector("span").textContent;

// Truncate long folder names.
if (currentDir.length > 15)
	currentDir = currentDir.substring(0, 14) + "...";

// Updating page title.
document.title = currentDir + " – " + websiteName;

// Establish supported formats.
var formats = [
	"bin", "jpg", "gif", "bmp", "png", "html", "css", "zip", "iso", "tiff",
	"ico", "psd", "pdf", "exe", "rar", "deb", "swf", "7z", "doc", "docx", "xls",
	"xlsx", "pptx", "ppt", "txt", "php", "js", "c", "cpp", "torrent", "sql", "wmv",
	"avi", "mp4", "mp3", "wma", "ogg", "msg", "wav", "py", "java", "gzip", "jpeg",
	"raw", "cmd", "bat", "sh", "svg", "vhdx", "img"
];

// Scan all files in the directory, check the extensions and show the right MIME-type image.
document.querySelectorAll("td a").forEach(function(sel) {
	var found = 0;
	
	var arraySplit = sel.getAttribute("href").split(".");
	
	var oldText = sel.textContent;
	var fileExt = arraySplit[arraySplit.length - 1];

	// Add an icon for every file.
	for (var i = 0; i < formats.length; i++) {
		if (fileExt.toLowerCase() == formats[i].toLowerCase()) {
			sel.innerHTML = '<img class="icons" src="/theme/images/icons/' + formats[i] + '.png" style="margin:0px 4px -4px 0px"></img></a>' + oldText;
			found = 1;
			
			return;
		}
	}

	// Add an icon for the go-back link.
	if (sel.textContent.indexOf("Parent directory") >= 0) {
		sel.innerHTML = '<img class="icons" src="/theme/images/icons/home.png" style="margin:0px 4px -4px 0px">' + oldText;
		found = 1;
		
		return;
	}


	// Check for folders as they don't have extensions.
	if (sel.getAttribute("href").includes('/')) {
		
		sel.innerHTML = '<img class="icons" src="/theme/images/icons/folder.png" style="margin:0px 4px -4px 0px">' + oldText.substring(0, oldText.length - 1);
		found = 1;

		return;
	}

	// File format not supported by Better Listings, so let's load a generic icon.
	if (found == 0) {
		sel.innerHTML = '<img class="icons" src="/theme/images/icons/error.png" style="margin:0px 4px -4px 0px">' + oldText;
		
		return;
	}
});

});
