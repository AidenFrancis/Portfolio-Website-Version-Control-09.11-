// A $( document ).ready() block.
$( document ).ready(function() {
    console.log( "ready!" );

//menu toggle for small screens
    var toggle = document.querySelector('#js-toggle');
    var menu = document.querySelector('#js-menu');

    toggle.addEventListener('click', function(){
      if (menu.classList.contains('is-active')) {
        this.setAttribute('aria-expanded', 'false');
        menu.classList.remove('is-active');
      } else {
        menu.classList.add('is-active'); 
        this.setAttribute('aria-expanded', 'true');
      }
    });
    });