const a =parseInt( prompt("Enter the first element"));
const b=parseInt(prompt("Enter the second element"));

function sumOfTwoIntegers(a, b) {
    let sum = a + b;
    if (a===b){
        sum=sum*3
    }

    return sum;
}

alert(sumOfTwoIntegers(a,b))