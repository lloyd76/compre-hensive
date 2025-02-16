(function () {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            var spinnerElement = document.getElementById('spinner');
            if (spinnerElement) {
                spinnerElement.classList.remove('show');
            }
        }, 1);
    };
    spinner();

    // Sticky Navbar
    window.addEventListener('scroll', function () {
        var stickyTop = document.querySelector('.sticky-top');
        if (window.scrollY > 300) {
            stickyTop.style.top = '0px';
        } else {
            stickyTop.style.top = '-100px';
        }
    });

    // Dropdown on mouse hover
    var dropdowns = document.querySelectorAll('.dropdown');
    var dropdownToggles = document.querySelectorAll('.dropdown-toggle');
    var dropdownMenus = document.querySelectorAll('.dropdown-menu');
    var showClass = 'show';

    function handleDropdownHover() {
        if (window.matchMedia("(min-width: 992px)").matches) {
            dropdowns.forEach(function (dropdown) {
                dropdown.addEventListener('mouseenter', function () {
                    this.classList.add(showClass);
                    this.querySelector('.dropdown-toggle').setAttribute('aria-expanded', 'true');
                    this.querySelector('.dropdown-menu').classList.add(showClass);
                });

                dropdown.addEventListener('mouseleave', function () {
                    this.classList.remove(showClass);
                    this.querySelector('.dropdown-toggle').setAttribute('aria-expanded', 'false');
                    this.querySelector('.dropdown-menu').classList.remove(showClass);
                });
            });
        } else {
            dropdowns.forEach(function (dropdown) {
                dropdown.removeEventListener('mouseenter', handleDropdownHover);
                dropdown.removeEventListener('mouseleave', handleDropdownHover);
            });
        }
    }

    window.addEventListener('load', handleDropdownHover);
    window.addEventListener('resize', handleDropdownHover);

    // Back to top button
    var backToTopButton = document.querySelector('.back-to-top');
    window.addEventListener('scroll', function () {
        if (window.scrollY > 300) {
            backToTopButton.style.display = 'block';
        } else {
            backToTopButton.style.display = 'none';
        }
    });

    backToTopButton.addEventListener('click', function (e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Facts counter
    var counterElements = document.querySelectorAll('[data-toggle="counter-up"]');
    counterElements.forEach(function (counter) {
        var target = +counter.innerText;
        var increment = target / 100;
        var current = 0;

        var updateCounter = function () {
            current += increment;
            counter.innerText = Math.ceil(current);

            if (current < target) {
                setTimeout(updateCounter, 10);
            } else {
                counter.innerText = target;
            }
        };

        updateCounter();
    });

    // Header carousel (using vanilla JavaScript)
    var headerCarousel = document.querySelector('.header-carousel');
    if (headerCarousel) {
        var carouselItems = headerCarousel.querySelectorAll('.owl-carousel-item');
        var currentIndex = 0;

        function showNextItem() {
            carouselItems[currentIndex].classList.remove('active');
            currentIndex = (currentIndex + 1) % carouselItems.length;
            carouselItems[currentIndex].classList.add('active');
        }

        setInterval(showNextItem, 5000); // Change slide every 5 seconds
    }

    // Testimonials carousel (using vanilla JavaScript)
    var testimonialCarousel = document.querySelector('.testimonial-carousel');
    if (testimonialCarousel) {
        var testimonialItems = testimonialCarousel.querySelectorAll('.testimonial-item');
        var testimonialIndex = 0;

        function showNextTestimonial() {
            testimonialItems[testimonialIndex].classList.remove('active');
            testimonialIndex = (testimonialIndex + 1) % testimonialItems.length;
            testimonialItems[testimonialIndex].classList.add('active');
        }

        setInterval(showNextTestimonial, 5000); // Change testimonial every 5 seconds
    }
})();
