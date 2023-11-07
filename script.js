// creating displayDiv to extract value from selector
var displayDiv = document.querySelector("#display");
// creating variable for num1, num2 and op(operator)
var num1 = "";
var num2 = "";
var op = "";

// making sure to display number when number is press
// function press(num){
//     num1 += num;
//     displayDiv.innerHTML= num1;
// }
function press(num){
    if (num1 === "0") {
        num1 = num;
    } else {
        num1 += num;
    }
    displayDiv.innerHTML = num1;
}


// setting operator but not to display upfront
function setOP(key){
    op = key;
    num2 = num1;
    num1 = "";
}
// creating C(clr) to restart
function clr(){
    num1 = "";
    num2 = "";
    op = "";
    displayDiv.innerHTML = "0";
}


function del(){
    if (num1.length > 1) {
        num1 = num1.slice(0, -1);
        displayDiv.innerHTML = num1;
    } else {
        num1 = "0";
        displayDiv.innerHTML = num1;
    }
}





    


function calculate(){
    let x = parseFloat(num2);
    let y = parseFloat(num1);
    let res = 0;
    

    if( op == "+"){
        res = x + y;
        displayDiv.innerHTML = res;
        return res;
    }
    else if( op == "-"){
        res = x - y;
        displayDiv.innerHTML = res;
        return res;
    }
    else if( op == "*"){
        res = x * y;
        displayDiv.innerHTML = res;
        return res;
    }
    else{
        res = x / y;
        displayDiv.innerHTML = res;
        return res;
    }
    
}


