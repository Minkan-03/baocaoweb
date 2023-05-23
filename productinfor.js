

// const images = document.querySelectorAll('.image-slider img');
// let currentImage = 0;

// function showImage(index) {
//   images.forEach((image) => image.classList.remove('active'));
//   images[index].classList.add('active');
// }

// function nextImage() {
//   currentImage++;
//   if (currentImage >= images.length) {
//     currentImage = 0;
//   }
//   showImage(currentImage);
// }

// function previousImage() {
//   currentImage--;
//   if (currentImage < 0) {
//     currentImage = images.length - 1;
//   }
//   showImage(currentImage);
// }

// showImage(currentImage);

$(document).ready(function(){
  var stt = 0;
  starImg = $("img.slide:first").attr("stt");
  endImg = $("img.slide:last").attr("stt");
  $("img.slide").each(function(){
    if($(this).is(':visible'))
      stt = $(this).attr("stt");
  });
  
  $("#next").click (function() {
    if(stt == endImg){
      stt = -1;
    }
    next = ++stt;
    $("img.slide").hide();
    $("img.slide").eq(next).show();
  });
  
  $("#prev").click (function() {
    if(stt == 0){
      stt = endImg;
      prev = stt++;
    }
    prev = --stt;
    $("img.slide").hide();
    $("img.slide").eq(prev).show();
  });
  // tự động chạy
  // setInterval(function() {
  //   $("#next").click();
  // }, 2000);
   });