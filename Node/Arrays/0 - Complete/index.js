'use strict';

const fs = require('fs');

let inputString = '';
let currentLine = 0;


function readLine() {
    return inputString[currentLine++];
}

// Complete the rotLeft function below.
function rotLeft(a, d) {

   let array = []
   for(let i=d; i < a.length ; i++){
       array.push(a[i])
   }
   for(let i=0; i < d ; i++){
    array.push(a[i])
    }
    return array
}

function main() {
  
    const n1 = readLine();
    const n2 = readLine();

    const n = parseInt(n1, 10);

    const d = parseInt(n2, 10);

    const result = rotLeft([1,2,3,4,5], 3);

}

main()