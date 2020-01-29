document.addEventListener('DOMContentLoaded', function() {

    window.addEventListener('resize', function () {
        var windowWidth = document.querySelector('#windowWidth');
        var windowHeight = document.querySelector('#windowHeight');

        windowWidth.innerHTML = this.innerWidth;
        windowHeight.innerHTML = this.innerHeight;
   })
});