
// // Declaração de variáveis e constantes
const arrowButton = document.querySelector(".btn-arrow")
const ipAddressInput = document.querySelector(".input-ip")
const ipAddressOutput = document.querySelector(".ip-output")
const locationOutput = document.querySelector(".location-output")
const timeZoneOutput = document.querySelector(".timezone-output")
const ispOutput = document.querySelector(".isp-output")


const apiURL = "https://geo.ipify.org/api/v2/country?apiKey="
let resultado

let ipAddress
let ipCountry
let ipRegion
let ipPostalCode
let ipTimezone
let ipISP
let ipLat = "40.650002"
let ipLng = "-73.949997"
let url


// Replace and use your own API Key
// Substitua e use sua própria chave de API
const apiKEY = "at_x5svTZkGTky0m9UU7C2d4VHGvIJPl"


// Função de integração com a API

async function getLocation() {
    ipAddress = 0
    ipAddress = ipAddressInput.value
    var url = "https://geo.ipify.org/api/v2/country,city?apiKey=" + apiKEY + "&ipAddress=" + ipAddress
    // var url = "https://geo.ipify.org/api/v2/country,city?apiKey=at_x5svTZkGTky0m9UU7C2d4VHGvIJPl&ipAddress=8.8.4.4"

    // requisição com o Fetch

    const response = await fetch(url)
    const result = await response.json();
    return result
}



// Função que substitui o texto padrão pelas informações da API

function assignValues(){
    ipAddressOutput.innerHTML = ipAddress
    locationOutput.innerHTML = ipRegion + ", " + ipCountry + " " + ipPostalCode
    timeZoneOutput.innerHTML = "UTC" + ipTimezone
    ispOutput.innerHTML = ipISP
}


arrowButton.addEventListener("click",function(){
    getLocation().then(async result => {
        ipAddress = result.ip
        ipCountry = result.location.country
        ipRegion = result.location.region
        ipPostalCode = result.location.postalCode
        ipTimezone = result.location.timezone
        ipISP = result.isp
        ipLat = result.location.lat
        ipLng = result.location.lng

        assignValues()
        
        // Move o mapa para as coordenadas do IP e adiciona um marcador
        map.panTo([ipLat, ipLng]);
        L.marker([ipLat, ipLng]).addTo(map)
        .bindPopup(ipAddress)
    })
    // .openPopup();
})

// Leaflet Map

var map = L.map('map', {zoomControl: false} ).setView([ipLat, ipLng], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);