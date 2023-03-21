var menuIcon = document.querySelector('.menu-icon');
var navBar = document.querySelector('.navbar');
menuIcon.addEventListener('click', function (_event) {
    navBar.classList.toggle('inactive');
});
