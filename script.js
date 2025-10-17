function goToShop() {
  document.getElementById("welcome-page").classList.add("hidden");
  document.getElementById("product-page").classList.remove("hidden");
  document.getElementById("navbar").classList.remove("hidden");
  document.getElementById("footer").classList.remove("hidden");
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
Saya ingin order paket *${paket}*

🧍 Nama: ${nama}
📞 Whatsapp: ${wa}
✉️ Email: ${email || "-"}
💳 Metode Pembayaran: ${metode}
🗒️ Catatan: ${note || "-"}
  `;

  const encoded = encodeURIComponent(pesan);
  const nomor = "6281342074706";
  window.open(`https://wa.me/${nomor}?text=${encoded}`, "_blank");
  return false;
}