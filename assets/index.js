window.addEventListener("DOMContentLoaded", () => {
  const renderItem = (data) => {
    let boxs = document.querySelector(".data");
    let finalData = data.slice(0, 12);
    finalData.forEach((item) => {
      let renderItem = `
                        <div class="item">
                          <img src="${item.Images}" alt="">
                          <span class="nameC">${item.NameC}</span>
                          <span class="nameE">${item.NameE}</span>
                        </div>
                      `;
      boxs.insertAdjacentHTML("beforeend", renderItem);
    });
  };

  fetch("/assets/YumYue.json")
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      renderItem(res);
    });
});
