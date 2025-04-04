/* Crear dos arrays, uno con los nombres y otro con las calificaciones de los N alumnos de una clase de Programación:
Rellenar arrays con el nombre del alumno y su nota, validando entre 0 y 10.
Calcular la media de la clase.
Escribir los alumnos cuya nota es mayor que la media.
Calcular la nota máxima y quiénes la han conseguido.
Calcular la nota mínima y quiénes la han conseguido.
Mostrar la lista de alumnos junto con su nota correspondiente: */


let nombresArray = [
    ["Valentina", "González", "Rodrigo"],
    ["Renata", "Escribano", "Jiménez"],
    ["Sofía", "Pérez", "Segura"],
    ["Emma", "Aguado", "Bernabé"],
    ["Santiago", "González", "Rojo"],
    ["Isabella", "Blanco", "Cáceres"],
    ["Camila", "de las Heras", "Ortiz"],
    ["Leonardo", "Martín", "Benito"],
    ["Sebastián", "Naval", "Suárez"],
    ["Pedro", "Sánchez", "Rodríguez"],
]

let notasArray = [
    "9",
    "5",
    "6",
    "3",
    "9",
    "3",
    "4",
    "7",
    "6",
    "8"
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

nombresArray.forEach(function(nombre, indice) {
    writeTable(listado, nombresArray[indice][0], nombresArray[indice][1], nombresArray[indice][2], notasArray[indice])
    });

notasArray.forEach(function(nota) {
    total = total + Number(nota)
     if (nota > notaMayor) {
        notaMayor = nota
    }
    if(nota < notaMenor) {
        notaMenor = nota
    }
    });

//CALCULO LA MEDIA, PONGO DOS DECIMALES Y CAMBIO EL PUNTO POR LA COMA

let media = Number.parseFloat(total / notasArray.length).toFixed(2)
const mediaTxt = media.replace(".", ",");

writeTable(masMedia, "Media", mediaTxt, "", "")
   
    notasArray.forEach(function(nota, indice) {
         if (nota > media) {
        writeTable(masMedia, nombresArray[indice][0], nombresArray[indice][1], nombresArray[indice][2], nota)
    }
        if (nota === notaMayor) {
            writeTable(masNota, nombresArray[indice][0], nombresArray[indice][1], nombresArray[indice][2], nota)
        }
        if (nota === notaMenor) {
            writeTable(menosNota, nombresArray[indice][0], nombresArray[indice][1], nombresArray[indice][2], nota)
        }
    })


//PARA RELLENAR LAS TABLAS

function writeTable(a, b, c, d, e) {
    a.innerHTML = a.innerHTML + `<tr><td style="text-align:left;">${b}</td><td>${c}</td><td>${d}</td><td>${e}</td></tr>`
}


