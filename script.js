// DOM elements
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const cartIcon = document.querySelector('.cart-icon');
const cartCount = document.querySelector('.cart-count');
const addToCartButtons = document.querySelectorAll('.product-card .btn-small');
const quizButton = document.querySelector('.coffee-quiz .btn-primary');
const quizButtonHero = document.querySelector('.coffee-quiz-btn');
const subscribeButtons = document.querySelectorAll('.subscription-card .btn-primary');
const newsletterForm = document.querySelector('.newsletter-form');
const emailInput = document.querySelector('#email');
const errorMessage = document.querySelector('#email-error');

// Cart functionality
let cart = [];
let itemCount = 0;

// Mobile menu toggle
hamburger.addEventListener('click', () => {
    const isExpanded = hamburger.getAttribute('aria-expanded') === 'true';
    hamburger.setAttribute('aria-expanded', !isExpanded);
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
});

// Add to cart functionality
addToCartButtons.forEach((button, index) => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        
        // Get product info
        const productCard = button.closest('.product-card');
        const productName = productCard.querySelector('.product-name').textContent;
        const productPrice = productCard.querySelector('.product-price').textContent;
        
        // Add to cart
        const product = {
            id: Date.now() + index,
            name: productName,
            price: productPrice
        };
        
        cart.push(product);
        itemCount++;
        updateCartCount();
        saveCart();
        
        // Visual feedback
        button.textContent = 'Added!';
        button.style.backgroundColor = '#28a745';
        
        setTimeout(() => {
            button.textContent = 'Add to Cart';
            button.style.backgroundColor = '';
        }, 1500);
        
        // Show cart animation
        animateCartIcon();
    });
});

// Update cart count
function updateCartCount() {
    cartCount.textContent = itemCount;
    cartCount.style.display = itemCount > 0 ? 'flex' : 'none';
}

// Animate cart icon
function animateCartIcon() {
    cartIcon.style.transform = 'scale(1.2)';
    setTimeout(() => {
        cartIcon.style.transform = 'scale(1)';
    }, 200);
}

// Coffee quiz functionality
if (quizButton) {
    quizButton.addEventListener('click', (e) => {
        e.preventDefault();
        showCoffeeQuiz();
    });
}

if (quizButtonHero) {
    quizButtonHero.addEventListener('click', (e) => {
        e.preventDefault();
        showCoffeeQuiz();
    });
}

