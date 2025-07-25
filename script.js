// ================================
// SCRIPT.JS COMPLETO - CM PRO PORTFOLIO
// Sistema completo conectado HTML + Sectores + Funcionalidades originales
// ================================

console.log('🚀 Inicializando CM Pro Portfolio Completo...');

// ================================
// MAPEO DE PROYECTOS HTML A SECTORES
// ================================

const htmlProjectsMapping = {
    // Proyecto Veró (ya existente en HTML) - Filtro: Branding, Sector: Restaurantes
    'vero-project': {
        htmlSelector: '.portfolio-item[data-category="branding"]', // La tarjeta con galería Veró
        sectorKey: 'restaurantes',
        projectData: {
            id: 'vero-restaurante',
            title: 'Veró - Cocina Casual y Barra',
            category: 'branding', // ✅ MANTIENE 'branding' para el filtro
            categoryName: 'Branding & Menu Design',
            description: 'Proyecto integral de branding para Veró - Cocina Casual y Barra, restaurante en Zipaquirá. Desarrollamos una identidad visual completa que refleja su filosofía: "donde la familia se reunía sin mirar el reloj".',
            tags: ['Menu Design', 'Branding', 'Editorial', 'Restaurante'],
            isSpecial: true,
            hasGallery: true
        }
    },
    
    // Video Campaign (ejemplo) - Sector Belleza
    'video-campaign': {
        htmlSelector: '.portfolio-item[data-category="video-content"]',
        sectorKey: 'belleza',
        projectData: {
            id: 'moda-urbana-campaign',
            title: 'Moda Urbana Campaign',
            category: 'video-content',
            categoryName: 'Video Marketing',
            description: 'Campaña de video marketing que posicionó esta marca de moda como referente en tendencias urbanas, generando engagement masivo y conversiones directas.',
            tags: ['Video Marketing', 'Fashion', 'Urban Style', 'Social Media'],
            isSpecial: false
        }
    },
    
    // E-commerce (ejemplo) - Sector Turismo
    'ecommerce-project': {
        htmlSelector: '.portfolio-item[data-category="web-design"]',
        sectorKey: 'turismo',
        projectData: {
            id: 'ecommerce-fashion',
            title: 'E-commerce Fashion Store',
            category: 'web-design',
            categoryName: 'Desarrollo Web',
            description: 'Plataforma e-commerce completa con diseño responsive, integración de pagos y panel administrativo avanzado que incrementó las ventas online en un 400%.',
            tags: ['E-commerce', 'React', 'Node.js', 'Fashion'],
            isSpecial: false
        }
    }
};

// ================================
// DATOS DE SECTORES (5 SECTORES PRINCIPALES)
// ================================

const portfolioSectors = {
    restaurantes: {
        name: 'Restaurantes & Gastronomía',
        emoji: '🍽️',
        description: 'Especializados en branding gastronómico, diseño de menús y estrategias digitales que conectan con los comensales y elevan la experiencia culinaria.',
        bgImage: 'Img/sectors/restaurantes-bg.jpg',
        overlayClass: 'sector-restaurantes',
        projects: [
            {
                id: 'vero-restaurante',
                title: 'Veró - Cocina Casual y Barra',
                category: 'branding', 
                categoryName: 'Branding & Menu Design',
                description: 'Identidad visual completa y diseño de menú para restaurante en Zipaquirá. Desarrollamos una marca que refleja la filosofía "donde la familia se reunía sin mirar el reloj".',
                tags: ['Menu Design', 'Branding', 'Editorial', 'Restaurante'],
                previewImage: 'Img/vero-portada.jpg',
                isSpecial: true,
                hasGallery: true
            },
            {
                id: 'el-galapago',
                title: 'El Galapago',
                category: 'social-media',
                categoryName: 'Social Media Strategy',
                description: 'Estrategia de redes sociales y community management que incrementó el engagement en 200% y las reservas en 150%.',
                tags: ['Social Media', 'Content Strategy', 'Photography', 'Community Management'],
                previewImage: 'Img/Clientes/6.png'
            },
            {
                id: 'el-galapago-estacion',
                title: 'El Galapago Estación',
                category: 'branding',
                categoryName: 'Expansion Branding',
                description: 'Expansión de marca para segunda sede, manteniendo la identidad pero adaptándola al nuevo concepto de ubicación.',
                tags: ['Brand Extension', 'Location Branding', 'Consistency', 'Growth'],
                previewImage: 'Img/Clientes/7.png'
            },
            {
                id: 'el-molcajete',
                title: 'El Molcajete',
                category: 'branding',
                categoryName: 'Rebranding',
                description: 'Rediseño de marca para restaurante mexicano, incluyendo nueva identidad visual y estrategia de posicionamiento.',
                tags: ['Rebranding', 'Mexican Food', 'Identity', 'Cultural Design'],
                previewImage: 'Img/Clientes/8.png'
            },
            {
                id: 'komilona',
                title: 'Komilona',
                category: 'branding',
                categoryName: 'Food Branding',
                description: 'Identidad de marca para restaurante de comida casera, enfocada en transmitir calidez y tradición familiar.',
                tags: ['Food Branding', 'Traditional', 'Family Business', 'Comfort Food'],
                previewImage: 'Img/Clientes/1.png'
            }
        ]
    },

    juridico: {
        name: 'Jurídico & Legal',
        emoji: '⚖️',
        description: 'Creamos identidades corporativas sólidas y estrategias de marketing digital que transmiten confianza y profesionalismo para firmas de abogados.',
        bgImage: 'Img/sectors/juridico-bg.jpg',
        overlayClass: 'sector-juridico',
        projects: [
            {
                id: 'pj-abogados',
                title: 'P&J Abogados',
                category: 'branding',
                categoryName: 'Corporate Branding',
                description: 'Identidad corporativa completa y diseño web profesional para firma de abogados especializada en derecho comercial y corporativo.',
                tags: ['Corporate Identity', 'Web Design', 'Professional', 'Legal Services'],
                previewImage: 'Img/Clientes/4.png'
            }
        ]
    },

    inmobiliario: {
        name: 'Inmobiliario',
        emoji: '🏠',
        description: 'Desarrollamos marcas y estrategias digitales que conectan compradores con propiedades, generando confianza en decisiones importantes de inversión.',
        bgImage: 'Img/sectors/inmobiliario-bg.jpg',
        overlayClass: 'sector-inmobiliario',
        projects: [
            {
                id: 'entre-metros',
                title: 'Entre-metros Inmobiliaria',
                category: 'branding',
                categoryName: 'Real Estate Branding',
                description: 'Marca completa para inmobiliaria especializada en propiedades residenciales, incluyendo identidad visual y estrategia digital.',
                tags: ['Real Estate', 'Brand Strategy', 'Digital Marketing', 'Property Sales'],
                previewImage: 'Img/Clientes/5.png'
            }
        ]
    },

    belleza: {
        name: 'Belleza & Estética',
        emoji: '💄',
        description: 'Branding y estrategias digitales para spas, salones de belleza y productos cosméticos que conectan con la autoestima y bienestar personal.',
        bgImage: 'Img/sectors/belleza-bg.jpg',
        overlayClass: 'sector-belleza',
        projects: [
            {
                id: 'moda-urbana-campaign',
                title: 'Moda Urbana Campaign',
                category: 'video-content',
                categoryName: 'Video Marketing',
                description: 'Campaña de video marketing que posicionó esta marca de moda como referente en tendencias urbanas, generando engagement masivo y conversiones directas.',
                tags: ['Video Marketing', 'Fashion', 'Urban Style', 'Social Media'],
                previewImage: 'Img/Banner.jpg'
            },
            {
                id: 'amar-beauty',
                title: 'Amar Beauty',
                category: 'branding',
                categoryName: 'Beauty Branding',
                description: 'Identidad visual completa para marca de productos de belleza, transmitiendo elegancia y cuidado personal.',
                tags: ['Beauty', 'Cosmetics', 'Brand Identity', 'Elegance'],
                previewImage: 'Img/Clientes/2.png'
            },
            {
                id: 'almarios-retail',
                title: 'Almarios Retail',
                category: 'social-media',
                categoryName: 'Retail Social Media',
                description: 'Estrategia de redes sociales para tienda de moda que incrementó las ventas online en 250% en 6 meses.',
                tags: ['Retail', 'Fashion', 'Social Commerce', 'Sales Growth'],
                previewImage: 'Img/Clientes/3.png'
            }
        ]
    },
};

// ================================
// FUNCIONES PRINCIPALES DEL SISTEMA CONECTADO
// ================================

function initializeConnectedPortfolio() {
    console.log('🔗 Inicializando portfolio conectado...');
    
    const existingGrid = document.querySelector('.portfolio-grid');
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    if (!existingGrid || !filterButtons.length) {
        console.warn('⚠️ Elementos del portfolio no encontrados');
        return;
    }
    
    addDataAttributesToExistingCards();
    createSectorsContainer();
    setupConnectedFiltering();
    setupSpecialProjectHandlers();
    
    console.log('✅ Portfolio conectado inicializado');
}

function addDataAttributesToExistingCards() {
    console.log('🏷️ Agregando atributos de datos a tarjetas existentes...');
    
    Object.keys(htmlProjectsMapping).forEach(projectKey => {
        const mapping = htmlProjectsMapping[projectKey];
        const htmlElement = document.querySelector(mapping.htmlSelector);
        
        if (htmlElement) {
            htmlElement.setAttribute('data-project-id', mapping.projectData.id);
            htmlElement.setAttribute('data-sector', mapping.sectorKey);
            htmlElement.setAttribute('data-connected', 'true');
            
            // MARCAR como solo visible en "Todos los Proyectos"
            htmlElement.setAttribute('data-only-show-all', 'true');
            
            console.log(`✅ Conectado: ${mapping.projectData.title} → ${mapping.sectorKey}`);
        } else {
            console.warn(`⚠️ No se encontró elemento HTML para: ${projectKey}`);
        }
    });
}

function createSectorsContainer() {
    console.log('🏗️ Creando contenedor de sectores...');
    
    const existingGrid = document.querySelector('.portfolio-grid');
    let sectorsContainer = document.querySelector('.portfolio-sectors');
    
    if (!sectorsContainer) {
        sectorsContainer = document.createElement('div');
        sectorsContainer.className = 'portfolio-sectors';
        sectorsContainer.style.display = 'none';
        existingGrid.parentNode.insertBefore(sectorsContainer, existingGrid.nextSibling);
    }
    
    generateSectorsHTML(sectorsContainer);
}

function generateSectorsHTML(container) {
    console.log('🎨 Generando HTML de sectores...');
    
    let sectorsHTML = '';
    
    Object.keys(portfolioSectors).forEach(sectorKey => {
        const sector = portfolioSectors[sectorKey];
        const projectCount = sector.projects.length;
        
        sectorsHTML += `
            <div class="sector-section ${sector.overlayClass}" data-sector="${sectorKey}">
                <div class="sector-header">
                    <div class="sector-background" style="background-image: url('${sector.bgImage}'); background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);"></div>
                    <div class="sector-overlay"></div>
                    <div class="sector-stats">${projectCount} Proyecto${projectCount > 1 ? 's' : ''}</div>
                    <div class="sector-content">
                        <h3>${sector.emoji} ${sector.name}</h3>
                        <p>${sector.description}</p>
                    </div>
                </div>
                
                <div class="sector-projects">
                    ${generateSectorProjectsHTML(sector.projects)}
                </div>
            </div>
        `;
    });
    
    container.innerHTML = sectorsHTML;
}

function generateSectorProjectsHTML(projects) {
    return projects.map(project => `
        <div class="project-card-sector" data-project-id="${project.id}" data-category="${project.category}">
            <div class="project-header">
                <h4>${project.title}</h4>
                <span class="project-category-tag">${project.categoryName}</span>
            </div>
            <div class="project-preview-img" style="background-image: url('${project.previewImage || 'Img/Banner.jpg'}');">
                Vista previa de ${project.title}
            </div>
            <div class="project-description">
                ${project.description}
            </div>
            <div class="project-tags">
                ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
            </div>
            <a href="#" class="project-cta" onclick="openConnectedProject('${project.id}')">
                ${project.hasGallery ? 'Ver galería completa →' : 'Ver proyecto completo →'}
            </a>
        </div>
    `).join('');
}

