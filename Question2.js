const a = parseInt(prompt("Enter number1"));
const b=parseInt(prompt("Enter number2"));
numbersCheck(a,b)

function numbersCheck (number1, number2){
    let finalOutput = ""
    if( number1>=0){
        finalOutput+="number1 is positive and "
    }
    if(number1<0){
        finalOutput+="number1 is Negative and "
    }
    if( number2>=0){
        finalOutput+="number2 is positive"
    }
    if(number2<0){
        finalOutput+="number2 is Negative"
    }
    return finalOutput


}
