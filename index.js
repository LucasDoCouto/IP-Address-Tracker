
// // Declaração de variáveis e constantes
var arrowButton = document.querySelector(".btn-arrow")

let ipAddress

// Replace and use your own API Key
// Substitua e use sua própria chave de API


// Função de integração com a API

function getLocation() {
    var apiKEY = "at_x5svTZkGTky0m9UU7C2d4VHGvIJPl"
    var apiURL = "https://geo.ipify.org/api/v2/country?apiKey="
    var ip = "8.8.8.8"
    var url = apiURL + apiKEY + '&ipAddress=' + ip
    // requisição com o Fetch
    fetch(url)
        .then(consulta => consulta.json())
        .then(consulta => {
            ipAddress = consulta.ip
        })
    
    alert(ipAddress)

}

arrowButton.addEventListener("click",function(){
    getLocation()
})

// Leaflet Map

var map = L.map('map').setView([51.505, -0.09], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([51.5, -0.09]).addTo(map)
    .bindPopup(ipAddress)
    .openPopup();