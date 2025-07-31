import './style.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div class="app">
    <!-- Header -->
    <header class="header">
      <div class="container">
        <div class="nav">
          <div class="logo">
            <div class="logo-icon"></div>
            <span>ModernApp</span>
          </div>
          <nav class="nav-links">
            <a href="#" class="nav-link">Home</a>
            <a href="#" class="nav-link">Features</a>
            <a href="#" class="nav-link">About</a>
            <a href="#" class="nav-link">Contact</a>
          </nav>
        </div>
      </div>
    </header>

    <!-- Hero Section -->
    <section class="hero">
      <div class="container">
        <div class="hero-content">
          <h1 class="hero-title">
            Build Something
            <span class="gradient-text">Amazing</span>
          </h1>
          <p class="hero-description">
            Create beautiful, modern applications with our cutting-edge platform. 
            Experience the future of web development today.
          </p>
          <div class="hero-buttons">
            <button class="btn btn-primary">Get Started</button>
            <button class="btn btn-secondary">Learn More</button>
          </div>
        </div>
        <div class="hero-visual">
          <div class="floating-card card-1">
            <div class="card-icon"></div>
            <h3>Fast</h3>
            <p>Lightning-fast performance</p>
          </div>
          <div class="floating-card card-2">
            <div class="card-icon"></div>
            <h3>Secure</h3>
            <p>Enterprise-grade security</p>
          </div>
          <div class="floating-card card-3">
            <div class="card-icon"></div>
            <h3>Scalable</h3>
            <p>Grows with your business</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="features">
      <div class="container">
        <h2 class="section-title">Why Choose Us</h2>
        <div class="features-grid">
          <div class="feature-card">
            <div class="feature-icon icon-1"></div>
            <h3>Modern Design</h3>
            <p>Beautiful, responsive designs that work on all devices</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon icon-2"></div>
            <h3>Easy to Use</h3>
            <p>Intuitive interface that anyone can master quickly</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon icon-3"></div>
            <h3>24/7 Support</h3>
            <p>Round-the-clock assistance whenever you need it</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Chatbot Button -->
    <div class="chatbot-container">
      <button class="chatbot-btn" id="chatbot-btn">
        <div class="chatbot-icon">
          <div class="chat-bubble"></div>
          <div class="chat-bubble"></div>
          <div class="chat-bubble"></div>
        </div>
        <span class="chatbot-text">Chat with us</span>
      </button>
    </div>
  </div>
`

// Chatbot button functionality
const chatbotBtn = document.getElementById('chatbot-btn');
chatbotBtn?.addEventListener('click', () => {
  alert('Chatbot feature coming soon! 🤖');
});

// Add scroll effect to header
window.addEventListener('scroll', () => {
  const header = document.querySelector('.header');
  if (window.scrollY > 50) {
    header?.classList.add('scrolled');
  } else {
    header?.classList.remove('scrolled');
  }
});