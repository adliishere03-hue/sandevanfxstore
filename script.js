function goToCategory() {
  document.getElementById("welcome-page").classList.add("hidden");
  document.getElementById("category-page").classList.remove("hidden");
  document.getElementById("navbar").classList.remove("hidden");
  document.getElementById("footer").classList.remove("hidden");
}

function goToProducts(category) {
  document.getElementById("category-page").classList.add("hidden");
  document.getElementById("product-page").classList.remove("hidden");

  const productList = document.getElementById("product-list");
  const title = document.getElementById("product-title");
  productList.innerHTML = "";

  if (category === "private") {
    title.textContent = "🎬 Netflix Private Packages";
    renderProducts([
      { name: "(PRIVATE) 1 Hari", price: "Rp5.000" },
      { name: "(PRIVATE) 1 Minggu", price: "Rp10.000" },
      { name: "(PRIVATE) 1 Bulan", price: "Rp30.000" },
      { name: "(PRIVATE) 2 Bulan", price: "Rp55.000" },
      { name: "(PRIVATE) 3 Bulan", price: "Rp80.000" },
      { name: "(PRIVATE) 4 Bulan", price: "Rp105.000" },
      { name: "(PRIVATE) 5 Bulan", price: "Rp130.000" },
      { name: "(PRIVATE) 6 Bulan", price: "Rp155.000" },
      { name: "(PRIVATE) 7 Bulan", price: "Rp180.000" },
      { name: "(PRIVATE) 8 Bulan", price: "Rp205.000" },
      { name: "(PRIVATE) 9 Bulan", price: "Rp230.000" },
      { name: "(PRIVATE) 10 Bulan", price: "Rp250.000" },
      { name: "(PRIVATE) 11 Bulan", price: "Rp270.000" },
      { name: "(PRIVATE) 12 Bulan", price: "Rp290.000" }
    ]);
  } else {
    title.textContent = "👥 Netflix Sharing Packages";
    renderProducts([
      { name: "(SHARING) 1 Hari", price: "Rp3.000" },
      { name: "(SHARING) 1 Minggu", price: "Rp6.000" },
      { name: "(SHARING) 1 Bulan", price: "Rp12.000" },
      { name: "(SHARING) 2 Bulan", price: "Rp20.000" },
      { name: "(SHARING) 3 Bulan", price: "Rp28.000" },
      { name: "(SHARING) 4 Bulan", price: "Rp36.000" },
      { name: "(SHARING) 5 Bulan", price: "Rp44.000" },
      { name: "(SHARING) 6 Bulan", price: "Rp52.000" },
      { name: "(SHARING) 7 Bulan", price: "Rp60.000" },
      { name: "(SHARING) 8 Bulan", price: "Rp68.000" },
      { name: "(SHARING) 9 Bulan", price: "Rp76.000" },
      { name: "(SHARING) 10 Bulan", price: "Rp84.000" },
      { name: "(SHARING) 11 Bulan", price: "Rp92.000" },
      { name: "(SHARING) 12 Bulan", price: "Rp100.000" }
    ]);
  }
}

function renderProducts(products) {
  const container = document.getElementById("product-list");

  // Banner untuk produk pertama dan kedua (1 Hari, 1 Minggu) tampil satu-satu
  for (let i = 0; i < 2; i++) {
    const p = products[i];
    const banner = document.createElement("div");
    banner.className = "product-banner";
    banner.innerHTML = `
      <div class="product-card wide">
        <div class="product-image">
          <img src="https://files.catbox.moe/cfuu7n.gif" alt="${p.name}">
        </div>
        <div class="product-content">
          <h3>${p.name}</h3>
          <p class="price">${p.price}</p>
          <div class="btn-pilih" onclick="showOrder('${p.name} - ${p.price}')">🛒 Pilih Paket</div>
        </div>
      </div>
    `;
    container.appendChild(banner);
  }

  // Sisanya (1 Bulan–12 Bulan) tampil berpasangan
  for (let i = 2; i < products.length; i += 2) {
    const row = document.createElement("div");
    row.className = "product-row";

    [products[i], products[i + 1]].forEach((p) => {
      if (!p) return;
      const card = document.createElement("div");
      card.className = "product-card";
      card.innerHTML = `
        <div class="product-image">
          <img src="https://files.catbox.moe/cfuu7n.gif" alt="${p.name}">
        </div>
        <div class="product-content">
          <h3>${p.name}</h3>
          <p class="price">${p.price}</p>
          <div class="btn-pilih" onclick="showOrder('${p.name} - ${p.price}')">🛒 Pilih Paket</div>
        </div>
      `;
      row.appendChild(card);
    });

    container.appendChild(row);
  }
}

function backToCategory() {
  document.getElementById("product-page").classList.add("hidden");
  document.getElementById("category-page").classList.remove("hidden");
}

function showOrder(paket) {
  document.getElementById("product-page").classList.add("hidden");
  document.getElementById("order-page").classList.remove("hidden");
  document.getElementById("paket").value = paket;
}

function backToProducts() {
  document.getElementById("order-page").classList.add("hidden");
  document.getElementById("product-page").classList.remove("hidden");
}

function openCS() {
  document.getElementById("csPopup").classList.remove("hidden");
}

function closeCS() {
  document.getElementById("csPopup").classList.add("hidden");
}

function sendToWhatsapp() {
  const paket = document.getElementById("paket").value;
  const nama = document.getElementById("nama").value;
  const wa = document.getElementById("wa").value;
  const email = document.getElementById("email").value;
  const metode = document.getElementById("metode").value;
  const note = document.getElementById("note").value;

  if (!nama || !wa || !metode) {
    alert("Harap isi semua kolom wajib (*)");
    return false;
  }

  const pesan = `
Halo Admin 👋
Saya ingin Membeli Paket Netflix:
*${paket}*

*🧍 Nama:* ${nama}
*📞 Whatsapp:* ${wa}
*✉️ Email:* ${email || "-"}
*💳 Metode Pembayaran:* ${metode}
🗒️ *Catatan:* ${note || "-"}
  `;

  const encoded = encodeURIComponent(pesan);
  const nomor = "31645125364";
  window.open(`https://wa.me/${nomor}?text=${encoded}`, "_blank");
  return false;
}
