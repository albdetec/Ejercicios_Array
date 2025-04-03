/* 
14. Crear un array de 20 elementos donde cada elemento almacenará un valor entre 1 y 9 (generados de forma aleatoria). Escribir
    además del contenido del array la cantidad de 1, cantidad de 2, cantidad de 3… cantidad de 9 almacenados en él.*/

const randomNumbers2 = document.getElementById("random-numbers2")
const listNumbers = document.getElementById("list-numbers")
const min2 = Math.ceil(1);
const max2 = Math.floor(9);
let numRandom2 = 0
let randomArray2 = []
let finalArray = []
let finalNumber = []
let coincident = false

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

for (let i = 0; i < randomArray2.length; i++) {

    numRandom2 = randomArray2[i]
    coincident = false

    if (i === 0) {
        finalArray.push([numRandom2, 1])
        finalArray.length = 1
        
    }
    else {
        for (let j = 0; j < finalArray.length; j++) {

            finalNumber = finalArray[j]
            
            if (finalNumber[0] === numRandom2) {
                finalNumber[1] = finalNumber[1] + 1
                coincident = false
                break
            }
            else if (finalArray[0] !== numRandom2) {
                coincident = true
            }
        }

        if(coincident === true) {
            finalArray.push([numRandom2, 1])
        }
    }
}

//ORDENO EL ARRAY
finalArray = finalArray.sort()


//PINTO LA RELACIÓN DE NÚMEROS QUE HAY
for(let i = 0; i < finalArray.length; i++) {

    let finalNumber = finalArray[i]

    //CUANDO SOLO HAY UNO DE ELLOS
    if (finalNumber[1] === 1) {
        listNumbers.innerHTML = listNumbers.innerHTML + `<p>Hay un número ${finalNumber[0]} </p>`
    }

    //CUANDO HAY MÁS DE UNO DE ELLOS
    else listNumbers.innerHTML = listNumbers.innerHTML + `<p>Hay ${finalNumber[1]} números ${finalNumber[0]} </p>` 
} 


