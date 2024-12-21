const container = document.getElementById("container")

for (let i = 0; i < 16*16 ; i += 1){
    const new_div = document.createElement('div');
    // new_div.textContent = i;
    new_div.className = "cell";
    container.appendChild(new_div);
}
