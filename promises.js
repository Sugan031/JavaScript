// "Producing code" is code that can take some time


// "Consuming code" is code that must wait for the result

// A Promise is an Object that links Producing code and Consuming code


function walkDog() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let dogWalked = true;
            if (dogWalked)
                resolve("You walk the dog");
            else
                reject("You didn'i walk the dog");
        }, 2500);
    });
}

function cleanKitchen() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let kitchenCleaned = false;
            if (kitchenCleaned)
                resolve("You clean the kitchen");
            else
                reject("You didn't clean the kitchen");
        }, 1500);
    });
}

function takeOutTrash() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let trashTook = true;
            if (trashTook)
                resolve("You take out the trash");
            else
                reject("You didn't take out the trash");
        }, 500);
    });
}

// walkdog().then(value => { console.log(value); return cleanKitchen() })
//     .then(value => { console.log(value); return takeOutTrash() })
//     .then(value => { console.log(value); console.log("You finished all the chores") })
//     .catch(error => console.error(error));

//Async/Await = async makes the function to return a promise
//              await makes the async function wait for a promise

async function doChores() {
    try {
        let walkDogResult = await walkDog();
        console.log(walkDogResult);

        let cleanKitchenResult = await cleanKitchen();
        console.log(cleanKitchenResult);

        let takeOutTrashResult = await takeOutTrash();
        console.log(takeOutTrashResult);

        console.log("You completed all the chores");
    }
    catch (error) {
        console.error(error);
    }
}


doChores();