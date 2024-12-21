const container = document.getElementById("container")

for (let i = 0; i < 16*16 ; i += 1){
    const new_div = document.createElement('div');
    // new_div.textContent = i;
    new_div.className = "cell";

    new_div.addEventListener('mouseenter', () => {
        new_div.style.backgroundColor = getRandomColor();
    });
    // new_div.addEventListener('mouseleave', () => {
    //     new_div.style.backgroundColor = 'white';
    // });
    container.appendChild(new_div);
}


// const cell = document.querySelector('.cell');

function getRandomColor(){
    const letters = '0123456789ABCDEF';
    let color = '#'
    for (let i = 0; i < 6 ; i++){
        color += letters[Math.floor(Math.random()*16)];

    }
    return color;
}


