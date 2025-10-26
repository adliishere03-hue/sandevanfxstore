function goToCategory() {
  // Tampilkan halaman kategori
  document.getElementById("welcome-page").classList.add("hidden");
  document.getElementById("category-page").classList.remove("hidden");
  document.getElementById("navbar").classList.remove("hidden");
  document.getElementById("footer").classList.remove("hidden");

  // 🔊 Putar musik/video latar setelah izin pengguna
  const video = document.getElementById("bgVideo");
  video.muted = false;
  video.play().catch((err) => {
    console.warn("Pemutaran ditolak oleh browser:", err);
  });
}


function goToProducts(category) {
  // Jika user pilih Netflix Private, tampilkan halaman garansi dulu
  if (category === "private") {
    document.getElementById("category-page").classList.add("hidden");
    document.getElementById("garansi-page").classList.remove("hidden");
    return;
  }

  document.getElementById("category-page").classList.add("hidden");
  document.getElementById("garansi-page").classList.add("hidden");
  document.getElementById("product-page").classList.remove("hidden");


  const productList = document.getElementById("product-list");
  const title = document.getElementById("product-title");
  productList.innerHTML = "";

  if (category === "private-aktif") {
    title.textContent = "🎬 Netflix Private (Garansi Aktif)";
    renderProducts([
      { name: "(PV Garansi Aktif) 1 Hari", price: "Rp5.000" },
      { name: "(PV + Garansi Aktif) 1 Minggu", price: "Rp13.000" },
      { name: "(PV Garansi Aktif) 1 Bulan", price: "Rp32.000" },
      { name: "(PV Garansi Aktif) 2 Bulan", price: "Rp64.000" },
      { name: "(PV Garansi Aktif) 3 Bulan", price: "Rp96.000" },
      { name: "(PV Garansi Aktif) 4 Bulan", price: "Rp128.000" },
      { name: "(PV Garansi Aktif) 5 Bulan", price: "Rp160.000" },
      { name: "(PV Garansi Aktif) 6 Bulan", price: "Rp192.000" },
      { name: "(PV Garansi Aktif) 7 Bulan", price: "Rp224.000" },
      { name: "(PV Garansi Aktif) 8 Bulan", price: "Rp256.000" },
      { name: "(PV Garansi Aktif) 9 Bulan", price: "Rp288.000" },
      { name: "(PV Garansi Aktif) 10 Bulan", price: "Rp320.000" },
      { name: "(PV Garansi Aktif) 11 Bulan", price: "Rp352.000" },
      { name: "(PV Garansi Aktif) 12 Bulan", price: "Rp384.000" }
    ]);
  } else if (category === "private-tidak-aktif") {
    title.textContent = "🎬 Netflix Private (Tanpa Garansi)";
    renderProducts([
      { name: "(PV Tanpa Garansi) 1 Hari", price: "Rp4.000" },
  { name: "(PV Tanpa Garansi) 1 Minggu", price: "Rp10.000" },
  { name: "(PV Tanpa Garansi) 1 Bulan", price: "Rp25.000" },
  { name: "(PV Tanpa Garansi) 2 Bulan", price: "Rp50.000" },
  { name: "(PV Tanpa Garansi) 3 Bulan", price: "Rp75.000" },
  { name: "(PV Tanpa Garansi) 4 Bulan", price: "Rp100.000" },
  { name: "(PV Tanpa Garansi) 5 Bulan", price: "Rp125.000" },
  { name: "(PV Tanpa Garansi) 6 Bulan", price: "Rp150.000" },
  { name: "(PV Tanpa Garansi) 7 Bulan", price: "Rp175.000" },
  { name: "(PV Tanpa Garansi) 8 Bulan", price: "Rp200.000" },
  { name: "(PV Tanpa Garansi) 9 Bulan", price: "Rp225.000" },
  { name: "(PV Tanpa Garansi) 10 Bulan", price: "Rp250.000" },
  { name: "(PV Tanpa Garansi) 11 Bulan", price: "Rp275.000" },
  { name: "(PV Tanpa Garansi) 12 Bulan", price: "Rp300.000" }
    ]);
  } else if (category === "sharing") {
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

function limitNUM(input) {
  const max = 15; // batas karakter
  if (input.value.length > max) {
    input.value = input.value.slice(0, max);
  }
}
function limitNAMA(input) {
  const max = 10; // batas karakter
  if (input.value.length > max) {
    input.value = input.value.slice(0, max);
  }
}
function limitPIN(input) {
  if (input.value.length > 4) {
    input.value = input.value.slice(0, 4);
  }
}

function sendToWhatsapp() {
  const paket = document.getElementById("paket").value;
  const nama = document.getElementById("nama").value;
  const wa = document.getElementById("wa").value;
  const pin = document.getElementById("pin").value;
  const metode = document.getElementById("metode").value;
  const note = document.getElementById("note").value;

  if (!nama || !wa || !metode || !pin) {
    alert("Harap isi semua kolom wajib (*)");
    return false;
  }

  // 🗓️ Tanggal dan waktu lokal
  const date = new Date();
  const tanggalPemesanan = `${date.getDate().toString().padStart(2, "0")}/${(date.getMonth() + 1)
    .toString()
    .padStart(2, "0")}/${date.getFullYear()}`;
  const waktuPemesanan = date.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  // 🌍 Deteksi zona waktu lokal Indonesia
  const offset = date.getTimezoneOffset() / -60; // jam dari UTC
  let zonaWaktu = "WIB";
  if (offset === 8) zonaWaktu = "WITA";
  else if (offset === 9) zonaWaktu = "WIT";
  else if (offset === 7) zonaWaktu = "WIB";
  else zonaWaktu = "GMT" + (offset >= 0 ? "+" + offset : offset); // fallback

  // 🆔 ID Transaksi acak
  const idTransaksi = "TXN-" + Math.floor(100000 + Math.random() * 900000);

  // 💬 Format pesan WhatsApp
  const pesan = `
╭⧁ *_SANDEVA NETFLIX STORE_* ⧁─╮
│ 🆔 *ID Transaksi:* ${idTransaksi}
╰─────────────────────╯
╭───────────────────────╮
│ 📦 *Paket:* ${paket}
╰───────────────────────╯
│ 🧍 *Nama:* ${nama}
│ 🔐 *PIN:* ${pin}
│ 📞 *Whatsapp:* ${wa}
│ 💳 *Metode Pembayaran:* ${metode}
│ 🗒️ *Catatan:* ${note || "-"}
╰───────────────────────╯
╭────────────────────────╮
│ 🗓️ *Tanggal CO:* ${tanggalPemesanan}
│ ⏰ *Waktu CO:* ${waktuPemesanan} ${zonaWaktu}
╰────────────────────────╯
*_Halo Admin 👋_*
*_Saya ingin Membeli Netflix Berikut Data Yang Saya Lampirkan Di Atas 🤗_*

© *Sandeva Netflix Store* —  2025`;

  const encoded = encodeURIComponent(pesan);
  const nomor = "31645125364"; // Nomor admin
  window.open(`https://wa.me/${nomor}?text=${encoded}`, "_blank");
  return false;
} // ← ini adalah akhir fungsi sendToWhatsapp()

// 🎥 Playlist Background Video Otomatis
document.addEventListener("DOMContentLoaded", function () {
  const video = document.getElementById("bgVideo");

  // Daftar file video
  const videoFiles = ["musik1.mp4", "musik2.mp4", "musik3.mp4", "musik4.mp4", "musik5.mp4"];
  let currentVideo = 0;

  // Fungsi untuk memutar video berikutnya
  function playNextVideo() {
    video.classList.add("fade-out");

    setTimeout(() => {
      currentVideo = (currentVideo + 1) % videoFiles.length;
      video.src = videoFiles[currentVideo];
      video.load();

      video.play().then(() => {
        video.classList.remove("fade-out");
      }).catch(err => {
        console.warn("Gagal memutar video:", err);
      });
    }, 500);
  }

  // Saat video selesai, lanjut ke berikutnya
  video.addEventListener("ended", playNextVideo);

  // Pastikan video pertama dimulai
  video.src = videoFiles[currentVideo];
  video.load();
  video.play().catch(err => {
    console.warn("Autoplay diblokir, akan jalan setelah interaksi:", err);
  });
});
