document.addEventListener('DOMContentLoaded', function() {
    const next = document.getElementById('nextPicture');
    const prev = document.getElementById('prevPicture');

    const list = document.querySelector('ul').children;
    let index = 0;

    list[index].classList.add('visible');

    next.addEventListener('click', function (e) {
        list[index].classList.remove('visible');
        index = ( index === (list.length - 1)) ? 0 : index + 1;

        list[index].classList.add('visible');
    });

    prev.addEventListener('click', function (e) {
        list[index].classList.remove('visible');
        index = index === 0 ? list.length - 1 : index - 1;

        list[index].classList.add('visible');
    });
});