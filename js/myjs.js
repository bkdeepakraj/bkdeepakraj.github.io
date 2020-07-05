

$(document).ready(function(){


$(".uxlink").click(function(){

      $(".vd, .htmcss, .jsjq").hide();
      $(".uxui").show();
});

$(".vdlink").click(function(){

$(".uxui, .htmcss, .jsjq").hide();
$(".vd").show();

    });

$(".htmlink").click(function(){

$(".vd, .uxui, .jsjq").hide();
$(".htmcss").show();

    });


$(".jslink").click(function(){
$(".vd, .htmcss, .uxui").hide();
$(".jsjq").show();

});


$(".showlink").click(function(){

$(".uxui, .vd, .htmcss, .jsjq").show();

});


});





//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
} 













