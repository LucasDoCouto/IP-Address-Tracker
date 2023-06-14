// // Declaração de variáveis e constantes
// const url = "https://geo.ipify.org/api/v2/country?apiKey="
// var ip = "8.8.8.8"

// const dadosAPI = {
//     locationCountry: " ",
//     locationRegion: " ",
//     locationTimezone: " ",
//     locationISP: " "
// }

// alert(url + ip)

// // Get data

// async function getData(){
//     endereco = url + ip
//     const response = await fetch(endereco)
//     console.log(response)
// }

// getData()


// Map Leaflet

var map = L.map('map').setView([51.505, -0.09], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([51.5, -0.09]).addTo(map)
    .bindPopup('A pretty CSS popup.<br> Easily customizable.')
    .openPopup();