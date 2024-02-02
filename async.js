//callbacks

//A callback is a function passed as an argument to another function.

function myDisplayer(some) {
 console.log(some);
  }
  
  function myCalculator(num1, num2, myCallback) {
    let sum = num1 + num2;
    myCallback(sum);
  }
  
  myCalculator(5, 5, myDisplayer);
  //myCalculator(5, 5, myDisplayer()); dont use () in callback

  //arrow function as callback 

  let array = ["Apple", "Orange","kiwi","Guava","Banana","Papaya","Mango","Grape"];

  let sortedArray = removeFruit(array,(x)=> x.length >=6);

  function removeFruit(array, callback){
    let myArray =[];
    for (const fruit of array) {
        if(callback(fruit)){
            myArray.push(fruit);
        }
    }
    return myArray;
  }

  console.log(sortedArray);

  //asynchronous

  setTimeout(myFunction,3000);

  function myFunction(){
    console.log("I am Asynchronous");
  }

// setInterval(myClock,1000);

function myClock(){
    let date = new Date();
    console.log(date.getHours()+ " : "+date.getMinutes()+" : "+date.getSeconds());
}