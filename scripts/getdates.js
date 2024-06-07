// lastModified
let text = document.lastModified;
document.getElementById("lastModified").innerHTML = "Last Modification: " + text;

// Copyright
document.getElementById("copyrightYear").innerHTML = new Date().getFullYear();


var visits = localStorage.getItem('visits') || 0;
visits++;
document.getElementById("visits").innerHTML = "Page Visits: " + visits + " time" + (visits == 1 ? '' : 's');
localStorage.setItem('visits', visits);