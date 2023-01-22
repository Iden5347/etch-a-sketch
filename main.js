const container = document.querySelector('#container');
for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++) {
        const box = document.createElement('div');
        box.classList.add('box');
        container.appendChild(box);
    }
}
const boxes = document.getElementsByClassName('box');
for (let i = 0; i < boxes.length; i++) {
    box = boxes[i];
    box.addEventListener('mouseover', () => {
        boxes[i].style.backgroundColor = "blue";
    })
}