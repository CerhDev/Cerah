if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("sw.js");
}

const url = "https://opensheet.elk.sh/11QJIlV712ik9kwpMFh2aqoC9SgWMEJwp_McoJqaOkLk/CerahRequiem";

fetch(url)
  .then(res => res.json())
  .then(data => {
    const list = document.getElementById("list");
    list.innerHTML = "";

    data.forEach(item => {
      if (item.Status === "APPROVED") {
        const div = document.createElement("div");
        div.innerHTML = `
          <h4>${item.Judul postingan}</h4>
          <img src="${item.Uploud foto dan video}" style="width:100%;border-radius:8px">
        `;
        list.appendChild(div);
      }
    });
  })
  .catch(err => {
    document.getElementById("list").innerText = "Gagal memuat konten";
  });