function setupConnectedFiltering() {
    console.log('🔍 Configurando filtros conectados...');
    
    const filterButtons = document.querySelectorAll('.filter-btn');
    const originalGrid = document.querySelector('.portfolio-grid');
    const sectorsContainer = document.querySelector('.portfolio-sectors');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            const filterValue = this.getAttribute('data-filter');
            console.log('🎯 Aplicando filtro conectado:', filterValue);
            
            if (filterValue === 'all') {
                showOriginalGrid();
            } else {
                showFilteredSectors(filterValue);
            }
        });
    });
    
    function showOriginalGrid() {
        if (originalGrid) {
            originalGrid.style.display = 'grid';
            const allCards = originalGrid.querySelectorAll('.portfolio-item');
            allCards.forEach((card, index) => {
                card.style.display = 'block';
                card.style.opacity = '0';
                card.style.transform = 'translateY(20px)';
                
                setTimeout(() => {
                    card.style.transition = 'all 0.6s ease';
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }, index * 100);
            });
        }
        
        if (sectorsContainer) {
            sectorsContainer.style.display = 'none';
        }
    }
    
    function showFilteredSectors(filterValue) {
        if (originalGrid) {
            const allCards = originalGrid.querySelectorAll('.portfolio-item');
            allCards.forEach(card => {
                const cardCategory = card.getAttribute('data-category');
                if (cardCategory === filterValue) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
            originalGrid.style.display = 'grid';
        }
        
        if (sectorsContainer) {
            sectorsContainer.style.display = 'block';
            filterSectorsByCategory(filterValue);
        }
    }
    
    function filterSectorsByCategory(category) {
        const allowedSectors = filterToSectors[category] || [];
        const sectorSections = document.querySelectorAll('.sector-section');
        
        sectorSections.forEach(section => {
            const sectorKey = section.getAttribute('data-sector');
            
            if (allowedSectors.includes(sectorKey)) {
                section.classList.remove('hidden');
                section.style.opacity = '0';
                section.style.transform = 'translateY(30px)';
                
                setTimeout(() => {
                    section.style.transition = 'all 0.6s ease';
                    section.style.opacity = '1';
                    section.style.transform = 'translateY(0)';
                }, 100);
            } else {
                section.classList.add('hidden');
            }
        });
    }
}

function setupSpecialProjectHandlers() {
    console.log('⭐ Configurando manejadores especiales...');
    
    const veroCard = document.querySelector('[data-project-id="vero-restaurante"]');
    if (veroCard) {
        console.log('✅ Galería Veró detectada y conectada');
    }
}

// ================================
// FUNCIONES DE INTERACCIÓN
// ================================

function openConnectedProject(projectId) {
    console.log('🔍 Abriendo proyecto conectado:', projectId);
    
    let foundProject = null;
    let foundSector = null;
    
    Object.entries(portfolioSectors).forEach(([sectorKey, sector]) => {
        const project = sector.projects.find(p => p.id === projectId);
        if (project) {
            foundProject = project;
            foundSector = sectorKey;
        }
    });
    
    if (!foundProject) {
        console.warn('⚠️ Proyecto no encontrado:', projectId);
        return;
    }
    
    if (foundProject.isSpecial && foundProject.hasGallery && projectId === 'vero-restaurante') {
        handleVeroConnection();
        return;
    }
    
    showProjectModal(foundProject);
    
    if (typeof gtag !== 'undefined') {
        gtag('event', 'view_connected_project', {
            event_category: 'Portfolio Connected',
            event_label: foundProject.title,
            custom_parameter_sector: foundSector
        });
    }
}

function handleVeroConnection() {
    console.log('🎨 Conectando con galería Veró existente...');
    
    // FORZAR cambio al filtro "Todos los Proyectos" para mostrar la galería HTML
    const allFilter = document.querySelector('.filter-btn[data-filter="all"]');
    if (allFilter && !allFilter.classList.contains('active')) {
        // Simular click en "Todos los Proyectos"
        allFilter.click();
        
        setTimeout(() => {
            // Buscar y hacer scroll a la galería Veró
            const veroGallery = document.querySelector('.vero-gallery');
            const veroMainImage = document.getElementById('veroMainImage');
            
            if (veroGallery) {
                veroGallery.scrollIntoView({ 
                    behavior: 'smooth', 
                    block: 'center' 
                });
                
                // Destacar la galería brevemente
                veroGallery.style.transform = 'scale(1.02)';
                veroGallery.style.boxShadow = '0 20px 40px rgba(102, 126, 234, 0.3)';
                veroGallery.style.transition = 'all 0.3s ease';
                
                setTimeout(() => {
                    veroGallery.style.transform = 'scale(1)';
                    veroGallery.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.1)';
                }, 2000);
                
            } else if (veroMainImage) {
                veroMainImage.scrollIntoView({ behavior: 'smooth' });
            } else {
                console.warn('⚠️ Galería Veró no encontrada en HTML');
                showProjectModal(portfolioSectors.restaurantes.projects.find(p => p.id === 'vero-restaurante'));
            }
        }, 500);
    } else {
        // Ya estamos en "Todos los Proyectos", ir directamente a la galería
        setTimeout(() => {
            const veroGallery = document.querySelector('.vero-gallery');
            if (veroGallery) {
                veroGallery.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        }, 100);
    }
}

function showProjectModal(project) {
    const modal = document.createElement('div');
    modal.className = 'project-modal';
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.8);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10000;
        padding: 2rem;
        backdrop-filter: blur(10px);
    `;
    
    modal.innerHTML = `
        <div class="modal-content" style="
            background: white;
            border-radius: 25px;
            padding: 3rem;
            max-width: 700px;
            width: 100%;
            max-height: 85vh;
            overflow-y: auto;
            position: relative;
            box-shadow: 0 25px 50px rgba(0, 0, 0, 0.3);
            animation: modalSlideIn 0.3s ease;
        ">
            <button class="modal-close" onclick="this.closest('.project-modal').remove()" style="
                position: absolute;
                top: 1.5rem;
                right: 1.5rem;
                background: rgba(255, 255, 255, 0.1);
                border: 2px solid rgba(102, 126, 234, 0.2);
                width: 40px;
                height: 40px;
                border-radius: 50%;
                font-size: 1.5rem;
                cursor: pointer;
                color: #002366;
                display: flex;
                align-items: center;
                justify-content: center;
                transition: all 0.3s ease;
            " onmouseover="this.style.background='#002366'; this.style.color='white';" onmouseout="this.style.background='rgba(255, 255, 255, 0.1)'; this.style.color='#002366';">&times;</button>
            
            <div class="modal-header" style="margin-bottom: 2rem;">
                <h2 style="color: #333; margin-bottom: 1rem; font-size: 2rem; font-weight: bold;">${project.title}</h2>
                <div style="background: linear-gradient(45deg, var(--primary-navy), var(--secondary-dark));
 color: white; padding: 0.7rem 1.5rem; border-radius: 25px; display: inline-block; font-size: 0.9rem; font-weight: bold; text-transform: uppercase; letter-spacing: 0.5px;">
                    ${project.categoryName}
                </div>
            </div>
            
            <div class="modal-image" style="
                width: 100%; 
                height: 250px; 
                background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%), url('${project.previewImage || 'Img/Banner.jpg'}') center/cover; 
                border-radius: 15px; 
                margin-bottom: 2rem;
                position: relative;
                overflow: hidden;
            ">
                <div style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: linear-gradient(45deg, rgba(102, 126, 234, 0.1), rgba(118, 75, 162, 0.1));"></div>
            </div>
            
            <div class="modal-description" style="color: #666; line-height: 1.7; margin-bottom: 2rem; font-size: 1.1rem;">
                ${project.description}
            </div>
            
            <div class="modal-tags" style="display: flex; gap: 0.8rem; flex-wrap: wrap; margin-bottom: 2.5rem;">
                ${project.tags.map(tag => `
                    <span style="
                        background: linear-gradient(45deg, rgba(102, 126, 234, 0.1), rgba(118, 75, 162, 0.1)); 
                        color: #002366; 
                        padding: 0.5rem 1rem; 
                        border-radius: 15px; 
                        font-size: 0.9rem; 
                        font-weight: 500;
                        border: 1px solid rgba(102, 126, 234, 0.2);
                    ">${tag}</span>
                `).join('')}
            </div>
            
            <div class="modal-actions" style="text-align: center; padding-top: 1rem; border-top: 2px solid #f8f9fa;">
                <button onclick="window.sendWhatsAppMessage('consulta-general')" style="
                    background: linear-gradient(45deg, #25d366, #128c7e);
                    color: white;
                    border: none;
                    padding: 1rem 2rem;
                    border-radius: 25px;
                    font-weight: bold;
                    cursor: pointer;
                    font-size: 1rem;
                    margin-right: 1rem;
                    transition: all 0.3s ease;
                " onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 10px 25px rgba(37, 211, 102, 0.4)';" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='none';">
                    💬 Consultar Proyecto
                </button>
                <button onclick="this.closest('.project-modal').remove()" style="
                    background: transparent;
                    color: #002366;
                    border: 2px solid #002366;
                    padding: 1rem 2rem;
                    border-radius: 25px;
                    font-weight: bold;
                    cursor: pointer;
                    font-size: 1rem;
                    transition: all 0.3s ease;
                " onmouseover="this.style.background='#002366'; this.style.color='white';" onmouseout="this.style.background='transparent'; this.style.color='#002366';">
                    Cerrar
                </button>
            </div>
        </div>
    `;
    
    const style = document.createElement('style');
    style.textContent = `
        @keyframes modalSlideIn {
            from {
                opacity: 0;
                transform: translateY(30px) scale(0.95);
            }
            to {
                opacity: 1;
                transform: translateY(0) scale(1);
            }
        }
    `;
    document.head.appendChild(style);
    
    document.body.appendChild(modal);
    
    const closeOnEsc = (e) => {
        if (e.key === 'Escape') {
            modal.remove();
            document.removeEventListener('keydown', closeOnEsc);
        }
    };
    document.addEventListener('keydown', closeOnEsc);
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.remove();
            document.removeEventListener('keydown', closeOnEsc);
        }
    });
}

// ================================
// FUNCIONES UTILITARIAS
// ================================

function getConnectedProjectStats() {
    const stats = {
        htmlProjects: Object.keys(htmlProjectsMapping).length,
        sectors: Object.keys(portfolioSectors).length,
        totalProjects: 0
    };
    
    Object.values(portfolioSectors).forEach(sector => {
        stats.totalProjects += sector.projects.length;
    });
    
    return stats;
}

function debugConnectedPortfolio() {
    console.log('=== DEBUG PORTFOLIO CONECTADO ===');
    console.log('📊 Estadísticas:', getConnectedProjectStats());
    console.log('🔗 Mapeo HTML → Sectores:');
    
    Object.entries(htmlProjectsMapping).forEach(([key, mapping]) => {
        const element = document.querySelector(mapping.htmlSelector);
        console.log(`  ${mapping.projectData.title}: ${element ? '✅ Conectado' : '❌ No encontrado'} → ${mapping.sectorKey}`);
    });
    
    console.log('🎯 Sectores disponibles:');
    Object.entries(portfolioSectors).forEach(([key, sector]) => {
        console.log(`  ${sector.emoji} ${sector.name}: ${sector.projects.length} proyectos`);
    });
    
    console.log('=== FIN DEBUG ===');
}

// ================================
// FUNCIONES GLOBALES PARA DEBUG Y UTILIDADES
// ================================

window.connectedPortfolio = {
    sectors: portfolioSectors,
    mapping: htmlProjectsMapping,
    stats: getConnectedProjectStats,
    debug: debugConnectedPortfolio,
    openProject: openConnectedProject,
    
    addProject: function(sectorKey, projectData) {
        if (portfolioSectors[sectorKey]) {
            portfolioSectors[sectorKey].projects.push(projectData);
            console.log(`✅ Proyecto agregado a ${sectorKey}:`, projectData.title);
            
            const sectorsContainer = document.querySelector('.portfolio-sectors');
            if (sectorsContainer && sectorsContainer.style.display !== 'none') {
                generateSectorsHTML(sectorsContainer);
            }
        } else {
            console.error('❌ Sector no encontrado:', sectorKey);
        }
    },
    
    editProject: function(projectId, newData) {
        let found = false;
        Object.values(portfolioSectors).forEach(sector => {
            const projectIndex = sector.projects.findIndex(p => p.id === projectId);
            if (projectIndex !== -1) {
                sector.projects[projectIndex] = { ...sector.projects[projectIndex], ...newData };
                found = true;
                console.log(`✅ Proyecto editado:`, projectId);
            }
        });
        
        if (!found) {
            console.error('❌ Proyecto no encontrado para editar:', projectId);
        }
    }
};

// ================================
// FUNCIONALIDADES ORIGINALES DEL PORTFOLIO
// ================================

// JAVASCRIPT PARA EL VIDEO DEL HERO
function initializeHeroVideo() {
    const video = document.querySelector('.hero-video');
    const hero = document.querySelector('.hero');
    const playPauseBtn = document.getElementById('playPauseBtn');
    const muteBtn = document.getElementById('muteBtn');

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
        }
    }

    if (playPauseBtn) {
        playPauseBtn.addEventListener('click', function() {
            if (video.paused) {
                video.play().catch(console.error);
            } else {
                video.pause();
            }
        });
    }

    if (muteBtn) {
        muteBtn.addEventListener('click', function() {
            video.muted = !video.muted;
        });
    }

    // Optimizaciones para móvil
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

// NAVEGACIÓN MÓVIL
function initializeMobileNavigation() {
    console.log('🚀 Inicializando navegación móvil...');
    
    function createMobileToggle() {
        const nav = document.querySelector('nav');
        let mobileToggle = document.querySelector('.mobile-nav-toggle');
        
        if (!mobileToggle && nav) {
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
            console.log('✅ Botón móvil creado automáticamente');
        }
        
        return mobileToggle;
    }
    
    function initializeMobileMenu() {
        const mobileToggle = createMobileToggle();
        const navLinks = document.querySelector('.nav-links');
        const body = document.body;
        
        if (!mobileToggle || !navLinks) {
            console.error('❌ No se encontraron elementos de navegación');
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
        
        mobileToggle.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            toggleMenu();
        });
        
        const navLinksItems = navLinks.querySelectorAll('a');
        navLinksItems.forEach(function(link) {
            link.addEventListener('click', function() {
                if (window.innerWidth <= 768 && isMenuOpen) {
                    closeMenu();
                }
            });
        });
        
        document.addEventListener('click', function(e) {
            if (isMenuOpen && 
                !navLinks.contains(e.target) && 
                !mobileToggle.contains(e.target)) {
                closeMenu();
            }
        });
        
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && isMenuOpen) {
                closeMenu();
            }
        });
        
        let resizeTimeout;
        window.addEventListener('resize', function() {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(() => {
                if (window.innerWidth > 768 && isMenuOpen) {
                    closeMenu();
                }
            }, 250);
        });
        
        window.mobileMenu = {
            open: openMenu,
            close: closeMenu,
            toggle: toggleMenu,
            isOpen: () => isMenuOpen
        };
        
        console.log('✅ Navegación móvil inicializada correctamente');
    }
    
    initializeMobileMenu();
}

// SMOOTH SCROLLING PARA NAVEGACIÓN
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
}

// FUNCIONALIDAD BEFORE/AFTER SLIDER
function initializeBeforeAfterSliders() {
    const sliders = document.querySelectorAll('.before-after-slider');
    
    sliders.forEach(slider => {
        const handle = slider.querySelector('.slider-handle');
        const afterImage = slider.querySelector('.after-image');
        let isDragging = false;

        function updateSlider(x) {
            const rect = slider.getBoundingClientRect();
            const percentage = Math.max(0, Math.min(100, ((x - rect.left) / rect.width) * 100));
            
            if (handle) handle.style.left = percentage + '%';
            if (afterImage) afterImage.style.clipPath = `polygon(${percentage}% 0%, 100% 0%, 100% 100%, ${percentage}% 100%)`;
        }

        if (handle) {
            handle.addEventListener('mousedown', function(e) {
                isDragging = true;
                e.preventDefault();
            });

            document.addEventListener('mousemove', function(e) {
                if (isDragging) {
                    updateSlider(e.clientX);
                }
            });

            document.addEventListener('mouseup', function() {
                isDragging = false;
            });

            handle.addEventListener('touchstart', function(e) {
                isDragging = true;
                e.preventDefault();
            });

            document.addEventListener('touchmove', function(e) {
                if (isDragging) {
                    updateSlider(e.touches[0].clientX);
                }
            });

            document.addEventListener('touchend', function() {
                isDragging = false;
            });

            slider.addEventListener('click', function(e) {
                if (!isDragging) {
                    updateSlider(e.clientX);
                }
            });
        }
    });
}

// GALERÍA VERÓ - FUNCIONALIDAD ESPECÍFICA
function initializeVeroGallery() {
    console.log('🎨 Inicializando galería Veró...');
    
    const veroMainImage = document.getElementById('veroMainImage');
    const veroThumbnailsContainer = document.getElementById('veroThumbnails');
    const veroCounter = document.getElementById('veroCounter');
    
    if (!veroMainImage || !veroThumbnailsContainer || !veroCounter) {
        console.log('ℹ️ Proyecto Veró no encontrado en esta página');
        return;
    }
    
    console.log('✅ Elementos Veró encontrados, inicializando...');
    
    const veroThumbnails = veroThumbnailsContainer.querySelectorAll('.thumbnail');
    let currentVeroIndex = 0;
    
    console.log(`📸 Encontradas ${veroThumbnails.length} imágenes para Veró`);
    
    function updateVeroMainImage(index) {
        if (veroMainImage && veroThumbnails[index] && index >= 0 && index < veroThumbnails.length) {
            veroMainImage.src = veroThumbnails[index].src;
            veroMainImage.alt = veroThumbnails[index].alt;
            currentVeroIndex = index;
            updateVeroCounter();
            updateVeroActiveThumbnail();
            
            console.log(`🖼️ Imagen Veró cambiada a: ${index + 1}/${veroThumbnails.length}`);
        }
    }
    
    function updateVeroCounter() {
        if (veroCounter) {
            const counterText = `${currentVeroIndex + 1} / ${veroThumbnails.length}`;
            veroCounter.textContent = counterText;
        }
    }
    
    function updateVeroActiveThumbnail() {
        veroThumbnails.forEach((thumb, index) => {
            thumb.classList.toggle('active', index === currentVeroIndex);
        });
    }
    
    veroThumbnails.forEach((thumbnail, index) => {
        thumbnail.addEventListener('click', function() {
            updateVeroMainImage(index);
        });
    });

    updateVeroCounter();
    updateVeroActiveThumbnail();
    
    console.log('🎉 Galería Veró inicializada correctamente');
}

// DEVICE MOCKUP FUNCTIONALITY
function initializeDeviceMockups() {
    const deviceBtns = document.querySelectorAll('.device-btn');
    const deviceFrames = document.querySelectorAll('.device-frame');

    deviceBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            deviceBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');

            const deviceType = this.getAttribute('data-device');
            
            deviceFrames.forEach(frame => {
                frame.className = 'device-frame';
                if (deviceType !== 'desktop') {
                    frame.classList.add(deviceType);
                }
            });
        });
    });
}

// CARRUSEL DE CLIENTES COMPLETO
function initializeClientsCarousel() {
    const carousel = document.querySelector('.clients-carousel');
    const container = document.querySelector('.clients-carousel-container');
    
    if (!carousel || !container) {
        console.log('⚠️ Carrusel de clientes no encontrado');
        return;
    }

    let isHovered = false;
    let isDragging = false;
    let startX = 0;
    let scrollLeft = 0;
    let animationId = null;
    let currentTransform = 0;
    let autoScrollSpeed = 1;
    let isAutoScrollPaused = false;

    function initializeCarousel() {
        container.style.cssText += `
            cursor: grab;
            user-select: none;
            overflow: hidden;
            position: relative;
        `;

        carousel.style.cssText += `
            display: flex;
            will-change: transform;
            transition: none;
        `;

        startAutoScroll();
        console.log('✅ Carrusel de clientes inicializado');
    }

    function startAutoScroll() {
        function animate() {
            if (!isAutoScrollPaused && !isDragging && !isHovered) {
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

    function pauseAutoScroll() {
        isAutoScrollPaused = true;
    }

    function resumeAutoScroll() {
        isAutoScrollPaused = false;
    }

    container.addEventListener('mouseenter', () => {
        isHovered = true;
        container.style.cursor = 'grab';
    });
    
    container.addEventListener('mouseleave', () => {
        if (!isDragging) {
            isHovered = false;
            container.style.cursor = 'grab';
        }
    });

    container.addEventListener('mousedown', handleDragStart);
    document.addEventListener('mousemove', handleDragMove);
    document.addEventListener('mouseup', handleDragEnd);

    function handleDragStart(e) {
        isDragging = true;
        pauseAutoScroll();
        
        startX = e.pageX - container.offsetLeft;
        scrollLeft = currentTransform;
        
        container.style.cursor = 'grabbing';
        carousel.style.transition = 'none';
        
        e.preventDefault();
    }

    function handleDragMove(e) {
        if (!isDragging) return;
        
        e.preventDefault();
        const x = e.pageX - container.offsetLeft;
        const walk = (x - startX) * 1.5;
        
        currentTransform = scrollLeft + walk;
        
        const maxScroll = -(carousel.scrollWidth - container.clientWidth);
        currentTransform = Math.max(maxScroll, Math.min(0, currentTransform));
        
        carousel.style.transform = `translateX(${currentTransform}px)`;
    }

    function handleDragEnd() {
        if (!isDragging) return;
        
        isDragging = false;
        isHovered = false;
        
        container.style.cursor = 'grab';
        carousel.style.transition = 'transform 0.3s ease';
        
        setTimeout(() => {
            resumeAutoScroll();
        }, 2000);
    }

    // Touch support
    let touchStartX = 0;
    let touchStartY = 0;
    let touchScrollLeft = 0;
    let isTouching = false;
    let isVerticalScroll = false;

    container.addEventListener('touchstart', handleTouchStart, { passive: false });
    container.addEventListener('touchmove', handleTouchMove, { passive: false });
    container.addEventListener('touchend', handleTouchEnd);

    function handleTouchStart(e) {
        isTouching = true;
        isVerticalScroll = false;
        pauseAutoScroll();
        
        const touch = e.touches[0];
        touchStartX = touch.clientX;
        touchStartY = touch.clientY;
        touchScrollLeft = currentTransform;
        
        carousel.style.transition = 'none';
    }

    function handleTouchMove(e) {
        if (!isTouching) return;
        
        const touch = e.touches[0];
        const deltaX = touch.clientX - touchStartX;
        const deltaY = touch.clientY - touchStartY;
        
        if (!isVerticalScroll) {
            if (Math.abs(deltaY) > Math.abs(deltaX)) {
                isVerticalScroll = true;
                return;
            } else if (Math.abs(deltaX) > 10) {
                e.preventDefault();
            }
        }
        
        if (isVerticalScroll) return;
        
        const walk = deltaX * 1.2;
        currentTransform = touchScrollLeft + walk;
        
        const maxScroll = -(carousel.scrollWidth - container.clientWidth);
        currentTransform = Math.max(maxScroll, Math.min(0, currentTransform));
        
        carousel.style.transform = `translateX(${currentTransform}px)`;
    }

    function handleTouchEnd() {
        if (!isTouching) return;
        
        isTouching = false;
        isVerticalScroll = false;
        
        carousel.style.transition = 'transform 0.3s ease';
        
        setTimeout(() => {
            resumeAutoScroll();
        }, 3000);
    }

    // Wheel scroll support
    container.addEventListener('wheel', handleWheelScroll, { passive: false });

    function handleWheelScroll(e) {
        if (e.shiftKey || Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
            e.preventDefault();
            
            pauseAutoScroll();
            
            const delta = e.deltaY || e.deltaX;
            currentTransform -= delta * 0.5;
            
            const maxScroll = -(carousel.scrollWidth - container.clientWidth);
            currentTransform = Math.max(maxScroll, Math.min(0, currentTransform));
            
            carousel.style.transition = 'transform 0.3s ease';
            carousel.style.transform = `translateX(${currentTransform}px)`;
            
            setTimeout(() => {
                resumeAutoScroll();
            }, 1500);
        }
    }

    function adjustCarouselSpeed() {
        const screenWidth = window.innerWidth;
        
        if (screenWidth < 768) {
            autoScrollSpeed = 0.7;
        } else if (screenWidth < 1024) {
            autoScrollSpeed = 0.8;
        } else {
            autoScrollSpeed = 1;
        }
    }

    const debouncedResize = debounce(() => {
        adjustCarouselSpeed();
        
        const maxScroll = -(carousel.scrollWidth - container.clientWidth);
        if (currentTransform < maxScroll) {
            currentTransform = maxScroll;
            carousel.style.transform = `translateX(${currentTransform}px)`;
        }
    }, 250);

    window.addEventListener('resize', debouncedResize);

    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    initializeCarousel();
    adjustCarouselSpeed();

    window.addEventListener('beforeunload', () => {
        if (animationId) {
            cancelAnimationFrame(animationId);
        }
    });

    console.log('🎉 Carrusel de clientes completamente inicializado');
}

// WHATSAPP CHAT COMPLETO
function initializeWhatsAppChat() {
    const WHATSAPP_NUMBER = '573229015631';
    const DEFAULT_MESSAGE = 'Hola, me interesa conocer más sobre sus servicios de Community Manager';
    
    const whatsappFloat = document.getElementById('whatsappFloat');
    const whatsappBtn = document.getElementById('whatsappBtn');
    const whatsappChatPreview = document.getElementById('whatsappChatPreview');
    const chatClose = document.getElementById('chatClose');
    const chatInput = document.getElementById('chatInput');
    const chatSend = document.getElementById('chatSend');
    const onlineStatus = document.getElementById('onlineStatus');
    
    if (!whatsappFloat || !whatsappChatPreview) {
        console.log('⚠️ WhatsApp chat preview no encontrado en el DOM');
        return;
    }
    
    function toggleChatPreview() {
        if (whatsappChatPreview.classList.contains('show')) {
            hideChatPreview();
        } else {
            showChatPreview();
        }
    }
    
    function showChatPreview() {
        whatsappChatPreview.classList.add('show');
        setTimeout(() => {
            if (chatInput) chatInput.focus();
        }, 300);
        
        if (typeof gtag !== 'undefined') {
            gtag('event', 'open_chat_preview', {
                event_category: 'WhatsApp',
                event_label: 'Chat Preview Opened'
            });
        }
    }
    
    function hideChatPreview() {
        whatsappChatPreview.classList.remove('show');
    }
    
    function sendWhatsAppMessage() {
        const message = chatInput ? chatInput.value.trim() : '';
        const finalMessage = message || DEFAULT_MESSAGE;
        const encodedMessage = encodeURIComponent(finalMessage);
        const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
        
        window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
        
        if (chatInput) chatInput.value = '';
        hideChatPreview();
        
        console.log('📱 Mensaje enviado a WhatsApp:', finalMessage);
    }
    
    function updateOnlineStatus() {
        const now = new Date();
        const hour = now.getHours();
        const day = now.getDay();
        
        const isOnline = (
            (day >= 1 && day <= 5 && hour >= 8 && hour < 18) ||
            (day === 6 && hour >= 9 && hour < 14)
        );
        
        if (onlineStatus) {
            if (isOnline) {
                onlineStatus.textContent = 'En línea • Responde en minutos';
                onlineStatus.style.color = '#25d366';
            } else {
                onlineStatus.textContent = 'Fuera de línea • Te respondemos pronto';
                onlineStatus.style.color = '#ffa500';
            }
        }
        
        const tooltip = document.querySelector('.whatsapp-tooltip');
        if (tooltip) {
            tooltip.textContent = isOnline ? 
                '¡Estamos en línea!' : 
                '¡Déjanos tu mensaje!';
        }
    }
    
    // Event listeners
    if (whatsappBtn) {
        whatsappBtn.addEventListener('click', function(e) {
            e.preventDefault();
            toggleChatPreview();
        });
    }
    
    if (chatClose) {
        chatClose.addEventListener('click', function(e) {
            e.preventDefault();
            hideChatPreview();
        });
    }
    
    if (chatSend) {
        chatSend.addEventListener('click', function() {
            sendWhatsAppMessage();
        });
    }
    
    if (chatInput) {
        chatInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                sendWhatsAppMessage();
            }
        });
    }
    
    document.addEventListener('click', function(event) {
        if (whatsappChatPreview && whatsappChatPreview.classList.contains('show')) {
            if (!whatsappChatPreview.contains(event.target) && 
                !whatsappFloat.contains(event.target)) {
                hideChatPreview();
            }
        }
    });
    
    function handleScroll() {
        const scrollY = window.pageYOffset;
        
        if (scrollY > 300) {
            whatsappFloat.style.opacity = '1';
            whatsappFloat.style.visibility = 'visible';
        } else {
            whatsappFloat.style.opacity = '0';
            whatsappFloat.style.visibility = 'hidden';
        }
        
        const footer = document.querySelector('footer');
        if (footer) {
            const footerRect = footer.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            
            if (footerRect.top < windowHeight) {
                whatsappFloat.style.bottom = `${windowHeight - footerRect.top + 20}px`;
                if (whatsappChatPreview) {
                    whatsappChatPreview.style.bottom = `${windowHeight - footerRect.top + 90}px`;
                }
            } else {
                whatsappFloat.style.bottom = '30px';
                if (whatsappChatPreview) {
                    whatsappChatPreview.style.bottom = '100px';
                }
            }
        }
    }
    
    // Mensajes predefinidos
    const predefinedMessages = {
        'plan-basico': 'Hola, me interesa el Plan Básico de Community Manager ($850.000)',
        'plan-medio': 'Hola, me interesa el Plan Medio de Community Manager ($650.000)',
        'plan-completo': 'Hola, me interesa el Plan Completo de Community Manager ($1.250.000)',
        'plan-tiktok': 'Hola, me interesa el Plan TikTok ($350.000)',
        'branding': 'Hola, me interesa el servicio de Branding e Identidad',
        'web-desarrollo': 'Hola, me interesa el desarrollo de sitio web',
        'consulta-general': 'Hola, me gustaría recibir información sobre sus servicios',
        'landing-page': 'Hola, me interesa una Landing Page desde $800.000',
        'sitio-informativo': 'Hola, me interesa un Sitio Web Informativo desde $1.400.000',
        'tienda-online': 'Hola, me interesa una Tienda en Línea desde $2.200.000',
        'consulta-web': 'Hola, me gustaría una consulta gratuita sobre desarrollo web'
    };
    
    // Función global para enviar mensajes específicos
    window.sendWhatsAppMessage = function(messageType = 'consulta-general') {
        const message = predefinedMessages[messageType] || DEFAULT_MESSAGE;
        const encodedMessage = encodeURIComponent(message);
        const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
        
        window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
        
        if (typeof gtag !== 'undefined') {
            gtag('event', 'click_whatsapp_direct', {
                event_category: 'WhatsApp',
                event_label: messageType
            });
        }
        
        console.log('📱 Mensaje directo enviado:', messageType);
    };
    
    // Inicialización
    window.addEventListener('scroll', handleScroll);
    updateOnlineStatus();
    setInterval(updateOnlineStatus, 5 * 60 * 1000);
    
    whatsappFloat.style.opacity = '0';
    whatsappFloat.style.visibility = 'hidden';
    
    setTimeout(handleScroll, 100);
    
    console.log('✅ WhatsApp Chat Preview inicializado correctamente');
}

// FORMULARIO DE CONTACTO
function initializeContactForm() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(this);
            const data = {};
            for (let [key, value] of formData.entries()) {
                data[key] = value;
            }
            
            if (!data.name || !data.email || !data.phone) {
                alert('Por favor, completa todos los campos requeridos.');
                return;
            }
            
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(data.email)) {
                alert('Por favor, ingresa un email válido.');
                return;
            }
            
            const submitBtn = this.querySelector('.submit-btn');
            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'Enviando...';
            submitBtn.disabled = true;
            
            setTimeout(() => {
                alert('¡Gracias por tu interés! Te contactaremos en las próximas 24 horas.');
                this.reset();
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }, 1500);
            
            console.log('📧 Formulario enviado:', data);
        });
    }
}

// SCROLL EFFECTS
function initializeScrollEffects() {
    window.addEventListener('scroll', () => {
        const header = document.querySelector('header');
        if (header) {
            if (window.scrollY > 100) {
                header.style.background = 'rgba(41, 41, 41, 0.95)';
                header.style.backdropFilter = 'blur(15px)';
            } else {
                header.style.background = 'rgba(255, 255, 255, 0.1)';
                header.style.backdropFilter = 'blur(10px)';
            }
        }
    });
}

// SCROLL PROGRESS INDICATOR
function initializeScrollProgress() {
    const scrollIndicator = document.createElement('div');
    scrollIndicator.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 0%;
        height: 4px;
        background: linear-gradient(45deg, var(--accent-light-blue), var(--neutral-cream));

        z-index: 9999;
        transition: width 0.1s ease;
    `;
    document.body.appendChild(scrollIndicator);

    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset;
        const docHeight = document.body.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        scrollIndicator.style.width = scrollPercent + '%';
    });
}

