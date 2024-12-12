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


const modalWrapper = document.getElementById("modal-wrapper");
modalWrapper.style.display = "none";

const showModalButtons = document.querySelectorAll(".roomGuest-item .action");

showModalButtons.forEach((element) => {
    element.addEventListener('click', () => {
        let modalId;
        if (element.classList.contains('available')) {
            modalId = "checkin-modal";
        } else {
            modalId = "checkout-modal";
        }
        
        openModal(modalId);
        mapCloseButtons(modalId);
    });
});

const mapCloseButtons = (modalId) => {
    const modal = document.getElementById(modalId);
    const closeButtons = modal.querySelectorAll(".close-icon, .action");

    closeButtons.forEach((button) => {
        button.addEventListener('click', () => {
            closeModal(modalId);
        });
    });
};

const closeModal = (modalId) => {
    const modal = document.getElementById(modalId);
    modal.style.display = "none";
    modalWrapper.style.display = "none";
};

const openModal = (modalId) => {
    const modal = document.getElementById(modalId);
    modal.style.display = "flex";
    modalWrapper.style.display = "flex";
};
