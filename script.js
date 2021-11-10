// $(document).ready(function () {
//   // // // seleksi dulu window
//   // var source = "/lagu.mp3";
//   // var audio = document.createElement("audio");
//   // audio.load();
//   // audio.addEventListener(
//   //   "load",
//   //   function () {
//   //     audio.play();
//   //   },
//   //   true
//   // );
//   // audio.src = source;
//   // $("#playBtn").click(function () {
//   //   audio.play();
//   // });
//   // $("#pauseBtn").click(function () {
//   //   audio.pause();
//   // });
//   // $("#stopBtn").click(function () {
//   //   audio.pause();
//   //   audio.currentTime = 0;
//   // });
//   // baru
//   // var playing = false;
//   // // var audioElm = $("#lagu").get(0);
//   // var audioElm = "/lagu.mp3";
//   // $(window).scroll(function () {
//   //   var pageScroll = $(window).scrollTop();
//   //   if (!playing && pageScroll > 500 && pageScroll < 3000) {
//   //     audioElm.play();
//   //     playing = true;
//   //   } else if (pageScroll > 3000 || pageScroll < 500) {
//   //     audioElm.pause();
//   //     playing = false;
//   //   }
//   // });
//   // baru
//   $(window).scroll(() => {
//     // selksi scroll ke atas
//     const scroll = $(window).scrollTop();
//     // jika tinggi scroll lewat dari 300 tampilkan bg
//     if (scroll >= 500) {
//       $("#lagu").play();
//     } else {
//       $("#lagu").pause();
//       $("#lagu").currentTime = 0;
//     }
//   });
// $(window).scroll(function () {
//   $("#lagu").each(function () {
//     if ($(this).visible(true)) {
//       $(this)[0].play();
//     } else {
//       $(this)[0].pause();
//     }
//   });
// });
// });

// window.addEventListener("scroll", () => {
//   const audio = document.getElementById("lagu");

//   console.log(audio);

//   if (window.pageYOffset >= 1) {
//     audio.play();
//   } else {
//     audio.pause();
//   }
// });

// const audio = new Audio();
// audio.src = "lagu.mp3";
// audio.loop = true;

// window.addEventListener("scroll", () => {
//   if (window.pageYOffset > 50) {
//     audio.muted = false;
//   } else {
//     audio.muted = true;
//   }
// });

// asli;
// window.addEventListener("scroll", () => {
//   const audio = document.getElementById("lagu");

//   console.log(audio);

//   if (window.pageYOffset > 50) {
//     audio.muted = false;
//   } else {
//     audio.muted = true;
//   }
// });

// window.onscroll = function () {
//   myFunction();
// };

// function myFunction() {
//   const audio = document.getElementById("lagu");
//   if (document.body.scrollTop > 50) {
//     audio.muted = false;
//   } else {
//     audio.muted = true;
//   }
// }

// var x = document.getElementById("lagu");

// function enableMute() {
//   x.muted = true;
// }

// function disableMute() {
//   x.muted = false;
// }