function showCoffeeQuiz() {
    // Create modal for coffee quiz
    const modal = document.createElement('div');
    modal.className = 'quiz-modal';
    modal.innerHTML = `
        <div class="quiz-modal-content">
            <div class="quiz-header">
                <h2>Coffee Preference Quiz</h2>
                <button class="close-quiz">&times;</button>
            </div>
            <div class="quiz-body">
                <div class="quiz-question active" data-question="1">
                    <h3>How do you prefer your coffee strength?</h3>
                    <div class="quiz-options">
                        <button class="quiz-option" data-value="light">Light & Mild</button>
                        <button class="quiz-option" data-value="medium">Medium & Balanced</button>
                        <button class="quiz-option" data-value="strong">Strong & Bold</button>
                    </div>
                </div>
                <div class="quiz-question" data-question="2">
                    <h3>What's your preferred brewing method?</h3>
                    <div class="quiz-options">
                        <button class="quiz-option" data-value="drip">Drip Coffee</button>
                        <button class="quiz-option" data-value="espresso">Espresso</button>
                        <button class="quiz-option" data-value="french-press">French Press</button>
                        <button class="quiz-option" data-value="pour-over">Pour Over</button>
                    </div>
                </div>
                <div class="quiz-question" data-question="3">
                    <h3>Which flavor profile appeals to you most?</h3>
                    <div class="quiz-options">
                        <button class="quiz-option" data-value="fruity">Fruity & Bright</button>
                        <button class="quiz-option" data-value="nutty">Nutty & Sweet</button>
                        <button class="quiz-option" data-value="chocolate">Chocolate & Rich</button>
                        <button class="quiz-option" data-value="spicy">Spicy & Complex</button>
                    </div>
                </div>
                <div class="quiz-result" style="display: none;">
                    <h3>Your Perfect Coffee Match!</h3>
                    <div class="result-content">
                        <h4 id="recommended-coffee"></h4>
                        <p id="recommendation-text"></p>
                        <button class="btn btn-primary" onclick="closeQuiz()">Shop Now</button>
                    </div>
                </div>
            </div>
            <div class="quiz-progress">
                <div class="progress-bar">
                    <div class="progress-fill" style="width: 33.33%"></div>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Quiz functionality
    let currentQuestion = 1;
    let answers = {};
    
    const questions = modal.querySelectorAll('.quiz-question');
    const progressFill = modal.querySelector('.progress-fill');
    const closeButton = modal.querySelector('.close-quiz');
    
    // Close quiz
    closeButton.addEventListener('click', closeQuiz);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeQuiz();
    });
    
    // Handle quiz options
    modal.addEventListener('click', (e) => {
        if (e.target.classList.contains('quiz-option')) {
            const question = e.target.closest('.quiz-question');
            const questionNum = question.dataset.question;
            answers[questionNum] = e.target.dataset.value;
            
            // Highlight selected option
            question.querySelectorAll('.quiz-option').forEach(opt => {
                opt.classList.remove('selected');
            });
            e.target.classList.add('selected');
            
            // Move to next question
            setTimeout(() => {
                if (currentQuestion < 3) {
                    question.classList.remove('active');
                    currentQuestion++;
                    const nextQuestion = modal.querySelector(`[data-question="${currentQuestion}"]`);
                    nextQuestion.classList.add('active');
                    
                    // Update progress
                    const progress = (currentQuestion / 3) * 100;
                    progressFill.style.width = `${progress}%`;
                } else {
                    // Show result
                    question.classList.remove('active');
                    showQuizResult(answers);
                }
            }, 500);
        }
    });
    
    function showQuizResult(answers) {
        const resultDiv = modal.querySelector('.quiz-result');
        const coffeeTitle = modal.querySelector('#recommended-coffee');
        const recommendationText = modal.querySelector('#recommendation-text');
        
        // Simple recommendation logic
        let recommendation = '';
        let description = '';
        
        if (answers['1'] === 'light' && answers['3'] === 'fruity') {
            recommendation = 'Ethiopian Yirgacheffe';
            description = 'Perfect for your preference! This light, fruity coffee with bright citrus notes will awaken your senses every morning.';
        } else if (answers['1'] === 'strong' && answers['3'] === 'chocolate') {
            recommendation = 'Colombian Supremo';
            description = 'Ideal match! This rich, full-bodied coffee with deep chocolate notes provides the bold flavor you crave.';
        } else if (answers['3'] === 'spicy') {
            recommendation = 'Guatemala Antigua';
            description = 'Excellent choice! This complex coffee with spicy undertones and wine-like acidity matches your adventurous palate.';
        } else {
            recommendation = 'House Blend';
            description = 'Our carefully crafted house blend combines the best of all worlds, perfect for your unique taste preferences.';
        }
        
        coffeeTitle.textContent = recommendation;
        recommendationText.textContent = description;
        resultDiv.style.display = 'block';
        
        progressFill.style.width = '100%';
    }
}

function closeQuiz() {
    const modal = document.querySelector('.quiz-modal');
    if (modal) {
        modal.remove();
    }
}

// Subscription functionality
subscribeButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        
        const card = button.closest('.subscription-card');
        const planName = card.querySelector('h3').textContent;
        
        // Simple subscription simulation
        button.textContent = 'Subscribed!';
        button.style.backgroundColor = '#28a745';
        
        setTimeout(() => {
            alert(`Thank you for subscribing to ${planName}! You'll receive your first delivery within 3-5 business days.`);
            button.textContent = 'Subscribe';
            button.style.backgroundColor = '';
        }, 1000);
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.product-card, .subscription-card, .section-title').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Header scroll effect
let lastScrollTop = 0;
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > lastScrollTop && scrollTop > 100) {
        // Scrolling down
        header.style.transform = 'translateY(-100%)';
    } else {
        // Scrolling up
        header.style.transform = 'translateY(0)';
    }
    
    lastScrollTop = scrollTop;
});

