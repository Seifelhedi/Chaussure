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
        const color = `#${picker.value}`;  // Utiliser picker.value pour obtenir la couleur hexadécimale
        selectedPath.style.fill = color;   // Changer la couleur de remplissage
        selectedPath.style.stroke = "none"; // Assurer qu'il n'y a pas de bordure
    }
}
