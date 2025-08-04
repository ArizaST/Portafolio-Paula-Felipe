// ================================
// SCRIPT PRINCIPAL CON FILTROS INTEGRADOS
// ================================

console.log('🚀 Inicializando Portfolio Completo...');

// ================================
// FIX SCROLL AUTOMÁTICO
// ================================
function forceScrollTop() {
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
}

// Ejecutar inmediatamente
forceScrollTop();

// Prevenir scroll durante carga
let isPageLoaded = false;
window.addEventListener('scroll', function() {
    if (!isPageLoaded) {
        forceScrollTop();
    }
});

// Marcar como cargado después de 3 segundos
setTimeout(() => {
    isPageLoaded = true;
    document.body.classList.remove('page-loading');
}, 3000);

// ================================
// SISTEMA DE FILTROS DE PORTAFOLIO
// ================================

document.addEventListener('DOMContentLoaded', function() {
    console.log('🎯 Inicializando filtros de portafolio...');
    
    // ================================
    // ELEMENTOS DEL DOM
    // ================================
    const filterButtons = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    const resultsCounter = document.getElementById('resultsCounter');
    const visibleCount = document.getElementById('visibleCount');
    const totalCount = document.getElementById('totalCount');
    const noResults = document.getElementById('noResults');
    
    if (!filterButtons.length || !portfolioItems.length) {
        console.warn('⚠️ No se encontraron elementos de filtro o proyectos');
        // Continuar con otras inicializaciones
        initializeOtherFeatures();
        return;
    }
    
    // Configurar contador inicial
    if (totalCount) totalCount.textContent = portfolioItems.length;
    if (visibleCount) visibleCount.textContent = portfolioItems.length;
    
    // ================================
    // FUNCIÓN PRINCIPAL DE FILTRADO
    // ================================
    
    function filterProjects(sector) {
        let visibleItems = 0;
        
        // Filtrar títulos de sectores
        const sectorTitles = document.querySelectorAll('.sector-title, .sector-section');
        sectorTitles.forEach(title => {
            const titleElement = title.classList.contains('sector-title') ? title : title.querySelector('.sector-title');
            if (!titleElement) return;
            
            // Determinar el sector del título basado en las clases CSS
            let titleSector = '';
            if (titleElement.classList.contains('sector-juridico')) titleSector = 'juridico';
            else if (titleElement.classList.contains('sector-belleza')) titleSector = 'belleza';
            else if (titleElement.classList.contains('sector-restaurantes')) titleSector = 'restaurantes';
            else if (titleElement.classList.contains('sector-salud')) titleSector = 'salud';
            else if (titleElement.classList.contains('sector-inmobiliario')) titleSector = 'inmobiliario';
            
            const shouldShowTitle = sector === 'all' || titleSector === sector;
            
            if (shouldShowTitle) {
                title.style.display = 'block';
                title.style.opacity = '1';
                title.style.transform = 'translateY(0)';
            } else {
                title.style.display = 'none';
                title.style.opacity = '0';
                title.style.transform = 'translateY(-20px)';
            }
        });
        
        // Filtrar proyectos
        portfolioItems.forEach((item, index) => {
            const itemSector = item.getAttribute('data-sector');
            const shouldShow = sector === 'all' || itemSector === sector;
            
            if (shouldShow) {
                // Mostrar item
                item.classList.remove('hidden');
                visibleItems++;
                
                // Animación de entrada escalonada
                setTimeout(() => {
                    item.style.opacity = '1';
                    item.style.transform = 'scale(1)';
                    item.style.pointerEvents = 'auto';
                }, index * 50);
            } else {
                // Ocultar item
                item.classList.add('hidden');
                item.style.opacity = '0';
                item.style.transform = 'scale(0.8)';
                item.style.pointerEvents = 'none';
            }
        });
        
        // Actualizar contador
        if (visibleCount) visibleCount.textContent = visibleItems;
        
        // Mostrar/ocultar mensaje de no resultados
        if (visibleItems === 0) {
            if (noResults) noResults.classList.add('show');
            if (resultsCounter) resultsCounter.classList.add('hide');
        } else {
            if (noResults) noResults.classList.remove('show');
            if (resultsCounter) resultsCounter.classList.remove('hide');
        }
        
        console.log(`🎯 Filtro aplicado: ${sector} - ${visibleItems} proyectos visibles`);
        
        // Scroll suave al inicio del portafolio después del filtrado
        setTimeout(() => {
            const portfolioSection = document.getElementById('portfolio');
            if (portfolioSection && sector !== 'all') {
                portfolioSection.scrollIntoView({ 
                    behavior: 'smooth', 
                    block: 'start' 
                });
            }
        }, 300);
    }
    
    // ================================
    // EVENT LISTENERS PARA BOTONES
    // ================================
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Prevenir doble click
            if (this.classList.contains('active')) {
                return;
            }
            
            // Remover clase active de todos los botones
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Agregar clase active al botón clickeado
            this.classList.add('active');
            
            // Obtener el filtro seleccionado
            const selectedFilter = this.getAttribute('data-filter');
            
            // Aplicar filtro con pequeño delay para mejor UX
            setTimeout(() => {
                filterProjects(selectedFilter);
            }, 100);
            
            // Analytics opcional
            if (typeof gtag !== 'undefined') {
                gtag('event', 'portfolio_filter', {
                    event_category: 'Portfolio',
                    event_label: selectedFilter
                });
            }
            
            console.log(`🎯 Filtro seleccionado: ${selectedFilter}`);
        });
    });
    
    // ================================
    // INICIALIZACIÓN SIN "TODOS"
    // ================================
    
    // Mostrar primer sector por defecto si no hay "all"
    const firstSectorBtn = document.querySelector('.filter-btn:not([data-filter="all"])');
    if (firstSectorBtn && !document.querySelector('.filter-btn.active')) {
        firstSectorBtn.classList.add('active');
        const firstSector = firstSectorBtn.getAttribute('data-filter');
        setTimeout(() => {
            filterProjects(firstSector);
        }, 500);
    }
    
    // ================================
    // FUNCIONES AUXILIARES
    // ================================
    
    // Función para contar proyectos por sector
    function getSectorStats() {
        const stats = {
            all: portfolioItems.length,
            juridico: 0,
            belleza: 0,
            restaurantes: 0,
            salud: 0,
            inmobiliario: 0
        };
        
        portfolioItems.forEach(item => {
            const sector = item.getAttribute('data-sector');
            if (stats.hasOwnProperty(sector)) {
                stats[sector]++;
            }
        });
        
        return stats;
    }
    
    // Función para resetear todos los filtros (ahora al primer sector)
    function resetFilters() {
        // Mostrar todos los títulos y proyectos primero
        const sectorTitles = document.querySelectorAll('.sector-title, .sector-section');
        sectorTitles.forEach(title => {
            title.style.display = 'block';
            title.style.opacity = '1';
            title.style.transform = 'translateY(0)';
        });
        
        portfolioItems.forEach(item => {
            item.classList.remove('hidden');
            item.style.opacity = '1';
            item.style.transform = 'scale(1)';
            item.style.pointerEvents = 'auto';
        });
        
        // Resetear botones y activar el primero
        filterButtons.forEach(btn => btn.classList.remove('active'));
        const firstBtn = document.querySelector('.filter-btn:not([data-filter="all"])');
        if (firstBtn) {
            firstBtn.classList.add('active');
            const firstSector = firstBtn.getAttribute('data-filter');
            setTimeout(() => filterProjects(firstSector), 100);
        }
        
        console.log('🔄 Filtros reseteados - mostrando primer sector');
    }
    
    // ================================
    // API PÚBLICA DE FILTROS
    // ================================
    
    window.portfolioFilters = {
        // Funciones principales
        filterProjects: filterProjects,
        resetFilters: resetFilters,
        getSectorStats: getSectorStats,
        
        // Atajos por sector (sin showAll)
        showJuridico: () => {
            document.querySelector('.filter-btn[data-filter="juridico"]')?.click();
        },
        showBelleza: () => {
            document.querySelector('.filter-btn[data-filter="belleza"]')?.click();
        },
        showRestaurantes: () => {
            document.querySelector('.filter-btn[data-filter="restaurantes"]')?.click();
        },
        showSalud: () => {
            document.querySelector('.filter-btn[data-filter="salud"]')?.click();
        },
        showInmobiliario: () => {
            document.querySelector('.filter-btn[data-filter="inmobiliario"]')?.click();
        },
        
        // Funciones de utilidad
        getVisibleCount: () => {
            return document.querySelectorAll('.portfolio-item:not(.hidden)').length;
        },
        getTotalCount: () => portfolioItems.length,
        getCurrentFilter: () => {
            const activeBtn = document.querySelector('.filter-btn.active');
            return activeBtn ? activeBtn.getAttribute('data-filter') : 'juridico'; // Default al primero
        },
        
        // Función para mostrar todos (si se necesita programáticamente)
        showAllSectors: () => {
            // Resetear y mostrar todo temporalmente
            const sectorTitles = document.querySelectorAll('.sector-title, .sector-section');
            sectorTitles.forEach(title => {
                title.style.display = 'block';
                title.style.opacity = '1';
                title.style.transform = 'translateY(0)';
            });
            
            portfolioItems.forEach(item => {
                item.classList.remove('hidden');
                item.style.opacity = '1';
                item.style.transform = 'scale(1)';
                item.style.pointerEvents = 'auto';
            });
            
            if (visibleCount) visibleCount.textContent = portfolioItems.length;
            console.log('👁️ Mostrando todos los sectores temporalmente');
        }
    };
    
    // Log de estadísticas iniciales
    const stats = getSectorStats();
    console.log('📊 Estadísticas del portafolio:', stats);
    
    console.log('✅ Sistema de filtros inicializado correctamente');
    
    // Continuar con otras inicializaciones
    initializeOtherFeatures();
});

