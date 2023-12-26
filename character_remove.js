function removeCharacter(str, position) {
    if (position < 0 || position >= str.length) {
        return "Invalid position!";
    }
    
    
    let before = str.substring(0, position);
    let after = str.substring(position + 1);
    
    return before + after;
}

let inputString = "Hello, World!";
let positionToRemove = 7;  

let modifiedString = removeCharacter(inputString, positionToRemove);
console.log(modifiedString); 
