function showAvarage(a,b,c){
    let p = document.getElementById("resultado");
    let qualification = a + b + c / 3;
    p.innerHTML += "Nota: " + qualification;
    return false;
}