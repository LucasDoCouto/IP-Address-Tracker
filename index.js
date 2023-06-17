
// // Declaração de variáveis e constantes
var arrowButton = document.querySelector(".btn-arrow")

const apiURL = "https://geo.ipify.org/api/v2/country?apiKey="
let resultado

let ipAddress = "8.8.4.8"
let ipCountry
let ipRegion
let ipISP
let url


// Replace and use your own API Key
// Substitua e use sua própria chave de API
// const apiKEY = "at_x5svTZkGTky0m9UU7C2d4VHGvIJPl"


// Função de integração com a API

async function getLocation() {
    var url = "https://geo.ipify.org/api/v2/country?apiKey=at_x5svTZkGTky0m9UU7C2d4VHGvIJPl&ipAddress=8.8.4.4"
    // requisição com o Fetch

    const response = await fetch(url)
    // console.log(response)
    const resultado = await response.json();
    return resultado
}

getLocation().then(resultado => {
    ipAddress = resultado.ip
})


arrowButton.addEventListener("click",function(){
    getLocation()
    alert(ipAddress)
})

// Leaflet Map

var map = L.map('map').setView([51.505, -0.09], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([51.5, -0.09]).addTo(map)
    .bindPopup(ipAddress)
    .openPopup();