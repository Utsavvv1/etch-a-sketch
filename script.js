const container = document.getElementById("container");
const gridSize = document.getElementById('gridSize');
const genGridbtn = document.getElementById('genGridbtn');
const modeSelector = document.getElementById('modeSelector');

let currentMode = 'color';

function createGrid(size) {
    container.innerHTML = '';

    for (let i = 0; i < size * size; i++) {
        const new_div = document.createElement('div');
        new_div.className = "cell";
        const flxbasis = `calc(100% / ${size})`;

        new_div.style.flex = `1 0 ${flxbasis}`;
        new_div.style.backgroundColor = 'rgba(0, 0, 0, 0)'; // Start with transparent black
        new_div.setAttribute('data-darkness', '0'); // Initialize darkness level

        new_div.addEventListener('mouseenter', () => {
            if (currentMode === 'black') {
                const currentDarkness = parseInt(new_div.getAttribute('data-darkness'));
                if (currentDarkness < 10) {
                    new_div.setAttribute('data-darkness', currentDarkness + 1);
                    new_div.style.backgroundColor = `rgba(0, 0, 0, ${(currentDarkness + 1) / 10})`;
                }
            } else if (currentMode === 'erase') {
                new_div.style.backgroundColor = 'rgba(0, 0, 0, 0)';
                new_div.setAttribute('data-darkness', '0');
            } else if (currentMode === 'color') {
                new_div.style.backgroundColor = getRandomColor();
            } else if (currentMode === 'opacity') {
                const currentDarkness = parseFloat(new_div.getAttribute('data-darkness'));
                if (currentDarkness < 1) {
                    const newOpacity = currentDarkness + 0.1;
                    new_div.setAttribute('data-darkness', newOpacity);
                    new_div.style.backgroundColor = `rgba(0, 0, 0, ${newOpacity})`;
                }
            }
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

modeSelector.addEventListener('change', () => {
    currentMode = modeSelector.value;
});

genGridbtn.addEventListener('click', () => {
    const sizeGiven = parseInt(gridSize.value);

    if (isNaN(sizeGiven) || sizeGiven < 1 || sizeGiven > 100) {
        alert("Enter a valid grid size (1 <= size <= 100)");
    } else {
        createGrid(sizeGiven);
    }
});

createGrid(16);
