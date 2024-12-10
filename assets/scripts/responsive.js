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



const modal = document.getElementById("modal-wrapper");
modal.style.display = "none";

const showModalButtons = document.querySelectorAll(".roomGuest-item .action.available");


showModalButtons.forEach((element) => {
    element.addEventListener('click', () => {
        modal.style.display = "flex";
    });
})

const cancelModalButtons= document.querySelectorAll("#modal-wrapper .close-icon");


cancelModalButtons.forEach((element) => {
    element.addEventListener('click', () => {
        modal.style.display = "none";
    });
})


