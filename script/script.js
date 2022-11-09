const toggleBtn = document.getElementsByClassName('toggle-btn')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleBtn.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
    event.preventDefault();
})

$(".carousel").owlCarousel({
    margin: 20,
    loop: true,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    responsive: {
        0: { items: 0, nav: false },
        600: { items: 1, nav: false },
        1000: { items: 2, nav: false },
    },
  });

