// ================================
// WHATSAPP CHAT CORREGIDO
// ================================

// ⚠️ CAMBIA ESTE NÚMERO POR EL TUYO (formato: 57XXXXXXXXXX sin signos + ni espacios)
const WHATSAPP_NUMBER = '573195499887'; // <-- MODIFICA AQUÍ
const DEFAULT_MESSAGE = 'Hola, me interesa conocer más sobre sus servicios de Community Manager';

// ================================
// FUNCIÓN DIRECTA PARA BOTÓN FLOTANTE
// ================================
function sendWhatsAppDirect(message = null) {
    const finalMessage = message || DEFAULT_MESSAGE;
    const encodedMessage = encodeURIComponent(finalMessage);
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
    
    console.log('📱 Abriendo WhatsApp:', whatsappUrl);
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    
    // Cerrar chat preview si está abierto
    const chatPreview = document.getElementById('whatsappChatPreview');
    if (chatPreview) {
        chatPreview.classList.remove('show');
    }
}

// ================================
// MENSAJES PREDEFINIDOS
// ================================
const predefinedMessages = {
    'plan-basico': 'Hola, me interesa el Plan Básico de Community Manager',
    'plan-medio': 'Hola, me interesa el Plan Medio de Community Manager',
    'plan-completo': 'Hola, me interesa el Plan Completo de Community Manager',
    'plan-tiktok': 'Hola, me interesa el Plan TikTok',
    'branding': 'Hola, me interesa el servicio de Branding e Identidad Visual',
    'landing-page': 'Hola, me interesa una Landing Page desde',
    'sitio-web': 'Hola, me interesa un Sitio Web Informativo',
    'tienda-online': 'Hola, me interesa una Tienda en Línea',
    'consulta-web': 'Hola, me gustaría una consulta gratuita sobre desarrollo web',
    'consulta-general': 'Hola, me gustaría recibir información sobre sus servicios',
    'consulta-estrategia': 'Hola, me interesa una estrategia digital personalizada para mi negocio',
    'consulta-analisis': 'Hola, me gustaría analizar el crecimiento y resultados de mi marca',
    'consulta-acompanamiento': 'Hola, me interesa conocer más sobre el acompañamiento profesional',
    'consulta-optimizacion': 'Hola, me interesa optimizar mi estrategia digital actual'
};

// ================================
// FUNCIÓN GLOBAL PARA BOTONES CTA
// ================================
window.sendWhatsAppMessage = function(messageType = 'consulta-general') {
    const message = predefinedMessages[messageType] || DEFAULT_MESSAGE;
    sendWhatsAppDirect(message);
    
    console.log('📱 Mensaje enviado:', messageType, message);
};

