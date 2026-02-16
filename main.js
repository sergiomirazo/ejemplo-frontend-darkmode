const themeBtn = document.getElementById('theme-btn');
        const body = document.body;
        
        // Verificar si hay una preferencia guardada
        const currentTheme = localStorage.getItem('theme');
        if (currentTheme) {
            body.setAttribute('data-theme', currentTheme);
            if (currentTheme === 'dark') {
                themeBtn.textContent = '☀️ Modo Claro';
            }
        }

        themeBtn.addEventListener('click', () => {
            const isDark = body.getAttribute('data-theme') === 'dark';
            
            if (isDark) {
                body.removeAttribute('data-theme');
                localStorage.setItem('theme', 'light');
                themeBtn.textContent = '🌙 Modo Oscuro';
            } else {
                body.setAttribute('data-theme', 'dark');
                localStorage.setItem('theme', 'dark');
                themeBtn.textContent = '☀️ Modo Claro';
            }
        });

        // --- LÓGICA DEL CARRITO SIMPLE ---
        let count = 0;
        const cartCountElement = document.getElementById('cart-count');
        const notification = document.getElementById('notification');

        function addToCart() {
            count++;
            cartCountElement.textContent = count;
            
            // Mostrar notificación
            notification.classList.add('show');
            setTimeout(() => {
                notification.classList.remove('show');
            }, 2000);
        }
