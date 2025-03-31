//The clicked button value were shown in output box
var outputscreen=document.getElementById("screen")
function view(num){
    outputscreen.value+=num;
}
//calculation part
function calculate(){
    try
    {
        outputscreen.value=eval(outputscreen.value)
    }
    catch(err)
    {
alert("Invalid")
    }
}
//clear all element in the output box
function clearfun(){
    outputscreen.value="";
}
//deleteing one by one element form the last
function del(){
    outputscreen.value=outputscreen.value.slice(0,-1)
}


function change() {
    var cal = document.getElementById("calculator");
    if (cal.style.backgroundColor == "black") {
        cal.style.backgroundColor = "transparent"; 
    } 
    else {
        cal.style.backgroundColor = "black"; 
    }
}