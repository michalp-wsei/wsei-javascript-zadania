document.addEventListener('DOMContentLoaded', function(e) {
   const parents = document.querySelectorAll('.parent');

   for(let parent of parents) {
       parent.addEventListener('mouseover', function(e) {
           this.children[0].style.display = 'block';
       });

       parent.addEventListener('mouseleave', function(e) {
           this.children[0].style.display = 'none';
       });
   }
});