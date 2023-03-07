var vista_menu = false;
let menu = document.getElementById("nav");
function mostrarMenu(){
    if(vista_menu==false){
        menu.style.display = "block";
        vista_menu = true;
    }
    else{
        menu.style.display = "none";
        vista_menu = false;
    }
}
let link = document.querySelectorAll("nav a");
for(var x=0; x<link.length; x++){
    link[x].onclick = function(){
        menu.style.display = "none";
        vista_menu = false;
    }
}