

function showEvenAndOdd(){
    let range = parseInt(prompt('¿Cuántos números va a ingresar?'));
    let listOfPairs = [];  
    let oddList = []; 
    if (range < 0 || range > 50){
        document.write('Ingrese un número entre 0 y 50')
    }
    else{
        for (let i = 0; i < range; i++){
            let numbers = parseInt(prompt('Ingrese el número'));
            if (numbers%2 == 0){
                listOfPairs.push(numbers);
            }
            else{
                oddList.push(numbers)
            }
        }
        let sumOfPairs = listOfPairs.reduce((a,b) => a + b, 0);
        let oddSum = oddList.reduce((a,b) => a + b, 0);
        document.write('Numero de impares: ' + oddList.length);
        document.write('Numero de pares: ' + listOfPairs.length);       
        document.write('Suma de pares: ' +  sumOfPairs);
        document.write('Suma de impares: ' + oddSum);
        document.write('Suma de pares: ' +  sumOfPairs);
        document.write('Promedio de pares: ' +  (sumOfPairs / listOfPairs.length));
        document.write('Promedio de impares: ' +  (sumOfPairs / oddList.length));
        document.write('Sumatoria de total de números: ' +  (sumOfPairs + oddSum));
    }
}

showEvenAndOdd();
