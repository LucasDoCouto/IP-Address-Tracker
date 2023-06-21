// tentativa 1


// // Declaração de variáveis e constantes
var arrowButton = document.querySelector(".btn-arrow")

const apiURL = "https://geo.ipify.org/api/v2/country?apiKey="

let ipAddress = "8.8.8.8"
let ipCountry = ""
let ipRegion = ""
let ipISP = ""
let url


// Replace and use your own API Key
// Substitua e use sua própria chave de API
const apiKEY = "at_x5svTZkGTky0m9UU7C2d4VHGvIJPl"


// Função de integração com a API

// async function getLocation() {
//     var url = apiURL + apiKEY + '&ipAddress=' + '8.8.4.4'
//     // requisição com o Fetch
//     fetch(url)
//         .then((response) => response.json())
//         .then((response) => {
//             // console.log(Object.values(response))
//             console.log(response)
//             console.log(typeof response)
//             showinfo(response)
//             var teste = JSON.parse(response)
//         })
// }

// function showinfo(response){
//     ipAddress = response["ip"]
//     ipCountry = response.json.country
//     ipRegion = response["ip"]
// }

function getLocation(){
    var url = apiURL + apiKEY + '&ipAddress=' + '8.8.4.4'
    // requisição com o Fetch
    fetch(url)
      .then((response) => response.json)
      .then((response) => {
        ipAddress = response.ip
        ipCountry = response.location.country
        alert (ipCountry)
      }) 
}

arrowButton.addEventListener("click",function(){
    getLocation()
    // alert(ipAddress)
    // alert(ipCountry)
    // alert(ipRegion)
    // console.log(teste)
    // console.log(typeof teste)
})










// tentativa 2