// ================================
// OTRAS FUNCIONALIDADES DEL PORTFOLIO
// ================================

function initializeOtherFeatures() {
    console.log('🔧 Inicializando otras funcionalidades...');
    
    // Inicializar galería Veró
    initializeVeroGallery();
    
    // Inicializar video de fondo
    initializeHeroVideo();
    
    // Inicializar navegación móvil
    initializeMobileNavigation();
    
    // Inicializar WhatsApp
    initializeWhatsApp();
    
    // Inicializar carrusel de clientes
    initializeClientsCarousel();
    
    // Smooth scrolling
    initializeSmoothScrolling();
    
    console.log('✅ Todas las funcionalidades inicializadas');
}

// ================================
// INICIALIZACIÓN DE GALERÍA VERÓ
// ================================

function initializeVeroGallery() {
    console.log('🎨 Inicializando galería Veró...');
    
    const veroMainImage = document.getElementById('veroMainImage');
    const veroThumbnails = document.querySelectorAll('#veroThumbnails .thumbnail');
    const veroCounter = document.getElementById('veroCounter');
    
    if (!veroMainImage || !veroThumbnails.length || !veroCounter) {
        console.log('ℹ️ Proyecto Veró no encontrado en esta página');
        return;
    }
    
    let currentIndex = 0;
    
    veroThumbnails.forEach((thumbnail, index) => {
        thumbnail.addEventListener('click', function() {
            currentIndex = index;
            veroMainImage.src = thumbnail.src;
            veroMainImage.alt = thumbnail.alt;
            
            // Actualizar contador
            veroCounter.textContent = `${index + 1} / ${veroThumbnails.length}`;
            
            // Actualizar thumbnail activo
            veroThumbnails.forEach(t => t.classList.remove('active'));
            thumbnail.classList.add('active');
        });
    });
    
    console.log('✅ Galería Veró inicializada');
}

