const input = document.querySelector("#task");
const addBtn = document.querySelector("#liveToastBtn");
const list = document.querySelector("#list");

loadPage();

addBtn.addEventListener("click", newElement);
list.addEventListener("click", deleteElement);
list.addEventListener("click", missionComplete);

function crtElement() {
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.classList.add("close");
  span.innerHTML = "X";
  li.innerHTML = `<span> ${input.value} </span>`;
  li.appendChild(span);
  list.appendChild(li);
}

function newElement() {
  if (input.value && input.value.trim() !== "") {
    crtElement();
    loadStorage(input.value);
    input.value = "";
    $(document).ready(function () {
        $('.success').toast('show');
    });
  } else {
    $(document).ready(function () {
        $('.error').toast('show');
    });
    return;
  }
}

function deleteElement(e) {
  if (e.target.className === "close") {
    if (confirm("Are you sure")) {
      e.target.parentElement.remove();
      console.log(e.target);
      let prm = e.target.parentElement.firstChild.nextElementSibling.textContent.trim();
      dltStorage(prm);
    }
  }
}

function missionComplete(e) {
  e.target.parentElement.classList.toggle("checked");
}

function loadStorage(prm) {
  let str = JSON.parse(localStorage.getItem("todo"));
  let toDos;
  if (str == null) {
    toDos = [];
    toDos.push(prm);
  } else {
      toDos = str;
      toDos.push(prm)
  }

  localStorage.setItem("todo", JSON.stringify(toDos));
}

function loadPage() {
    let toDo = JSON.parse(localStorage.getItem("todo"));
    if (toDo != null) {
        let html;
        for (let i = 0; i < toDo.length; i++) {
            html = `<li>
            <span>
            ${toDo[i]}
            </span>
            <span class='close'>X</span>
            </li>`;
            list.innerHTML += html;
        }
    }
}

function dltStorage(prm) {
    let toDo = JSON.parse(localStorage.getItem("todo"));
    toDo.forEach((element, id) => {
        if (element === prm) {
            toDo.splice(id, 1); 
        }
    });

   
    localStorage.setItem('todo', JSON.stringify(toDo));
}









