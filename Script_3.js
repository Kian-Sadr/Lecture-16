//Making local variables for all the major elements
//This is not required, but it makes the rest of the code much easier to read
var name_box = document.getElementById("name_box");
var color_pick = document.getElementById("color_pick");
var form_input = document.getElementById("data_input");
var picture = document.getElementById("picture");

//Helper function to print what we are doing
function showMessage(text) {
  document.getElementById("output").textContent = text;
}