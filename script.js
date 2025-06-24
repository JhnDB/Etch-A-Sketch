createGrid();

function createGrid(num=16) {
    const container = document.querySelector("#container");
    container.replaceChildren();
    for (let i = 0; i < num; i++) {
        for (let j = 0; j < num; j++) {
            const box = document.createElement("div");
            box.setAttribute("class", "pixel");
            box.style.setProperty("width", `calc(var(--size) / ${num})`);
            box.style.setProperty("height", `calc(var(--size) / ${num})`);
            container.appendChild(box);
        }
    }
    container.addEventListener("mouseover", (event) => {
        if (event.target.classList.contains("pixel")) {
            event.target.style.backgroundColor = "black";
        }
    });
}

const resizeButton = document.querySelector("#resize");
resizeButton.addEventListener("click", () => {
    const resize = Number(prompt("Change canvas size (1-100):"));
    if (resize >= 1 && resize <= 100) {
        createGrid(resize);
    } else {
        alert("Invalid Size.")
    }
});