// Add CSS for quiz modal
const quizStyles = `
<style>
.quiz-modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10000;
}

.quiz-modal-content {
    background: white;
    border-radius: 12px;
    max-width: 500px;
    width: 90%;
    max-height: 80vh;
    overflow-y: auto;
}

.quiz-header {
    padding: 2rem 2rem 1rem;
    border-bottom: 1px solid #eee;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.quiz-header h2 {
    margin: 0;
    color: #2c1810;
}

.close-quiz {
    background: none;
    border: none;
    font-size: 2rem;
    cursor: pointer;
    color: #666;
}

.quiz-body {
    padding: 2rem;
}

.quiz-question {
    display: none;
}

.quiz-question.active {
    display: block;
}

.quiz-question h3 {
    margin-bottom: 1.5rem;
    color: #2c1810;
}

.quiz-options {
    display: grid;
    gap: 1rem;
}

.quiz-option {
    padding: 1rem;
    border: 2px solid #ddd;
    background: white;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.3s ease;
    font-size: 1rem;
}

.quiz-option:hover {
    border-color: #8B4513;
    background: #f8f4f0;
}

.quiz-option.selected {
    border-color: #8B4513;
    background: #8B4513;
    color: white;
}

.quiz-progress {
    padding: 1rem 2rem 2rem;
}

.progress-bar {
    width: 100%;
    height: 8px;
    background: #eee;
    border-radius: 4px;
    overflow: hidden;
}

.progress-fill {
    height: 100%;
    background: #8B4513;
    transition: width 0.5s ease;
}

.quiz-result {
    text-align: center;
}

.quiz-result h3 {
    color: #2c1810;
    margin-bottom: 1rem;
}

.quiz-result h4 {
    color: #8B4513;
    font-size: 1.5rem;
    margin-bottom: 1rem;
}

.result-content p {
    margin-bottom: 2rem;
    line-height: 1.6;
    color: #666;
}
</style>
`;

document.head.insertAdjacentHTML('beforeend', quizStyles);

// Newsletter form functionality
if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const email = emailInput.value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        // Clear previous error
        errorMessage.classList.remove('show');
        errorMessage.textContent = '';
        
        if (!email) {
            showError('Please enter your email address.');
            return;
        }
        
        if (!emailRegex.test(email)) {
            showError('Please enter a valid email address.');
            return;
        }
        
        // Simulate successful subscription
        const submitButton = newsletterForm.querySelector('button[type="submit"]');
        const originalText = submitButton.textContent;
        
        submitButton.textContent = 'Subscribing...';
        submitButton.disabled = true;
        
        setTimeout(() => {
            submitButton.textContent = 'Subscribed! ✓';
            submitButton.style.backgroundColor = '#28a745';
            emailInput.value = '';
            
            setTimeout(() => {
                submitButton.textContent = originalText;
                submitButton.disabled = false;
                submitButton.style.backgroundColor = '';
            }, 3000);
        }, 1000);
    });
}

function showError(message) {
    errorMessage.textContent = message;
    errorMessage.classList.add('show');
    emailInput.focus();
}

// Enhanced cart functionality with local storage
function saveCart() {
    localStorage.setItem('frescopa-cart', JSON.stringify(cart));
    localStorage.setItem('frescopa-cart-count', itemCount.toString());
}

function loadCart() {
    const savedCart = localStorage.getItem('frescopa-cart');
    const savedCount = localStorage.getItem('frescopa-cart-count');
    
    if (savedCart) {
        cart = JSON.parse(savedCart);
    }
    
    if (savedCount) {
        itemCount = parseInt(savedCount);
    }
}

// Interactive map functionality for coffee origins
function initializeOriginMap() {
    const markers = document.querySelectorAll('.marker');
    const regionCards = document.querySelectorAll('.region-card');
    
    markers.forEach(marker => {
        marker.addEventListener('click', () => {
            const region = marker.dataset.region;
            
            // Hide all region cards
            regionCards.forEach(card => {
                card.classList.remove('active');
            });
            
            // Show selected region card
            const targetCard = document.getElementById(`${region}-info`);
            if (targetCard) {
                targetCard.classList.add('active');
            }
            
            // Visual feedback for marker
            markers.forEach(m => m.classList.remove('active'));
            marker.classList.add('active');
        });
    });
}

// Product image gallery functionality
function initializeProductGalleries() {
    const productCards = document.querySelectorAll('.product-card');
    
    productCards.forEach(card => {
        const mainImage = card.querySelector('.product-main-image');
        const thumbnails = card.querySelectorAll('.thumbnail');
        
        thumbnails.forEach(thumb => {
            thumb.addEventListener('click', () => {
                // Update main image
                const newSrc = thumb.src.replace('w=200', 'w=800');
                mainImage.src = newSrc;
                mainImage.alt = thumb.alt;
                
                // Update thumbnail states
                thumbnails.forEach(t => t.classList.remove('active'));
                thumb.classList.add('active');
                
                // Add transition effect
                mainImage.style.opacity = '0';
                setTimeout(() => {
                    mainImage.style.opacity = '1';
                }, 150);
            });
        });
    });
}