// ================================
// INICIALIZACIÓN DE VIDEO HERO
// ================================

function initializeHeroVideo() {
    const video = document.querySelector('.hero-video');
    const hero = document.querySelector('.hero');
    
    if (!video) {
        console.log('ℹ️ Video element not found');
        return;
    }

    function initializeVideo() {
        video.muted = true;
        video.loop = true;
        video.playsInline = true;
        video.controls = false;
        video.disablePictureInPicture = true;
        
        attemptAutoPlay();
    }

    async function attemptAutoPlay() {
        try {
            await video.play();
            console.log('✅ Video playing successfully');
            if (hero) hero.classList.add('video-loaded');
        } catch (error) {
            console.log('⚠️ Autoplay failed:', error);
            // Mostrar fallback
            const fallback = document.querySelector('.hero-fallback');
            if (fallback) fallback.style.display = 'block';
        }
    }

    // Optimización para móvil
    if (window.innerWidth <= 768) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    if (video.paused) video.play().catch(console.log);
                } else {
                    if (!video.paused) video.pause();
                }
            });
        }, { threshold: 0.3 });
        
        observer.observe(video);
    }

    initializeVideo();
    console.log('✅ Hero video initialized');
}

// ================================
// NAVEGACIÓN MÓVIL
// ================================