// SCROLL TO TOP BUTTON
function initializeScrollToTop() {
    const scrollToTopBtn = document.createElement('button');
    scrollToTopBtn.innerHTML = '↑';
    scrollToTopBtn.style.cssText = `
        position: fixed;
        bottom: 120px;
        right: 30px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: linear-gradient(45deg, var(--primary-navy), var(--secondary-dark));
        color: white;
        border: none;
        font-size: 20px;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 1000;
        box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
    `;

    scrollToTopBtn.setAttribute('aria-label', 'Volver arriba');
    document.body.appendChild(scrollToTopBtn);

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollToTopBtn.style.opacity = '1';
            scrollToTopBtn.style.visibility = 'visible';
        } else {
            scrollToTopBtn.style.opacity = '0';
            scrollToTopBtn.style.visibility = 'hidden';
        }
    });

    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ANIMATIONS ON SCROLL
function initializeScrollAnimations() {
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

    document.querySelectorAll('.package-card, .client-logo, .web-service-item, .additional-service-card, .portfolio-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// INTEGRACIÓN CON BOTONES CTA
function setupWhatsAppIntegration() {
    // Botones de paquetes
    document.querySelectorAll('.package-card .cta-button').forEach((btn, index) => {
        const packageNames = ['plan-basico', 'plan-medio', 'plan-completo', 'plan-tiktok'];
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const packageType = packageNames[index] || 'consulta-general';
            window.sendWhatsAppMessage(packageType);
        });
    });
    
    // Botones de servicios adicionales
    document.querySelectorAll('.service-cta').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const serviceTitle = this.closest('.additional-service-card').querySelector('h4').textContent;
            const message = `Hola, me interesa el servicio de ${serviceTitle}. ¿Podrían darme más información?`;
            const encodedMessage = encodeURIComponent(message);
            const whatsappUrl = `https://wa.me/573229015631?text=${encodedMessage}`;
            window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
        });
    });
    
    // Botones de desarrollo web
    document.querySelectorAll('.web-option-btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const optionCard = this.closest('.web-option-card');
            const optionTitle = optionCard.querySelector('h3').textContent;
            
            let messageType = 'web-desarrollo';
            
            if (optionTitle.includes('Landing')) {
                messageType = 'landing-page';
            } else if (optionTitle.includes('Informativo')) {
                messageType = 'sitio-informativo';
            } else if (optionTitle.includes('Tienda')) {
                messageType = 'tienda-online';
            }
            
            window.sendWhatsAppMessage(messageType);
        });
    });
    
    // Botones CTA principales
    document.querySelectorAll('.primary-cta-btn, .secondary-cta-btn').forEach(btn => {
        if (btn.textContent.includes('WhatsApp') || btn.textContent.includes('Consulta')) {
            btn.addEventListener('click', function(e) {
                e.preventDefault();
                window.sendWhatsAppMessage('consulta-web');
            });
        }
    });
}

