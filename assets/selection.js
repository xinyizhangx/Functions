window.addEventListener("DOMContentLoaded", () => {
  let globalData;
  let query = location.search.slice(1);

  const renderItem = (data) => {
    let result = data.filter((item) => item.Images === query)[0];
    let boxs = document.querySelector(".info");
    console.log(result);
    let string = `
      <div class="container">
        <img class="imgs" src="${result.Images}" alt=""/>
        <div class="container-right">
          <p class="name">
            <span>${result.NameC}</span>
            <span>${result.NameE}</span>  
          </p>
          <p class="recipe">
            <span class="span-subtitle">· Recipe</span>
            <span class="span-p">${result.Recipe.replaceAll(".", ". ")
              .replaceAll(":", ": ")
              .replaceAll(";", ";\n")}</span>
          </p>
          <p class="steps">
            <span class="span-subtitle">· Steps</span>
            <span class="span-p">${result.Steps.replaceAll(".", ". ")
              .replaceAll(":", ": ")
              .replace(/([2-9])\./g, "\n$1. ")}</span>
          </p>
        </div>
      </div>
    `;
    boxs.insertAdjacentHTML("beforeend", string);
  };
  let selection = window.parent.document.querySelector("#selection");
  let backBtn = document.querySelector(".back-button");
  backBtn.onclick = () => {
    selection.style.display = "none";
  };

  fetch("assets/YumYue.json")
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      globalData = res;
      renderItem(res);
    });
});
