const menuIcon = document.querySelector('.menu-icon') as HTMLElement;
const navBar = document.querySelector('.navbar') as HTMLElement;
const header = document.querySelector('header') as HTMLElement;
menuIcon.addEventListener('click', (_event) => {
    navBar.classList.toggle('inactive');
});

document.addEventListener('click', (event) => {
    const isInside = header.contains(event.target as Node);
    if (!isInside) {
        navBar.classList.add('inactive');
        3;
    }
});
