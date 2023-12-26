
function filterObjectByAge(people, minAge, maxAge) {
    let filteredPeople = {};

    for (let key in people) {
        if (people.hasOwnProperty(key)) {
            if (people[key].age >= minAge && people[key].age <= maxAge) {
                filteredPeople[key] = people[key];
            }
        }
    }

    return filteredPeople;
}


let people = {
    person1: { name: "John", age: 25 },
    person2: { name: "Jane", age: 30 },
    person3: { name: "Doe", age: 35 },
    person4: { name: "Smith", age: 40 }
};


let filteredPeople = filterObjectByAge(people, 30, 35);

console.log(JSON.stringify(filteredPeople, null, 2));
