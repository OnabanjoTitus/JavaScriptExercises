const a = parseInt(prompt("Enter number1"));
const b=parseInt(prompt("Enter number2"));

numbersCheck(a,b)

function numbersCheck (number1, number2){
    if( number1===50 || number2===50){
    return true
    }
    if(number1+number2===50){
        return true
    }

}
