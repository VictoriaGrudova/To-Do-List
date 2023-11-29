const inputBox = document.getElementById("input-box");
const listConteiner = document.getElementById("list-container");
const buttonList = document.getElementById("button");

buttonList.addEventListener("click", () => {
  if (inputBox.value === "") {
    alert("Empty input task...");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listConteiner.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);

  }
    inputBox.value = "";
    saveData();
});

listConteiner.addEventListener(
  "click",
  (e) => {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);

function saveData() {
  localStorage.setItem("data", JSON.stringify(listConteiner.innerHTML));
}

function getData() {
    listConteiner.innerHTML = JSON.parse(localStorage.getItem("data"));
}
getData();
