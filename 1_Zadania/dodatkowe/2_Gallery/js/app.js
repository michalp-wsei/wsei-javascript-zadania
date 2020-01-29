/*
 <div class="fullScreen">
   <img src="./images/wrong.png">
   <button class="close">Close</button>
 </div>
 */

document.addEventListener('DOMContentLoaded', function() {
    const list = document.querySelector('ul').children;
    const body = document.body;

    for (let elem of list) {
        elem.children[0].addEventListener('click', function (e) {
            let url = this.getAttribute('src');

            let div = document.createElement('div');
            div.classList.add('fullScreen');

            let img = document.createElement('img');
            img.setAttribute('src', url);

            let btn = document.createElement('button');
            btn.classList.add('close');
            btn.innerText = 'Close';

            btn.addEventListener('click', function () {
                body.removeChild(div);
            });

            div.appendChild(img);
            div.appendChild(btn);

            body.appendChild(div);
        })
    }
});