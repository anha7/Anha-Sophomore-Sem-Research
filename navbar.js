updateHamburger();
function updateHamburger() {
    const logo = document.getElementById('logo')
    if (window.innerWidth <= 930) logo.src = 'https://dirgyzwl2hnqq.cloudfront.net/ccf17f3580e19b7680cf1d66e39ded65/dist/img/tiger-head.png';
    else logo.src = 'https://dirgyzwl2hnqq.cloudfront.net/8ab5ccf6483af37484451354a9d9e4e3/dist/img/prince_logo_scrolled.png';
}
function expand() {
    const topNav = document.getElementById('top-nav');
    topNav.classList.toggle('expand');
}
window.addEventListener("resize", updateHamburger);
const menuIcon = document.getElementById("menu-icon");
if (menuIcon) menuIcon.addEventListener("click", expand);