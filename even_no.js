function findEvennumber(arr) 
{return arr.filter(num => num % 2 === 0);}
    



let numbers = [12, 44, 67, 3, 100, 23];
let evennumbers = findEvennumber(numbers);
console.log(`The even elements in the array are: ${evennumbers}`);  
