document.addEventListener("DOMContentLoaded", function () {

    //ZAD 0
    var ex5 = document.querySelector('.ex5 ul').children;
    for (let i = 0; i < ex5.length; i++) {
        if (i === 0 || i % 2 === 0) {
            ex5[i].style.backgroundColor = 'green';
        }
        if (i % 3 === 0) {
            ex5[i].style.textDecoration = 'underline';
        }
        if (i%5 === 0) {
            ex5[i].classList.add('big');
        }
    }

    //ZAD 1
    var browsers = document.querySelectorAll('.ex1 div div');

    for(var item of browsers){
        var name = item.className;
        item.style.backgroundImage = `url(assets/img/${name}.png)`;
        item.parentNode.querySelector('a').href = `http://www.${name}.pl`;
        item.parentNode.querySelector('a').innerText = name;
    }
    document.querySelector('.chrome').style.width='100px';

    //ZAD 2
    var name = document.querySelector('.ex2 li #name');
    var color = document.querySelector('.ex2 li #fav_color');
    var meal = document.querySelector('.ex2 li #fav_meal');

    name.innerHTML = 'Agnieszka Krupińska';
    color.innerHTML = 'Niebieski';
    meal.innerHTML = 'Spaghetti';

    //ZAD 3
    var ul = document.querySelector('.ex3 ul');
    ul.classList.add('menu');
    var listLi = document.querySelectorAll('.ex3 li');

    for(let item of listLi){
        if(!item.classList.contains('menuElement')){
            item.classList.add('menuElement');
        }
        if(item.classList.contains('error')){
            item.classList.remove('error');
        }
    }

    //ZAD 4
    var list = document.querySelectorAll('.ex4 li');
    for(let [index, value] of list.entries()){
        value.setAttribute("data-id", index + 1);
    }

});