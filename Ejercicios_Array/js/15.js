/*15. Leer números que introduzca el usuario:
    Si el número introducido es decimal, guárdalo en una lista de números decimales.
    Si no es decimal, guárdalo en una lista de números enteros.
    El programa continuará pidiendo números hasta que el usuario introduzca un número negativo. Una vez introducido:
    Muestra cuántos números decimales y cuántos enteros se han creado.
    Suma todos los números enteros introducidos. */

const decimalList = document.getElementById("decimalList")
const integerList = document.getElementById("integerList")
const integerListTitle = document.getElementById("integerListTitle")
const decimalListTitle = document.getElementById("decimalListTitle")
const totalInteger = document.getElementById("totalInteger")
let decimalArray = []
let integerArray = []
let userNumber = undefined
let userNumberNum = undefined
window.onload = windowPrompt()

function windowPrompt() {
    userNumber = window.prompt("Introduce un número entero o decimal. Introduciendo un número negativo paras el proceso")

    if (userNumber === null) { alert("Hasta luego") }
    else {
        if (userNumber.includes(",")) {
            userNumber = userNumber.replace(',', '.')
        }

        console.log(userNumber)

        userNumberNum = Number(userNumber)

        if (isNaN(userNumberNum)) {
            alert("Solo se permiten numeros")
            windowPrompt()
        }
        else if (!isNaN(userNumberNum)) {


            if (userNumber !== "" && userNumber !== null) {
                fillLists()
            }
            else if (userNumber === "" && userNumber !== null) {
                alert("No introdujiste nada")
                windowPrompt()
            }

        }
    }
}

function fillLists() {

    if (Number.isInteger(userNumberNum) === true) {
        if (userNumber < 0) {
            
            totalInteger.innerHTML = `${integerArray.reduce((a, b) => a + b, 0)}`
            let media = (integerArray.reduce((a, b) => a + b, 0) + decimalArray.map(c => parseFloat(c)).reduce((a, b) => a + b, 0)) / (integerArray.length + decimalArray.length)
            media = media.toString()
            media = media.replace('.', ',')
            totalMedia.innerHTML = `${media}`

            integerArray.forEach(function (num) {
                integerList.innerHTML = integerList.innerHTML + `<li>${num}</li>`
            })

            decimalArray.forEach(function (num) {
                num = num.toString()
                num = num.replace(".", ",")
                decimalList.innerHTML = decimalList.innerHTML + `<li>${num}</li>`
            })

            if (integerArray.length === 1) {
                integerListTitle.innerHTML = `Hay un solo número entero`
            }
            else integerListTitle.innerHTML = `Hay ${integerArray.length} números enteros`

            if (decimalArray.length === 1) {
                decimalListTitle.innerHTML = `Hay un solo número decimal`
            }
            else decimalListTitle.innerHTML = `Hay ${decimalArray.length} números decimales`
        }
        else {
            integerArray.push(userNumberNum)
            console.log(integerArray)
            windowPrompt()
        }
    }
    else if (Number.isInteger(userNumberNum) === false) {
        decimalArray.push(userNumberNum)
        console.log(decimalArray)
        windowPrompt()
    }
}


