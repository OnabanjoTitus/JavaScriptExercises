const a = parseInt(prompt("Enter number1"));
const b=parseInt(prompt("Enter number2"));


function addSubCharges(charges) {
    if(charges>10){
        charges+=2
    }
    if(charges<10){
        charges+=1
    }
    return charges;
}

function addWithSubCharge(a, b) {
    var charges=a+b
    charges=addSubCharges(charges)
    return charges;
}

alert(addWithSubCharge(a,b))