// UTILIDADES GLOBALES
window.isMobileView = function() {
    return window.innerWidth <= 768;
};

window.getMobileMenuState = function() {
    const navLinks = document.querySelector('.nav-links');
    return navLinks ? navLinks.classList.contains('active') : false;
};

window.forceCloseMobileMenu = function() {
    const navLinks = document.querySelector('.nav-links');
    const mobileToggle = document.querySelector('.mobile-nav-toggle');
    const body = document.body;
    
    if (navLinks) navLinks.classList.remove('active');
    if (mobileToggle) {
        mobileToggle.classList.remove('active');
        mobileToggle.setAttribute('aria-expanded', 'false');
    }
    
    body.classList.remove('menu-open');
    body.style.overflow = '';
    
    console.log('🔒 Menú cerrado forzosamente');
};

// MEJORAR ACCESIBILIDAD
function enhanceAccessibility() {
    console.log('♿ Mejorando accesibilidad...');
    
    // Inicializar tooltips
    const interactiveElements = document.querySelectorAll('.device-btn, .filter-btn, .thumbnail');
    interactiveElements.forEach(element => {
        if (!element.title && !element.getAttribute('aria-label')) {
            const text = element.textContent.trim() || element.alt || 'Elemento interactivo';
            element.title = text;
        }
    });
    
    // Mejorar accesibilidad de botones
    const buttons = document.querySelectorAll('button');
    buttons.forEach(btn => {
        if (!btn.getAttribute('aria-label') && !btn.getAttribute('title')) {
            const text = btn.textContent.trim();
            if (text) {
                btn.setAttribute('aria-label', text);
            }
        }
    });
    
    // Mejorar accesibilidad de enlaces
    const links = document.querySelectorAll('a');
    links.forEach(link => {
        if (link.getAttribute('href') === '#' && !link.getAttribute('aria-label')) {
            const text = link.textContent.trim();
            if (text) {
                link.setAttribute('aria-label', text);
            }
        }
    });
    
    // Configurar enlaces externos
    const externalLinks = document.querySelectorAll('a[href^="http"]');
    externalLinks.forEach(link => {
        link.setAttribute('target', '_blank');
        link.setAttribute('rel', 'noopener noreferrer');
        
        if (!link.getAttribute('aria-label')) {
            const text = link.textContent.trim();
            link.setAttribute('aria-label', `${text} (se abre en nueva ventana)`);
        }
    });
}

