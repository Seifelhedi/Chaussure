let selectedPath = null;
const paths = document.querySelectorAll(".product-shape");

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

        // Récupérer et afficher la vidéo
        const video = document.getElementById("color-animation");
        video.classList.remove("hidden"); // Afficher la vidéo
        video.currentTime = 0; // Recommencer depuis le début
        video.play();

        // Masquer la vidéo après la lecture
        video.onended = () => {
            video.classList.add("hidden");
        };
    }
}
