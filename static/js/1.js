function showDistance(v,t){
    let p = document.getElementById("resultado");
    let multiplication = v * t;
    p.innerHTML += "Distancia: " + multiplication;
    return false;
}