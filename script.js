const body = document.querySelector('body');
let currSize = 16;
makeDivs(currSize);

function makeDivs(size){
    const totalSize = body.offsetHeight * body.offsetWidth;
    const numDivs = totalSize / (size*size);
    for (let d = 0; d < numDivs; d++) {
        const cell = document.createElement('div');
        cell.style.flexBasis = `${size}px`;
        cell.style.height = `${size}px`;
        cell.addEventListener('mouseover', changeColor);
        body.appendChild(cell);
    } 
}

function changeColor (event) {
    event.target.style.backgroundColor = "black";
}

const changeButton = document.querySelector('#change');
changeButton.addEventListener('click', resize);

function resize () {
    let newSize = prompt("Enter size in pixels (0-100)");
    newSize = Number(newSize);
    if (!(newSize > 0) || !(newSize <= 100)) return;
    
    const oldDivs = document.querySelectorAll('div');
    oldDivs.forEach((div) => div.remove());
    currSize = newSize;
    makeDivs(newSize);
}

const resetButton = document.querySelector('#reset');
resetButton.addEventListener('click', reset);

function reset() {
    const oldDivs = document.querySelectorAll('div');
    oldDivs.forEach((div) => div.remove());
    makeDivs(currSize);
}