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


  $(document).ready(function(){
    $("select").change(function(){
        $(this).find("option:selected").each(function(){
            var optionValue = $(this).attr("value");
            if(optionValue){
                $(".myDiv").not("." + optionValue).hide();
                $("." + optionValue).show();
            } else{
                $(".myDiv").hide();
            }
        });
    }).change();
});


document.querySelectorAll('.showFunction').forEach (function(item) {
  item.addEventListener('click', function() {
    if(this.getAttribute('data-more') == 1) {
      this.setAttribute('data-more', 0);
      this.innerHTML = 'Read Less';
  
      this.previousElementSibling.style.display = 'block';		
    }
    // If text is shown complete, then show less
    else if(this.getAttribute('data-more') == 0) {
      this.setAttribute('data-more', 1);
      this.innerHTML = 'Read More...';
  
      this.previousElementSibling.style.display = 'none';
    }	
  })
})



// document.querySelector('.showFunction').addEventListener('click', function() {
// 	// If text is shown less, then show complete
// 	if(this.getAttribute('data-more') == 0) {
// 		this.setAttribute('data-more', 1);
// 		this.innerHTML = 'Read Less';

// 		this.previousElementSibling.style.display = 'block';		
// 	}
// 	// If text is shown complete, then show less
// 	else if(this.getAttribute('data-more') == 1) {
// 		this.setAttribute('data-more', 0);
// 		this.innerHTML = 'Read More';

// 		this.previousElementSibling.style.display = 'none';
// 	}	
  
// });


/*

  const text = ["Project/Idea/Capstone", "Design Thinking Videos", "Graphic, Painting...", "UX, UI, Html, Css", "HFI, Adobe, Autodesk"];


  document.body.onload = addElement;  

  function addElement () {
  
    // create a new span element
    const newSpan = document.createElement("span");

    newSpan.setAttribute ('class', 'd-block navShortIntro')
  
    // and give it some content
    const newContent = document.createTextNode("Project/Idea/Capstone");
  
    // add the text node to the newly created div
    newSpan.appendChild(newContent);


    var arrayLength = text.length;
for (var i = 0; i < arrayLength; i++) {

    const li1 = document.getElementById("menu-item-22");
    li1.appendChild(newSpan);

}
  
  }

  let text = "";
for (let = 0; i < 3; i++) {
  text += i + "<br>";
  for (let j = 10; j < 15; j++) {
    text += j + "<br>";
  }
}






document.getElementById('todoitemwr(' + str + ')')




  function myFunction() {

    // Create an "li" node:
    const node = document.createElement("li");
    
    // Create a text node:
    const textnode = document.createTextNode("Water");
    
    // Append the text node to the "li" node:
    node.appendChild(textnode);
    
    // Append the "li" node to the list:
    document.getElementById("myList").appendChild(node);
    }

    */