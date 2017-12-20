window.addEventListener("load",loaded,false);

function loaded() {
  var som = document.getElementById("som");
  var invoer = document.getElementById("invoer");
  var plaatje = document.getElementById("plaatje");
  var button = document.getElementById("button");

  var berekenen = setInterval(clicked, 1);

  var a = Math.floor(Math.random()*9+1);
  var b = Math.floor(Math.random()*9+1);
  var opgave = a + "*" + b;

  som.innerHTML = opgave;

  button.addEventListener("click",clicked,false);

  function clicked(){
    if(invoer.value == eval(opgave)){
      plaatje.src = "Placeholder.jpg";

  } else {
    plaatje.src = "fout.jpg";
    }
  }
}

function button2()
{
  location.reload(true);
}
