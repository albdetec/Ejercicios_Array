/* 12. Ordenar un array de 5 strings alfabéticamente:
    Utilizar función. */

//SEGUNDO EJERCICIO, ESTE ME COSTÓ UN POCO
let w = ""
let v = 0
let x = 0
let r = []
let index = null
const messyArray = document.getElementById("messy-array")
const tidyArray = document.getElementById("tidy-array")

let stringArray = ["Valencia", "Vitoria", "Alicante", "Madrid", "Sevilla", "Salamanca", "Jaen"]
let newArray = []

//PINTO EL ARRAY. PRIMERA LINEA SIN LA COMA
stringArray.forEach(function(ciudad, indice) {
    if ( indice === 0) {
        messyArray.innerHTML = messyArray.innerHTML + `${ciudad}`
    }
    else messyArray.innerHTML = messyArray.innerHTML + `, ${ciudad}`
})

//INICIO LA FUNCIÓN
elementCompare(stringArray[0])

//RECORRO EL ARRAY, VA CAMBIANDO SEGÚN SE VAN ORDENANDO LAS PALABRAS
function elementCompare(e) {

    stringArray = stringArray

    for (j = 0; j < stringArray.length; j++) {
        w = stringArray[j]
        if (e != w) {

            //ENVÍO DOS PALABRAS AL COMPARADOR DE CARÁCTERES
            r = charCompare(e, w)
            if (r[0] != 0) {
                elementCompare(r[1])
                break
            }
        }
    }
    //BUSCO EL ÍNDICE PARA SABER CUÁNDO PARAR
    index = stringArray.findIndex(x => x === r[1])

    //VOY METIENDO ELEMENTOS YA ORDENADOS
    if (index != -1) {
        newArray.push(r[1])
    }

    //VOY BORRANDO ELEMENTOS DEL ARRAY SEGÚN SE VAN ORDENANDO
    stringArray.splice(index, 1)

    //PONGO EL ÚLTIMO ELEMENTO
    if (stringArray.length === 1 && v < 1) {
        newArray.push(stringArray[0])
        v++
    }
    //VOY REINICIANDO LA APLICACIÓN
    else if (stringArray.length > 1) {
        elementCompare(stringArray[0])
    }
}


//PINTO EL ARRAY FINAL ORDENADO CON CIERTO DELAY
setTimeout(() => {
    newArray.forEach(element => {
        if (newArray.indexOf(element)=== 0) {
            tidyArray.innerHTML = tidyArray.innerHTML + `${element}`
        }
        else tidyArray.innerHTML = tidyArray.innerHTML + `, ${element}`
    })
},1000)


//AQUÍ COMPARO LOS CARÁCTERES PARA SABER CUÁL DE LAS DOS PALABRES ES MENOR. HABRÍA QUE TENER EN CUENTA LOS ACENTOS
//AQUÍ NO ESTÁ CONTEMPLADO
function charCompare(a, b) {

    if (a.length >= b.length) {
        x = b.length
    }
    else { x = a.length }

    for (let g = 0; g < x; g++) {

        if (a.charAt(g) < b.charAt(g)) {
            return [0, a]
            break
        }
        else if (a.charAt(g) > b.charAt(g)) {
            return [1, b]
            break
        }
    }
}
