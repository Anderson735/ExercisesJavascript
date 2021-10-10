function showOrder(a,b,c){
    (a > b) && (a > c) ? alert("Orden: " + c + '-' + a + '-' + b):
    (a > b) && (a < c) && (b > c) ? alert("Orden: " + a + '-' + c + '-' + b):
    (a > b) && (a < c) && (b < c) ? alert("Orden: " + a + '-' + b + '-' + c):
    (a < b) && (b > c) ? alert("Orden: " + c + '-' + b + '-' + a):
    (a < b) && (b < c) && (a > c) ? alert("Orden: " + b + '-' + c + '-' + a):
    (a < b) && (b < c) && (a < c) ? alert("Orden: " + b + '-' + a + '-' + c):
    'Los tres números son iguales';
}