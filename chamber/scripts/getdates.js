// lastModified
let text = document.lastModified;
document.getElementById("lastModified").innerHTML = "Last Modification: " + text;

// Copyright
document.getElementById("copyrightYear").innerHTML = new Date().getFullYear();


var today = new Date.now();
document.getElementById('timeStamp').value = today;