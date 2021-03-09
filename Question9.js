let myColor = ["Red", "Green", "White", "Black"];

function convertArrayToString(myColorArray,arrayLength) {
    let finalOutput=""
    for(let count=0;count<arrayLength;count++){
        finalOutput+=myColor[count]
    }
    return finalOutput

}

alert(convertArrayToString(myColor,myColor.length))