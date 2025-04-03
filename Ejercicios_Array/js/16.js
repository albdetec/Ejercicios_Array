/* Crear dos arrays, uno con los nombres y otro con las calificaciones de los N alumnos de una clase de Programación:
Rellenar arrays con el nombre del alumno y su nota, validando entre 0 y 10.
Calcular la media de la clase.
Escribir los alumnos cuya nota es mayor que la media.
Calcular la nota máxima y quiénes la han conseguido.
Calcular la nota mínima y quiénes la han conseguido.
Mostrar la lista de alumnos junto con su nota correspondiente: */


let nombresArray = [
    "Valentina",
    "Renata",
    "Sofía",
    "Emma",
    "Isabella",
    "Camila",
    "Regina",
    "Victoria",
    "Natalia",
    "Santiago",
    "Mateo",
    "Leonardo",
    "Emiliano",
    "Sebastián",
    "Gael",
    "Alejandro",
    "Diego",
    "Nicolás"
]

let notasArray = [
    "7",
    "5",
    "6",
    "3",
    "9",
    "3",
    "4",
    "7",
    "6",
    "8",
    "5",
    "7",
    "9",
    "7",
    "8",
    "5",
    "5",
    "6"
]

const listado = document.getElementById("listado")
const masMedia = document.getElementById("mas-media")
const masNota = document.getElementById("mas-nota")
const menosNota = document.getElementById("menos-nota")
let totalArray = []
let total = Number(0)
let goodGrade = []
notaMayor = 0
notaMenor = 10
losMasListos = ""


for (let i = 0; i < nombresArray.length; i++) {
    totalArray.push([nombresArray[i], notasArray[i]])

    writeTable(listado, nombresArray[i], notasArray[i])
}

for (let f = 0; f < notasArray.length; f++) {
    total = (total + Number(notasArray[f]))
}

//CALCULO LA MEDIA, PONGO DOS DECIMALES Y CAMBIO EL PUNTO POR LA COMA

let media = Number.parseFloat(total / notasArray.length).toFixed(2)
const mediaTxt = media.replace(".", ",");

writeTable(masMedia, "Media", mediaTxt)

for (let g = 0; g < totalArray.length; g++) {
    goodGrade = totalArray[g]

    if (goodGrade[1] > media) {
        writeTable(masMedia, nombresArray[g], notasArray[g])
    }

    if (goodGrade[1] > notaMayor) {
        notaMayor = goodGrade[1]
        losMasListos = goodGrade[0]
    }

    if(goodGrade[1] < notaMenor) {
        notaMenor = goodGrade[1]
    }

}

for (let h = 0; h < totalArray.length; h++) {
    goodGrade = totalArray[h]
    if (goodGrade[1] === notaMayor) {
        writeTable(masNota, goodGrade[0], goodGrade[1])

    }

    if(goodGrade[1] === notaMenor) {
        writeTable(menosNota, goodGrade[0], goodGrade[1])
    }
}


//PARA RELLENAR LAS TABLAS

function writeTable(a, b, c) {
    a.innerHTML = a.innerHTML + `<tr><td style="text-align:left;">${b}</td><td>${c}</td></tr>`
}


