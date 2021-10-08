function showScore(a,b,c){
    let p = document.getElementById("resultado");
    let correct = a * 3;
    let wrong = b * 1;
    let in_white = c * 0;
    let score = correct + wrong + in_white;
    p.innerHTML += " Puntaje: " + score;
    return false;
} 