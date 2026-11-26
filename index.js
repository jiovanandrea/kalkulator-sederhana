const display = document.getElementById("display");

function simbol(input){
    display.value += input;
}

function clearAll(input){
    display.value = "";
}

function calculate(input){
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "Error";
    }
}
