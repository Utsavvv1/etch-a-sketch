const container = document.getElementById("container");
const gridSize = document.getElementById('gridSize');
const genGridbtn = document.getElementById('genGridbtn');

function createGrid(size) {
    container.innerHTML = '';

    for (let i = 0; i < size * size; i++) {
        const new_div = document.createElement('div');
        new_div.className = "cell";
        const flxbasis = `calc(100% / ${size})`;

        new_div.style.flex = `1 0 ${flxbasis}`;

        new_div.addEventListener('mouseenter', () => {
            new_div.style.backgroundColor = getRandomColor();
        });

        container.appendChild(new_div);
    }
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

genGridbtn.addEventListener('click', () => {
    const sizeGiven = parseInt(gridSize.value);

    if (isNaN(sizeGiven) || sizeGiven < 1 || sizeGiven > 100) {
        alert("Enter a valid grid size (1 <= size <= 100)");
    } else {
        createGrid(sizeGiven);
    }
});

createGrid(16);
