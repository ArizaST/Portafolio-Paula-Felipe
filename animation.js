// ================================
// ANIMATION.JS - PORTFOLIO EXACTO
// ================================

document.addEventListener('DOMContentLoaded', function() {
    console.log('🎬 Inicializando Portfolio exacto...');
    
    // ================================
    // ANIMACIONES DE ENTRADA SECUENCIALES
    // ================================
    
    function animatePortfolioEntrance() {
        const letters = document.querySelectorAll('.portfolio-letter');
        
        if (letters.length === 0) return;
        
        // Reset inicial
        letters.forEach(letter => {
            letter.style.opacity = '0';
            letter.style.transform = 'translateY(50px) rotateX(-45deg)';
            letter.style.transition = 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
        });
        
        // Animar PORT primero
        const portLetters = document.querySelectorAll('.portfolio-word:first-child .portfolio-letter');
        portLetters.forEach((letter, index) => {
            setTimeout(() => {
                letter.style.opacity = '1';
                letter.style.transform = 'translateY(0) rotateX(0deg)';
                
                // Efecto de rebote
                setTimeout(() => {
                    letter.style.transform = 'translateY(-8px) rotateX(0deg)';
                    setTimeout(() => {
                        letter.style.transform = 'translateY(0) rotateX(0deg)';
                    }, 150);
                }, 400);
                
            }, index * 150 + 200);
        });
        
        // Luego animar FOLIO
        const folioLetters = document.querySelectorAll('.portfolio-word:last-child .portfolio-letter');
        folioLetters.forEach((letter, index) => {
            setTimeout(() => {
                letter.style.opacity = '1';
                letter.style.transform = 'translateY(0) rotateX(0deg)';
                
                // Efecto de rebote
                setTimeout(() => {
                    letter.style.transform = 'translateY(-8px) rotateX(0deg)';
                    setTimeout(() => {
                        letter.style.transform = 'translateY(0) rotateX(0deg)';
                    }, 150);
                }, 400);
                
            }, index * 150 + 800); // Delay después de PORT
        });
        
        console.log('🎬 Animación Portfolio exacta ejecutada');
    }
    
    // ================================
    // EFECTOS HOVER MEJORADOS
    // ================================
    
    function setupEnhancedHoverEffects() {
        const letters = document.querySelectorAll('.portfolio-letter');
        
        letters.forEach(letter => {
            // Hover enter
            letter.addEventListener('mouseenter', function() {
                const isGold = this.classList.contains('gold');
                
                if (isGold) {
                    this.style.transform = 'translateY(-12px) scale(1.08)';
                    this.style.filter = 'brightness(1.3) saturate(1.3) drop-shadow(0 15px 25px rgba(255, 215, 0, 0.5))';
                } else {
                    this.style.transform = 'translateY(-8px) scale(1.05)';
                    this.style.filter = 'brightness(1.2)';
                }
                
                this.style.zIndex = '10';
                this.style.transition = 'all 0.3s ease';
            });
            
            // Hover leave
            letter.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0) scale(1)';
                this.style.filter = 'none';
                this.style.zIndex = '1';
            });
            
            // Click effect
            letter.addEventListener('click', function() {
                this.style.animation = 'none';
                this.style.transform = 'translateY(-25px) scale(1.3) rotateY(360deg)';
                this.style.transition = 'all 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
                
                setTimeout(() => {
                    this.style.transform = 'translateY(0) scale(1) rotateY(0deg)';
                    this.style.transition = 'all 0.4s ease';
                }, 800);
            });
        });
        
        console.log('👆 Efectos hover mejorados configurados');
    }
    
    // ================================
    // EFECTO DE BRILLO EN LAS O
    // ================================
    
    function setupGoldShineEffect() {
        const goldLetters = document.querySelectorAll('.portfolio-letter.gold');
        
        goldLetters.forEach((letter, index) => {
            // Crear overlay de brillo
            const shineOverlay = document.createElement('div');
            shineOverlay.className = 'gold-shine-overlay';
            shineOverlay.style.cssText = `
                position: absolute;
                top: 0;
                left: -30%;
                width: 160%;
                height: 100%;
                background: linear-gradient(45deg, 
                    transparent 20%, 
                    rgba(255, 255, 255, 0.8) 50%, 
                    transparent 80%);
                opacity: 0;
                transform: skewX(-20deg);
                pointer-events: none;
                z-index: 2;
            `;
            
            letter.style.position = 'relative';
            letter.style.overflow = 'hidden';
            letter.appendChild(shineOverlay);
            
            // Animar brillo
            function animateShine() {
                shineOverlay.style.transition = 'none';
                shineOverlay.style.left = '-30%';
                shineOverlay.style.opacity = '0';
                
                setTimeout(() => {
                    shineOverlay.style.transition = 'all 1.2s ease';
                    shineOverlay.style.left = '130%';
                    shineOverlay.style.opacity = '1';
                    
                    setTimeout(() => {
                        shineOverlay.style.opacity = '0';
                    }, 600);
                }, 100);
            }
            
            // Iniciar con delay diferente para cada O
            setTimeout(() => {
                animateShine();
                setInterval(animateShine, 5000 + (index * 1000));
            }, 2000 + (index * 1500));
        });
        
        console.log('✨ Efectos de brillo dorado configurados');
    }
    
    // ================================
    // PARALLAX SUAVE
    // ================================
    
    function setupSmoothParallax() {
        const letters = document.querySelectorAll('.portfolio-letter');
        let ticking = false;
        
        function updateParallax() {
            const scrolled = window.pageYOffset;
            const heroHeight = document.querySelector('.hero')?.offsetHeight || window.innerHeight;
            
            if (scrolled < heroHeight) {
                letters.forEach((letter, index) => {
                    const wordIndex = Math.floor(index / 5); // 0 para PORT, 1 para FOLIO
                    const letterIndex = index % 5;
                    
                    // Velocidades diferentes para crear efecto de profundidad
                    const speed = (wordIndex * 0.1 + letterIndex * 0.05) * 0.3;
                    const yPos = scrolled * speed * -1;
                    
                    // Aplicar parallax manteniendo otras transformaciones
                    const currentTransform = letter.style.transform || '';
                    const baseTransform = currentTransform.replace(/translateY\([^)]*\)/g, '');
                    letter.style.transform = `${baseTransform} translateY(${yPos}px)`.trim();
                });
            }
            
            ticking = false;
        }
        
        function requestTick() {
            if (!ticking) {
                requestAnimationFrame(updateParallax);
                ticking = true;
            }
        }
        
        window.addEventListener('scroll', requestTick);
        console.log('📜 Parallax suave configurado');
    }
    
    // ================================
    // FUNCIONES DE CONTROL
    // ================================
    
    window.restartPortfolioAnimation = function() {
        console.log('🔄 Reiniciando Portfolio...');
        setTimeout(animatePortfolioEntrance, 100);
    };
    
    window.triggerGoldShine = function() {
        const goldLetters = document.querySelectorAll('.portfolio-letter.gold');
        goldLetters.forEach(letter => {
            const shine = letter.querySelector('.gold-shine-overlay');
            if (shine) {
                shine.style.transition = 'all 0.8s ease';
                shine.style.left = '-30%';
                shine.style.opacity = '0';
                
                setTimeout(() => {
                    shine.style.left = '130%';
                    shine.style.opacity = '1';
                    setTimeout(() => shine.style.opacity = '0', 400);
                }, 50);
            }
        });
    };
    
    // ================================
    // INICIALIZACIÓN PRINCIPAL
    // ================================
    
    function initializeExactPortfolio() {
        // 1. Crear estructura
        if (createExactPortfolioStructure()) {
            // 2. Configurar efectos
            setupEnhancedHoverEffects();
            setupSmoothParallax();
            
            // 3. Ejecutar animaciones
            setTimeout(() => {
                animatePortfolioEntrance();
                setupGoldShineEffect();
            }, 300);
            
            console.log('🎉 Portfolio exacto inicializado');
        } else {
            console.warn('⚠️ No se encontró elemento H1 para Portfolio');
        }
    }
    
    // ================================
    // EJECUTAR
    // ================================
    
    initializeExactPortfolio();
});

