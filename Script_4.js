//Collecting elements for easier reading later
var input_box = document.getElementById("input_box");
var output = document.getElementById("output");
var output_2 = document.getElementById("output_2");
var pic = document.getElementById("arrow");

window.addEventListener("keydown", function(event){
  if(event.shiftKey)
    output.textContent = event.key+" hit";
});

window.addEventListener("keydown", function(event){
  output.textContent = event.key + " hit";
});

window.addEventListener("keyup", function(event){
  output.textContent = "";
  output_2.textContent = "";
});

window.addEventListener("keypress", function(event){
  if(event.target == input_box)
    output_2.textContent = event.key+" pressed";
});

input_box.addEventListener("keydown", function(event){
  
})
