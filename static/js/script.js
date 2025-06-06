
// Header scroll effect
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Modal functionality
document.addEventListener('DOMContentLoaded', function() {
    // Get all interactive cards
    const interactiveCards = document.querySelectorAll('.interactive-card');
    
    // Get all modals
    const modals = document.querySelectorAll('.modal');
    
    // Get all close buttons
    const closeButtons = document.querySelectorAll('.close-modal');
    
    // Add click event to each interactive card
    interactiveCards.forEach(card => {
        card.addEventListener('click', function() {
            const modalId = this.getAttribute('data-modal');
            const modal = document.getElementById(modalId);
            if (modal) {
                modal.classList.add('active');
                document.body.style.overflow = 'hidden'; // Prevent scrolling
            }
        });
    });
    
    // Add click event to each close button
    closeButtons.forEach(button => {
        button.addEventListener('click', function() {
            const modal = this.closest('.modal');
            modal.classList.remove('active');
            document.body.style.overflow = 'auto'; // Re-enable scrolling
        });
    });
    
    // Close modal when clicking outside of modal content
    modals.forEach(modal => {
        modal.addEventListener('click', function(e) {
            if (e.target === this) {
                this.classList.remove('active');
                document.body.style.overflow = 'auto'; // Re-enable scrolling
            }
        });
    });
    
    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            modals.forEach(modal => {
                modal.classList.remove('active');
            });
            document.body.style.overflow = 'auto'; // Re-enable scrolling
        }
    });

    // Contact form submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simulate form submission
            setTimeout(() => {
                // Reset form
                contactForm.reset();
                
                // Show success modal
                const successModal = document.getElementById('successModal');
                if (successModal) {
                    successModal.classList.add('active');
                    document.body.style.overflow = 'hidden'; // Prevent scrolling
                }
            }, 1000);
        });
    }

    // Skill progress animation
    const skillItems = document.querySelectorAll('.skill-item');
    
    // Create intersection observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });
    
    // Observe each skill item
    skillItems.forEach(item => {
        observer.observe(item);
    });
    
    // Portfolio card hover effect
    const portfolioCards = document.querySelectorAll('.card');
    
    portfolioCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.querySelector('.card-content').style.transform = 'translateY(-10px)';
            this.querySelector('.card-content').style.transition = 'transform 0.3s ease';
        });
        
        card.addEventListener('mouseleave', function() {
            this.querySelector('.card-content').style.transform = 'translateY(0)';
        });
    });
    
    // Timeline animation
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    const timelineObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateX(0)';
                timelineObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    
    timelineItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateX(-50px)';
        item.style.transition = `opacity 0.5s ease, transform 0.5s ease ${index * 0.2}s`;
        timelineObserver.observe(item);
    });
});

// Projects filtering (if needed in the future)
function filterProjects(category) {
    const projects = document.querySelectorAll('.project-item');
    
    projects.forEach(project => {
        if (category === 'all' || project.classList.contains(category)) {
            project.style.display = 'grid';
        } else {
            project.style.display = 'none';
        }
    });
}
// Navigation scroll effect
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Modal functionality for project cards
document.addEventListener('DOMContentLoaded', function() {
    // Play Netflix sound on home page
    if (window.location.pathname === '/' || window.location.pathname === '/index.html') {
        // Direct link to a Netflix intro sound
        const netflixSound = new Audio('https://assets.mixkit.co/sfx/preview/mixkit-classic-short-notification-alert-666.mp3');
        netflixSound.volume = 0.5;
        
        // Create a play button for better user experience
        const soundButton = document.createElement('button');
        soundButton.textContent = 'Play Netflix Intro';
        soundButton.className = 'netflix-sound-btn';
        soundButton.style.position = 'fixed';
        soundButton.style.bottom = '20px';
        soundButton.style.right = '20px';
        soundButton.style.zIndex = '1000';
        soundButton.style.backgroundColor = '#E50914';
        soundButton.style.color = 'white';
        soundButton.style.border = 'none';
        soundButton.style.padding = '10px 15px';
        soundButton.style.borderRadius = '4px';
        soundButton.style.cursor = 'pointer';
        
        soundButton.addEventListener('click', () => {
            netflixSound.play()
                .then(() => {
                    console.log('Audio playing successfully');
                    setTimeout(() => {
                        soundButton.style.display = 'none';
                    }, 1000);
                })
                .catch(error => {
                    console.log('Audio playback failed:', error);
                });
        });
        
        document.body.appendChild(soundButton);
        
        // Try to play automatically if user has already interacted with the page
        if (document.documentElement.hasAttribute('data-user-interacted')) {
            netflixSound.play().catch(error => {
                console.log('Auto play failed, waiting for button click:', error);
            });
        }
        
        // Mark that user has interacted with the page for future visits
        document.addEventListener('click', function setInteracted() {
            document.documentElement.setAttribute('data-user-interacted', 'true');
            document.removeEventListener('click', setInteracted);
        });
    }
    
    // Project modals
    const modalTriggers = document.querySelectorAll('.interactive-card');
    const modals = document.querySelectorAll('.modal');
    const closeButtons = document.querySelectorAll('.close-modal');
    
    modalTriggers.forEach(trigger => {
        trigger.addEventListener('click', () => {
            const modalId = trigger.getAttribute('data-modal');
            const modal = document.getElementById(modalId);
            if (modal) {
                modal.classList.add('active');
                document.body.style.overflow = 'hidden';
            }
        });
    });
    
    closeButtons.forEach(button => {
        button.addEventListener('click', () => {
            const modal = button.closest('.modal');
            modal.classList.remove('active');
            document.body.style.overflow = 'auto';
        });
    });
    
    window.addEventListener('click', (e) => {
        modals.forEach(modal => {
            if (e.target === modal) {
                modal.classList.remove('active');
                document.body.style.overflow = 'auto';
            }
        });
    });
});