function initializeMobileNavigation() {
    console.log('📱 Inicializando navegación móvil...');
    
    // Buscar o crear el botón móvil
    let mobileToggle = document.querySelector('.mobile-nav-toggle, .mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    const nav = document.querySelector('nav');
    const body = document.body;
    
    if (!navLinks) {
        console.log('⚠️ Nav-links no encontrado');
        return;
    }
    
    // Crear botón móvil si no existe
    if (!mobileToggle && nav) {
        console.log('🔧 Creando botón móvil automáticamente...');
        mobileToggle = document.createElement('button');
        mobileToggle.className = 'mobile-nav-toggle';
        mobileToggle.setAttribute('aria-label', 'Abrir menú de navegación');
        mobileToggle.setAttribute('aria-expanded', 'false');
        mobileToggle.setAttribute('type', 'button');
        
        mobileToggle.innerHTML = `
            <span class="hamburger-line"></span>
            <span class="hamburger-line"></span>
            <span class="hamburger-line"></span>
        `;
        
        nav.appendChild(mobileToggle);
        console.log('✅ Botón móvil creado');
    }
    
    if (!mobileToggle) {
        console.log('❌ No se pudo crear/encontrar botón móvil');
        return;
    }
    
    let isMenuOpen = false;
    
    function openMenu() {
        navLinks.classList.add('active');
        navLinks.classList.remove('closing');
        mobileToggle.classList.add('active');
        mobileToggle.setAttribute('aria-expanded', 'true');
        body.classList.add('menu-open');
        body.style.overflow = 'hidden';
        isMenuOpen = true;
        console.log('📱 Menú móvil ABIERTO');
    }
    
    function closeMenu() {
        navLinks.classList.remove('active');
        navLinks.classList.add('closing');
        mobileToggle.classList.remove('active');
        mobileToggle.setAttribute('aria-expanded', 'false');
        body.classList.remove('menu-open');
        body.style.overflow = '';
        isMenuOpen = false;
        
        setTimeout(() => {
            navLinks.classList.remove('closing');
        }, 300);
        
        console.log('📱 Menú móvil CERRADO');
    }
    
    function toggleMenu() {
        if (isMenuOpen) {
            closeMenu();
        } else {
            openMenu();
        }
    }
    
    // Event listener para el botón
    mobileToggle.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        toggleMenu();
    });
    
    // Cerrar menú al hacer click en enlaces
    const navLinksItems = navLinks.querySelectorAll('a');
    navLinksItems.forEach(function(link) {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 768 && isMenuOpen) {
                closeMenu();
            }
        });
    });
    
    // Cerrar menú al hacer click fuera
    document.addEventListener('click', function(e) {
        if (isMenuOpen && 
            !navLinks.contains(e.target) && 
            !mobileToggle.contains(e.target)) {
            closeMenu();
        }
    });
    
    // Cerrar menú con Escape
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && isMenuOpen) {
            closeMenu();
        }
    });
    
    // Cerrar menú al cambiar el tamaño de ventana
    let resizeTimeout;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            if (window.innerWidth > 768 && isMenuOpen) {
                closeMenu();
            }
        }, 250);
    });
    
    // Función global para control externo
    window.mobileMenu = {
        open: openMenu,
        close: closeMenu,
        toggle: toggleMenu,
        isOpen: () => isMenuOpen
    };
    
    console.log('✅ Navegación móvil inicializada correctamente');
}

// ================================
// WHATSAPP FUNCIONALIDAD
// ================================

function initializeWhatsApp() {
    console.log('💬 Inicializando WhatsApp...');
    
    const WHATSAPP_NUMBER = '573229015631';
    const DEFAULT_MESSAGE = 'Hola, me interesa conocer más sobre sus servicios de Community Manager';
    
    // Función global para enviar mensajes
    window.sendWhatsAppMessage = function(messageType = 'consulta-general') {
        const predefinedMessages = {
            'plan-basico': 'Hola, me interesa el Plan Básico de Community Manager',
            'plan-medio': 'Hola, me interesa el Plan Medio de Community Manager',
            'plan-completo': 'Hola, me interesa el Plan Completo de Community Manager',
            'plan-tiktok': 'Hola, me interesa el Plan TikTok',
            'branding': 'Hola, me interesa el servicio de Branding e Identidad Visual',
            'landing-page': 'Hola, me interesa una Landing Page',
            'sitio-informativo': 'Hola, me interesa un Sitio Web Informativo',
            'tienda-online': 'Hola, me interesa una Tienda en Línea',
            'consulta-web': 'Hola, me gustaría una consulta gratuita sobre desarrollo web',
            'consulta-general': DEFAULT_MESSAGE
        };
        
        const message = predefinedMessages[messageType] || DEFAULT_MESSAGE;
        const encodedMessage = encodeURIComponent(message);
        const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
        
        window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
        console.log('📱 Mensaje enviado a WhatsApp:', messageType);
    };
    
    // Función directa para botón flotante
    window.sendWhatsAppDirect = function() {
        sendWhatsAppMessage('consulta-general');
    };
    
    // Manejo del scroll para mostrar/ocultar WhatsApp flotante
    const whatsappFloat = document.getElementById('whatsappFloat');
    if (whatsappFloat) {
        window.addEventListener('scroll', function() {
            const scrollY = window.pageYOffset;
            if (scrollY > 300) {
                whatsappFloat.style.opacity = '1';
                whatsappFloat.style.visibility = 'visible';
            } else {
                whatsappFloat.style.opacity = '0';
                whatsappFloat.style.visibility = 'hidden';
            }
        });
        
        // Estado inicial
        whatsappFloat.style.opacity = '0';
        whatsappFloat.style.visibility = 'hidden';
    }
    
    console.log('✅ WhatsApp inicializado');
}

