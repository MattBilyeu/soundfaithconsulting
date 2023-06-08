const hamburger = document.querySelector('#hamburger');

hamburger.onclick = function() {
    const mobileBackdrop = document.querySelector('.mobileBackdrop');
    mobileBackdrop.style.display = 'block';
    const mobileNav = document.querySelector('.mobileNav');
    mobileNav.style.display = 'flex';
}

function getFileNameFromURL() {
    const path = new URL(window.location.href).pathname;
    const fileName = path.substring(path.lastIndexOf('/') + 1);
    return fileName;
}

function updateSMSIconPosition() {
    const pageWidth = document.documentElement.clientWidth;
    let maxPageWidth = 1200;
    const fileName = getFileNameFromURL();
    if(fileName === 'speakers.html') {
        maxPageWidth = 750;
    } else if(fileName === 'contact-us.html') {
        return false;
    };
    const offset = (pageWidth - maxPageWidth)/2 + 1;
    const smsIcon = document.querySelector('.smsIcon');
    smsIcon.style.right = offset + 'px';
}

updateSMSIconPosition();
window.addEventListener('resize', updateSMSIconPosition);