document.getElementById("resetbtn").onclick = function(){
    temp=document.getElementById("textbox")=0;
}

document.getElementById("convertbtn").onclick = function(){

    let temp;
    let reset;

    if(document.getElementById("cButton").checked){

        temp = document.getElementById("textbox").value;
        temp = Number(temp);
        temp =  toCelsius(temp);
        document.getElementById("templabel").innerHTML = Math.round(temp) + "°C";


    }
    else if(document.getElementById("fButton").checked){

        temp =document.getElementById("textbox").value;
        temp = Number(temp);
        temp =  toFahrenheit(temp);
        document.getElementById("templabel").innerHTML= Math.round(temp) + "°F";

    }else
    {
        document.getElementById("templabel").innerHTML = "select the Unit";

    }

   


}



function toCelsius(temp){
    return(temp - 32 ) * ( 5 /9);
}
function toFahrenheit(temp){
    return temp * 5 / 9 + 32;
}

document.getElementById("resetbtn").onclick = temp=0;