function squareElements(arr) {
    
    return arr.map(num => num * num);
}


let numbers = [1, 2, 3, 4, 5];
let squaredNumbers = squareElements(numbers);
console.log(`Squared elements of the array are: ${squaredNumbers}`); 
