const menuIcon = document.querySelector('.menu-icon') as HTMLElement;
const navBar = document.querySelector('.navbar') as HTMLElement;
menuIcon.addEventListener('click', (_event) => {
    navBar.classList.toggle('inactive');
});
