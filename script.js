$(document).ready(function () {
  // // // seleksi dulu window
  // var source = "/lagu.mp3";
  // var audio = document.createElement("audio");
  // audio.load();
  // audio.addEventListener(
  //   "load",
  //   function () {
  //     audio.play();
  //   },
  //   true
  // );
  // audio.src = source;
  // $(window).scroll(() => {
  //   // selksi scroll ke atas
  //   const scroll = $(window).scrollTop();
  //   // jika tinggi scroll lewat dari 300 tampilkan bg
  //   if (scroll >= 500) {
  //     audio.play();
  //   } else {
  //     audio.pause();
  //     audio.currentTime = 0;
  //   }
  // });
  // $("#playBtn").click(function () {
  //   audio.play();
  // });
  // $("#pauseBtn").click(function () {
  //   audio.pause();
  // });
  // $("#stopBtn").click(function () {
  //   audio.pause();
  //   audio.currentTime = 0;
  // });
  // baru

  var playing = false;
  // var audioElm = $("#lagu").get(0);
  var audioElm = "/lagu.mp3";

  $(window).scroll(function () {
    var pageScroll = $(window).scrollTop();
    if (!playing && pageScroll > 500 && pageScroll < 3000) {
      audioElm.play();
      playing = true;
    } else if (pageScroll > 3000 || pageScroll < 500) {
      audioElm.pause();
      playing = false;
    }
  });
});