// ================================
// CARRUSEL DE CLIENTES
// ================================

function initializeClientsCarousel() {
    console.log('🎠 Inicializando carrusel de clientes...');
    
    const carousel = document.querySelector('.clients-carousel');
    const container = document.querySelector('.clients-carousel-container');
    
    if (!carousel || !container) {
        console.log('ℹ️ Carrusel de clientes no encontrado');
        return;
    }

    let isHovered = false;
    let currentTransform = 0;
    let autoScrollSpeed = 1;
    let animationId = null;

    function startAutoScroll() {
        function animate() {
            if (!isHovered) {
                currentTransform -= autoScrollSpeed;
                
                const carouselWidth = carousel.scrollWidth;
                
                if (Math.abs(currentTransform) >= carouselWidth / 2) {
                    currentTransform = 0;
                }
                
                carousel.style.transform = `translateX(${currentTransform}px)`;
            }
            
            animationId = requestAnimationFrame(animate);
        }
        
        animate();
    }

    // Event listeners para hover
    container.addEventListener('mouseenter', () => {
        isHovered = true;
    });
    
    container.addEventListener('mouseleave', () => {
        isHovered = false;
    });

    // Configuración inicial
    container.style.overflow = 'hidden';
    carousel.style.display = 'flex';
    carousel.style.willChange = 'transform';

    startAutoScroll();
    console.log('✅ Carrusel de clientes inicializado');
}

// ================================
// SMOOTH SCROLLING
// ================================

function initializeSmoothScrolling() {
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
    
    console.log('✅ Smooth scrolling inicializado');
}

// ================================
// FUNCIONES DE DEBUG Y UTILIDADES
// ================================

window.debugPortfolio = function() {
    console.log('=== DEBUG PORTFOLIO ===');
    console.log('📱 Ancho de ventana:', window.innerWidth);
    console.log('📱 Alto de ventana:', window.innerHeight);
    
    const keyElements = {
        'filtros': document.querySelectorAll('.filter-btn').length,
        'proyectos': document.querySelectorAll('.portfolio-item').length,
        'nav-links': document.querySelector('.nav-links'),
        'whatsapp-float': document.querySelector('#whatsappFloat'),
        'clients-carousel': document.querySelector('.clients-carousel')
    };
    
    Object.entries(keyElements).forEach(([name, element]) => {
        const exists = typeof element === 'number' ? element > 0 : !!element;
        console.log(`${exists ? '✅' : '❌'} ${name}:`, typeof element === 'number' ? element : !!element);
    });
    
    if (window.portfolioFilters) {
        console.log('📊 Estadísticas de filtros:', window.portfolioFilters.getSectorStats());
    }
    
    console.log('=== FIN DEBUG ===');
};

// ================================
// FUNCIONES GLOBALES ADICIONALES
// ================================

// Manejar video de fondo (para el HTML)
window.handleVideoLoad = function() {
    document.querySelector('.hero')?.classList.add('video-loaded');
};

window.handleVideoError = function() {
    document.querySelector('.hero-fallback')?.style.setProperty('display', 'block');
};

// ================================
// LOGS FINALES
// ================================

console.log('✅ Script principal cargado');
console.log('🎮 Funciones disponibles:');
console.log('  • portfolioFilters.showJuridico() - Filtrar jurídico');
console.log('  • portfolioFilters.showBelleza() - Filtrar belleza');
console.log('  • portfolioFilters.showRestaurantes() - Filtrar restaurantes');
console.log('  • portfolioFilters.showSalud() - Filtrar salud');
console.log('  • portfolioFilters.showInmobiliario() - Filtrar inmobiliario');
console.log('  • portfolioFilters.showAllSectors() - Mostrar todos temporalmente');
console.log('  • sendWhatsAppMessage(tipo) - Enviar WhatsApp');
console.log('  • debugPortfolio() - Debug general');