const menu = document.getElementById('menu');

menu.addEventListener('click', () => {
    const navbar = document.getElementById('main-aside');
    if (navbar.style.display === "block" || navbar.style.display === "") {
        collapseNavBar();
    } else {
        showNavBar();
    }
});

const collapseNavBar = () => {
    const navbar = document.getElementById('main-aside');
    const top = document.getElementById('top');
    navbar.style.display = "none";
}

const showNavBar = () => {
    const navbar = document.getElementById('main-aside');
    navbar.style.display = "block";
}


