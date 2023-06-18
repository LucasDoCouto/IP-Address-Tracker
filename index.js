
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
let ipTimezone
let ipISP
let url


// Replace and use your own API Key
// Substitua e use sua própria chave de API
const apiKEY = "at_x5svTZkGTky0m9UU7C2d4VHGvIJPl"


// Função de integração com a API

async function getLocation() {
    ipAddress = ipAddressInput.value
    var url = "https://geo.ipify.org/api/v2/country?apiKey=" + apiKEY + "&ipAddress=" + ipAddress
    // var url = "https://geo.ipify.org/api/v2/country?apiKey=at_x5svTZkGTky0m9UU7C2d4VHGvIJPl&ipAddress=8.8.4.4"

    // requisição com o Fetch

    const response = await fetch(url)
    const result = await response.json();
    return result
}

getLocation().then(result => {
    ipAddress = result.ip
    ipCountry = result.location.country
    ipRegion = result.location.region
    ipTimezone = result.location.timezone
    ipISP = result.isp
})

// Função que substitui o texto padrão pelas informações da API

function assignValues(){
    ipAddressOutput.innerHTML = ipAddress
    locationOutput.innerHTML = ipRegion + " " + ipCountry
    timeZoneOutput.innerHTML = "UTC" + ipTimezone
    ispOutput.innerHTML = ipISP
}


arrowButton.addEventListener("click",function(){
    getLocation()
    assignValues()
    // alert(ipAddress)
})

// Leaflet Map

var map = L.map('map').setView([51.505, -0.09], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([51.5, -0.09]).addTo(map)
    .bindPopup(ipAddress)
    .openPopup();