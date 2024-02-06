let writeValue = (values)=>{
    if(/[-+*/][-+*/]/.test(document.getElementById("inputs").innerHTML)){
        document.getElementById("inputs").innerText = document.getElementById("inputs").innerHTML.slice(0,-1);
    }
    else{
    document.getElementById("inputs").innerText += values;
    }
};


function showAnswer(){
    const result = eval(document.getElementById("inputs").innerHTML);
    document.getElementById("inputs").innerText = result;
    // console.log(result);
}



function ClearAll(){
    document.getElementById("inputs").innerText ="";
}

function ClearOne(){
    document.getElementById("inputs").innerText = document.getElementById("inputs").innerHTML.slice(0,-1);
}

// function Subtraction() {
//     if(storedValue ==0){
//         storedValue += Number(document.getElementById("inputs").innerHTML);
//     }
//     storedValue -= Number(document.getElementById("inputs").innerHTML);
//     document.getElementById("inputs").innerHTML ="";
//     console.log(storedValue);
//  }

// let storedValue = 0;
// function addition() {
//    storedValue += Number(document.getElementById("inputs").innerHTML);
//    document.getElementById("inputs").innerHTML ="";
//    console.log(storedValue);
// }
