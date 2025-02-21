const containerEl = document.querySelector(".container");

// create color div
for(let i =0; i<30; i++){
    const colorContainerEl = document.createElement("div");
    colorContainerEl.classList.add("color-container");
    containerEl.appendChild(colorContainerEl);
}

// select all color box
const colorContainerEls = document.querySelectorAll(".color-container");

// Generate color box
function generateColors() {
    colorContainerEls.forEach((box) => {
        const newColor = generateRandomColor();
        box.style.backgroundColor = `#${newColor}`;
        box.innerText = `#${newColor}`;
    })
}

generateColors();

// Randomly generate color code
function generateRandomColor() {
    const chars = "0123456789abcdef";
    let colorCode = "";

    for(let i = 0; i<6; i++) {
        colorCode += chars[Math.floor(Math.random() * chars.length)]
    }

    return colorCode
}