// ================================
// INICIALIZACIÓN DEL CHAT PREVIEW
// ================================
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Inicializando WhatsApp Chat...');
    
    // Elementos del DOM
    const whatsappFloat = document.getElementById('whatsappFloat');
    const whatsappBtn = document.getElementById('whatsappBtn');
    const chatPreview = document.getElementById('whatsappChatPreview');
    const chatClose = document.getElementById('chatClose');
    const chatInput = document.getElementById('chatInput');
    const chatSend = document.getElementById('chatSend');
    const onlineStatus = document.getElementById('onlineStatus');
    
    if (!whatsappFloat || !chatPreview) {
        console.log('⚠️ Elementos de WhatsApp no encontrados');
        return;
    }
    
    // ================================
    // FUNCIONES DEL CHAT PREVIEW
    // ================================
    
    function toggleChatPreview(e) {
        if (e) e.preventDefault();
        
        if (chatPreview.classList.contains('show')) {
            chatPreview.classList.remove('show');
        } else {
            chatPreview.classList.add('show');
            setTimeout(() => {
                if (chatInput) chatInput.focus();
            }, 300);
        }
    }
    
    function sendFromChat() {
        const message = chatInput ? chatInput.value.trim() : '';
        const finalMessage = message || DEFAULT_MESSAGE;
        
        sendWhatsAppDirect(finalMessage);
        
        // Limpiar input
        if (chatInput) chatInput.value = '';
    }
    
    function updateOnlineStatus() {
        const now = new Date();
        const hour = now.getHours();
        const day = now.getDay();
        
        // Horario: Lunes a Viernes 8AM-6PM, Sábados 9AM-2PM
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
    }
    
    // ================================
    // EVENT LISTENERS
    // ================================
    
    // Botón principal - DOBLE FUNCIÓN
    if (whatsappBtn) {
        whatsappBtn.addEventListener('click', function(e) {
            e.preventDefault();
            
            // En móvil: abrir WhatsApp directo
            // En desktop: mostrar chat preview
            if (window.innerWidth <= 768) {
                sendWhatsAppDirect();
            } else {
                toggleChatPreview();
            }
        });
    }
    
    // Cerrar chat
    if (chatClose) {
        chatClose.addEventListener('click', function(e) {
            e.preventDefault();
            chatPreview.classList.remove('show');
        });
    }
    
    // Enviar desde chat
    if (chatSend) {
        chatSend.addEventListener('click', sendFromChat);
    }
    
    if (chatInput) {
        chatInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                sendFromChat();
            }
        });
    }
    
    // Cerrar al hacer clic fuera
    document.addEventListener('click', function(e) {
        if (chatPreview && chatPreview.classList.contains('show')) {
            if (!chatPreview.contains(e.target) && !whatsappFloat.contains(e.target)) {
                chatPreview.classList.remove('show');
            }
        }
    });
    
    // ================================
    // CONTROL DE VISIBILIDAD
    // ================================
    
    function handleScroll() {
        const scrollY = window.pageYOffset;
        
        if (scrollY > 300) {
            whatsappFloat.style.opacity = '1';
            whatsappFloat.style.visibility = 'visible';
            whatsappFloat.style.transform = 'scale(1)';
        } else {
            whatsappFloat.style.opacity = '0';
            whatsappFloat.style.visibility = 'hidden';
            whatsappFloat.style.transform = 'scale(0.8)';
        }
    }
    
    // ================================
    // INTEGRACIÓN CON BOTONES CTA
    // ================================
    
    function setupCTAButtons() {
        // Botones de paquetes
        document.querySelectorAll('.package-card .cta-button').forEach((btn, index) => {
            const packages = ['plan-basico', 'plan-medio', 'plan-completo', 'plan-tiktok'];
            btn.addEventListener('click', function(e) {
                e.preventDefault();
                const packageType = packages[index] || 'consulta-general';
                sendWhatsAppMessage(packageType);
            });
        });
        
        // Botones de desarrollo web
        document.querySelectorAll('.web-option-btn').forEach(btn => {
            btn.addEventListener('click', function(e) {
                e.preventDefault();
                const card = this.closest('.web-option-card');
                const title = card.querySelector('h3').textContent;
                
                let messageType = 'consulta-web';
                if (title.includes('Landing')) messageType = 'landing-page';
                else if (title.includes('Informativo')) messageType = 'sitio-web';
                else if (title.includes('Tienda')) messageType = 'tienda-online';
                
                sendWhatsAppMessage(messageType);
            });
        });
        
        // Botones de servicios adicionales
        document.querySelectorAll('.service-cta').forEach(btn => {
            btn.addEventListener('click', function(e) {
                e.preventDefault();
                const serviceTitle = this.closest('.additional-service-card').querySelector('h4').textContent;
                const message = `Hola, me interesa el servicio de ${serviceTitle}. ¿Podrían darme más información?`;
                sendWhatsAppDirect(message);
            });
        });
        
        // Botones de consulta web
        document.querySelectorAll('.primary-cta-btn, .secondary-cta-btn').forEach(btn => {
            if (btn.textContent.includes('WhatsApp') || btn.textContent.includes('Consulta')) {
                btn.addEventListener('click', function(e) {
                    e.preventDefault();
                    sendWhatsAppMessage('consulta-web');
                });
            }
        });
    }
    
    // ================================
    // INICIALIZACIÓN
    // ================================
    
    window.addEventListener('scroll', handleScroll);
    updateOnlineStatus();
    setInterval(updateOnlineStatus, 5 * 60 * 1000); // Cada 5 minutos
    
    // Estado inicial
    whatsappFloat.style.cssText += `
        opacity: 0;
        visibility: hidden;
        transform: scale(0.8);
        transition: all 0.3s ease;
    `;
    
    // Ejecutar setup después de un momento
    setTimeout(() => {
        handleScroll();
        setupCTAButtons();
    }, 1000);
    
    console.log('✅ WhatsApp Chat inicializado correctamente');
    console.log('📱 Número configurado:', WHATSAPP_NUMBER);
});

// ================================
// FUNCIÓN DE PRUEBA
// ================================
function testWhatsApp() {
    console.log('🧪 Probando WhatsApp...');
    console.log('📱 Número:', WHATSAPP_NUMBER);
    console.log('💬 Mensaje:', DEFAULT_MESSAGE);
    
    sendWhatsAppDirect('Mensaje de prueba desde la consola');
}

console.log('✅ WhatsApp corregido - Usa testWhatsApp() para probar');