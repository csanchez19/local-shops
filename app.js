document.addEventListener('DOMContentLoaded', () => {
    const exploreBtn = document.getElementById('explore-btn');
    const shopsContainer = document.getElementById('shops-list');

    // Datos de ejemplo
    const shops = [
        { id: 1, name: 'Panadería La Casera', category: 'Alimentación', description: 'Pan y dulces artesanales todos los días.' },
        { id: 2, name: 'Ferretería Central', category: 'Herramientas', description: 'Todo lo que necesitas para tus arreglos en casa.' },
        { id: 3, name: 'Floristería El Jardín', category: 'Decoración', description: 'Arreglos florales para toda ocasión.' }
    ];

    exploreBtn.addEventListener('click', () => {
        // scroll suave hacia las tiendas
        shopsContainer.scrollIntoView({ behavior: 'smooth' });
    });

    // Renderizar tiendas
    const renderShops = () => {
        shopsContainer.innerHTML = '';
        shops.forEach(shop => {
            const card = document.createElement('div');
            card.className = 'shop-card';
            card.innerHTML = `
                <h3>${shop.name}</h3>
                <span style="display:inline-block; padding:0.25rem 0.75rem; background:#e2e8f0; color:#475569; border-radius:9999px; font-size:0.8rem; margin-bottom:1rem;">${shop.category}</span>
                <p>${shop.description}</p>
            `;
            shopsContainer.appendChild(card);
        });
    };

    renderShops();
});
