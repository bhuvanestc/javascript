function findLargestElement(arr) {
   let largest = arr[0];
for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i];
        }
    }
    
    return largest;
}


let numbers = [12, 45, 67, 3, 100, 23];
let largestNumber = findLargestElement(numbers);
console.log(`The largest element in the array is: ${largestNumber}`); 
