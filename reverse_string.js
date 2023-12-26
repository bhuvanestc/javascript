function reverseString(str) {

    return str.split('').reverse().join('');
}


let inputString = "Bhuvaneswari";
let reversedString = reverseString(inputString);
console.log(reversedString);  
