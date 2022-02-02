// type writer effect



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



//myskills active class

var selector = 'aside.list-group a';

$(selector).on('click', function(){

    $(selector).removeClass('active');
    $(this).addClass('active');    
});


//carousel

let items = document.querySelectorAll('.carousel .carousel-item')

items.forEach((el) => {
    const minPerSlide = 4
    let next = el.nextElementSibling
    for (var i=1; i<minPerSlide; i++) {
        if (!next) {
            // wrap carousel by using first child
        	next = items[0]
      	}
        let cloneChild = next.cloneNode(true)
        el.appendChild(cloneChild.children[0])
        next = next.nextElementSibling
    }
})


//stop iframe youtube video from playing

function stopThis(){

var els = document.getElementsByTagName("iframe");
	
	for(var i = 0; i < els.length; i++){
		
      var iframe = document.getElementsByTagName("iframe")[i];		
      var url = iframe.getAttribute('src');
      iframe.setAttribute('src', '');
      iframe.setAttribute('src', url);
		
	}	

  }




