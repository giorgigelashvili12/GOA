function updateImage() {
    let imgelmnt = document.getElementById("responsive");
    if (window.innerWidth <= 1280) {
        imgelmnt.src = "./Assets/images/image-web-3-mobile.jpg";
    } else {
        imgelmnt.src = "./Assets/images/image-web-3-desktop.jpg";
    }
}

updateImage();
window.addEventListener("resize", updateImage);

// needed help :P