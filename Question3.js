const a = parseInt(prompt("Enter side A"));
const b=parseInt(prompt("Enter side B"));
const c = parseInt(prompt("Enter side C"));

function semiPerimeterValue(a, b, c) {
   const perimeter=a+b+c
    return perimeter / 2;
}

function areaOfScalene(semiPerimeter, a, b, c) {
    return Math.sqrt(semiPerimeter*(semiPerimeter - a)*(semiPerimeter - b)*(semiPerimeter - c));
}

const area =areaOfScalene(semiPerimeterValue(a,b,c),a,b,c)
