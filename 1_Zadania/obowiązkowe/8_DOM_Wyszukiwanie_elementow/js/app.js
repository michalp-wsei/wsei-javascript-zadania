document.addEventListener("DOMContentLoaded", function () {
    /*
    Poniżej napisz kod rozwiązujący zadania. Odpowiedzi oddzielaj komentarzami.
     */
    //ZAD 0
    var title = document.querySelector('.title');

    function getDataAnimation(element) {
        var animation = element.dataset.animation;
        return animation;
    }

    var result = getDataAnimation(title);
    console.log(result);

    //ZAD 1
    var home1 = document.getElementById('home');
    var home2 = document.querySelector('#home');
    var data = document.querySelector('data-direction');
    var block = document.querySelector('.block');

    console.log(home1," ",home2," ",data," ",block," ");

    //ZAD 2
    var liNav = document.querySelector('nav').querySelectorAll('li');
    var pDiv = document.querySelectorAll('div p');
    var divArticle = document.querySelectorAll('article div');
    console.log(liNav.length, pDiv.length, divArticle.length);

    //ZAD 3
    var firstArticle = document.querySelector('article.first');
    var h1 = firstArticle.querySelectorAll('h1');
    console.log(h1.length);
});
