/* 13. Crea una lista de personajes de la saga Star Wars e introduce tres personajes:
    1. Muestra la lista.
    2. Ordena la lista alfabéticamente.
    3. Pide al usuario que introduzca un personaje por teclado. Si existe, indica en qué posición está; si no, añádelo.
    4. Cuenta cuántos personajes contiene la lista. 
    Anakin Skywalker
    Luke Skywalker
    Leia Organa
    */

const starWars = document.getElementById("star-wars-array")
let miArray = ["Luke Skywalker", "Anakin Skywalker", "Leia Organa"]
let index = document.getElementById("index")
let charNumbers = document.getElementById("char-numbers")
let addUserButton = document.getElementById("add-user-button")
let sectionAlert = document.getElementById("section-alert")
let customAlert = document.getElementById("custom-alert")
sectionAlert.style.visibility = "hidden"

//CREO UN ARRAY CON TODOS LOS PERSONAJES
let charactersArray = ["Aayla Secura",
    "Almirante Ackbar",
    "Asajj Ventress",
    "Ask Aak",
    "Attichitcuk",
    "Axe Woves",
    "Baylan Skoll",
    "Bib Fortuna",
    "Biggs Darklighter",
    "Bo-Katan Kryze",
    "Bodo Baas",
    "Bossk",
    "Boushh",
    "Cad Bane",
    "Cal Kestis",
    "Capitán Rex",
    "Carlist Rieekan",
    "Cassian Andor",
    "Darra Thel-Tanis",
    "Centinelas de Byss",
    "Chewbacca",
    "Cobb Vanth",
    "Comandante Bly",
    "Comandante Gree",
    "Crix Madine",
    "Darth Bane",
    "Darth Maul",
    "Darth Plagueis",
    "Dash Rendar",
    "Demetrius Zaarin",
    "Diva Funquita",
    "Diva Shaliqua",
    "Djas Puhr",
    "Dominus",
    "Durge",
    "Dutch Vander",
    "El Mandaloriano",
    "Ephant Mon",
    "Jyn Erso",
    "Ezra Bridger",
    "Fennec Shand",
    "Jango Fett",
    "Boba Fett",
    "Finn ",
    "Firmus Piett",
    "Fuerza Clon 99",
    "Garm Bel Iblis",
    "Garven Dreis",
    "General Grievous",
    "General Hux",
    "General Rahm Kota",
    "Gizor Dellso",
    "Gran Almirante Thrawn",
    "Greedo",
    "Greef Karga",
    "Guardia Real del Emperador",
    "Han Solo",
    "Hera Syndulla",
    "IG-11",
    "Ikrit",
    "Jabba el Hutt",
    "Jan Dodonna",
    "Jar Jar Binks",
    "Jek Porkins",
    "Jerjerrod",
    "K-2SO",
    "Kanan Jarrus",
    "Korkie Kryze",
    "Kren Blista-Vanee",
    "Kylo Ren",
    "Lando Calrissian",
    "Líder supremo Snoke",
    "Lobot",
    "Lord Oscuro",
    "Lowbacca",
    "Lumpawarrump",
    "Lyra Erso",
    "Mandaloriano",
    "Maris Brood",
    "Marrok",
    "Max Rebo",
    "Maximilian Veers",
    "Meena Tills",
    "Moff Gideon",
    "Mon Mothma",
    "Orson Krennic",
    "Padmé Amidala",
    "Paz Vizsla",
    "Poe Dameron",
    "Roan Shryne",
    "Rosh Penin",
    "Rystáll Sant",
    "Sabine Wren",
    "Saw Gerrera",
    "Señor oscuro de los siths",
    "Sidonra Diath",
    "Snowtrooper",
    "Soldado clon",
    "Stormtrooper",
    "Talon Karrde",
    "Tavion Axmis",
    "The Armorer",
    "Thon",
    "Tru Veld",
    "Tsui Choi",
    "Vergere",
    "Vernestra Rwoh",
    "Vicealmirante Holdo",
    "Wedge Antilles",
    "Wilhuff Tarkin",
    "Xizor",
    "Yuthura Ban",
    "Zsinj",
    "Zuckuss"]

//PINTO MI ARRAY
innerArray(miArray)

console.log(miArray)

//PINTO EL ARRAY ORDENADO CON ALGO DE DELAY
setTimeout(() => {
    miArray = miArray.sort()
    innerArray(miArray)
    ejecutaAlert("¡Ordenado!", "visible")
}, "2000")

//FUNCIÓN PARA PINTAR LOS ARRAYS
function innerArray(e) {
    starWars.innerHTML = ""
    for (let i = 0; i < e.length; i++) {

        if (i === 0) {
            starWars.innerHTML = starWars.innerHTML + `${e[i]}`
        }
        else starWars.innerHTML = starWars.innerHTML + `, ${e[i]}`
    }
    charNumbers.innerHTML = `${miArray.length}`
}

//PIDO QUE INTRODUZCAN UN PERSONAJE Y COMPRUEBO SI EXISTE Y SI ESTÁ EN EL LISTADO MÍO CREADO
function charUser() {
    let chUser = window.prompt("Ahora introduce un personaje de Star Wars")
    console.log(chUser)
    
        if (chUser === "" || chUser === undefined) {
            alert("Ya veo que no quieres jugar")
        }
        else if (charactersArray.includes(chUser) && !miArray.includes(chUser)) {
            miArray.push(chUser)
            miArray = miArray.sort()
            innerArray(miArray)
            setTimeout(() => { alert("¡Personaje añadido a la lista!") }, 1000)
        }
        else if (miArray.includes(chUser)) {
            alert(`Ese personaje está en la lista, índice número: ${miArray.indexOf(chUser)}`)
        }
        else {
            alert("Ese personaje no pertenece a Star Wars")
        }
        addUserButton.style.visibility = "visible"
    }
        
function ejecutaAlert(a, b) {
    sectionAlert.style.visibility = b
    customAlert.innerHTML = a
    setTimeout(() => {
        ejecutaAlert("", "hidden")
    }, 2000)
}

setTimeout(() => {
    charUser()
}, 4200)
