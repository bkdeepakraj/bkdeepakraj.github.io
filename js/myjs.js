

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





/* scroll animation 

$(document).ready(function() {
  // Check if element is scrolled into view

  function isScrolledIntoView(elem) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
  }
  // If element is scrolled into view, fade it in
  $(window).scroll(function() {

    

    $('main#scrollanim > section.scrollFadeleft').each(function() {
      if (isScrolledIntoView(this) === true) {

        $(this).addClass('fadeInLeft');
      }
    });
  });


  $(window).scroll(function() {

    

    $('main#scrollanim > section.scrollFaderight').each(function() {
      if (isScrolledIntoView(this) === true) {


        $(this).addClass('fadeInRight');
      }
    });
  });

});

*/


/* jumbotron replace image */


  /*

  var colorsource = ['#7914DD', '#DD6814', '#CCC518', '#1475DD']

  var imgsource = ['imgbg2.png', 'imgbg3.png', 'imgbg4.png', 'imgbg1.png'];

  alert (colorsource[0]);

  */  


  /* For Testing purpose

 alert ("script run");
 var displaytxt = document.getElementById("alertmsg")
 displaytxt.textContent = pathname;

 */ 




  /*

$(document).ready(function() {



  var pathname = window.location.pathname;

  var urlsplit = pathname.split ("/")



  if(urlsplit[urlsplit.length-1] == 'tutorial.html'){

  $(".jumbotron").css("background", "#DD6814 url('images/imgbg2.png') no-repeat center");

  } else if (urlsplit[urlsplit.length-1] == 'visualearn.html'){  

  $(".jumbotron").css("background", " #7914DD url('images/imgbg3.png') no-repeat center");

  }else if (urlsplit[urlsplit.length-1] == 'blog.html'){  

  $(".jumbotron").css("background", "#CD1717 url('images/imgbg4.png') no-repeat center");

  }else if (urlsplit[urlsplit.length-1] == 'contact.html'){  

  $(".jumbotron").css("background", "#1475DD url('images/imgbg1.png') no-repeat center");
  
  } else {

    $(".jumbotron").css("background", "#1475DD url('images/imgbg1.png') no-repeat center");

  }






})





$(document).ready(function(){

    $(".uxui").click(function(){

    if (document.getElementsByClassName(".vdcourse, .hccourse, .jsqcourse").display = "block")  {

      $(".vdcourse, .hccourse, .jsqcourse").removeClass("showdiv");
      $(".vdcourse, .hccourse, .jsqcourse").addClass("hidediv");

    } else {

      $(".vdcourse, .hccourse, .jsqcourse").removeClass("hidediv");
      $(".vdcourse, .hccourse, .jsqcourse").addClass("showdiv");

    }      

    });

   


});

  */


/*

console.info ("Test");



var listelem = document.getElementsByTagName("body")[0].getElementsByTagName("section").length;

var elnode = document.getElementsByTagName("section").classList;

var uxuituts = elnode[]

console.log(elnode);

console.log(listelem);





var uxlink = document.getElementsByClassName("uxui");
var uxcourse = document.getElementsByClassName("uxuicourse");

console.log(uxcourse);

for (var i=0; i<uxcourse.length; i++) {

    uxlink.addEventListener('click', function() {
    uxuicourse[i].classList.add('hidediv');
    uxuicourse[i].classList.remove('showdiv');
    
  });

}


*/



/*


var listelem = document.getElementsByTagName("body")[0].getElementsByTagName("section").length;

var elnode = document.getElementsByTagName("section");



var x = document.querySelectorAll("section").length;

var y = document.querySelectorAll("section").classList;


console.log(x);

console.log(y[3]);

*/






/*


function hideshowcustom() {

    for (var i=0; i<listelem; i++) {

    console.log(i);

    

    if ( x == "uxui") {

      this.classList.add("hidediv");
      this.classList.remove("showdiv");

  }  else {

     elnode[i].classList.remove("hidediv");

  }

}

}







var listelem = document.getElementsByTagName("body")[0].getElementsByTagName("section").length;

var elnode = document.getElementsByTagName("section");





function hideshowcustom() {

    for (let i=0; i<listelem; i++) {

    console.log(i); console.log(listelem);

    console.log(elnode[i].classList.contains("uxui"));

    if (elnode[i].classList.contains("uxui")) {

      /* test code, Learning 

      

  } else if (elnode[i].classList.contains("vd")){

      elnode[i].classList.add("hidediv");
      elnode[i].classList.remove("showdiv");

  } else if (elnode[i].classList.contains("htmcss")){

      elnode[i].classList.add("hidediv");
      elnode[i].classList.remove("showdiv");

  } else if (elnode[i].classList.contains("jsjq")){

      elnode[i].classList.add("hidediv");
      elnode[i].classList.remove("showdiv");

  } else {

     elnode[i].classList.remove("hidediv");

  }

}

}

*/


















