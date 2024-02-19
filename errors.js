function checkNumber() {
    let val1 = document.getElementById("value_1").value;
    let val2 = document.getElementById("value_2").value;
    let ans = document.getElementById("answer");
    let final = document.getElementById("final");
    try {
        let answer = Number(val1) + Number(val2);
        if (answer > 20) throw new Error("It is higher");
        if (answer < 10) throw "It is lesser";
        // if (isNaN(answer)) throw "It is not a number";

        ans.innerHTML = answer;
    }
    catch (err) {
        // ans.innerHTML = err;
        console.error(err);
    }
    finally {
        final.textContent = "I execute always";
    }
}

