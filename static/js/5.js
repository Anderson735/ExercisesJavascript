const LITERS_PER_GALLON = 8;
const PRICE_PER_LITER = 2.300;

function showCalculateGallonPrice(a){
    let p = document.getElementById("resultado");
    let amount = (LITERS_PER_GALLON * PRICE_PER_LITER) * a;
    p.innerHTML += " Costo: " + amount;
    return false;

}