var menuIcon = document.querySelector('.menu-icon');
var navBar = document.querySelector('.navbar');
var header = document.querySelector('header');
menuIcon.addEventListener('click', function (_event) {
    navBar.classList.toggle('inactive');
});
document.addEventListener('click', function (event) {
    var isInside = header.contains(event.target);
    if (!isInside) {
        navBar.classList.add('inactive');
        3;
    }
});
