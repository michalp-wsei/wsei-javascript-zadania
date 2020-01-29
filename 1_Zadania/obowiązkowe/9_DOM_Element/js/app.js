document.addEventListener("DOMContentLoaded", function () {
    var homeElement = document.getElementById("home");
    var childElements = document.querySelector(".oferts").children;
    var banner = document.querySelector(".ban");
    var blocks = document.querySelectorAll(".block");
    var links = document.querySelector(".links").children;

    //ZAD 0

    function getDatasInfo(elements)
    {
        var array = [];
        for(var i = 0; i < elements.length; i++) {
            array.push(elements[i].getAttribute('data-color'));
        }

        return array;
    }

    console.log(getDatasInfo(links));
    //ZAD 1
    console.log(homeElement);
    console.log(banner);

    for(let i = 0; i < childElements.length; i++) {console.log(childElements[i].tagName, childElements[i].classList);}

    for(let i = 0; i < blocks.length; i++) {console.log(blocks[i].tagName, blocks[i].classList);}

    for(let i = 0; i < links.length; i++) {console.log(links[i].tagName, links[i].classList);}

    //ZAD 2
    for(let item of blocks){
        console.log(item.innerHTML);
        console.log(item.outerHTML);
    }
    blocks.innerHtml = 'Nowa wartość diva o klasie blocks';

    // innerHTML wyświetla strukturę dom wewnątrz elementu
    // outerHTML wyświetla wraz z elementem

    //ZAD 3
    var mainFooter = document.querySelector('#mainFooter');
    console.log(getId(mainFooter));

    function getId(element) {
        return  element.getAttribute('id');
    }

    //ZAD 4
    function getTags(elements){
        var tags = [];
        for(let item of elements){
            tags.push(item.tagName);
        }
        return tags;
    }
    getTags(childElements);

    //ZAD 5
    function getClassInfo(element){
        return element.classList;
    }
    getClassInfo(banner);

    //ZAD 6
    const liElements = document.querySelectorAll('nav li');
    function setDataDirection(elements){
        for(let item of elements){
            if(!item.getAttribute('data-direction')){
                item.setAttribute('data-direction','top');
            }
        }
    }
    setDataDirection(liElements);
});