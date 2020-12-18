(function () {
    "use strict";
    document.addEventListener('DOMContentLoaded', function () {
        var map = L.map('mapa').setView([19.3211165,-99.1374976,19.17], 16);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker([19.3211165,-99.1374976,19.17]).addTo(map)
        .bindPopup('Aquí nos encuentras!')
        .openPopup();


    }); // DOM CONTENT LOADED

})();
