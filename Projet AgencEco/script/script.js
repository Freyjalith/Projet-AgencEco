const burger = document.getElementById ('burger-menu');
const nav = document.getElementById ('menu');

burger.addEventListener ("click", () => {
    nav.classList.toggle ('menu-closed');
} );
