// function to check if today is Monday, Tuesday, or Wednesday
function isBannerDay() {
    const today = new Date();
    const dayOfWeek = today.getDay(); // sunday is 0, Monday is 1, and so on.

    // display the banner only on Monday (1), Tuesday (2), and Wednesday (3)
    return dayOfWeek >= 1 && dayOfWeek <= 3;
}

// function to check if the window width is less than or equal to 840 pixels
function isSmallScreen() {
    return window.innerWidth <= 840;
}

// show the banner if today is Monday, Tuesday, or Wednesday and the screen is not small
if (isBannerDay() && !isSmallScreen()) {
    document.getElementById('chamberBanner').style.display = 'block';
}

function closeBanner() {
    document.getElementById('chamberBanner').style.display = 'none';
}