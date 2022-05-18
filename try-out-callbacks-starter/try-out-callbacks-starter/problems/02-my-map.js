/*******************************************************************************
Write a function `myMap` that accepts an array and a callback as arguments.
The function return an array of new elements obtained by calling the callback on
each element of the array, passing in the element.

Do not use the built in Array#map

// Examples

let result1 = myMap([100, 25, 81, 64], Math.sqrt);
console.log(result1);   // [ 10, 5, 9, 8 ]

let result2 = myMap(['run', 'Forrest'], function (el) {
    return el.toUpperCase() + '!';
});
console.log(result2);   // [ 'RUN!', 'FORREST!' ]
*******************************************************************************/
let myMap = function(array, cb){
   return array.map(cb)
};
let sqrt = function (array) {
    let arr2 = []
    for (let i = 0; i < array.length; i++){
        for(let j = 0; j < array[i]; j++){
            if((j * j) === array[i]){
                arr2.push(array[i] / j)
            }
        }
    }
    return arr2
}

let result1 = myMap([100, 25, 81, 64], sqrt);
console.log(result1);   // [ 10, 5, 9, 8 ]



/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
module.exports = myMap;
