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


        const video = document.getElementById("color-animation");
        if (video.readyState >= 2) {
            video.style.zIndex = "20";
            video.style.display = "block";
            video.currentTime = 0;

            video.onended = () => {
                video.style.display = "none";
            };
        } else {
            console.log("Vidéo non prête, chargement en cours...");
        }
    }
}
