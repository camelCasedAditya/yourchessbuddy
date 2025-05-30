let currentSingleSection = null;

document.querySelector('form[action="https://formspree.io/f/xovwawld"]').addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const form = e.target;
    const submitBtn = form.querySelector('.submit-btn');
    const successMessage = document.getElementById('success-message');
    const errorMessage = document.getElementById('error-message');
    
    // Hide messages and show loading
    successMessage.style.display = 'none';
    errorMessage.style.display = 'none';
    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending...';
    
    try {
        const response = await fetch('https://formspree.io/f/xovwawld', {
            method: 'POST',
            body: new FormData(form),
            headers: { 'Accept': 'application/json' }
        });
        
        if (response.ok) {
            successMessage.style.display = 'block';
            form.reset();
        } else {
            throw new Error('Submission failed');
        }
    } catch (error) {
        errorMessage.style.display = 'block';
    } finally {
        submitBtn.disabled = false;
        submitBtn.textContent = 'Send Message';
    }
});

// Smooth scroll reveal animation
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, observerOptions);

// Observe all sections
document.querySelectorAll('.section').forEach(section => {
  observer.observe(section);
});

// Function to show section in centered view
function showCenteredSection(targetId) {
  const overlay = document.querySelector('.page-overlay');
  const backButton = document.querySelector('.back-to-home');
  const targetSection = document.querySelector(targetId);
  
  if (targetSection) {
    // Show overlay
    overlay.classList.add('active');
    
    // Add centered view class to target section
    targetSection.classList.add('centered-view');
    targetSection.classList.add('visible');
    
    // Show back button with higher z-index
    backButton.classList.add('visible');
    backButton.style.zIndex = '1100';
    
    currentSingleSection = targetId;
    
    // Prevent body scroll
    document.body.style.overflow = 'hidden';
  }
}

// Function to show all sections (back to normal view)
function showAllSections() {
  const overlay = document.querySelector('.page-overlay');
  const backButton = document.querySelector('.back-to-home');
  const allSections = document.querySelectorAll('.section');
  
  // Hide overlay
  overlay.classList.remove('active');
  
  // Remove centered view from all sections
  allSections.forEach(section => {
    section.classList.remove('centered-view');
  });
  
  // Hide back button
  backButton.classList.remove('visible');
  
  // Restore body scroll
  document.body.style.overflow = '';
  
  currentSingleSection = null;
  
  // Scroll to top smoothly
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Scroll progress bar
window.addEventListener('scroll', () => {
  const scrolled = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
  document.querySelector('.scroll-progress').style.width = scrolled + '%';
});

// Header background on scroll
window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  if (window.scrollY > 100) {
    header.style.background = 'rgba(15, 15, 35, 0.95)';
  } else {
    header.style.background = 'rgba(15, 15, 35, 0.9)';
  }
});

// Enhanced navigation link handling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    
    // If clicking from hero CTA button, show centered section
    if (this.classList.contains('cta-button')) {
      if (targetId !== '#home') {
        const target = document.querySelector(targetId);
        if (target) {
          const headerHeight = document.querySelector('header').offsetHeight;
          const targetPosition = target.offsetTop - headerHeight - 50;
          
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      } else {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      }
    } 
    // If clicking from navigation, do regular smooth scroll
    else if (this.closest('nav')) {
      if (targetId === '#home') {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      } else {
        const target = document.querySelector(targetId);
        if (target && !currentSingleSection) {
          const headerHeight = document.querySelector('header').offsetHeight;
          const targetPosition = target.offsetTop - headerHeight - 50;
          
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      }
    } else {
      // Regular smooth scroll for other links
      const target = document.querySelector(targetId);
      if (target && !currentSingleSection) {
        const headerHeight = document.querySelector('header').offsetHeight;
        const targetPosition = target.offsetTop - headerHeight - 50;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    }
  });
});

// Add subtle parallax effect to floating elements
window.addEventListener('scroll', () => {
  const scrolled = window.pageYOffset;
  const rate = scrolled * -0.5;
  
  document.querySelectorAll('.floating-element').forEach((element, index) => {
    const speed = (index + 1) * 0.3;
    element.style.transform = `translateY(${rate * speed}px) rotate(${scrolled * 0.1}deg)`;
  });
});

document.querySelector('form[action="https://formspree.io/f/xovwawld"]').addEventListener('submit', async function(e) {
        e.preventDefault();
        
        const form = e.target;
        const submitBtn = form.querySelector('.submit-btn');
        const successMessage = document.getElementById('success-message');
        const errorMessage = document.getElementById('error-message');
        
        // Hide messages and show loading
        successMessage.style.display = 'none';
        errorMessage.style.display = 'none';
        submitBtn.disabled = true;
        submitBtn.textContent = 'Sending...';
        
        try {
            const response = await fetch('https://formspree.io/f/xovwawld', {
                method: 'POST',
                body: new FormData(form),
                headers: { 'Accept': 'application/json' }
            });
            
            if (response.ok) {
                successMessage.style.display = 'block';
                form.reset();
            } else {
                throw new Error('Submission failed');
            }
        } catch (error) {
            errorMessage.style.display = 'block';
        } finally {
            submitBtn.disabled = false;
            submitBtn.textContent = 'Send Message';
        }
    });