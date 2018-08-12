const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('This is my other resolved data');

    }, 5000);

});

console.log("before");

promise.then((data) => {
    console.log("1", data);
}).catch((error) => {
    console.log(error);
});

console.log("after");