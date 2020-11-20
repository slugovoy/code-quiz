// Variables for Clear button and list of leaders
let clearBtn = document.querySelector("#clear");
let clearList = document.querySelector("#orderList");

// Function responsible for pulling data from local storge
function pullData() {
  let pullScores = JSON.parse(window.localStorage.getItem("allScores")) || [];

  // function for sorting data based on score
  pullScores.sort(function (a, b) {
    return b.userscore - a.userscore;
  });

  // function that assigns data to each li
  pullScores.forEach(function (newScores) {
    let li = document.createElement("li");
    li.textContent = `${newScores.init} : ${newScores.userscore}`;

    // appending li to parent ol
    let olEl = document.querySelector("#orderList");
    olEl.appendChild(li);
  });
}
pullData();

// function for clear leaders list and local storage
function clearHighscores(event) {
  event.stopPropagation();
  window.localStorage.removeItem("allScores");
  clearList.textContent = "";
}
clearBtn.addEventListener("click", clearHighscores);