console.log('✅ Animation.js Portfolio exacto cargado');

// ================================
// OPCIÓN 3: TYPEWRITER LETRA POR LETRA LIMPIO
// ================================

document.addEventListener('DOMContentLoaded', function() {
    console.log('🎬 Inicializando Typewriter Letra por Letra...');
    
    // ================================
    // CONFIGURACIÓN
    // ================================
    const texts = [
        "Community Management & Marketing Digital",
        "Felipe Mora & Paula Sanchez"
    ];
    
    const elements = [
        document.getElementById('typewriter1'),
        document.getElementById('typewriter2')
    ];
    
    const config = {
        speed: 70,        // Velocidad base (ms por letra)
        delayBetween: 800, // Pausa entre líneas
        initialDelay: 1500, // Delay inicial
        spaceDelay: 0.3,   // Factor de velocidad para espacios
        punctuationDelay: 2 // Factor para puntuación
    };
    
    // ================================
    // FUNCIÓN PRINCIPAL TYPEWRITER
    // ================================
    function cleanTypeWriter(element, text, speed = 70, delay = 0) {
        return new Promise((resolve) => {
            setTimeout(() => {
                let i = 0;
                element.innerHTML = ''; // Limpiar contenido
                element.style.opacity = '1';
                
                function type() {
                    if (i < text.length) {
                        // Agregar letra sin cursor
                        element.innerHTML = text.substring(0, i + 1);
                        i++;
                        
                        // Velocidad variable para naturalidad
                        let nextSpeed = speed;
                        const currentChar = text.charAt(i - 1);
                        
                        // Pausa más larga en espacios
                        if (currentChar === ' ') {
                            nextSpeed = speed * config.spaceDelay;
                        }
                        // Pausa más larga en puntuación
                        else if ([',', '.', '&', '-'].includes(currentChar)) {
                            nextSpeed = speed * config.punctuationDelay;
                        }
                        // Variación aleatoria sutil
                        else {
                            const randomVariation = (Math.random() * 20) - 10;
                            nextSpeed = Math.max(speed + randomVariation, 30);
                        }
                        
                        setTimeout(type, nextSpeed);
                    } else {
                        // Terminado - sin cursor
                        element.innerHTML = text;
                        console.log(`✅ Completado: "${text}"`);
                        resolve();
                    }
                }
                
                type();
            }, delay);
        });
    }
    
    // ================================
    // FUNCIÓN CON EFECTOS MEJORADOS
    // ================================
    function enhancedTypeWriter(element, text, speed = 70, delay = 0) {
        return new Promise((resolve) => {
            setTimeout(() => {
                element.innerHTML = '';
                element.style.opacity = '1';
                
                // Asegurar posición fija
                element.style.position = 'relative';
                element.style.left = '50%';
                element.style.transform = 'translateX(-50%)';
                element.style.width = 'max-content';
                element.style.maxWidth = '90%';
                element.style.textAlign = 'center';
                
                let i = 0;
                
                function type() {
                    if (i < text.length) {
                        // Crear span para cada letra para control fino
                        const letter = document.createElement('span');
                        letter.textContent = text.charAt(i);
                        letter.style.opacity = '0';
                        letter.style.display = 'inline';
                        letter.style.transition = 'opacity 0.1s ease';
                        
                        element.appendChild(letter);
                        
                        // Animar aparición
                        setTimeout(() => {
                            letter.style.opacity = '1';
                        }, 10);
                        
                        i++;
                        
                        // Calcular velocidad siguiente
                        let nextSpeed = speed;
                        const currentChar = text.charAt(i - 1);
                        
                        if (currentChar === ' ') {
                            nextSpeed = speed * 0.5;
                        } else if ([',', '.', '&'].includes(currentChar)) {
                            nextSpeed = speed * 1.5;
                        } else {
                            nextSpeed = speed + (Math.random() * 20 - 10);
                        }
                        
                        setTimeout(type, Math.max(nextSpeed, 25));
                    } else {
                        console.log(`✅ Enhanced completado: "${text}"`);
                        resolve();
                    }
                }
                
                type();
            }, delay);
        });
    }
    
    // ================================
    // FUNCIÓN RESPONSIVE
    // ================================
    function getResponsiveSpeed() {
        const width = window.innerWidth;
        
        if (width <= 480) {
            return 60; // Más rápido en móvil
        } else if (width <= 768) {
            return 65; // Velocidad media en tablet
        } else {
            return 70; // Velocidad normal en desktop
        }
    }
    
    // ================================
    // SECUENCIA PRINCIPAL
    // ================================
    async function startTypewriterSequence() {
        // Verificar elementos
        if (!elements[0] || !elements[1]) {
            console.warn('⚠️ Elementos typewriter no encontrados');
            return;
        }
        
        console.log('🚀 Iniciando secuencia typewriter...');
        
        try {
            const speed = getResponsiveSpeed();
            
            // Asegurar que elementos estén visibles
            elements.forEach(el => {
                el.style.opacity = '1';
                el.style.visibility = 'visible';
            });
            
            // Primera línea
            console.log('📝 Escribiendo primera línea...');
            await cleanTypeWriter(elements[0], texts[0], speed, config.initialDelay);
            
            // Segunda línea
            console.log('📝 Escribiendo segunda línea...');
            await cleanTypeWriter(elements[1], texts[1], speed - 5, config.delayBetween);
            
            console.log('🎉 Secuencia typewriter completada');
            
            // Trigger evento personalizado
            window.dispatchEvent(new CustomEvent('typewriterComplete'));
            
        } catch (error) {
            console.error('❌ Error en typewriter:', error);
        }
    }
    
    // ================================
    // FUNCIÓN DE REINICIO
    // ================================
    function resetTypewriter() {
        elements.forEach(el => {
            if (el) {
                el.innerHTML = '';
                el.style.opacity = '1';
            }
        });
    }
    
    // ================================
    // MANEJO DE RESIZE
    // ================================
    let resizeTimeout;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            // Reposicionar elementos si es necesario
            elements.forEach(el => {
                if (el && el.innerHTML) {
                    el.style.left = '50%';
                    el.style.transform = 'translateX(-50%)';
                }
            });
        }, 300);
    });
    
    // ================================
    // DETECCIÓN DE VISIBILIDAD
    // ================================
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && entry.target.classList.contains('hero')) {
                // Solo ejecutar una vez
                if (!entry.target.dataset.typewriterStarted) {
                    entry.target.dataset.typewriterStarted = 'true';
                    startTypewriterSequence();
                }
            }
        });
    }, { threshold: 0.3 });
    
    const heroSection = document.querySelector('.hero');
    if (heroSection) {
        observer.observe(heroSection);
    } else {
        // Fallback: iniciar después de delay
        setTimeout(startTypewriterSequence, 1000);
    }
    
    // ================================
    // FUNCIONES GLOBALES
    // ================================
    window.restartTypewriter = function() {
        console.log('🔄 Reiniciando typewriter...');
        resetTypewriter();
        setTimeout(startTypewriterSequence, 500);
    };
    
    window.typewriterConfig = function(newConfig) {
        Object.assign(config, newConfig);
        console.log('⚙️ Configuración actualizada:', config);
    };
    
    window.testTypewriter = function(testText = "Texto de prueba") {
        const testElement = document.createElement('div');
        testElement.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: rgba(0,0,0,0.9);
            color: white;
            padding: 30px;
            border-radius: 15px;
            z-index: 9999;
            font-family: inherit;
            font-size: 20px;
            text-align: center;
            min-width: 300px;
            box-shadow: 0 20px 40px rgba(0,0,0,0.5);
        `;
        
        document.body.appendChild(testElement);
        
        cleanTypeWriter(testElement, testText, 80, 0).then(() => {
            setTimeout(() => {
                document.body.removeChild(testElement);
            }, 3000);
        });
    };
    
    // ================================
    // EVENT LISTENERS
    // ================================
    
    // Reiniciar cuando se cambia de pestaña y se vuelve
    document.addEventListener('visibilitychange', () => {
        if (!document.hidden) {
            const heroSection = document.querySelector('.hero');
            if (heroSection && !heroSection.dataset.typewriterStarted) {
                setTimeout(startTypewriterSequence, 500);
            }
        }
    });
    
    // ================================
    // LOGS INFORMATIVOS
    // ================================
    console.log('✅ Typewriter Opción 3 cargado');
    console.log('📋 Configuración:', config);
    console.log('🎮 Funciones disponibles:');
    console.log('  • restartTypewriter() - Reiniciar animación');
    console.log('  • testTypewriter("texto") - Probar con texto');
    console.log('  • typewriterConfig({speed: 50}) - Cambiar configuración');
});

// ================================
// INICIALIZACIÓN ALTERNATIVA
// ================================

// Si el DOM ya está cargado cuando se ejecuta este script
if (document.readyState === 'loading') {
    // DOM aún no cargado, esperar al DOMContentLoaded
    console.log('⏳ Esperando carga del DOM...');
} else {
    // DOM ya cargado, ejecutar inmediatamente
    console.log('🚀 DOM ya cargado, ejecutando typewriter...');
    setTimeout(() => {
        const event = new Event('DOMContentLoaded');
        document.dispatchEvent(event);
    }, 100);
}