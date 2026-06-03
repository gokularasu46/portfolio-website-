/* ========================================
   PORTFOLIO JAVASCRIPT
   Interactivity & Dynamic Functionality
   ======================================== */

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all interactive features
    initializeHamburgerMenu();
    initializeSmoothScrolling();
    initializeScrollAnimations();
});

/* ========== HAMBURGER MENU ========== */
/**
 * Initializes the hamburger menu toggle functionality
 * Allows users to open/close mobile navigation
 */
function initializeHamburgerMenu() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');

    if (!hamburger || !navMenu) return;

    // Toggle menu on hamburger click
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close menu when a nav link is clicked
    const navLinks = navMenu.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        const isClickInsideNav = navMenu.contains(event.target);
        const isClickOnHamburger = hamburger.contains(event.target);

        if (!isClickInsideNav && !isClickOnHamburger && navMenu.classList.contains('active')) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });
}

/* ========== SMOOTH SCROLLING ========== */
/**
 * Enables smooth scrolling for anchor links
 * Prevents default jump behavior and animates to section
 */
function initializeSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');

            // Skip if it's just "#"
            if (href === '#') return;

            const targetElement = document.querySelector(href);

            if (targetElement) {
                e.preventDefault();

                // Calculate offset for sticky navbar
                const navbarHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = targetElement.offsetTop - navbarHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

/* ========== SCROLL ANIMATIONS ========== */
/**
 * Adds fade-in animations to elements as they come into view
 * Uses Intersection Observer API for better performance
 */
function initializeScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add animation class when element enters viewport
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all elements that should animate
    const animateElements = document.querySelectorAll(
        '.about-text, .interest-card, .section-container'
    );

    animateElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease-in-out, transform 0.6s ease-in-out';
        observer.observe(element);
    });
}

/* ========== SCROLL POSITION TRACKING ========== */
/**
 * Updates the navigation bar appearance based on scroll position
 * Adds visual feedback for the current section
 */
window.addEventListener('scroll', function() {
    updateActiveNavLink();
});

function updateActiveNavLink() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    let currentSection = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (window.scrollY >= sectionTop - 200) {
            currentSection = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
}

/* ========== UTILITY FUNCTIONS ========== */

/**
 * Smooth scroll to a specific element
 * @param {string} elementId - The ID of the element to scroll to
 */
function scrollToElement(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        const navbarHeight = document.querySelector('.navbar').offsetHeight;
        const targetPosition = element.offsetTop - navbarHeight;

        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    }
}

/**
 * Check if device is mobile
 * @returns {boolean} - True if device width is less than 768px
 */
function isMobileDevice() {
    return window.innerWidth <= 768;
}

/**
 * Handle responsive behavior on window resize
 */
window.addEventListener('resize', function() {
    // Close mobile menu on resize to desktop
    if (!isMobileDevice()) {
        const hamburger = document.getElementById('hamburger');
        const navMenu = document.getElementById('nav-menu');

        if (hamburger && navMenu) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    }
});

/* ========== PRELOADER ANIMATION ========== */
/**
 * Show loading animation while page content loads
 */
window.addEventListener('load', function() {
    // Fade in main content
    const mainContent = document.querySelector('main');
    if (mainContent) {
        mainContent.style.opacity = '1';
        mainContent.style.animation = 'fadeIn 0.8s ease-in-out';
    }
});

/* ========== DYNAMIC DATE FOR FOOTER ========== */
/**
 * Updates the year in footer copyright automatically
 */
function updateFooterYear() {
    const year = new Date().getFullYear();
    const footerText = document.querySelector('.footer-text');

    if (footerText) {
        footerText.textContent = `© ${year} Gokularasu K. All rights reserved.`;
    }
}

// Update footer year on page load
updateFooterYear();

/* ========== CONSOLE MESSAGE ========== */
/**
 * Welcome message in browser console
 */
console.log(
    '%c Welcome to Gokularasu K\'s Portfolio!',
    'font-size: 20px; color: #00d4ff; font-weight: bold;'
);
console.log(
    '%c Built with HTML5, CSS3 & JavaScript | Responsive & Modern Design',
    'font-size: 14px; color: #5ce1e6;'
);
