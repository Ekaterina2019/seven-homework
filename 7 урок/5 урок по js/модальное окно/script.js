const modal = document.getElementById ("modal-window");
const button = document.getElementById ("button");
const span = document.getElementById ("close");

//видимое состояние модального окна 
button.onclick = function() {
    modal.style.display = "block";
  }
  //невидимое состояние окна 
  span.onclick = function() {
    modal.style.display = "none";
  }