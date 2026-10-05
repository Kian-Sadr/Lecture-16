//Making local variables for all the major elements
//This is not required, but it makes the rest of the code much easier to read
var name_box = document.getElementById("name_box");
var color_pick = document.getElementById("color_pick");
var data_input = document.getElementById("data_input");
var picture = document.getElementById("picture");

//Helper function to print what we are doing
function showMessage(text) {
  document.getElementById("output").textContent = text;
}
document.addEventListener("DOMContentLoaded", function(){
  showMessage("DOMContentLoaded: the page's HTML is ready.");
});

window.addEventListener("load", function(){
  showMessage("load the whole page");
  picture.src="https://picsum.photos/200/120";
});

picture.addEventListner(load,function(){
  showMessage("the random picture finished loading");
});

for(let option of data_input.childNodes){
  option.addEventListener("focus", function(){
    showMessage("focus on " + option.id);
  });
  option.addEventListener("blur", function(){
    showMessage("blur away from" + option.id);
  });
}

name_box.addEventListener("input", function(){
  showMessage("Name is: " + name_box.value);
});

color_pick.addEventListener("change", function(){
    showMessage("Color choice: " + color_pick.value);
});

picture.addEventListener("click", function(){
  showMessage("Clicked on image");
});

data_input.addEventListener("submit", function(event){
  showMessage("Submission complete");
});