// Video player enhancements
function initializeVideoPlayers() {
    const videoContainers = document.querySelectorAll('.video-container, .brewing-video-container');
    
    videoContainers.forEach(container => {
        const video = container.querySelector('video');
        const playButton = container.querySelector('.play-button');
        
        if (playButton && video) {
            playButton.addEventListener('click', () => {
                if (video.paused) {
                    video.play();
                    playButton.style.display = 'none';
                } else {
                    video.pause();
                    playButton.style.display = 'flex';
                }
            });
            
            video.addEventListener('play', () => {
                playButton.style.display = 'none';
            });
            
            video.addEventListener('pause', () => {
                playButton.style.display = 'flex';
            });
            
            video.addEventListener('ended', () => {
                playButton.style.display = 'flex';
            });
        }
    });
}

// Gallery lightbox functionality
function initializeGalleryLightbox() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    galleryItems.forEach(item => {
        item.addEventListener('click', () => {
            const img = item.querySelector('img');
            const overlay = item.querySelector('.gallery-overlay');
            
            // Create lightbox
            const lightbox = document.createElement('div');
            lightbox.className = 'lightbox';
            lightbox.innerHTML = `
                <div class="lightbox-content">
                    <img src="${img.src}" alt="${img.alt}" />
                    <div class="lightbox-info">
                        ${overlay.innerHTML}
                    </div>
                    <button class="lightbox-close">&times;</button>
                </div>
            `;
            
            document.body.appendChild(lightbox);
            
            // Close lightbox
            const closeBtn = lightbox.querySelector('.lightbox-close');
            closeBtn.addEventListener('click', () => {
                lightbox.remove();
            });
            
            lightbox.addEventListener('click', (e) => {
                if (e.target === lightbox) {
                    lightbox.remove();
                }
            });
        });
    });
}

// Add lightbox styles
const lightboxStyles = `
<style>
.lightbox {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.9);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10001;
    animation: fadeIn 0.3s ease;
}

.lightbox-content {
    position: relative;
    max-width: 90%;
    max-height: 90%;
    background: white;
    border-radius: 16px;
    overflow: hidden;
    box-shadow: 0 25px 50px rgba(0,0,0,0.5);
}

.lightbox-content img {
    width: 100%;
    height: auto;
    display: block;
}

.lightbox-info {
    padding: 1.5rem;
    background: white;
}

.lightbox-close {
    position: absolute;
    top: 15px;
    right: 15px;
    background: rgba(0,0,0,0.7);
    color: white;
    border: none;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background 0.3s ease;
}

.lightbox-close:hover {
    background: rgba(0,0,0,0.9);
}

@keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
}

.marker.active .marker-pin {
    transform: scale(1.2);
    background: #D2691E;
}

.thumbnail.active {
    border-color: #8B4513;
    transform: scale(1.05);
}
</style>
`;

document.head.insertAdjacentHTML('beforeend', lightboxStyles);

// Enhanced intersection observer for rich media
function initializeRichMediaAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                
                // Special animations for specific elements
                if (entry.target.classList.contains('video-testimonial-card')) {
                    entry.target.style.animationDelay = '0.2s';
                }
                
                if (entry.target.classList.contains('gallery-item')) {
                    const delay = Array.from(entry.target.parentNode.children).indexOf(entry.target) * 0.1;
                    entry.target.style.animationDelay = `${delay}s`;
                }
            }
        });
    }, observerOptions);
    
    // Observe new elements
    const richMediaElements = document.querySelectorAll(`
        .video-testimonial-card, 
        .brewing-card, 
        .gallery-item, 
        .region-card,
        .product-card,
        .subscription-card,
        .section-title
    `);
    
    richMediaElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    loadCart();
    updateCartCount();
    
    // Initialize rich media functionality
    initializeOriginMap();
    initializeProductGalleries();
    initializeVideoPlayers();
    initializeGalleryLightbox();
    initializeRichMediaAnimations();
    
    // Add loading animation with stagger effect
    const elements = document.querySelectorAll('.product-card, .subscription-card, .testimonial-card, .blog-card');
    elements.forEach((el, index) => {
        el.style.animationDelay = `${index * 0.1}s`;
    });
    
    // Add loading class to body for initial animation
    document.body.classList.add('loaded');
    
    console.log('Fréscopa website with rich media loaded successfully! ☕🎥📸');
});
