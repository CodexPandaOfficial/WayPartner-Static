/**
 * WayPartner - Green Coins Application
 * Main JavaScript file for handling UI interactions
 */

document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements
    const hamburger = document.getElementById('hamburger');
    const navItems = document.getElementById('navItems');
    const downloadBtn = document.getElementById('downloadBtn');
    const closeBtn = document.getElementById('closeBtn');
    const carButtons = document.querySelectorAll('.car-button');
    const carLists = {
        sedan: document.getElementById('sedan-list'),
        suv: document.getElementById('suv-list'),
        premium: document.getElementById('premium-list')
    };
    
    // Mobile Navigation Toggle
    function toggleMobileMenu() {
        const isExpanded = hamburger.getAttribute('aria-expanded') === 'true';
        hamburger.setAttribute('aria-expanded', !isExpanded);
        navItems.setAttribute('data-visible', !isExpanded);
        document.body.style.overflow = isExpanded ? 'auto' : 'hidden';
    }
    
    // Car Type Selection
    function handleCarButtonClick(event) {
        const target = event.currentTarget.dataset.target;
        
        // Update active button
        carButtons.forEach(button => {
            button.classList.toggle('car-button--active', button === event.currentTarget);
        });
        
        // Show corresponding list
        Object.keys(carLists).forEach(key => {
            if (key === target) {
                carLists[key].removeAttribute('hidden');
            } else {
                carLists[key].setAttribute('hidden', '');
            }
        });
    }
    
    // Window Resize Handler
    function handleWindowResize() {
        if (window.innerWidth > 768) {
            // Reset mobile menu state on desktop
            hamburger.setAttribute('aria-expanded', 'false');
            navItems.setAttribute('data-visible', 'false');
            document.body.style.overflow = 'auto';
        }
    }
    function handleNavLinkClick() {
        if (window.innerWidth <= 768) {
            toggleMobileMenu();
        }
    }
    
    // Smooth Scrolling for Anchor Links
    function setupSmoothScrolling() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                    
                    // Close mobile menu if open
                    if (navItems.getAttribute('data-visible') === 'true') {
                        toggleMobileMenu();
                    }
                }
            });
        });
    }
    document.querySelectorAll('.navbar__link').forEach(link => {
        link.addEventListener('click', handleNavLinkClick);
    });
    // Event Listeners
    hamburger.addEventListener('click', toggleMobileMenu);
    closeBtn.addEventListener('click', toggleMobileMenu);
    carButtons.forEach(button => {
        button.addEventListener('click', handleCarButtonClick);
    });
    window.addEventListener('resize', handleWindowResize);
    
    // Initialize
    setupSmoothScrolling();
    
    // Set initial car list to sedan
    carLists.sedan.removeAttribute('hidden');
    document.querySelector('.car-button[data-target="sedan"]').classList.add('car-button--active');
});
