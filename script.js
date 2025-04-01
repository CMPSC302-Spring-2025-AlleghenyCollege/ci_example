document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("changeTextBtn");
    const text = document.getElementById("dynamicText");

    button.addEventListener("click", () => {
        text.textContent = "Text Changed!";
    });
});