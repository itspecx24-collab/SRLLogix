// Placeholder for site JS - animations, interactivity
// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

document.addEventListener('DOMContentLoaded', function(){
    // simple CTA click
    const ctas = document.querySelectorAll('.cta-scroll');
    ctas.forEach(c=> c.addEventListener('click', e=>{
        e.preventDefault();
        const target = document.querySelector(c.getAttribute('href'));
        if(target) target.scrollIntoView({behavior:'smooth'});
    }));

    // Gallery functionality
    const galleryItems = document.querySelectorAll('.gallery-item');
    galleryItems.forEach(item => {
        item.addEventListener('click', function() {
            // Create lightbox
            const img = this.querySelector('img');
            const lightbox = document.createElement('div');
            lightbox.className = 'lightbox';
            lightbox.innerHTML = `
                <div class="lightbox-content">
                    <span class="close-lightbox">&times;</span>
                    <img src="${img.src}" alt="${img.alt}" style="max-width: 90vw; max-height: 90vh; border-radius: 8px;">
                </div>
            `;
            lightbox.style.cssText = `
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0,0,0,0.9);
                z-index: 9999;
                display: flex;
                align-items: center;
                justify-content: center;
                cursor: pointer;
            `;
            
            document.body.appendChild(lightbox);
            
            // Close lightbox on click
            lightbox.addEventListener('click', function() {
                document.body.removeChild(lightbox);
            });
            
            // Close on escape key
            document.addEventListener('keydown', function(e) {
                if (e.key === 'Escape') {
                    if (document.body.contains(lightbox)) {
                        document.body.removeChild(lightbox);
                    }
                }
            });
        });

        // Add hover effect
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
            this.style.transition = 'transform 0.3s ease';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
});

// site wide scripts

// Animate a single counter element from 0 to target
function animateCounterElement(counter) {
  const target = +counter.getAttribute('data-target') || 0;
  const duration = 1600; // ms
  let current = 0;
  if (target <= 0) { counter.innerText = '0'; return; }
  const stepTime = Math.max(20, Math.floor(duration / target));
  const increment = Math.max(1, Math.ceil(target / (duration / stepTime)));

  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      counter.innerText = target.toLocaleString();
      clearInterval(timer);
    } else {
      counter.innerText = current.toLocaleString();
    }
  }, stepTime);
}

// Use IntersectionObserver to trigger counters when visible
(function(){
  const counters = document.querySelectorAll('.counter');
  if (!counters.length) return;

  const io = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounterElement(entry.target);
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.4 });
});

  counters.forEach(c => {
    // reset text
    c.innerText = c.getAttribute('data-start') || '0';
    io.observe(c);
  });
})();

// Animate SVG path and nodes if present (Home page)
(function(){
  document.addEventListener('DOMContentLoaded', function(){
    const path = document.querySelector('.path-line');
    if (path) {
      const length = path.getTotalLength();
      path.style.strokeDasharray = length;
      path.style.strokeDashoffset = length;
      // trigger when path is visible
      const io = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            path.style.transition = 'stroke-dashoffset 1.2s ease-out';
            path.style.strokeDashoffset = '0';
            obs.unobserve(entry.target);
          }
        });
      }, { threshold: 0.2 });
      io.observe(path);
    }

    // Pulse nodes when they become visible
    const nodes = document.querySelectorAll('.node-circle');
    if (nodes.length) {
      const ioNodes = new IntersectionObserver((entries, obs) => {
        entries.forEach((entry, idx) => {
          if (entry.isIntersecting) {
            const n = entry.target;
            n.style.transition = 'transform 0.35s ease';
            setTimeout(()=> n.style.transform = 'scale(1.12)', 100 + idx * 150);
            setTimeout(()=> n.style.transform = 'scale(1)', 100 + idx * 150 + 350);
            obs.unobserve(n);
          }
        });
      }, { threshold: 0.3 });

      nodes.forEach(n => ioNodes.observe(n));
    }
  });
})();

// Animate timeline items (About page) using IntersectionObserver
(function(){
  document.addEventListener('DOMContentLoaded', function(){
    const items = document.querySelectorAll('.timeline-item');
    if (!items.length) return;
    const io = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });

    items.forEach(item => {
      // start hidden via CSS
      io.observe(item);
    });
  });
})();

// Animate cards on scroll
(function(){
  document.addEventListener('DOMContentLoaded', function(){
    const cards = document.querySelectorAll('.card-service, .card');
    if (!cards.length) return;
    
    const io = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.style.opacity = '0';
            entry.target.style.transform = 'translateY(20px)';
            entry.target.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            setTimeout(() => {
              entry.target.style.opacity = '1';
              entry.target.style.transform = 'translateY(0)';
            }, 50);
          }, index * 100);
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    cards.forEach(card => io.observe(card));
  });
})();

// Lazy load images
(function(){
  document.addEventListener('DOMContentLoaded', function(){
    const images = document.querySelectorAll('img[loading="lazy"]');
    if (!images.length) return;

    const imageObserver = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          if (img.dataset.src) {
            img.src = img.dataset.src;
          }
          img.classList.add('loaded');
          obs.unobserve(img);
        }
      });
    });

    images.forEach(img => imageObserver.observe(img));
  });
})();

// Smooth scroll for anchor links
(function(){
  document.addEventListener('DOMContentLoaded', function(){
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href === '#' || href === '') return;
        
        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
  });
})();

// Parallax effect for hero sections
(function(){
  document.addEventListener('DOMContentLoaded', function(){
    const heroSections = document.querySelectorAll('.hero-section, .hero');
    if (!heroSections.length) return;

    window.addEventListener('scroll', function() {
      const scrolled = window.pageYOffset;
      heroSections.forEach(hero => {
        const heroBackground = hero.querySelector('.hero-background');
        if (heroBackground) {
          const rate = scrolled * 0.5;
          heroBackground.style.transform = `translateY(${rate}px) scale(1.1)`;
        }
      });
    });
  });
})();

// Intersection Observer for fade-in animations
(function(){
  document.addEventListener('DOMContentLoaded', function(){
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Observe all cards and sections
    document.querySelectorAll('.card, .card-service, section > div').forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(30px)';
      el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      observer.observe(el);
    });
  });
})();

// Add ripple effect to buttons
(function(){
  document.addEventListener('DOMContentLoaded', function(){
    document.querySelectorAll('.btn').forEach(button => {
      button.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');
        
        this.appendChild(ripple);
        setTimeout(() => ripple.remove(), 600);
      });
    });
  });
})();
