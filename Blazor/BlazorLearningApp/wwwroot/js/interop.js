// JavaScript functions for Blazor interop

window.scrollToElement = (elementId) => {
    const element = document.getElementById(elementId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
};

window.addClass = (elementId, className) => {
    const element = document.getElementById(elementId);
    if (element) {
        element.classList.add(className);
    }
};

window.removeClass = (elementId, className) => {
    const element = document.getElementById(elementId);
    if (element) {
        element.classList.remove(className);
    }
};

window.setElementText = (elementId, text) => {
    const element = document.getElementById(elementId);
    if (element) {
        element.textContent = text;
    }
};

window.getElementWidth = (elementId) => {
    const element = document.getElementById(elementId);
    return element ? element.offsetWidth : 0;
};

window.getElementHeight = (elementId) => {
    const element = document.getElementById(elementId);
    return element ? element.offsetHeight : 0;
};

window.playSound = (soundFile) => {
    const audio = new Audio(soundFile);
    audio.play().catch(e => console.log('Audio play failed:', e));
};

window.vibrate = (duration) => {
    if (navigator.vibrate) {
        navigator.vibrate(duration);
    }
};

window.copyToClipboard = async (text) => {
    try {
        await navigator.clipboard.writeText(text);
        console.log('Text copied to clipboard');
    } catch (err) {
        console.error('Failed to copy text: ', err);
    }
};

window.getClipboardText = async () => {
    try {
        return await navigator.clipboard.readText();
    } catch (err) {
        console.error('Failed to read clipboard: ', err);
        return '';
    }
};

// Animation functions
window.fadeIn = (elementId, duration = 500) => {
    const element = document.getElementById(elementId);
    if (element) {
        element.style.opacity = '0';
        element.style.display = 'block';
        
        let start = performance.now();
        
        function animate(currentTime) {
            const elapsed = currentTime - start;
            const progress = Math.min(elapsed / duration, 1);
            
            element.style.opacity = progress;
            
            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        }
        
        requestAnimationFrame(animate);
    }
};

window.fadeOut = (elementId, duration = 500) => {
    const element = document.getElementById(elementId);
    if (element) {
        let start = performance.now();
        
        function animate(currentTime) {
            const elapsed = currentTime - start;
            const progress = Math.min(elapsed / duration, 1);
            
            element.style.opacity = 1 - progress;
            
            if (progress < 1) {
                requestAnimationFrame(animate);
            } else {
                element.style.display = 'none';
            }
        }
        
        requestAnimationFrame(animate);
    }
};

// Utility functions
window.showNotification = (message, type = 'info') => {
    const notification = document.createElement('div');
    notification.className = `alert alert-${type} alert-dismissible fade show position-fixed`;
    notification.style.cssText = 'top: 20px; right: 20px; z-index: 9999; min-width: 300px;';
    notification.innerHTML = `
        ${message}
        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    `;
    
    document.body.appendChild(notification);
    
    // Auto-remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.parentNode.removeChild(notification);
        }
    }, 5000);
};

window.measureElement = (elementId) => {
    const element = document.getElementById(elementId);
    if (element) {
        const rect = element.getBoundingClientRect();
        return {
            width: rect.width,
            height: rect.height,
            top: rect.top,
            left: rect.left,
            right: rect.right,
            bottom: rect.bottom
        };
    }
    return null;
};