function showSalary(a){
    if (a < 1000){
        let increase = a * 0.15;
        let salary = increase + a;
        alert("Su nuevo salario es de: " + salary)
    }else{
        alert("No tiene aumento")
    }
}