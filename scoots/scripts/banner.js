

// function to check if the window width is less than or equal to 840 pixels
function isSmallScreen() {
    return window.innerWidth <= 840;
    document.getElementById('weatherBanner').style.display = 'block';
}


function closeBanner() {
    document.getElementById('weatherBanner').style.display = 'none';
}