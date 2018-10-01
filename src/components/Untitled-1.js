function keepCloning(objectpassed) {
    if (objectpassed === null || typeof objectpassed !== 'object') {
        return objectpassed;
    }
    // give temporary-storage the original obj's constructor
    var temporarystorage = objectpassed.constructor();
    for (var key in objectpassed) {
        temporarystorage[key] = keepCloning(objectpassed[key]);
    }

    return temporarystorage;
}

var employeeDetailsOriginal = {
    name: ['Manjula', 'Lolita', 'Ethan'],
    age: 25,
    Profession: 'Software Engineer'
};
var employeeDetailsDuplicate = (keepCloning(employeeDetailsOriginal));
employeeDetailsOriginal.name = "NameChanged";
console.log(employeeDetailsOriginal);
console.log(employeeDetailsDuplicate);