/* ================================================================
   FELIPE MORA & PAULA SANCHEZ — SCRIPT PRINCIPAL
   Sin emojis: los estados de los reels usan iconos SVG del sprite.
   ================================================================ */

(function () {
  'use strict';

  const WHATSAPP_NUMBER = '573195499887';
  const MOBILE_BREAKPOINT = 1060;
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const canReveal = !prefersReducedMotion && 'IntersectionObserver' in window;

  // Reproducción automática de reels: se desactiva si el usuario pidió menos
  // movimiento o si tiene el ahorro de datos encendido en el navegador.
  const saveData = !!(navigator.connection && navigator.connection.saveData);
  const autoplayEnabled = !prefersReducedMotion && !saveData && 'IntersectionObserver' in window;

  // Se marca aquí y no en init para que no haya parpadeo antes del primer pintado
  if (canReveal) document.documentElement.classList.add('js-reveal');

  document.addEventListener('DOMContentLoaded', init);

  function init() {
    initWhatsApp();
    initPortfolioFilters();
    initVeroGallery();
    initReels();
    initMobileNavigation();
    initClientsCarousel();
    initSmoothScrolling();
    initContactForm();
    initRevealOnScroll();
    initFooterYear();
  }

  /* ================================
     REVELADO AL HACER SCROLL
     ================================ */
  function initRevealOnScroll() {
    if (!canReveal) return;

    const SELECTORS = [
      '.sec-head', '.case-study', '.included-band', '.service-card', '.faq',
      '.package-card', '.additional-service-card', '.sector-title',
      '.portfolio-card', '.reel-portfolio-card', '.cta-band',
      '.web-option-card', '.web-dev-cta', '.tl-step', '.team-card',
      '.form-copy', '.form-card'
    ];

    const items = Array.from(document.querySelectorAll(SELECTORS.join(',')));
    if (!items.length) return;

    items.forEach(el => el.classList.add('reveal'));

    // Escalonado dentro de cada grilla: cada hermano entra 80 ms después
    const GROUPS = '.grid-services, .packages-grid, .additional-services-grid, .web-options-grid, .timeline, .team-grid, .portfolio-grid';
    document.querySelectorAll(GROUPS).forEach(group => {
      Array.from(group.children)
        .filter(child => child.classList.contains('reveal'))
        .forEach((child, index) => {
          child.dataset.revealDelay = Math.min(index, 5) * 80;
        });
    });

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        const delay = Number(el.dataset.revealDelay || 0);

        el.style.transitionDelay = delay + 'ms';
        el.classList.add('is-visible');
        obs.unobserve(el);

        // Al terminar se quitan las clases para no dejar transiciones
        // colgadas que hagan lento el hover de las tarjetas
        setTimeout(() => {
          el.classList.remove('reveal', 'is-visible');
          el.style.transitionDelay = '';
          delete el.dataset.revealDelay;
        }, 600 + delay);
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });

    items.forEach(el => observer.observe(el));
  }

  /* ================================
     WHATSAPP
     ================================ */
  const WHATSAPP_MESSAGES = {
    'plan-esencial': 'Hola, me interesa el Plan Esencial de community management.',
    'plan-crecimiento': 'Hola, me interesa el Plan Crecimiento de community management.',
    'plan-completo': 'Hola, me interesa el Plan Completo de community management.',
    'plataformas-adicionales': 'Hola, me interesa sumar gestión de TikTok o LinkedIn a un plan.',
    'presencia-web': 'Hola, me interesa el servicio de presencia digital y web.',
    'seo': 'Hola, me interesa el servicio de SEO y Google Business Profile.',
    'whatsapp-business': 'Hola, me interesa la configuración de WhatsApp Business.',
    'growth-pauta': 'Hola, me interesa el servicio de growth y pauta.',
    'branding': 'Hola, me interesa el servicio de branding e identidad visual.',
    'produccion-contenido': 'Hola, me interesa el servicio de producción de contenido.',
    'landing-page': 'Hola, me interesa una landing page.',
    'sitio-informativo': 'Hola, me interesa un sitio web informativo.',
    'tienda-online': 'Hola, me interesa una tienda en línea.',
    'consulta-web': 'Hola, me gustaría una consulta gratuita sobre desarrollo web.',
    'consulta-general': 'Hola, me interesa conocer más sobre sus servicios de community management.'
  };

  function sendWhatsAppMessage(type) {
    const message = WHATSAPP_MESSAGES[type] || WHATSAPP_MESSAGES['consulta-general'];
    const url = 'https://wa.me/' + WHATSAPP_NUMBER + '?text=' + encodeURIComponent(message);
    window.open(url, '_blank', 'noopener,noreferrer');
  }

  function initWhatsApp() {
    // Cualquier elemento con data-wa abre WhatsApp con su mensaje
    document.addEventListener('click', function (e) {
      const trigger = e.target.closest('[data-wa]');
      if (!trigger) return;
      e.preventDefault();
      sendWhatsAppMessage(trigger.getAttribute('data-wa'));
    });

    const float = document.getElementById('whatsappFloat');
    if (!float) return;

    const toggleFloat = () => {
      float.classList.toggle('is-visible', window.pageYOffset > 300);
    };
    window.addEventListener('scroll', toggleFloat, { passive: true });
    toggleFloat();

    // Compatibilidad con llamadas antiguas desde el HTML
    window.sendWhatsAppMessage = sendWhatsAppMessage;
    window.sendWhatsAppDirect = () => sendWhatsAppMessage('consulta-general');
  }

  /* ================================
     FILTROS DE PORTAFOLIO
     ================================ */
  function initPortfolioFilters() {
    const filterButtons = Array.from(document.querySelectorAll('.filter-btn'));
    const portfolioItems = Array.from(document.querySelectorAll('.portfolio-item'));
    const sectorSections = Array.from(document.querySelectorAll('.sector-section'));
    const resultsCounter = document.getElementById('resultsCounter');
    const visibleCount = document.getElementById('visibleCount');
    const totalCount = document.getElementById('totalCount');
    const noResults = document.getElementById('noResults');

    if (!filterButtons.length || !portfolioItems.length) return;

    if (totalCount) totalCount.textContent = portfolioItems.length;

    function sectorOf(section) {
      const title = section.querySelector('.sector-title');
      if (!title) return '';
      const match = Array.from(title.classList).find(c => c.indexOf('sector-') === 0 && c !== 'sector-title');
      return match ? match.replace('sector-', '') : '';
    }

    function filterProjects(sector, scroll) {
      let visible = 0;

      sectorSections.forEach(section => {
        section.classList.toggle('hidden', sectorOf(section) !== sector);
      });

      portfolioItems.forEach(item => {
        const show = item.getAttribute('data-sector') === sector;
        item.classList.toggle('hidden', !show);
        if (show) visible++;
      });

      if (visibleCount) visibleCount.textContent = visible;
      if (noResults) noResults.classList.toggle('show', visible === 0);
      if (resultsCounter) resultsCounter.classList.toggle('hide', visible === 0);

      if (scroll) {
        const portfolio = document.getElementById('portfolio');
        if (portfolio) portfolio.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth', block: 'start' });
      }
    }

    filterButtons.forEach(button => {
      button.addEventListener('click', function () {
        if (this.classList.contains('active')) return;

        filterButtons.forEach(btn => {
          btn.classList.remove('active');
          btn.setAttribute('aria-pressed', 'false');
        });
        this.classList.add('active');
        this.setAttribute('aria-pressed', 'true');

        const selected = this.getAttribute('data-filter');
        filterProjects(selected, true);

        if (typeof window.gtag === 'function') {
          window.gtag('event', 'portfolio_filter', { event_category: 'Portfolio', event_label: selected });
        }
      });
    });

    // Estado inicial: primer sector
    const first = filterButtons[0];
    first.classList.add('active');
    first.setAttribute('aria-pressed', 'true');
    filterProjects(first.getAttribute('data-filter'), false);
  }

  /* ================================
     GALERÍA VERÓ
     ================================ */
  function initVeroGallery() {
    const mainImage = document.getElementById('veroMainImage');
    const thumbsWrap = document.getElementById('veroThumbnails');
    const counter = document.getElementById('veroCounter');
    if (!mainImage || !thumbsWrap) return;

    const thumbs = Array.from(thumbsWrap.querySelectorAll('.thumbnail'));

    thumbs.forEach((thumb, index) => {
      thumb.addEventListener('click', () => {
        mainImage.src = thumb.getAttribute('data-src');
        mainImage.alt = thumb.getAttribute('data-alt') || '';
        if (counter) counter.textContent = (index + 1) + ' / ' + thumbs.length;
        thumbs.forEach(t => t.classList.remove('is-active'));
        thumb.classList.add('is-active');
      });
    });
  }

  /* ================================
     REELS
     ================================ */
  function initReels() {
    const containers = Array.from(document.querySelectorAll('.reel-video-container'));
    if (!containers.length) return;

    function setIcon(svg, id) {
      const use = svg && svg.querySelector('use');
      if (use) use.setAttribute('href', id);
    }

    function pauseReel(container) {
      const video = container.querySelector('.reel-video');
      if (!video) return;
      video.pause();
      container.classList.remove('playing');
      setIcon(container.querySelector('.reel-play-button .icon'), '#i-play');
    }

    function pauseAll(except) {
      containers.forEach(c => { if (c !== except) pauseReel(c); });
    }

    async function playReel(container, opts) {
      const options = opts || {};
      const video = container.querySelector('.reel-video');
      if (!video) return;

      pauseAll(container);
      container.classList.add('loading');

      if (options.silent) {
        // Reproducción automática: siempre silenciada, sin aviso
        video.muted = true;
        try {
          await video.play();
        } catch (error) {
          container.classList.remove('loading');
          return;
        }
      } else {
        try {
          video.muted = false;
          await video.play();
        } catch (error) {
          // El navegador bloquea el audio automático: reproducimos silenciado
          video.muted = true;
          try {
            await video.play();
            showMutedNotice(container);
          } catch (fallbackError) {
            container.classList.remove('loading');
            setIcon(container.querySelector('.reel-play-button .icon'), '#i-alert');
            return;
          }
        }
      }

      container.classList.remove('loading');
      container.classList.add('playing');
      setIcon(container.querySelector('.reel-play-button .icon'), '#i-pause');
      setIcon(container.querySelector('.volume-btn .icon'), video.muted ? '#i-sound-off' : '#i-sound-on');
    }

    function showMutedNotice(container) {
      if (container.querySelector('.muted-indicator')) return;
      const notice = document.createElement('div');
      notice.className = 'muted-indicator';
      notice.innerHTML = '<svg class="icon" aria-hidden="true"><use href="#i-sound-off"/></svg><span>Activa el sonido</span>';
      container.appendChild(notice);
      setTimeout(() => notice.remove(), 4000);
    }

    containers.forEach(container => {
      const video = container.querySelector('.reel-video');
      const overlay = container.querySelector('.reel-overlay');
      const progress = container.querySelector('.reel-progress');
      const progressBar = container.querySelector('.reel-progress-bar');
      const volumeBtn = container.querySelector('.volume-btn');
      if (!video) return;

      const toggle = () => {
        if (video.paused) {
          container.dataset.manual = 'true'; // el usuario manda: el automático no lo toca
          playReel(container);
        } else {
          delete container.dataset.manual;
          pauseReel(container);
        }
      };

      if (overlay) {
        overlay.setAttribute('role', 'button');
        overlay.setAttribute('tabindex', '0');
        overlay.setAttribute('aria-label', 'Reproducir o pausar el reel');
        overlay.addEventListener('click', toggle);
        overlay.addEventListener('keydown', e => {
          if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggle(); }
        });
      }

      if (volumeBtn) {
        volumeBtn.addEventListener('click', e => {
          e.stopPropagation();
          video.muted = !video.muted;
          setIcon(volumeBtn.querySelector('.icon'), video.muted ? '#i-sound-off' : '#i-sound-on');
          const notice = container.querySelector('.muted-indicator');
          if (notice && !video.muted) notice.remove();
        });
      }

      if (progress) {
        progress.addEventListener('click', e => {
          e.stopPropagation();
          const rect = progress.getBoundingClientRect();
          const ratio = (e.clientX - rect.left) / rect.width;
          const time = ratio * video.duration;
          if (isFinite(time)) video.currentTime = time;
        });
      }

      video.addEventListener('waiting', () => container.classList.add('loading'));
      video.addEventListener('canplay', () => container.classList.remove('loading'));
      video.addEventListener('timeupdate', () => {
        if (!video.duration || !progressBar) return;
        progressBar.style.width = ((video.currentTime / video.duration) * 100) + '%';
      });
      video.addEventListener('ended', () => pauseReel(container));
      video.addEventListener('error', () => {
        container.classList.remove('loading');
        setIcon(container.querySelector('.reel-play-button .icon'), '#i-alert');
      });
    });

    document.addEventListener('visibilitychange', () => {
      if (document.hidden) pauseAll(null);
    });

    /* Reproducción automática: solo el reel más centrado en pantalla,
       siempre silenciado y uno a la vez. */
    const ratios = new Map();
    let autoActive = null;

    function updateAutoplay() {
      let best = null;
      let bestRatio = 0;

      ratios.forEach((ratio, container) => {
        if (ratio > bestRatio) { bestRatio = ratio; best = container; }
      });

      // Si el usuario reprodujo uno a mano, se respeta mientras siga a la vista
      if (autoActive && autoActive.dataset.manual && (ratios.get(autoActive) || 0) > 0.2) return;

      const candidate = bestRatio >= 0.6 ? best : null;
      if (candidate === autoActive) return;

      if (autoActive && !autoActive.dataset.manual) pauseReel(autoActive);
      autoActive = candidate;
      if (autoActive && autoActive.querySelector('.reel-video').paused) {
        playReel(autoActive, { silent: true });
      }
    }

    const viewObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        ratios.set(entry.target, entry.intersectionRatio);
        if (entry.intersectionRatio < 0.2) {
          delete entry.target.dataset.manual;
          const video = entry.target.querySelector('.reel-video');
          if (video && !video.paused) pauseReel(entry.target);
        }
      });
      if (autoplayEnabled) updateAutoplay();
    }, { threshold: [0, 0.2, 0.4, 0.6, 0.8, 1] });

    containers.forEach(c => viewObserver.observe(c));
  }

  /* ================================
     NAVEGACIÓN MÓVIL
     ================================ */
  function initMobileNavigation() {
    const toggle = document.querySelector('.mobile-nav-toggle');
    const navLinks = document.querySelector('.nav-links');
    if (!toggle || !navLinks) return;

    let isOpen = false;

    function openMenu() {
      navLinks.classList.add('active');
      toggle.classList.add('active');
      toggle.setAttribute('aria-expanded', 'true');
      toggle.setAttribute('aria-label', 'Cerrar menú de navegación');
      document.body.style.overflow = 'hidden';
      isOpen = true;
    }

    function closeMenu() {
      navLinks.classList.remove('active');
      toggle.classList.remove('active');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', 'Abrir menú de navegación');
      document.body.style.overflow = '';
      isOpen = false;
    }

    toggle.addEventListener('click', e => {
      e.stopPropagation();
      isOpen ? closeMenu() : openMenu();
    });

    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => { if (isOpen) closeMenu(); });
    });

    document.addEventListener('click', e => {
      if (isOpen && !navLinks.contains(e.target) && !toggle.contains(e.target)) closeMenu();
    });

    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && isOpen) { closeMenu(); toggle.focus(); }
    });

    window.addEventListener('resize', debounce(() => {
      if (window.innerWidth > MOBILE_BREAKPOINT && isOpen) closeMenu();
    }, 200));
  }

  /* ================================
     CARRUSEL DE CLIENTES
     ================================ */
  function initClientsCarousel() {
    const carousel = document.querySelector('.clients-carousel');
    const container = document.querySelector('.clients-carousel-container');
    if (!carousel || !container) return;

    let offset = 0;
    let speed = 1;
    let paused = false;
    let dragging = false;
    let startX = 0;
    let startOffset = 0;
    let frameId = null;

    function adjustSpeed() {
      const w = window.innerWidth;
      speed = w < 768 ? 0.7 : (w < 1024 ? 0.8 : 1);
    }

    function loopBounds() {
      const half = carousel.scrollWidth / 2;
      if (half > 0) {
        if (offset <= -half) offset += half;
        if (offset > 0) offset -= half;
      }
    }

    function animate() {
      if (!paused && !dragging) {
        offset -= speed;
        loopBounds();
        carousel.style.transform = 'translateX(' + offset + 'px)';
      }
      frameId = requestAnimationFrame(animate);
    }

    container.addEventListener('mouseenter', () => { paused = true; });
    container.addEventListener('mouseleave', () => { if (!dragging) paused = false; });

    container.addEventListener('mousedown', e => {
      dragging = true;
      startX = e.pageX;
      startOffset = offset;
      e.preventDefault();
    });

    document.addEventListener('mousemove', e => {
      if (!dragging) return;
      offset = startOffset + (e.pageX - startX);
      loopBounds();
      carousel.style.transform = 'translateX(' + offset + 'px)';
    });

    document.addEventListener('mouseup', () => {
      if (!dragging) return;
      dragging = false;
      paused = false;
    });

    let touchStartX = 0;
    let touchStartY = 0;
    let verticalScroll = false;

    container.addEventListener('touchstart', e => {
      dragging = true;
      verticalScroll = false;
      touchStartX = e.touches[0].clientX;
      touchStartY = e.touches[0].clientY;
      startOffset = offset;
    }, { passive: true });

    container.addEventListener('touchmove', e => {
      if (!dragging) return;
      const deltaX = e.touches[0].clientX - touchStartX;
      const deltaY = e.touches[0].clientY - touchStartY;

      if (!verticalScroll && Math.abs(deltaY) > Math.abs(deltaX)) {
        verticalScroll = true;
        return;
      }
      if (verticalScroll) return;

      if (Math.abs(deltaX) > 10) e.preventDefault();
      offset = startOffset + deltaX;
      loopBounds();
      carousel.style.transform = 'translateX(' + offset + 'px)';
    }, { passive: false });

    container.addEventListener('touchend', () => {
      dragging = false;
      setTimeout(() => { paused = false; }, 1500);
    });

    window.addEventListener('resize', debounce(adjustSpeed, 200));
    document.addEventListener('visibilitychange', () => { paused = document.hidden; });

    adjustSpeed();
    if (!prefersReducedMotion) animate();

    window.addEventListener('pagehide', () => { if (frameId) cancelAnimationFrame(frameId); });
  }

  /* ================================
     SCROLL SUAVE CON OFFSET DEL HEADER
     ================================ */
  function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        const id = this.getAttribute('href');
        if (!id || id === '#') return;
        const target = document.querySelector(id);
        if (!target) return;
        e.preventDefault();
        target.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth', block: 'start' });
        history.replaceState(null, '', id);
      });
    });
  }

  /* ================================
     FORMULARIO DE CONTACTO
     ================================ */
  function initContactForm() {
    const form = document.getElementById('contactForm');
    if (!form) return;

    const button = form.querySelector('.submit-btn');
    const status = document.createElement('p');
    status.className = 'form-status';
    status.setAttribute('role', 'status');
    form.appendChild(status);

    form.addEventListener('submit', async function (e) {
      e.preventDefault();
      status.textContent = '';
      button.disabled = true;
      button.textContent = 'Enviando';

      try {
        const response = await fetch(form.action, {
          method: 'POST',
          body: new FormData(form),
          headers: { Accept: 'application/json' }
        });

        if (!response.ok) throw new Error('Respuesta no válida');

        form.reset();
        status.textContent = 'Recibimos tu mensaje. Te respondemos en menos de 48 horas.';
      } catch (error) {
        status.textContent = 'No se pudo enviar. Escríbenos por WhatsApp mientras revisamos el formulario.';
      } finally {
        button.disabled = false;
        button.textContent = 'Enviar consulta';
      }
    });
  }

  /* ================================
     UTILIDADES
     ================================ */
  function initFooterYear() {
    const year = document.getElementById('year');
    if (year) year.textContent = new Date().getFullYear();
  }

  function debounce(fn, wait) {
    let timeout;
    return function (...args) {
      clearTimeout(timeout);
      timeout = setTimeout(() => fn.apply(this, args), wait);
    };
  }
})();