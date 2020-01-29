document.addEventListener('DOMContentLoaded', function(e) {
    const btn1 = document.getElementById('button1');
    const btn2 = document.getElementById('button2');
    const btn3 = document.getElementById('button3');
    const count = document.querySelector('.counter');

    function counter () {
        const currentText = count.innerHTML * 1;
        count.innerHTML = currentText + 1;
    }

    btn1.addEventListener('click', counter);
    btn2.addEventListener('click', counter);
    btn3.addEventListener('click', counter);
});