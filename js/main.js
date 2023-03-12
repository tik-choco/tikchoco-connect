$(function () {
    $(".slider").slick({
      arrows: false,
      autoplay: true,
      autoplaySpeed: 2000,
      centerMode: true,
      centerPadding: "30px",
      dots: true,
      // fade: true,
      slidesToShow: 3,
      speed: 400,
    });
  });

  document.addEventListener('DOMContentLoaded', () => {

    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
  
    // Add a click event on each of them
    $navbarBurgers.forEach( el => {
      el.addEventListener('click', () => {
  
        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const $target = document.getElementById(target);
  
        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');
  
      });
    });
  
  });