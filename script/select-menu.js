var selectedField = document.getElementById("selectField");
      var selectedText = document.getElementById("selectText");
      var options = document.getElementsByClassName("options");
      var list = document.getElementById("list");
      var arrowIcon = document.getElementById("arrowIcon");

      selectedField.onclick = function(){
        list.classList.toggle("hide");
        arrowIcon.classList.toggle("rotate");
      }

      for(option of options) {
        option.onclick = function(){
          selectedText.innerHTML = this.textContent;
          list.classList.toggle("hide");
        }
      }
