document.addEventListener('DOMContentLoaded', function(e) {
    const btn1 = document.getElementById('button1');
    const btn2 = document.getElementById('button2');
    const btn3 = document.getElementById('button3');

    function counter () {
        const currentText = this.nextElementSibling.children[0].innerHTML * 1;
        this.nextElementSibling.children[0].innerHTML = currentText + 1;
    }

    btn1.addEventListener('click', counter);
    btn2.addEventListener('click', counter);
    btn3.addEventListener('click', counter);
});