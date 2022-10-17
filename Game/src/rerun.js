const canvas = document.querySelector(".game-frame");
const runButton = document.querySelector(".run-button");

const rerunGame = () => {
    const objectElements = Array.from(canvas.children);
    objectElements.forEach(el => {
        if (el.classList.contains("top-bar")) {
            el.textContent = "";
        } else {
            el.remove();
        }
    })
}

//runButton.addEventListener("click", rerunGame);