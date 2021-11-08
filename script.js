$(document).ready(function () {
  // seleksi dulu window
  $(window).scroll(() => {
    // selksi scroll ke atas
    const scroll = $(window).scrollTop();

    // jika tinggi scroll lewat dari 300 tampilkan bg
    if (scroll >= 500) {
      $("#lagu").show();
    } else {
      $("#lagu").hide();
    }
  });
});
