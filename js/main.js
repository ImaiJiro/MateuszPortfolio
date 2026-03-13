// Preloader - hide when page loads
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
    const preloader = document.getElementById('preloader');
    if (preloader) {
        setTimeout(() => preloader.style.display = 'none', 400);
    }
});

// Menu toggle
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menuToggle');
    const navBox = document.getElementById('navBox');
    if (menuToggle && navBox) {
        menuToggle.addEventListener('click', () => navBox.classList.toggle('show'));
        document.addEventListener('click', (e) => {
            if (!navBox.contains(e.target) && !menuToggle.contains(e.target)) {
                navBox.classList.remove('show');
            }
        });
    }

    // Current year in footer
    document.getElementById('year').textContent = new Date().getFullYear();

    // Scroll to top button
    const scrollToTop = document.getElementById('scrollToTop');
    window.addEventListener('scroll', () => {
        scrollToTop.classList.toggle('show', window.scrollY > 700);
    });

    // Clients Swiper
    if (document.querySelector('.clients-swiper')) {
        new Swiper('.clients-swiper', {
            slidesPerView: 2,
            spaceBetween: 24,
            autoplay: { delay: 2500, disableOnInteraction: false },
            breakpoints: {
                640: { slidesPerView: 3, spaceBetween: 24 },
                768: { slidesPerView: 4, spaceBetween: 30 },
                1024: { slidesPerView: 5, spaceBetween: 50 },
            }
        });
    }

    // Portfolio Swiper
    if (document.querySelector('.portfolio-slider')) {
        const portfolioSwiper = new Swiper('.portfolio-slider', {
            slidesPerView: 1,
            spaceBetween: 30,
            navigation: {
                nextEl: '.swiper-portfolio-next',
                prevEl: '.swiper-portfolio-prev',
            },
            autoplay: { delay: 2500, disableOnInteraction: false },
            breakpoints: {
                768: { slidesPerView: 2, spaceBetween: 30 },
                1024: { slidesPerView: 2, spaceBetween: 50 },
            }
        });
    }

    // Contact form - show note (no backend in static HTML)
    const contactForm = document.getElementById('contactform');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            document.getElementById('error').style.display = 'block';
        });
    }
});
