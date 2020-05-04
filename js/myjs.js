

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



















