let selectedPath = null;
const paths = document.querySelectorAll(".product-shape");

paths.forEach(path => {
    path.addEventListener("click", function() {

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
        const animation = document.getElementById("color-animation");
        animation.classList.remove("hidden");
        const rect = selectedPath.getBoundingClientRect();
        animation.style.position = "absolute";
        animation.style.left = `${rect.left}px`;
        animation.style.top = `${rect.top}px`;
        animation.style.width = `${rect.width}px`;
        animation.style.height = `${rect.height}px`;
        animation.style.zIndex = "3";
        animation.currentTime = 0;
        animation.play();
    }
}