// GESTIÓN DE ERRORES
function setupErrorHandling() {
    window.addEventListener('error', function(e) {
        console.error('❌ Error capturado:', e.error);
        
        if (e.error && e.error.message) {
            const errorMessage = e.error.message.toLowerCase();
            
            if (errorMessage.includes('nav') || errorMessage.includes('menu')) {
                console.log('🔧 Intentando reparar navegación móvil...');
                setTimeout(() => {
                    if (window.fixMobileMenu) {
                        window.fixMobileMenu();
                    }
                }, 1000);
            }
            
            if (errorMessage.includes('whatsapp')) {
                console.log('🔧 Reintentando configuración de WhatsApp...');
                setTimeout(() => {
                    setupWhatsAppIntegration();
                }, 1000);
            }
        }
    });
}

// PERFORMANCE Y OPTIMIZACIÓN
function setupPerformanceOptimizations() {
    // Lazy loading para imágenes
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.removeAttribute('data-src');
                        observer.unobserve(img);
                    }
                }
            });
        });

        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }
    
    // Preload de recursos críticos
    const criticalImages = [
        'Img/Banner.jpg',
        'Img/Cliente1.png'
    ];
    
    criticalImages.forEach(src => {
        const img = new Image();
        img.src = src;
    });
}

// MÉTRICAS Y ANALYTICS
function setupAnalytics() {
    let startTime = Date.now();
    let maxScroll = 0;

    // Tracking de interacciones
    document.addEventListener('click', function(e) {
        const element = e.target;
        
        if (element.classList.contains('cta-button') || 
            element.classList.contains('filter-btn') ||
            element.classList.contains('load-more-btn')) {
            
            const action = element.textContent.trim();
            const category = element.closest('section')?.id || 'general';
            
            console.log('📊 Interacción registrada:', { category, action });
            
            if (typeof gtag !== 'undefined') {
                gtag('event', 'click', {
                    event_category: category,
                    event_label: action
                });
            }
        }
    });

    // Tracking de scroll
    window.addEventListener('scroll', function() {
        const scrollPercent = Math.round((window.pageYOffset / (document.body.scrollHeight - window.innerHeight)) * 100);
        maxScroll = Math.max(maxScroll, scrollPercent);
    });

    // Tracking de tiempo en página
    window.addEventListener('beforeunload', function() {
        const timeOnPage = Math.round((Date.now() - startTime) / 1000);
        
        console.log('📊 Estadísticas de sesión:', {
            timeOnPage: `${timeOnPage}s`,
            maxScroll: `${maxScroll}%`,
            viewport: `${window.innerWidth}x${window.innerHeight}`,
            userAgent: navigator.userAgent.includes('Mobile') ? 'mobile' : 'desktop'
        });
        
        if (typeof gtag !== 'undefined') {
            gtag('event', 'page_engagement', {
                event_category: 'Engagement',
                custom_parameter_time_on_page: timeOnPage,
                custom_parameter_max_scroll: maxScroll
            });
        }
    });
}

// FUNCIONES DE DEBUG ADICIONALES
window.debugPortfolio = function() {
    console.log('=== DEBUG PORTFOLIO GENERAL ===');
    console.log('📱 Ancho de ventana:', window.innerWidth);
    console.log('📱 Alto de ventana:', window.innerHeight);
    console.log('📱 Es móvil:', window.isMobileView());
    
    const keyElements = {
        'nav': document.querySelector('nav'),
        'mobile-toggle': document.querySelector('.mobile-nav-toggle'),
        'nav-links': document.querySelector('.nav-links'),
        'portfolio-grid': document.querySelector('.portfolio-grid'),
        'clients-carousel': document.querySelector('.clients-carousel'),
        'whatsapp-float': document.querySelector('#whatsappFloat'),
        'contact-form': document.querySelector('#contactForm')
    };
    
    Object.entries(keyElements).forEach(([name, element]) => {
        console.log(`${element ? '✅' : '❌'} ${name}:`, !!element);
    });
    
    console.log('=== FIN DEBUG ===');
};

window.fixAll = function() {
    console.log('🔧 Ejecutando reparación completa...');
    
    if (window.fixMobileMenu) {
        window.fixMobileMenu();
    }
    
    setTimeout(() => {
        setupWhatsAppIntegration();
    }, 500);
    
    setTimeout(() => {
        window.dispatchEvent(new Event('scroll'));
    }, 1000);
    
    console.log('✅ Reparación completa finalizada');
};

// ================================
// ESTILOS CSS ADICIONALES PARA SECTORES (CORREGIDO)
// ================================

const additionalStyles = `
<style>
/* Estilos para el sistema de sectores conectado */
.portfolio-sectors {
    opacity: 1;
    transform: translateY(0);
    transition: all 0.5s ease;
}

.sector-section {
    margin-bottom: 4rem;
    opacity: 1;
    transform: translateY(0);
    transition: all 0.6s ease;
}

.sector-section.hidden {
    opacity: 0;
    transform: translateY(30px);
    pointer-events: none;
    height: 0;
    overflow: hidden;
    margin-bottom: 0;
}

.sector-header {
    position: relative;
    height: 200px;
    border-radius: 25px;
    overflow: hidden;
    margin-bottom: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
}

.sector-background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    z-index: 1;
}

.sector-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, rgba(0, 0, 0, 0.7) 0%, rgba(102, 126, 234, 0.6) 50%, rgba(0, 0, 0, 0.8) 100%);
    z-index: 2;
}

.sector-content {
    position: relative;
    z-index: 3;
    color: white;
    padding: 2rem;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
}

.sector-content h3 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    font-weight: bold;
}

.sector-content p {
    font-size: 1.2rem;
    opacity: 0.95;
    max-width: 600px;
    margin: 0 auto;
    line-height: 1.6;
}

.sector-stats {
    position: absolute;
    top: 20px;
    right: 20px;
    background: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(10px);
    padding: 10px 20px;
    border-radius: 25px;
    color: white;
    font-weight: bold;
    z-index: 4;
}

.sector-projects {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 2rem;
}

.project-card-sector {
    background: white;
    border-radius: 20px;
    padding: 2rem;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
    border: 2px solid transparent;
    position: relative;
    overflow: hidden;
}

.project-card-sector::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #667eea, #764ba2);
    transform: scaleX(0);
    transition: transform 0.3s ease;
}

.project-card-sector:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(102, 126, 234, 0.2);
    border-color: #667eea;
}

.project-card-sector:hover::before {
    transform: scaleX(1);
}

.project-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 1.5rem;
}

.project-header h4 {
    font-size: 1.3rem;
    color: #333;
    margin: 0;
    flex: 1;
}

.project-category-tag {
    background: linear-gradient(45deg, #667eea, #764ba2);
    color: white;
    padding: 4px 12px;
    border-radius: 15px;
    font-size: 0.7rem;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

.project-preview-img {
    width: 100%;
    height: 180px;
    background: #f8f9fa;
    border-radius: 15px;
    margin-bottom: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #999;
    font-size: 0.9rem;
    background-size: cover;
    background-position: center;
    position: relative;
    overflow: hidden;
}

.project-preview-img::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, rgba(102, 126, 234, 0.1), rgba(118, 75, 162, 0.1));
    opacity: 0;
    transition: opacity 0.3s ease;
}

.project-card-sector:hover .project-preview-img::after {
    opacity: 1;
}

.project-description {
    color: #666;
    line-height: 1.6;
    margin-bottom: 1.5rem;
}

.project-tags {
    display: flex;
    gap: 0.5rem;
    flex-wrap: wrap;
    margin-bottom: 1.5rem;
}

.project-tag {
    background: rgba(102, 126, 234, 0.1);
    color: #667eea;
    padding: 4px 10px;
    border-radius: 12px;
    font-size: 0.8rem;
    font-weight: 500;
}

.project-cta {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    color: #667eea;
    text-decoration: none;
    font-weight: 600;
    transition: all 0.3s ease;
}

.project-cta:hover {
    color: #764ba2;
    transform: translateX(5px);
}

/* Variaciones de overlay por sector */
.sector-restaurantes .sector-overlay {
    background: linear-gradient(135deg, rgba(184, 134, 11, 0.8) 0%, rgba(133, 77, 14, 0.7) 100%);
}

.sector-juridico .sector-overlay {
    background: linear-gradient(135deg, rgba(29, 40, 60, 0.8) 0%, rgba(128, 95, 78, 0.7) 100%);
}

.sector-inmobiliario .sector-overlay {
    background: linear-gradient(135deg, rgba(102, 126, 234, 0.8) 0%, rgba(118, 75, 162, 0.7) 100%);
}

.sector-belleza .sector-overlay {
    background: linear-gradient(135deg, rgba(236, 112, 99, 0.8) 0%, rgba(174, 214, 241, 0.7) 100%);
}

.sector-turismo .sector-overlay {
    background: linear-gradient(135deg, rgba(52, 152, 219, 0.8) 0%, rgba(155, 89, 182, 0.7) 100%);
}

/* Responsive */
@media (max-width: 768px) {
    .sector-header {
        height: 150px;
    }
    
    .sector-content h3 {
        font-size: 2rem;
    }
    
    .sector-content p {
        font-size: 1rem;
    }
    
    .sector-stats {
        position: static;
        margin-top: 1rem;
        display: inline-block;
    }
    
    .sector-projects {
        grid-template-columns: 1fr;
        gap: 1.5rem;
    }
}

/* Animaciones */
@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.project-card-sector.animate-in {
    animation: fadeInUp 0.6s ease forwards;
}
</style>
`;

// ================================
// INICIALIZACIÓN PRINCIPAL
// ================================

