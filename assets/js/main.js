window.addEventListener("load", function(){
    document.getElementById("loader").classList.toggle("loader2");
    console.log("Copyright © " + new Date().getFullYear() + " by Alan Escarcha");
});
function cargada(){
    $('#instagram').delay(3000).show(0);
}
window.onload = cargada;