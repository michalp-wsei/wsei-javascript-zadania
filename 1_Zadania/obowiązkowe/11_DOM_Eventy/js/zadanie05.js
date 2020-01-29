document.addEventListener('DOMContentLoaded', function(e) {
    const boxes = document.querySelectorAll('.box');

    for(let box of boxes) {
        box.addEventListener('click', function () {
            let randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
            box.style.backgroundColor = randomColor;
        })
    }
});