document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Inicializando Portfolio Completo...');
    
    // Inyectar estilos CSS
    document.head.insertAdjacentHTML('beforeend', additionalStyles);
    
    // Inicializar todas las funcionalidades
    initializeHeroVideo();
    initializeMobileNavigation();
    initializeSmoothScrolling();
    initializeBeforeAfterSliders();
    initializeVeroGallery();
    initializeDeviceMockups();
    initializeClientsCarousel();
    initializeWhatsAppChat();
    initializeContactForm();
    initializeScrollEffects();
    initializeScrollProgress();
    initializeScrollToTop();
    initializeScrollAnimations();
    enhanceAccessibility();
    setupErrorHandling();
    setupPerformanceOptimizations();
    setupAnalytics();
    
    // Sistema conectado (después de que todo esté cargado)
    setTimeout(() => {
        initializeConnectedPortfolio();
        setupWhatsAppIntegration();
    }, 1000);
    
    console.log('✅ Portfolio completamente inicializado');
});

// ================================
// EXPONER FUNCIONES GLOBALMENTE
// ================================

window.openConnectedProject = openConnectedProject;
window.debugConnectedPortfolio = debugConnectedPortfolio;

console.log('✅ Script Completo de CM Pro Portfolio cargado');
console.log('🎯 Funciones disponibles:');
console.log('  • connectedPortfolio.debug() - Ver estadísticas completas');
console.log('  • connectedPortfolio.addProject(sector, data) - Agregar proyecto');
console.log('  • connectedPortfolio.editProject(id, data) - Editar proyecto');
console.log('  • openConnectedProject(id) - Abrir proyecto específico');
console.log('  • debugPortfolio() - Debug general del portfolio');
console.log('  • fixAll() - Reparación completa del sistema');
console.log('  • sendWhatsAppMessage(tipo) - Enviar WhatsApp directo');

// Auto-verificación final
setTimeout(() => {
    const htmlCards = document.querySelectorAll('.portfolio-item[data-connected="true"]');
    console.log(`🔗 Tarjetas HTML conectadas: ${htmlCards.length}`);
    
    if (htmlCards.length === 0) {
        console.warn('⚠️ No se detectaron tarjetas HTML conectadas');
        console.log('💡 Ejecuta connectedPortfolio.debug() para más información');
    }
    
    console.log('🎉 Sistema completamente operativo');
}, 3000);

// Inicializar galería Veró
        function initializeVeroGallery() {
            const veroMainImage = document.getElementById('veroMainImage');
            const veroThumbnails = document.querySelectorAll('#veroThumbnails .thumbnail');
            const veroCounter = document.getElementById('veroCounter');
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
        }

        // Device mockup functionality
        function initializeDeviceMockups() {
            const deviceBtns = document.querySelectorAll('.device-btn');
            const deviceFrames = document.querySelectorAll('.device-frame');

            deviceBtns.forEach(btn => {
                btn.addEventListener('click', function() {
                    deviceBtns.forEach(b => b.classList.remove('active'));
                    this.classList.add('active');

                    const deviceType = this.getAttribute('data-device');
                    
                    deviceFrames.forEach(frame => {
                        frame.className = 'device-frame';
                        if (deviceType === 'tablet') {
                            frame.style.padding = '30px 15px';
                            frame.querySelector('.website-preview').style.width = '350px';
                            frame.querySelector('.website-preview').style.height = '280px';
                        } else if (deviceType === 'mobile') {
                            frame.style.padding = '40px 10px';
                            frame.style.maxWidth = '300px';
                            frame.querySelector('.website-preview').style.width = '250px';
                            frame.querySelector('.website-preview').style.height = '400px';
                        } else {
                            frame.style.padding = '20px';
                            frame.style.maxWidth = 'none';
                            frame.querySelector('.website-preview').style.width = '100%';
                            frame.querySelector('.website-preview').style.maxWidth = '400px';
                            frame.querySelector('.website-preview').style.height = '250px';
                        }
                    });
                });
            });
        }

// ================================
// SISTEMA MULTI-INSTANCIA PARA REELS
// Funciona con múltiples carruseles en la misma página
// ================================

class MultiReelsCarouselSystem {
    constructor() {
        this.instances = [];
        this.globalId = 0;
        this.init();
    }

    init() {
        console.log('🎠 Inicializando sistema multi-instancia de reels...');
        
        // Buscar TODOS los contenedores de reels en la página
        const containers = document.querySelectorAll('.reels-carousel-container');
        
        if (containers.length === 0) {
            console.log('❌ No se encontraron contenedores de reels');
            return;
        }

        console.log(`🎯 Encontrados ${containers.length} carruseles de reels`);

        // Crear una instancia para cada contenedor
        containers.forEach((container, index) => {
            this.createReelInstance(container, index);
        });

        // Setup global events
        this.setupGlobalEvents();
        
        console.log(`✅ Sistema inicializado con ${this.instances.length} instancias`);
    }

    createReelInstance(container, index) {
        // Asignar IDs únicos si no los tienen
        if (!container.id) {
            container.id = `reelsCarouselContainer_${index}`;
        }

        const carousel = container.querySelector('.reels-carousel');
        if (!carousel.id) {
            carousel.id = `reelsCarousel_${index}`;
        }

        // Crear instancia individual
        const instance = new SingleReelsCarousel(container, carousel, index);
        this.instances.push(instance);

        console.log(`✅ Instancia ${index + 1} creada para: ${container.id}`);
    }

    setupGlobalEvents() {
        // Pausar videos cuando se cambia de pestaña
        document.addEventListener('visibilitychange', () => {
            if (document.hidden) {
                this.pauseAllInstances();
                console.log('⏸️ Todos los videos pausados (página oculta)');
            }
        });

        // Pausar otros videos cuando uno empieza a reproducir
        document.addEventListener('video-started', (e) => {
            const startedInstanceId = e.detail.instanceId;
            this.instances.forEach(instance => {
                if (instance.id !== startedInstanceId) {
                    instance.pauseAllVideos();
                }
            });
        });
    }

    pauseAllInstances() {
        this.instances.forEach(instance => {
            instance.pauseAllVideos();
        });
    }

    getInstance(index) {
        return this.instances[index] || null;
    }

    getAllInstances() {
        return this.instances;
    }

    getStatus() {
        return this.instances.map((instance, index) => ({
            instanceId: instance.id,
            containerSelector: `#${instance.container.id}`,
            status: instance.getStatus()
        }));
    }
}

