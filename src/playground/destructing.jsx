const person = {
    name: 'Andrew',
    age: 26,
    location: {
        city: 'Philadelphia',
        temp: 92
    }
};

const { name, age: location } = person;

console.log(`${name} is ${location}`);
