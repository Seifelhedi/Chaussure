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

        // Récupérer la vidéo
        const video = document.getElementById("color-animation");

        // S'assurer que la vidéo est bien chargée
        if (video.readyState >= 2) { // Vérifie si elle est prête à être lue
            video.classList.remove("hidden"); // Afficher la vidéo
            video.currentTime = 0; // Revenir au début
            video.play();
            video.style.display = "block"; // Afficher la vidéo
            video.onended = () => {
                video.style.display = "none"; // Masquer après lecture
            };
        } else {
            console.log("Vidéo non prête, chargement en cours...");
        }
    }
}
