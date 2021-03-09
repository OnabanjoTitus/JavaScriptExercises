integerArray=[1,2,3,4,5,6]

function sumOfIntegersInTheArray(integerArray, length) {
    let sumOfInt=0;
    for(let count=0; count<length;count++){
        sumOfInt+=integerArray[count]
    }
    return sumOfInt
}


function productOfIntegersInTheArray(integerArray, length) {
    let product=1;
    for(let count=0; count<length;count++){
        product*=integerArray[count]
    }
    return product

}

alert(sumOfIntegersInTheArray(integerArray,integerArray.length))
alert(productOfIntegersInTheArray(integerArray,integerArray.length))