document.addEventListener("DOMContentLoaded", function () {
  const btnYa = document.getElementById("btn-ya");
  const btnTidak = document.getElementById("btn-tidak");
  const pesan = document.getElementById("pesan");
  const lagu = document.getElementById("lagu");

  btnYa.addEventListener("click", function () {
    pesan.textContent = "Makasih, aku sayang kamu 😍💕";
    lagu.play(); // Putar lagu saat tombol "Mau" diklik
  });

  btnTidak.addEventListener("click", function () {
    pesan.textContent = "😢";
  });
});
