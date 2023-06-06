const hamburger = document.querySelector('#hamburger');

hamburger.onclick = function() {
    const mobileBackdrop = document.querySelector('.mobileBackdrop');
    mobileBackdrop.style.display = 'block';
    const mobileNav = document.querySelector('.mobileNav');
    mobileNav.style.display = 'flex';
}