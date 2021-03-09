const a =parseInt( prompt("Enter the first number of element"));
let integerArray=[7,9,0,-2]
function firstElements(array,a) {
    let arrays
    if (a===0){
        a+=1
    }
    arrays=array.slice(0,a)
    return arrays;
}

alert(firstElements(integerArray,a))
