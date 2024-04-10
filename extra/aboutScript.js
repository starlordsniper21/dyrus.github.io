// Navigation bar for mobile
function openMenu() {
    document.querySelector("nav").style.transform = "translateX(0)";
}

function closeMenu() {
    document.querySelector("nav").style.transform = "translateX(-100%)";
}

// Contact section functions
function openContact() {
    document.querySelector(".contact").style.transform = "translateY(0)";
}

function closeContact() {
    document.querySelector(".contact").style.transform = "translateY(-100%)";
}
