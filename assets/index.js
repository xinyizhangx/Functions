window.addEventListener("DOMContentLoaded", () => {
  let globalData = [];
  let global2Data = [];
  const renderItem = (data) => {
    let boxs = document.querySelector(".data");
    boxs.innerHTML = null;
    let finalData = data;
    finalData.forEach((item) => {
      if (!item.NameC) return;
      let renderItem = `
                        <div class="item">
                          <div class="img" style="background-image: url(${item.Images})"
                            data-attr="${item.Images}"></div>
                          <span class="nameC">${item.NameC}</span>
                          <span class="nameE">${item.NameE}</span>
                        </div>
                      `;
      boxs.insertAdjacentHTML("beforeend", renderItem);
    });
  };
  const selects = document.querySelectorAll(".buttons select");
  selects[0].onchange = (event) => {
    selects[1].value = "Meals";
    let flag = event.target.value;
    let data = global2Data;
    switch (flag) {
      case "Chinese New Year":
        data = globalData.filter((item) => item.Festival === flag);
        break;
      case "Winter Solstice":
        data = globalData.filter((item) => item.Festival === flag);

        break;
      case "Dragon Boat":
        data = globalData.filter((item) => item.Festival === flag);

        break;
      case "Lantern":
        data = globalData.filter((item) => item.Festival === flag);

        break;
      case "Qingming":
        data = globalData.filter((item) => item.Festival === flag);

        break;
      case "Mid-Autumn":
        data = globalData.filter((item) => item.Festival === flag);

        break;
      case "Daily":
        data = globalData.filter((item) => item.Festival === flag);

        break;
      default:
        data = globalData;
        break;
    }
    renderItem(data);
  };
  selects[1].onchange = (event) => {
    selects[0].value = "Festival";

    let flag = event.target.value;
    let data = global2Data;
    switch (flag) {
      case "Breakfast":
        data = globalData.filter((item) => item.Meals === flag);
        break;
      case "Lunch & Dinner":
        data = globalData.filter((item) => item.Meals === flag);
        break;
      default:
        data = globalData;
        break;
    }
    renderItem(data);
  };
  fetch("assets/YumYue.json")
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      globalData = res;
      global2Data = res;
      renderItem(res);
    });
});