// ================================
        // JAVASCRIPT PARA REELS INDIVIDUALES POR SECTORES
        // ================================

        class SectorReelsManager {
            constructor() {
                this.activeVideo = null;
                this.init();
            }

            init() {
                console.log('🎬 Inicializando reels por sectores...');
                this.setupAllReels();
                this.setupGlobalEvents();
                console.log('✅ Sistema de reels por sectores inicializado');
            }

            setupAllReels() {
                const reelContainers = document.querySelectorAll('.reel-video-container');
                console.log(`🎯 Encontrados ${reelContainers.length} reels`);
                
                reelContainers.forEach((container, index) => {
                    this.setupSingleReel(container, index);
                });
            }

            setupSingleReel(container, index) {
                const video = container.querySelector('.reel-video');
                const overlay = container.querySelector('.reel-overlay');
                const playButton = container.querySelector('.reel-play-button');
                const progressBar = container.querySelector('.reel-progress-bar');
                const progress = container.querySelector('.reel-progress');
                const volumeBtn = container.querySelector('.volume-btn');
                const fullscreenBtn = container.querySelector('.fullscreen-btn');
                const reelId = container.getAttribute('data-reel-id');

                if (!video) {
                    console.warn(`⚠️ Video no encontrado en reel ${index + 1}`);
                    return;
                }

                // Play/Pause functionality
                const toggleVideo = () => {
                    if (video.paused) {
                        this.pauseAllVideos();
                        this.playVideo(container, video, reelId);
                    } else {
                        this.pauseVideo(container, video, reelId);
                    }
                };

                // Event listeners
                overlay.addEventListener('click', toggleVideo);
                playButton.addEventListener('click', (e) => {
                    e.stopPropagation();
                    toggleVideo();
                });

                // Volume control
                if (volumeBtn) {
                    volumeBtn.addEventListener('click', (e) => {
                        e.stopPropagation();
                        this.toggleVolume(video, volumeBtn);
                    });
                }

                // Progress bar
                if (progress) {
                    progress.addEventListener('click', (e) => {
                        e.stopPropagation();
                        this.seekVideo(e, video, progress);
                    });
                }

                // Fullscreen
                if (fullscreenBtn) {
                    fullscreenBtn.addEventListener('click', (e) => {
                        e.stopPropagation();
                        this.toggleFullscreen(container);
                    });
                }

                // Video events
                video.addEventListener('loadstart', () => {
                    container.classList.add('loading');
                });

                video.addEventListener('canplay', () => {
                    container.classList.remove('loading');
                });

                video.addEventListener('timeupdate', () => {
                    this.updateProgress(video, progressBar);
                });

                video.addEventListener('ended', () => {
                    container.classList.remove('playing');
                    if (playButton) playButton.innerHTML = '▶';
                    this.activeVideo = null;
                    console.log(`🏁 Reel terminado: ${reelId}`);
                });

                video.addEventListener('error', (e) => {
                    console.error(`❌ Error en reel ${reelId}:`, e);
                    container.classList.remove('loading');
                    if (playButton) {
                        playButton.innerHTML = '❌';
                        setTimeout(() => {
                            playButton.innerHTML = '▶';
                        }, 3000);
                    }
                });

                console.log(`✅ Reel configurado: ${reelId}`);
            }

            async playVideo(container, video, reelId) {
                try {
                    container.classList.add('loading');
                    
                    await video.play();
                    
                    container.classList.remove('loading');
                    container.classList.add('playing');
                    
                    const playButton = container.querySelector('.reel-play-button');
                    if (playButton) playButton.innerHTML = '⏸';
                    
                    this.activeVideo = video;
                    
                    console.log(`✅ Reproduciendo: ${reelId}`);
                    
                    // Activar audio después de un momento
                    setTimeout(() => {
                        if (!video.paused && video.muted) {
                            video.muted = false;
                            const volumeBtn = container.querySelector('.volume-btn');
                            if (volumeBtn) volumeBtn.textContent = '🔊';
                        }
                    }, 1000);
                    
                } catch (error) {
                    console.error(`❌ Error al reproducir ${reelId}:`, error);
                    container.classList.remove('loading');
                    
                    if (error.name === 'NotAllowedError') {
                        video.muted = true;
                        try {
                            await video.play();
                            container.classList.add('playing');
                            this.activeVideo = video;
                            console.log(`✅ Reproduciendo (muted): ${reelId}`);
                        } catch (e) {
                            console.error(`❌ Falló incluso con muted en ${reelId}:`, e);
                        }
                    }
                }
            }

            pauseVideo(container, video, reelId) {
                video.pause();
                container.classList.remove('playing');
                
                const playButton = container.querySelector('.reel-play-button');
                if (playButton) playButton.innerHTML = '▶';
                
                if (this.activeVideo === video) {
                    this.activeVideo = null;
                }
                
                console.log(`⏸️ Pausado: ${reelId}`);
            }

            pauseAllVideos() {
                const containers = document.querySelectorAll('.reel-video-container');
                
                containers.forEach(container => {
                    const video = container.querySelector('.reel-video');
                    const reelId = container.getAttribute('data-reel-id');
                    
                    if (video && !video.paused) {
                        this.pauseVideo(container, video, reelId);
                    }
                });
            }

            toggleVolume(video, button) {
                if (video.muted) {
                    video.muted = false;
                    button.textContent = '🔊';
                    console.log('🔊 Audio activado');
                } else {
                    video.muted = true;
                    button.textContent = '🔇';
                    console.log('🔇 Audio silenciado');
                }
            }

            seekVideo(event, video, progressContainer) {
                const rect = progressContainer.getBoundingClientRect();
                const clickX = event.clientX - rect.left;
                const percentage = clickX / rect.width;
                const newTime = percentage * video.duration;
                
                if (!isNaN(newTime) && isFinite(newTime)) {
                    video.currentTime = newTime;
                    console.log(`⏭️ Saltado a: ${this.formatTime(newTime)}`);
                }
            }

            updateProgress(video, progressBar) {
                if (!video.duration || !progressBar) return;
                
                const percentage = (video.currentTime / video.duration) * 100;
                progressBar.style.width = percentage + '%';
            }

            toggleFullscreen(container) {
                if (document.fullscreenElement) {
                    document.exitFullscreen();
                } else {
                    container.requestFullscreen().catch(err => {
                        console.log('❌ Error fullscreen:', err);
                    });
                }
            }

            setupGlobalEvents() {
                // Pause videos when page becomes hidden
                document.addEventListener('visibilitychange', () => {
                    if (document.hidden) {
                        this.pauseAllVideos();
                        console.log('⏸️ Todos los videos pausados (página oculta)');
                    }
                });

                // Intersection Observer for performance
                const observer = new IntersectionObserver((entries) => {
                    entries.forEach(entry => {
                        const video = entry.target.querySelector('.reel-video');
                        const reelId = entry.target.getAttribute('data-reel-id');
                        
                        if (!entry.isIntersecting && video && !video.paused) {
                            this.pauseVideo(entry.target, video, reelId);
                            console.log(`⏸️ Pausado por salir de vista: ${reelId}`);
                        }
                    });
                }, { threshold: 0.5 });

                document.querySelectorAll('.reel-video-container').forEach(container => {
                    observer.observe(container);
                });
            }

            formatTime(seconds) {
                if (!isFinite(seconds) || isNaN(seconds)) return '0:00';
                
                const mins = Math.floor(seconds / 60);
                const secs = Math.floor(seconds % 60);
                return `${mins}:${secs.toString().padStart(2, '0')}`;
            }

            // Public methods
            getActiveVideo() {
                return this.activeVideo;
            }

            playReelById(reelId) {
                const container = document.querySelector(`[data-reel-id="${reelId}"]`);
                if (container) {
                    const video = container.querySelector('.reel-video');
                    if (video) {
                        this.pauseAllVideos();
                        this.playVideo(container, video, reelId);
                    }
                } else {
                    console.warn(`⚠️ Reel no encontrado: ${reelId}`);
                }
            }

            pauseReelById(reelId) {
                const container = document.querySelector(`[data-reel-id="${reelId}"]`);
                if (container) {
                    const video = container.querySelector('.reel-video');
                    if (video) {
                        this.pauseVideo(container, video, reelId);
                    }
                }
            }

            getReelsBySector(sector) {
                const containers = document.querySelectorAll(`[data-reel-id^="${sector}-"]`);
                return Array.from(containers).map(container => {
                    const reelId = container.getAttribute('data-reel-id');
                    const video = container.querySelector('.reel-video');
                    const isPlaying = container.classList.contains('playing');
                    
                    return {
                        id: reelId,
                        container: container,
                        video: video,
                        isPlaying: isPlaying,
                        sector: sector
                    };
                });
            }

            getAllSectors() {
                const allReels = document.querySelectorAll('[data-reel-id]');
                const sectors = new Set();
                
                allReels.forEach(reel => {
                    const reelId = reel.getAttribute('data-reel-id');
                    const sector = reelId.split('-')[0];
                    sectors.add(sector);
                });
                
                return Array.from(sectors);
            }
        }

        // ================================
        // FUNCIONES AUXILIARES
        // ================================

        function openReelDetails(reelId) {
            console.log(`📊 Abriendo métricas para: ${reelId}`);
            
            // Simular datos específicos por sector
            const sectorData = {
                'juridico': {
                    engagement: '12.5%',
                    leads: '47 consultas',
                    reach: '25.3K',
                    saves: '890'
                },
                'belleza': {
                    engagement: '18.2%',
                    leads: '73 citas',
                    reach: '45.7K',
                    saves: '1.2K'
                },
                'restaurante': {
                    engagement: '22.8%',
                    leads: '156 reservas',
                    reach: '38.9K',
                    saves: '2.1K'
                },
                'salud': {
                    engagement: '16.4%',
                    leads: '89 consultas',
                    reach: '52.1K',
                    saves: '1.8K'
                },
                'inmobiliario': {
                    engagement: '14.7%',
                    leads: '34 visitas',
                    reach: '28.4K',
                    saves: '650'
                }
            };
            
            const sector = reelId.split('-')[0];
            const data = sectorData[sector] || sectorData['juridico'];
            
            alert(`📊 Métricas del reel: ${reelId}

🎯 Engagement: ${data.engagement}
🔥 Leads generados: ${data.leads}
👥 Alcance: ${data.reach}
💾 Guardados: ${data.saves}

💡 Tip: Este reel está generando excelentes resultados para el sector ${sector}!`);
        }

        // Función global para WhatsApp (debe estar definida en tu whatsapp.js)
        function sendWhatsAppMessage(type) {
            console.log(`📱 Enviando mensaje WhatsApp: ${type}`);
            
            const messages = {
                'branding': 'Hola, me interesa el servicio de Branding e Identidad Visual',
                'consulta-general': 'Hola, me gustaría recibir información sobre sus servicios de Community Manager'
            };
            
            const message = messages[type] || messages['consulta-general'];
            
            // Aquí iría tu lógica real de WhatsApp
            console.log(`Mensaje: ${message}`);
        }

        // ================================
        // INICIALIZACIÓN
        // ================================

        let sectorReelsManager;

        document.addEventListener('DOMContentLoaded', () => {
            setTimeout(() => {
                sectorReelsManager = new SectorReelsManager();
                
                // Hacer disponible globalmente
                window.sectorReelsManager = sectorReelsManager;
                
                console.log('🎉 Sistema de reels por sectores completamente inicializado');
            }, 500);
        });

        // ================================
        // FUNCIONES GLOBALES DE DEBUG Y CONTROL
        // ================================

        window.debugSectorReels = function() {
            console.log('=== DEBUG REELS POR SECTORES ===');
            
            if (!window.sectorReelsManager) {
                console.log('❌ Sistema no inicializado');
                return;
            }
            
            const sectors = sectorReelsManager.getAllSectors();
            console.log(`📊 Sectores encontrados: ${sectors.length}`);
            
            sectors.forEach(sector => {
                const reels = sectorReelsManager.getReelsBySector(sector);
                console.log(`\n🎬 Sector: ${sector.toUpperCase()}`);
                console.log(`   Reels: ${reels.length}`);
                
                reels.forEach((reel, index) => {
                    console.log(`   ${index + 1}. ${reel.id} - ${reel.isPlaying ? '▶️ Reproduciendo' : '⏸️ Pausado'}`);
                });
            });
            
            const activeVideo = sectorReelsManager.getActiveVideo();
            console.log(`\n🎯 Video activo: ${activeVideo ? '✅ Sí' : '❌ No'}`);
            
            console.log('=== FIN DEBUG ===');
        };

        window.testSectorReels = function() {
            console.log('🧪 PROBANDO REELS POR SECTORES:');
            
            if (!window.sectorReelsManager) {
                console.log('❌ Sistema no disponible');
                return;
            }
            
            const sectors = sectorReelsManager.getAllSectors();
            console.log(`🎯 Probando ${sectors.length} sectores...`);
            
            sectors.forEach((sector, sectorIndex) => {
                const reels = sectorReelsManager.getReelsBySector(sector);
                
                reels.forEach((reel, reelIndex) => {
                    const delay = (sectorIndex * 3 + reelIndex) * 2000;
                    
                    setTimeout(() => {
                        console.log(`🎬 Probando: ${reel.id}`);
                        sectorReelsManager.playReelById(reel.id);
                        
                        setTimeout(() => {
                            sectorReelsManager.pauseReelById(reel.id);
                        }, 1500);
                    }, delay);
                });
            });
            
            console.log(`⏰ Observa durante los próximos ${sectors.length * 6} segundos`);
        };

        window.playSectorReel = function(sector, reelNumber = 1) {
            if (!window.sectorReelsManager) {
                console.log('❌ Sistema no disponible');
                return;
            }
            
            const reelId = `${sector}-${reelNumber}`;
            sectorReelsManager.playReelById(reelId);
            console.log(`🎬 Reproduciendo: ${reelId}`);
        };

        window.pauseAllSectorReels = function() {
            if (!window.sectorReelsManager) {
                console.log('❌ Sistema no disponible');
                return;
            }
            
            sectorReelsManager.pauseAllVideos();
            console.log('⏸️ Todos los reels pausados');
        };

        window.getSectorStats = function() {
            if (!window.sectorReelsManager) {
                console.log('❌ Sistema no disponible');
                return;
            }
            
            const sectors = sectorReelsManager.getAllSectors();
            const stats = {};
            
            sectors.forEach(sector => {
                const reels = sectorReelsManager.getReelsBySector(sector);
                stats[sector] = {
                    total: reels.length,
                    playing: reels.filter(r => r.isPlaying).length,
                    paused: reels.filter(r => !r.isPlaying).length
                };
            });
            
            console.log('📊 ESTADÍSTICAS POR SECTOR:');
            Object.entries(stats).forEach(([sector, data]) => {
                console.log(`${sector.toUpperCase()}: ${data.total} total, ${data.playing} reproduciendo, ${data.paused} pausados`);
            });
            
            return stats;
        };

        console.log('✅ Sistema de reels por sectores cargado');
        console.log('💡 Funciones disponibles:');
        console.log('   • debugSectorReels() - Debug completo del sistema');
        console.log('   • testSectorReels() - Prueba automática de todos los sectores');
        console.log('   • playSectorReel(sector, numero) - Reproducir reel específico');
        console.log('   • pauseAllSectorReels() - Pausar todos los reels');
        console.log('   • getSectorStats() - Estadísticas por sector');
        console.log('   • openReelDetails(reelId) - Ver métricas de un reel');
        
        console.log('\n🎯 Ejemplos de uso:');
        console.log('   playSectorReel("juridico", 1) - Reproduce primer reel jurídico');
        console.log('   playSectorReel("belleza", 2) - Reproduce segundo reel de belleza');
        console.log('   openReelDetails("salud-1") - Ve métricas del primer reel de salud');

