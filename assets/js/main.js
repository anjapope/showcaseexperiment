/**
 * Ivory Research Showcase - Interactive JavaScript
 */

document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation Toggle
    initMobileNav();
    
    // Interactive Filtering
    initFilterControls();
    
    // Smooth Scroll for anchor links
    initSmoothScroll();
    
    // Animation on scroll
    initScrollAnimations();
    
    // Tab functionality (if tabs exist on page)
    initTabs();
    
    // Timeline interaction (if timeline exists on page)
    initTimeline();
});

/**
 * Mobile Navigation Toggle
 */
function initMobileNav() {
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (navToggle && navLinks) {
        navToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
            navToggle.setAttribute('aria-expanded', !isExpanded);
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!navToggle.contains(e.target) && !navLinks.contains(e.target)) {
                navLinks.classList.remove('active');
                navToggle.setAttribute('aria-expanded', 'false');
            }
        });
    }
}

/**
 * Filter Controls for Interactive Explorer
 */
function initFilterControls() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const filterableItems = document.querySelectorAll('[data-category]');
    const searchInput = document.querySelector('#search-input');
    const typeSelect = document.querySelector('#type-filter');
    
    // Category filter buttons
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const category = this.dataset.filter;
            
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Filter items
            filterItems(category, searchInput?.value || '', typeSelect?.value || 'all');
        });
    });
    
    // Search input
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            const activeFilter = document.querySelector('.filter-btn.active');
            const category = activeFilter?.dataset.filter || 'all';
            filterItems(category, this.value, typeSelect?.value || 'all');
        });
    }
    
    // Type select filter
    if (typeSelect) {
        typeSelect.addEventListener('change', function() {
            const activeFilter = document.querySelector('.filter-btn.active');
            const category = activeFilter?.dataset.filter || 'all';
            filterItems(category, searchInput?.value || '', this.value);
        });
    }
}

/**
 * Filter items based on category, search term, and type
 */
function filterItems(category, searchTerm, type) {
    const items = document.querySelectorAll('[data-category]');
    const normalizedSearch = searchTerm.toLowerCase().trim();
    
    items.forEach(item => {
        const itemCategory = item.dataset.category;
        const itemType = item.dataset.type || 'all';
        const itemText = item.textContent.toLowerCase();
        
        // Check category match
        const categoryMatch = category === 'all' || itemCategory === category;
        
        // Check search match
        const searchMatch = !normalizedSearch || itemText.includes(normalizedSearch);
        
        // Check type match
        const typeMatch = type === 'all' || itemType === type;
        
        // Show/hide based on all conditions
        if (categoryMatch && searchMatch && typeMatch) {
            item.classList.remove('hidden');
            item.classList.add('fade-in');
        } else {
            item.classList.add('hidden');
            item.classList.remove('fade-in');
        }
    });
    
    // Update results count if element exists
    updateResultsCount();
}

/**
 * Update the results count display
 */
function updateResultsCount() {
    const resultsCount = document.querySelector('#results-count');
    if (resultsCount) {
        const visibleItems = document.querySelectorAll('[data-category]:not(.hidden)');
        resultsCount.textContent = `Showing ${visibleItems.length} result${visibleItems.length !== 1 ? 's' : ''}`;
    }
}

/**
 * Smooth Scroll for anchor links
 */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
}

/**
 * Animation on scroll - fade in elements as they come into view
 */
function initScrollAnimations() {
    const animatedElements = document.querySelectorAll('.research-card, .card, .timeline-item');
    
    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });
        
        animatedElements.forEach(el => {
            el.style.opacity = '0';
            observer.observe(el);
        });
    } else {
        // Fallback for browsers that don't support IntersectionObserver
        animatedElements.forEach(el => {
            el.classList.add('fade-in');
        });
    }
}

/**
 * Tab functionality for content sections
 */
function initTabs() {
    const tabButtons = document.querySelectorAll('[data-tab]');
    const tabPanels = document.querySelectorAll('[data-tab-panel]');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const tabId = this.dataset.tab;
            
            // Update active tab button
            tabButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Show corresponding panel
            tabPanels.forEach(panel => {
                if (panel.dataset.tabPanel === tabId) {
                    panel.classList.remove('hidden');
                    panel.classList.add('fade-in');
                } else {
                    panel.classList.add('hidden');
                }
            });
        });
    });
}

/**
 * Timeline interaction - expand/collapse details
 */
function initTimeline() {
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    timelineItems.forEach(item => {
        const toggle = item.querySelector('.timeline-toggle');
        const details = item.querySelector('.timeline-details');
        
        if (toggle && details) {
            toggle.addEventListener('click', function() {
                details.classList.toggle('hidden');
                this.setAttribute('aria-expanded', 
                    this.getAttribute('aria-expanded') === 'true' ? 'false' : 'true'
                );
            });
        }
    });
}
