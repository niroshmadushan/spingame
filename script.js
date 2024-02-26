let container = document.querySelector(".container");
let btn = document.getElementById("spin");
let number = Math.ceil(Math.random() * 1000);

let clicks = 1;
btn.onclick = function () {
  clicks += 1;
  if(clicks == 1 ){
	container.style.transform = "rotate(" + number + "deg)";
	number += Math.ceil(Math.random() * 1000);
  }
}

function spin(){
  var element = document.getElementById("spin");
  var element1 = document.getElementById("stop");
  element.style.display = "none";
  element1.style.display = "block";

}
function spin(){
  var element = document.getElementById("spin");
  var element1 = document.getElementById("stop");
  element.style.display = "none";
  element1.style.display = "none";

}