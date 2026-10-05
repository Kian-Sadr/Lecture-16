//JavaScript Page
let buttons = document.querySelectorAll("button");

for (let i = 0; i < buttons.length; i++){
  let myButton = buttons[i];

  myButton.addEventListener("focus", function(){
    myButton.style.setProperty("font-weight", "bold");
  });

  myButton.addEventListener("blur", function(){
    myButton.style.setProperty("font-weight", "normal");
  });
}

