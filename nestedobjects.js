
let person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    address: {
        street: "123 Main St",
        city: "Cityville",
        zipCode: "12345",
        country: "Countryland"
    },
    contact: {
        email: "john.doe@email.com",
        phone: "123-456-7890"
    }
};

console.log(`First Name: ${person.firstName}`);
console.log(`Last Name: ${person.lastName}`);
console.log(`Age: ${person.age}`);
console.log(`Street: ${person.address.street}`);
console.log(`City: ${person.address.city}`);
console.log(`Email: ${person.contact.email}`);
console.log(`Phone: ${person.contact.phone}`);
