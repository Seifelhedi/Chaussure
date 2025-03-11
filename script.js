function changeColorPicker(picker) {
    if (selectedPath) {
        const color = `#${picker.value}`;
        selectedPath.style.fill = color;
        selectedPath.style.stroke = "none";

        // Afficher l'animation en plein écran
        const animation = document.getElementById("color-animation");
        animation.classList.remove("hidden");
        animation.style.display = "block"; // Afficher

        // Redémarrer et jouer l'animation
        animation.currentTime = 0;
        animation.play();

        // Masquer l'animation après la fin
        animation.onended = () => {
            animation.style.display = "none";
        };
    }
}
