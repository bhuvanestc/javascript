
function addPropertyToObject(obj, propName, propValue) {
    obj[propName] = propValue;
}


function deletePropertyFromObject(obj, propName) {
    if (obj.hasOwnProperty(propName)) {
        delete obj[propName];
        return `Property '${propName}' deleted successfully.`;
    } else {
        return `Property '${propName}' does not exist in the object.`;
    }
}
let person = {
    name: "John Doe",
    age: 30,
};
console.log(person); 
addPropertyToObject(person, "address", "123 Main St, City");
console.log(person); 
console.log(deletePropertyFromObject(person, "age")); 
console.log(person);
console.log(deletePropertyFromObject(person, "email")); 
