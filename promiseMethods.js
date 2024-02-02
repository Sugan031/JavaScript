//Promise Methods


let promiseOne = new Promise((resolve, reject)=>{
    const promise = true;
    if(promise)
        setTimeout(resolve,2000,"promise one solved");
    else
        reject("Sorry I lied");
})

let promiseTwo = new Promise((resolve, reject)=>{
    const promise = true;
    if(promise)
        setTimeout(resolve,3000,"promise Two solved");
    else
        reject("Sorry I lied");
})

let promiseThree = new Promise((resolve, reject)=>{
    const promise = false;
    if(promise)
        setTimeout(resolve,1500,"promise three solved");
    else
        reject("Sorry I lied");
})


Promise.all([promiseOne,promiseTwo,promiseThree]).then((value)=>{
    console.log(value);
}).catch((error)=>{
    console.log(error);
});

const checkPromise = Promise.all([promiseOne,promiseTwo,promiseThree]);
console.log(checkPromise);
setTimeout(()=>{
    console.log(checkPromise);
});

Promise.allSettled([promiseOne,promiseTwo,promiseThree]).then((value)=>{
    console.log(value);
}).catch((error)=>{
    console.log(error);
});

Promise.any([promiseOne,promiseTwo,promiseThree]).then((value)=>{
    console.log(value);
}).catch((error)=>{
    console.log(error);
});


Promise.race([promiseOne,promiseTwo,promiseThree]).then((value)=>{
    console.log(value);
}).catch((error)=>{
    console.log(error);
});
