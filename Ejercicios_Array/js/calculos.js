





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
let starWarsArray = ["Luke Skywalker", "Anakin Skywalker", "Leia Organa"]

innerArray(starWarsArray)

starWarsArray = starWarsArray.sort()
console.log(starWarsArray)

var example = document.getElementById("star-wars-array").getBoundingClientRect();

console.log(example.top)

if(window.screenY > 23) {
    window.prompt("Introduce un personaje de Star Wars")
}

setTimeout(() => {

    innerArray(starWarsArray)
    
}, "3000");

function innerArray(e) {

    starWars.innerHTML = ""

    for (let i = 0; i < e.length; i++) {

        if (i === 0) {
            starWars.innerHTML = starWars.innerHTML + `${e[i]}`
        }
        else starWars.innerHTML = starWars.innerHTML + `, ${e[i]}`
    }
}

/* let character = window.prompt("Introduce un personaje de Star Wars")
console.log(character)
let chIndex = 0
let chUser = document.getElementById("index")

for(let i = 0; i < starWarsArray; i++) {

    if(character === starWarsArray[i]) {

        chIndex = stringArray.findIndex(x => x === starWarsArray[i])
        console.log(chIndex)
        chUser.innerHTML = `${chIndex}`

    }
} */


/* 
14. Crear un array de 20 elementos donde cada elemento almacenará un valor entre 1 y 9 (generados de forma aleatoria). Escribir
    además del contenido del array la cantidad de 1, cantidad de 2, cantidad de 3… cantidad de 9 almacenados en él.
    */
const randomNumbers2 = document.getElementById("random-numbers2")
const listNumbers = document.getElementById("list-numbers")
const idCount = document.getElementById("count")
const min2 = Math.ceil(1);
const max2 = Math.floor(9);
let numRandom2 = 0
let randomArray2 = []
let count = 0

for (let i = 0; i < 20; i++) {

    numRandom2 = Math.floor(Math.random() * (max2 - min2 + 1) + min2)
    randomArray2.push(numRandom2)

    if (i === 0) {

        //QUITO LA PRIMERA COMA
        randomNumbers2.innerHTML = randomNumbers2.innerHTML + `${numRandom2}`
    }

    //PINTO YA CON COMAS
    else {
        randomNumbers2.innerHTML = randomNumbers2.innerHTML + `, ${numRandom2}`
    }
}

for(let i = 0; i < randomArray2.length; i++) {

    if(listNumbers.innerHTML === "") {
        count = "un"
    }
   
    else if(listNumbers.innerHTML.includes("id=numRandom")) {

        count = Number(idCount.innerHTML)
        count = count + 1
    }
    
    if (count === 1) {
        listNumbers.innerHTML = `<span>Hay</span><span id="idCount">un</span></span> número </span><span id="numRandom"> ${numRandom2} </span>`
    }
    else listNumbers.innerHTML = `<span>Hay ${count} números ${numRandom2} </span>`

} 

console.log(randomArray2)

/*15. Leer números que introduzca el usuario:
    Si el número introducido es decimal, guárdalo en una lista de números decimales.
    Si no es decimal, guárdalo en una lista de números enteros.
    El programa continuará pidiendo números hasta que el usuario introduzca un número negativo. Una vez introducido:
    Muestra cuántos números decimales y cuántos enteros se han creado.
    Suma todos los números enteros introducidos. */


