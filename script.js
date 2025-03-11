import { DotLottie } from "https://cdn.jsdelivr.net/npm/@lottiefiles/dotlottie-web/+esm";

let selectedPath = null;
const paths = document.querySelectorAll(".product-shape");
const animationCanvas = document.getElementById("animation-canvas");

// Charger l’animation Lottie
const lottie = new DotLottie({
    autoplay: false,
    loop: false,
    canvas: animationCanvas,
    src: "https://lottie.host/YOUR_ANIMATION_ID.lottie" // Remplace avec ton URL Lottie
});

// Ajouter un écouteur d'événement pour chaque path
paths.forEach(path => {
    path.addEventListener("click", function() {
        // Supprimer la sélection de l'ancien path si un autre est sélectionné
        if (selectedPath) {
            selectedPath.classList.remove("selected");
        }

        // Sélectionner le nouveau path
        selectedPath = this;
        selectedPath.classList.add("selected");

        // Afficher le sélecteur de couleur
        const colorPickerContainer = document.getElementById("color-picker-container");
        colorPickerContainer.style.display = "block";
    });
});

function changeColorPicker(picker) {
    if (selectedPath) {
        const color = `#${picker.value}`;
        selectedPath.style.fill = color;
        selectedPath.style.stroke = "none";

        // Afficher l'animation Lottie
        animationCanvas.classList.remove("hidden");

        // Récupérer la position de l'élément cliqué
        const rect = selectedPath.getBoundingClientRect();
        const containerRect = document.getElementById("container").getBoundingClientRect();

        // Placer le canvas sur la zone cliquée
        animationCanvas.style.left = `${rect.left - containerRect.left}px`;
        animationCanvas.style.top = `${rect.top - containerRect.top}px`;
        animationCanvas.style.width = `${rect.width}px`;
        animationCanvas.style.height = `${rect.height}px`;

        // Jouer l’animation
        lottie.play();

        // Cacher l'animation après 2 secondes
        setTimeout(() => {
            animationCanvas.classList.add("hidden");
        }, 2000);
    }
}
