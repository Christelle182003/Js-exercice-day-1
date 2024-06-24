// // var valeur1= parserfloat(document.getElementById(number1).value)

// function calculator(){
//     let num1=document.getElementById('number1')
//     let number1 = num1.value

//     let num2 = document.getElementById('number2')
//     let number2 =num2.value

//     let result ="valide number";
//     let operator = document.getElementById('operation')
//     let operation = operator.value

function calcul(){
    var number1 = parseFloat(document.getElementById('number1').value);
    var number2 = parseFloat(document.getElementById('number2').value);
    var operation = document.getElementById('operation').value;
    var result;
    
    if (isNaN(number1) || isNaN(number2)) {
        result = "Veuillez entrer des nombres valides.";
    } else {
        switch (operation) {
            case 'addition':
                result = number1 + number2;
                break;
            case 'soustraction':
                result = number1 - number2;
                break;
            case 'multiplication':
                result = number1 * number2;
                break;
            case 'division':
                if (number2 === 0) {
                    result = "La division par zéro n'est pas possible.";
                } else {
                    result = number1 / number2;
                }
                break;
            default:
                result = "Opération non valide.";
        }
    }

    document.getElementById('result').innerText = "Résultat: " + result;

}
   
    