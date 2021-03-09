const a = prompt("Enter the first element");
const b=prompt("Enter the second element");
const c=prompt("Enter the third element")


function rotateElements(a, b, c) {
    let stringArray;
    stringArray=[b,c,a]
    return stringArray;
}

alert(rotateElements(a,b,c))