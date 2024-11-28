const addBtn = document.querySelector("#addBtn");
let myInput = document.querySelector("input");
let updateBtn = document.querySelector("#updateBtn");
let updateIndex = 0;

let list = [];

if (localStorage.getItem("name") != null) {
  list = JSON.parse(localStorage.getItem("name"));
  display();
}
addBtn.addEventListener("click", function () {
  let inputValue = myInput.value;
  if (inputValue.length) {
    list.push(inputValue);
    localStorage.setItem("name", JSON.stringify(list));
    display();
    clearInput();
  }
});

//==============================================Display Data ================================================
function display() {
  let cartona = "";
  for (let i = 0; i < list.length; i++) {
    cartona += ` <ul>
                <li class=" d-flex align-items-center justify-content-between">
                    <p>${i + 1}-${list[i]}</p>
                    <div class="btn d-flex ">
                        <button onclick='deleteFromList(${i})' class="btn btn-danger m-1">Delete</button>
                        <button onclick='setMession(${i})' class="btn btn-warning m-1">update</button>
                    </div>
                </li>
            </ul>`;
  }
  document.querySelector(".table").innerHTML = cartona;
}
//===============================================Clear Input ===============================================
function clearInput() {
  myInput.value = "";
}
//=================================================Delete= ==================================================
function deleteFromList(index) {
  list.splice(index, 1);
  localStorage.setItem("name", JSON.stringify(list));
  display();
}
//==================================================Update====================================================
function setMession(i) {
  myInput.value = list[i];
  updateIndex = i;
  addBtn.classList.add("d-none");
  updateBtn.classList.replace("d-none", "d-block");
}

function update() {
  let inputValue = myInput.value;
  list.push(inputValue);
  list.splice(updateIndex, 1);
  localStorage.setItem("name", JSON.stringify(list));
  display();
  clearInput();
  addBtn.classList.remove("d-none");
  updateBtn.classList.replace("d-block", "d-none");
}
