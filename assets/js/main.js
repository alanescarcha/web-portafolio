window.addEventListener("load", function(){
    document.getElementById("loader").classList.toggle("loader2");
    lottie.loadAnimation({
      container: document.getElementById('element'), // the dom element that will contain the animation
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: 'assets/data.json' // the path to the animation json
      });
    console.log("Copyright © " + new Date().getFullYear() + " by Alan Escarcha");
});
function cargada(){
    $('#instagram').delay(3000).show(0);
}
window.onload = cargada;
