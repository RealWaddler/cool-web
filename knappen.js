var content = document.getElementById("content");
var button = document.getElementById("vis");

function sleep(miliseconds) {
   var currentTime = new Date().getTime();

   while (currentTime + miliseconds >= new Date().getTime()) {
   }
}

button.onclick = function(){
    
    if (content.className == "hele"){
         //shrink
            content.className = "";
            button.innerHTML = "Klik for flere damer!"; 
        } else{
        //expand 
            content.className = "hele";
            button.innerHTML = "Ik flere damer?";
    }
}


var fyma = document.getElementById("gay");
fyma.onclick = function () {
    alert("You gon' get no bitches")
}
var alsc = document.getElementById("alsc");
alsc.onclick = function () {
    alert("You gon' get hella bitches")
}
var stabilt = document.getElementById("bio");
stabilt.onclick = function () {
    alert("You gon' get bitches")
}