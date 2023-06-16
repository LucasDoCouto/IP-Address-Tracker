
// // Declaração de variáveis e constantes
var arrowButton = document.querySelector(".btn-arrow")

const apiKEY = "at_x5svTZkGTky0m9UU7C2d4VHGvIJPl"
const apiURL = "https://geo.ipify.org/api/v2/country?apiKey="

let ipAddress = "8.8.8.8"
let ipCountry
let ipRegion
let ipISP
let url


// Replace and use your own API Key
// Substitua e use sua própria chave de API


// Função de integração com a API

async function getLocation() {
    var url = apiURL + apiKEY + '&ipAddress=' + ipAddress
    // requisição com o Fetch
    fetch(url)
        .then((response) => response.json())
        .then((response) => {
          showinfo(response)
        })
    
    

}

function showinfo(response){
    console.log(response)
    ipAddress = response.ip
    ipCountry = response.country
    ipRegion = response.region
}

arrowButton.addEventListener("click",function(){
    getLocation()
    alert(ipRegion)
})

// Leaflet Map

var map = L.map('map').setView([51.505, -0.09], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([51.5, -0.09]).addTo(map)
    .bindPopup(ipCountry)
    .openPopup();