// Exportar para uso en otros módulos
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { ReelPlayer };
}

        // Animación de números
        function animateNumbers() {
            const numbers = document.querySelectorAll('.metric-value[data-count]');
            
            numbers.forEach(num => {
                const target = parseInt(num.getAttribute('data-count'));
                let current = 0;
                const increment = target / 50;
                
                const timer = setInterval(() => {
                    current += increment;
                    if (current >= target) {
                        current = target;
                        clearInterval(timer);
                    }
                    num.textContent = Math.floor(current).toLocaleString();
                }, 30);
            });
        }

        // Animación de números con formato especial
        function animateSpecialNumbers() {
            const specialNumbers = document.querySelectorAll('.analytics-number, .metric-value:not([data-count])');
            
            specialNumbers.forEach(num => {
                const finalValue = num.textContent;
                const isPercentage = finalValue.includes('%');
                const isTime = finalValue.includes('s');
                const hasK = finalValue.includes('K');
                const hasM = finalValue.includes('M');
                
                let numberValue = parseFloat(finalValue.replace(/[^0-9.]/g, ''));
                
                if (hasK) numberValue = numberValue * 1000;
                if (hasM) numberValue = numberValue * 1000000;
                
                let currentValue = 0;
                const increment = numberValue / 50;
                
                const timer = setInterval(() => {
                    currentValue += increment;
                    
                    if (currentValue >= numberValue) {
                        currentValue = numberValue;
                        clearInterval(timer);
                    }
                    
                    let displayValue = currentValue;
                    
                    if (hasM) {
                        displayValue = (currentValue / 1000000).toFixed(1) + 'M';
                    } else if (hasK) {
                        displayValue = Math.floor(currentValue / 1000) + 'K';
                    } else if (isPercentage) {
                        displayValue = currentValue.toFixed(1) + '%';
                    } else if (isTime) {
                        displayValue = Math.floor(currentValue) + 's';
                    } else {
                        displayValue = Math.floor(currentValue).toLocaleString();
                    }
                    
                    num.textContent = displayValue;
                }, 30);
            });
        }

        // Intersection Observer para animaciones
        function setupAnimations() {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        if (entry.target.classList.contains('portfolio-metrics')) {
                            animateNumbers();
                            observer.unobserve(entry.target);
                        }
                        if (entry.target.classList.contains('instagram-analytics') || 
                            entry.target.classList.contains('reels-metrics')) {
                            animateSpecialNumbers();
                            observer.unobserve(entry.target);
                        }
                    }
                });
            }, { threshold: 0.5 });

            document.querySelectorAll('.portfolio-metrics, .instagram-analytics, .reels-metrics').forEach(el => {
                observer.observe(el);
            });
        }

        // Efecto parallax en posts de Instagram
        function setupInstagramEffects() {
            const posts = document.querySelectorAll('.instagram-post');
            
            posts.forEach((post) => {
                post.addEventListener('mousemove', function(e) {
                    const rect = this.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    
                    const centerX = rect.width / 2;
                    const centerY = rect.height / 2;
                    
                    const rotateX = (y - centerY) / 20;
                    const rotateY = (centerX - x) / 20;
                    
                    this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
                });
                
                post.addEventListener('mouseleave', function() {
                    this.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0)';
                });
            });
        }

        // Scroll suave para animaciones de entrada
        function setupScrollAnimations() {
            const cards = document.querySelectorAll('.portfolio-card');
            
            const observerOptions = {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            };
            
            const observer = new IntersectionObserver((entries) => {
                entries.forEach((entry, index) => {
                    if (entry.isIntersecting) {
                        setTimeout(() => {
                            entry.target.style.opacity = '1';
                            entry.target.style.transform = 'translateY(0)';
                        }, index * 100);
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);
            
            cards.forEach(card => {
                card.style.opacity = '0';
                card.style.transform = 'translateY(30px)';
                card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                observer.observe(card);
            });
        }

        // Inicializar todo
        document.addEventListener('DOMContentLoaded', function() {
            initializeVeroGallery();
            initializeDeviceMockups();
            initializeReels();
            setupAnimations();
            setupInstagramEffects();
            setupScrollAnimations();
            
            console.log('✅ Portfolio simplificado inicializado completamente');
        });

        // ================================
// JAVASCRIPT PARA FORMULARIO FUNCIONAL
// ================================

document.addEventListener('DOMContentLoaded', function() {
    console.log('📧 Inicializando formulario de contacto...');
    
    // ================================
    // CONFIGURACIÓN
    // ================================
    const config = {
        emailDestino: 'stivenfs2014@gmail.com',
        nombreSitio: 'Portfolio CM Pro',
        urlGracias: 'https://tudominio.com/gracias.html', // Cambiar por tu URL
        showSuccessMessage: true,
        redirectAfterSubmit: false
    };
    
    // ================================
    // FORMSPREE - CONFIGURACIÓN
    // ================================
    function initializeFormspree() {
        const form = document.getElementById('contactForm');
        
        if (!form) {
            console.warn('⚠️ Formulario no encontrado');
            return;
        }
        
        form.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            const submitBtn = form.querySelector('.submit-btn');
            const originalText = submitBtn.textContent;
            
            // Mostrar estado de carga
            submitBtn.textContent = 'Enviando...';
            submitBtn.disabled = true;
            submitBtn.style.opacity = '0.7';
            
            try {
                // Obtener datos del formulario
                const formData = new FormData(form);
                
                // Validar campos requeridos
                if (!validateForm(formData)) {
                    throw new Error('Por favor, completa todos los campos requeridos.');
                }
                
                // Enviar a Formspree
                const response = await fetch(form.action, {
                    method: 'POST',
                    body: formData,
                    headers: {
                        'Accept': 'application/json'
                    }
                });
                
                if (response.ok) {
                    showSuccessMessage();
                    form.reset();
                    
                    // Evento para Google Analytics
                    if (typeof gtag !== 'undefined') {
                        gtag('event', 'form_submit', {
                            event_category: 'Contact',
                            event_label: 'Contact Form Submitted'
                        });
                    }
                    
                    console.log('✅ Formulario enviado exitosamente');
                } else {
                    throw new Error('Error del servidor al enviar el formulario');
                }
                
            } catch (error) {
                console.error('❌ Error:', error);
                showErrorMessage(error.message);
            } finally {
                // Restaurar botón
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
                submitBtn.style.opacity = '1';
            }
        });
    }
    
    // ================================
    // EMAILJS - CONFIGURACIÓN ALTERNATIVA
    // ================================
    function initializeEmailJS() {
        // Inicializar EmailJS con tu User ID
        emailjs.init("YOUR_USER_ID"); // Cambiar por tu User ID de EmailJS
        
        window.sendEmail = async function(event) {
            event.preventDefault();
            
            const form = event.target;
            const submitBtn = form.querySelector('.submit-btn');
            const originalText = submitBtn.textContent;
            
            submitBtn.textContent = 'Enviando...';
            submitBtn.disabled = true;
            
            try {
                const formData = new FormData(form);
                const templateParams = {
                    to_email: config.emailDestino,
                    from_name: formData.get('name'),
                    from_email: formData.get('email'),
                    phone: formData.get('phone'),
                    company: formData.get('company'),
                    service: formData.get('service'),
                    message: formData.get('message'),
                    site_name: config.nombreSitio
                };
                
                await emailjs.send(
                    'YOUR_SERVICE_ID',    // Tu Service ID
                    'YOUR_TEMPLATE_ID',   // Tu Template ID
                    templateParams
                );
                
                showSuccessMessage();
                form.reset();
                console.log('✅ Email enviado via EmailJS');
                
            } catch (error) {
                console.error('❌ Error EmailJS:', error);
                showErrorMessage('Error al enviar el email. Intenta nuevamente.');
            } finally {
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }
            
            return false;
        };
    }
    
    // ================================
    // VALIDACIÓN DE FORMULARIO
    // ================================
    function validateForm(formData) {
        const requiredFields = ['name', 'email', 'phone'];
        
        for (let field of requiredFields) {
            const value = formData.get(field);
            if (!value || value.trim() === '') {
                showErrorMessage(`El campo ${getFieldLabel(field)} es requerido.`);
                return false;
            }
        }
        
        // Validar email
        const email = formData.get('email');
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            showErrorMessage('Por favor, ingresa un email válido.');
            return false;
        }
        
        // Validar teléfono
        const phone = formData.get('phone');
        const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
        if (!phoneRegex.test(phone.replace(/[\s\-\(\)]/g, ''))) {
            showErrorMessage('Por favor, ingresa un teléfono válido.');
            return false;
        }
        
        return true;
    }
    
    function getFieldLabel(fieldName) {
        const labels = {
            'name': 'Nombre',
            'email': 'Email',
            'phone': 'Teléfono',
            'company': 'Empresa',
            'service': 'Servicio',
            'message': 'Mensaje'
        };
        return labels[fieldName] || fieldName;
    }
    
    // ================================
    // MENSAJES DE RESPUESTA
    // ================================
    function showSuccessMessage() {
        const message = createNotification(
            '✅ ¡Mensaje enviado!',
            'Gracias por tu interés. Te contactaremos en las próximas 24 horas.',
            'success'
        );
        showNotification(message);
    }
    
    function showErrorMessage(errorText) {
        const message = createNotification(
            '❌ Error',
            errorText,
            'error'
        );
        showNotification(message);
    }
    
    function createNotification(title, text, type) {
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.innerHTML = `
            <div class="notification-content">
                <h4>${title}</h4>
                <p>${text}</p>
                <button class="notification-close" onclick="this.parentElement.parentElement.remove()">&times;</button>
            </div>
        `;
        
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: ${type === 'success' ? '#002366' : '#f44336'};
            color: white;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 10px 25px rgba(0,0,0,0.2);
            z-index: 10000;
            max-width: 400px;
            animation: slideInRight 0.3s ease;
        `;
        
        return notification;
    }
    
    function showNotification(notification) {
        document.body.appendChild(notification);
        
        // Auto-remover después de 5 segundos
        setTimeout(() => {
            if (notification.parentNode) {
                notification.style.animation = 'slideOutRight 0.3s ease';
                setTimeout(() => notification.remove(), 300);
            }
        }, 5000);
    }
    
    // ================================
    // MEJORAS DE UX
    // ================================
    function setupFormEnhancements() {
        const form = document.getElementById('contactForm');
        if (!form) return;
        
        // Auto-focus en primer campo
        const firstInput = form.querySelector('input[type="text"]');
        if (firstInput) {
            setTimeout(() => firstInput.focus(), 1000);
        }
        
        // Validación en tiempo real
        const inputs = form.querySelectorAll('input, textarea, select');
        inputs.forEach(input => {
            input.addEventListener('blur', function() {
                validateField(this);
            });
            
            input.addEventListener('input', function() {
                clearFieldError(this);
            });
        });
        
        // Enter para enviar
        form.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' && e.ctrlKey) {
                form.dispatchEvent(new Event('submit'));
            }
        });
    }
    
    function validateField(field) {
        const value = field.value.trim();
        const isRequired = field.hasAttribute('required');
        
        if (isRequired && !value) {
            showFieldError(field, 'Este campo es requerido');
            return false;
        }
        
        if (field.type === 'email' && value) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(value)) {
                showFieldError(field, 'Email inválido');
                return false;
            }
        }
        
        clearFieldError(field);
        return true;
    }
    
    function showFieldError(field, message) {
        clearFieldError(field);
        
        const errorDiv = document.createElement('div');
        errorDiv.className = 'field-error';
        errorDiv.textContent = message;
        errorDiv.style.cssText = `
            color: #ff6b6b;
            font-size: 0.8rem;
            margin-top: 5px;
            animation: fadeIn 0.3s ease;
        `;
        
        field.parentNode.appendChild(errorDiv);
        field.style.borderColor = '#ff6b6b';
    }
    
    function clearFieldError(field) {
        const errorDiv = field.parentNode.querySelector('.field-error');
        if (errorDiv) {
            errorDiv.remove();
        }
        field.style.borderColor = '';
    }
    
    // ================================
    // CSS PARA ANIMACIONES
    // ================================
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideInRight {
            from { transform: translateX(100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
        
        @keyframes slideOutRight {
            from { transform: translateX(0); opacity: 1; }
            to { transform: translateX(100%); opacity: 0; }
        }
        
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
        
        .notification-close {
            position: absolute;
            top: 10px;
            right: 15px;
            background: none;
            border: none;
            color: white;
            font-size: 20px;
            cursor: pointer;
            padding: 0;
            width: 20px;
            height: 20px;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        
        .notification-content {
            padding-right: 30px;
        }
        
        .notification h4 {
            margin: 0 0 10px 0;
            font-size: 16px;
        }
        
        .notification p {
            margin: 0;
            font-size: 14px;
            line-height: 1.4;
        }
    `;
    document.head.appendChild(style);
    
    // ================================
    // INICIALIZACIÓN
    // ================================
    
    // Detectar qué servicio usar
    const form = document.getElementById('contactForm');
    if (form && form.action.includes('formspree.io')) {
        console.log('📧 Usando Formspree');
        initializeFormspree();
    } else if (typeof emailjs !== 'undefined') {
        console.log('📧 Usando EmailJS');
        initializeEmailJS();
    } else {
        console.log('📧 Configurando formulario básico');
        initializeFormspree(); // Fallback
    }
    
    setupFormEnhancements();
    
    console.log('✅ Formulario de contacto inicializado');
    console.log('📧 Email destino:', config.emailDestino);
});

// ================================
// FUNCIONES GLOBALES PARA DEBUG
// ================================

window.testContactForm = function() {
    const form = document.getElementById('contactForm');
    if (form) {
        // Llenar con datos de prueba
        form.querySelector('#name').value = 'Juan Pérez';
        form.querySelector('#email').value = 'juan@example.com';
        form.querySelector('#phone').value = '+57 300 123 4567';
        form.querySelector('#company').value = 'Mi Empresa';
        form.querySelector('#service').value = 'branding';
        form.querySelector('#message').value = 'Este es un mensaje de prueba para verificar que el formulario funciona correctamente.';
        
        console.log('✅ Formulario llenado con datos de prueba');
    }
};

window.debugContactForm = function() {
    const form = document.getElementById('contactForm');
    if (form) {
        console.log('📧 Estado del formulario:');
        console.log('- Action:', form.action);
        console.log('- Method:', form.method);
        console.log('- Campos:', form.querySelectorAll('input, textarea, select').length);
        
        const formData = new FormData(form);
        console.log('- Datos actuales:');
        for (let [key, value] of formData.entries()) {
            console.log(`  ${key}: ${value}`);
        }
    }
};

console.log('✅ Formulario funcional cargado');
console.log('🎮 Funciones de debug:');
console.log('  • testContactForm() - Llenar con datos de prueba');
console.log('  • debugContactForm() - Ver estado del formulario');
