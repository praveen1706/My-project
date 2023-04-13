let outputScreen = document.querySelector("#outputScreen");

//displaing no. by clicking
function display(num){
    outputScreen.value += num;
}

//calculating the values
function calculate(){
    try{
        outputScreen.value = eval(outputScreen.value);
    }
    catch(err){
        alert("Invalid!");
    }
}

//clear the whole value
function Clear(){
    outputScreen.value = "";
}

//Delete on by one
function del(){
    outputScreen.value = outputScreen.value.slice(0, -1);
}