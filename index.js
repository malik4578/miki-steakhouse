document.addEventListener('DOMContentLoaded', function() {
    // Initialiser la carte Leaflet
    const map = L.map('map').setView([47.93104970482577, 2.927865729443639], 18);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors',
        maxZoom: 19
    }).addTo(map);
    L.marker([47.93104970482577, 2.927865729443639]).addTo(map)
        .bindPopup('<b>Miki SteakHouse</b><br>4 Rue du Vieux Marché<br>45220 Château Renard<br>07.66.60.05.04')
        .openPopup();

    // Menu Burger
    const menuBurger = document.querySelector('.menu-burger');
    const navMenu = document.querySelector('.nav-menu');

    menuBurger.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        menuBurger.classList.toggle('active');
    });

    // Fermer le menu quand on clique sur un lien
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            menuBurger.classList.remove('active');
        });
    });
});