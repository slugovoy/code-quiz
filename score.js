let clearBtn = document.querySelector("#clear");
let clearList = document.querySelector("#orderList");
function pullData() {
  let pullScores = JSON.parse(window.localStorage.getItem("allScores")) || [];

  pullScores.sort(function (a, b) {
    return b.userscore - a.userscore;
  });

  pullScores.forEach(function (newScores) {
    let li = document.createElement("li");
    li.textContent = `${newScores.init} : ${newScores.userscore}`;

    let olEl = document.querySelector("#orderList");
    olEl.appendChild(li);
  });
}
pullData();

function clearHighscores(event) {
  event.stopPropagation();
  window.localStorage.removeItem("allScores");
  clearList.textContent = "";
}
clearBtn.addEventListener("click", clearHighscores);
