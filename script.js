

function changeColorPicker(picker) {
    if (selectedPath) {
        const color = `#${picker.value}`;
        selectedPath.style.fill = color;
        selectedPath.style.stroke = "none";

        const animation = document.getElementById("color-animation");
        animation.classList.remove("hidden");
        animation.style.display = "block"; // S'assurer qu'elle est visible

        // Obtenir la position correcte de l'élément sélectionné
        const rect = selectedPath.getBoundingClientRect();
        const containerRect = document.getElementById("container").getBoundingClientRect();

        animation.style.left = `${rect.left - containerRect.left}px`;
        animation.style.top = `${rect.top - containerRect.top}px`;
        animation.style.width = `${rect.width}px`;
        animation.style.height = `${rect.height}px`;

        // Jouer l'animation
        animation.currentTime = 0;
        animation.play();
    }
}

