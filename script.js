import { DotLottie } from "https://cdn.jsdelivr.net/npm/@lottiefiles/dotlottie-web/+esm";

let selectedPath = null;
const paths = document.querySelectorAll(".product-shape");
const animationCanvas = document.getElementById("animation-canvas");
const lottie = new DotLottie({
    autoplay: false,
    loop: false,
    canvas: animationCanvas,
    src: "https://lottie.host/YOUR_ANIMATION_ID.lottie" // Remplace avec ton URL Lottie
});
paths.forEach(path => {
    path.addEventListener("click", function() {
        // Supprimer la sélection de l'ancien path si un autre est sélectionné
        if (selectedPath) {
            selectedPath.classList.remove("selected");
        }
        selectedPath = this;
        selectedPath.classList.add("selected");

        const colorPickerContainer = document.getElementById("color-picker-container");
        colorPickerContainer.style.display = "block";
    });
});

function changeColorPicker(picker) {
    if (selectedPath) {
        const color = `#${picker.value}`;
        selectedPath.style.fill = color;
        selectedPath.style.stroke = "none";
        animationCanvas.classList.remove("hidden");
        const rect = selectedPath.getBoundingClientRect();
        const containerRect = document.getElementById("container").getBoundingClientRect();
        animationCanvas.style.left = `${rect.left - containerRect.left}px`;
        animationCanvas.style.top = `${rect.top - containerRect.top}px`;
        animationCanvas.style.width = `${rect.width}px`;
        animationCanvas.style.height = `${rect.height}px`;
        lottie.play();
        setTimeout(() => {
            animationCanvas.classList.add("hidden");
        }, 2000);
    }
}
