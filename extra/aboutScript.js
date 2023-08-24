//Nav bar Mobile
function openMenu() {
    var menu = document.querySelector("nav");
    menu.style.transform = "translateX(0)";
}

function closeMenu() {
    var menu = document.querySelector("nav");
    menu.style.transform = "translateX(-100%)";
}


// Contact Function

function openContact() {
    var contactSection = document.querySelector(".contact");
    contactSection.style.transform = "translateY(0)";
}

function closeContact() {
    var contactSection = document.querySelector(".contact");
    contactSection.style.transform = "translateY(-100%)";
}
