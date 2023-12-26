function getProperty(obj, propName) {

    if (obj.hasOwnProperty(propName)) {
        return obj[propName];
    } else {
        return `Property '${propName}' does not exist in the object.`;
    }
}


let person = {
    name: "John berg",
    age: 30,
    address: "123 Main St, City, Country"
};

console.log(getProperty(person, "name"));     
console.log(getProperty(person, "age"));      
console.log(getProperty(person, "email"));    
