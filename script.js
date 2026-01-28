const url = "https://opensheet.elk.sh/11QJIlV712ik9kwpMFh2aqoC9SgWMEJwp_McoJqaOkLk/CerahRequiem";

fetch(url)
  .then(res => res.json())
  .then(data => {
    const list = document.getElementById("list");
    list.innerHTML = "";

    data.forEach(item => {
      const p = document.createElement("p");
      p.textContent = item.judul;
      list.appendChild(p);
    });
  })
  .catch(() => {
    document.getElementById("list").innerText = "Gagal load judul";
  });
