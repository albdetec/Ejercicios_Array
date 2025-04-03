
/* 11. Cargar un array de 20 números enteros y calcular la suma de los números de posición par y el producto de los componentes de
    posición impar. Los valores se generarán aleatoriamente entre 1 y 100. */

    const randomNumbers = document.getElementById("random-numbers")
    const parNumbers = document.getElementById("par-numbers")
    const imparNumbers = document.getElementById("impar-numbers")
    const min = Math.ceil(1);
    const max = Math.floor(100);
    let numRandom = 0
    let parNumber = Number(0)
    let imparNumber = 1
    let randomArray = []
    
    for (let i = 0; i < 20; i++) {
        numRandom = Math.floor(Math.random() * (max - min + 1) + min)
    
        randomArray.push(numRandom)
    
        if (i === 0) {
    
            //QUITO LA PRIMERA COMA
            randomNumbers.innerHTML = randomNumbers.innerHTML + `${numRandom}`
        }
    
        //PINTO YA CON COMAS
        else {
            randomNumbers.innerHTML = randomNumbers.innerHTML + `, ${numRandom}`
        }
    
        //SUMA DE NÚMEROS PARES
        if (numRandom % 2 === 0) {
            parNumber = numRandom + parNumber
        }
        //MULTIPLICACIÓN DE NÚMEROS IMPARES
        else {
            imparNumber = numRandom * imparNumber
        }
    }
    parNumbers.innerHTML = parNumber
    imparNumbers.innerHTML = imparNumber
    console.log(randomArray)