function calculation(){
    let val1 = document.getElementById("value_1").value;
    let val2 = document.getElementById("value_2").value;

    let answer = document.getElementById("answer");
    let ans = Number(val1)+Number(val2);
    answer.innerHTML = ans;
}

// let button_1 = document.createElement("button")
let box = document.getElementById("box");
box.style.border = "2px solid black";
box.style.display = "inline-block";
box.style.width = "400px";
box.style.height="400px";
box.style.padding="100px";
box.style.backgroundColor = "skyblue";

