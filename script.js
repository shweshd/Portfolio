/* ============================================================
   PORTFOLIO.JS — Shwesh Dubey Portfolio
   Includes: Custom Cursor, Particles, Typed Text, 
   Scroll Reveal, Navbar, Scroll-to-Top, Tilt, Active Nav
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* =====================================================
     1. CUSTOM CURSOR
  ===================================================== */
  const dot  = document.querySelector('.cursor-dot');
  const ring = document.querySelector('.cursor-ring');

  let mouseX = 0, mouseY = 0;
  let ringX  = 0, ringY  = 0;

  document.addEventListener('mousemove', e => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    dot.style.left = mouseX + 'px';
    dot.style.top  = mouseY + 'px';
  });

  // Smooth ring follow
  function animateRing() {
    ringX += (mouseX - ringX) * 0.12;
    ringY += (mouseY - ringY) * 0.12;
    ring.style.left = ringX + 'px';
    ring.style.top  = ringY + 'px';
    requestAnimationFrame(animateRing);
  }
  animateRing();

  // Expand cursor on hoverable elements
  const hoverables = document.querySelectorAll('a, button, .skill-box, .tool-box, .project-btn, .cv-btn, .cta-btn');
  hoverables.forEach(el => {
    el.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'));
    el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'));
  });


  /* =====================================================
     2. PARTICLES CANVAS
  ===================================================== */
  const canvas = document.getElementById('particles-canvas');
  const ctx    = canvas.getContext('2d');

  let particles = [];
  const PARTICLE_COUNT = 250;

  function resizeCanvas() {
    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);

  class Particle {
    constructor() { this.reset(); }
    reset() {
      this.x    = Math.random() * canvas.width;
      this.y    = Math.random() * canvas.height;
      this.vx   = (Math.random() - 0.5) * 0.4;
      this.vy   = (Math.random() - 0.5) * 0.4;
      this.size = Math.random() * 1.5 + 0.3;
      this.alpha= Math.random() * 0.5 + 0.1;
      this.color= Math.random() > 0.6 ? '0, 229, 255' : '255, 255, 255';
    }
    update() {
      this.x += this.vx;
      this.y += this.vy;
      if (this.x < 0 || this.x > canvas.width ||
          this.y < 0 || this.y > canvas.height) this.reset();
    }
    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${this.color}, ${this.alpha})`;
      ctx.fill();
    }
  }

  for (let i = 0; i < PARTICLE_COUNT; i++) particles.push(new Particle());

  // Draw connection lines between close particles
  function drawConnections() {
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx   = particles[i].x - particles[j].x;
        const dy   = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 100) {
          const alpha = (1 - dist / 100) * 0.08;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(0, 229, 255, ${alpha})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
    }
  }

  function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawConnections();
    particles.forEach(p => { p.update(); p.draw(); });
    requestAnimationFrame(animateParticles);
  }
  animateParticles();


  /* =====================================================
     3. TYPED TEXT ANIMATION
  ===================================================== */
  const phrases  = [
    'Aspiring Web Developer',
    'BCA Student',
    'AI Enthusiast',
    'Building Cool Things',
  ];
  const typedEl  = document.querySelector('.typed-text');
  let phraseIndex = 0;
  let charIndex   = 0;
  let isDeleting  = false;
  let typeSpeed   = 80;

  function type() {
    const current = phrases[phraseIndex];

    if (!isDeleting) {
      typedEl.textContent = current.slice(0, charIndex + 1);
      charIndex++;
      if (charIndex === current.length) {
        isDeleting = true;
        typeSpeed  = 1800; // pause before delete
      } else {
        typeSpeed = 70 + Math.random() * 40; // natural typing variance
      }
    } else {
      typedEl.textContent = current.slice(0, charIndex - 1);
      charIndex--;
      typeSpeed = 35;
      if (charIndex === 0) {
        isDeleting  = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        typeSpeed   = 300;
      }
    }
    setTimeout(type, typeSpeed);
  }
  setTimeout(type, 800);


  /* =====================================================
     4. NAVBAR — show/hide + scroll state + active link
  ===================================================== */
  const navbar = document.getElementById('navbar');
  let lastScroll = 0;

  // Show after tiny scroll OR hover (via CSS)
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    // Show navbar when scrolled down
    if (scrollY > 60) {
      navbar.classList.add('visible', 'scrolled');
    } else {
      navbar.classList.remove('visible', 'scrolled');
    }

    lastScroll = scrollY;

    // Active nav link
    updateActiveNav();

    // Scroll-to-top button
    scrollTopBtn.classList.toggle('show', scrollY > 400);
  });

  // Also show on hover (the CSS handles this with body:hover but we override with JS)
  document.addEventListener('mousemove', () => {
    if (window.scrollY <= 60) navbar.classList.add('visible');
  });

  function updateActiveNav() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a');
    let current = '';

    sections.forEach(sec => {
      if (window.scrollY >= sec.offsetTop - 150) current = sec.id;
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === '#' + current) link.classList.add('active');
    });
  }


  /* =====================================================
     5. SCROLL REVEAL — IntersectionObserver
  ===================================================== */
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        revealObserver.unobserve(entry.target);

        // Stagger children inside this card
        const children = entry.target.querySelectorAll('.stagger-child');
        children.forEach((child, i) => {
          setTimeout(() => child.classList.add('revealed'), 100 + i * 120);
        });
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });

  document.querySelectorAll('.scroll-reveal').forEach(el => revealObserver.observe(el));


  /* =====================================================
     6. SCROLL TO TOP
  ===================================================== */
  const scrollTopBtn = document.getElementById('scrollTop');
  scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });


  /* =====================================================
     7. CARD TILT EFFECT (on desktop)
  ===================================================== */
  if (window.matchMedia('(min-width: 769px)').matches) {
    document.querySelectorAll('.glass.card').forEach(card => {
      card.addEventListener('mousemove', e => {
        const rect   = card.getBoundingClientRect();
        const centerX= rect.left + rect.width / 2;
        const centerY= rect.top  + rect.height / 2;
        const dx     = (e.clientX - centerX) / (rect.width / 2);
        const dy     = (e.clientY - centerY) / (rect.height / 2);
        const tiltX  = dy * -4;
        const tiltY  = dx *  4;

        card.style.transform = `perspective(1200px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
      });

      card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1200px) rotateX(0deg) rotateY(0deg)';
        card.style.transition = 'transform 0.5s ease';
      });

      card.addEventListener('mouseenter', () => {
        card.style.transition = 'transform 0.1s ease';
      });
    });
  }


  /* =====================================================
     8. SKILL/TOOL BOX — RIPPLE on click
  ===================================================== */
  document.querySelectorAll('.skill-box, .tool-box').forEach(box => {
    box.addEventListener('click', e => {
      const ripple  = document.createElement('span');
      const rect    = box.getBoundingClientRect();
      const size    = Math.max(rect.width, rect.height);
      ripple.style.cssText = `
        position:absolute;
        width:${size}px; height:${size}px;
        top:${e.clientY - rect.top - size/2}px;
        left:${e.clientX - rect.left - size/2}px;
        background:rgba(0,229,255,0.25);
        border-radius:50%;
        transform:scale(0);
        animation:ripple-anim 0.5s ease-out forwards;
        pointer-events:none;
      `;
      box.style.position = 'relative';
      box.style.overflow = 'hidden';
      box.appendChild(ripple);
      setTimeout(() => ripple.remove(), 600);
    });
  });

  // Inject ripple keyframe
  const style = document.createElement('style');
  style.textContent = `
    @keyframes ripple-anim {
      to { transform: scale(2.5); opacity: 0; }
    }
  `;
  document.head.appendChild(style);


  /* =====================================================
     9. SMOOTH SCROLL for nav links
  ===================================================== */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      e.preventDefault();
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });


  /* =====================================================
     10. PROJECT CARD — Mouse-follow glow
  ===================================================== */
  document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mousemove', e => {
      const rect  = card.getBoundingClientRect();
      const x     = e.clientX - rect.left;
      const y     = e.clientY - rect.top;
      const glow  = card.querySelector('.project-card-glow');
      if (glow) {
        glow.style.left    = x - 75 + 'px';
        glow.style.top     = y - 75 + 'px';
        glow.style.opacity = '1';
      }
    });
    card.addEventListener('mouseleave', () => {
      const glow = card.querySelector('.project-card-glow');
      if (glow) glow.style.opacity = '0';
    });
  });


  /* =====================================================
     11. PAGE LOAD — Entrance animation for home
  ===================================================== */
  const homeCard = document.querySelector('#home .card');
  if (homeCard) {
    homeCard.style.opacity = '0';
    homeCard.style.transform = 'translateY(30px)';
    homeCard.style.transition = 'opacity 0.9s ease, transform 0.9s cubic-bezier(0.4,0,0.2,1)';
    setTimeout(() => {
      homeCard.style.opacity   = '1';
      homeCard.style.transform = 'translateY(0)';
    }, 150);
  }


  /* =====================================================
     12. SECTION LABEL — scan-line animation on enter
  ===================================================== */
  const labelObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const label = entry.target.querySelector('.section-label');
        if (label) {
          label.style.animation = 'none';
          label.offsetHeight; // reflow
          label.style.animation = 'scanLabel 0.8s ease forwards';
        }
      }
    });
  }, { threshold: 0.3 });

  document.querySelectorAll('.glass.card').forEach(c => labelObserver.observe(c));

  const scanStyle = document.createElement('style');
  scanStyle.textContent = `
    @keyframes scanLabel {
      from { clip-path: inset(0 100% 0 0); opacity: 0.3; }
      to   { clip-path: inset(0 0% 0 0);   opacity: 0.7; }
    }
  `;
  document.head.appendChild(scanStyle);

}); // end DOMContentLoaded