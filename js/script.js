$(document).ready(function(){
    
    // Navigation toggle
    const menuBtn = $('.menuBtn');

    $(menuBtn).on('click', function(){
        const dropdown = $('.dropdown');
        const navs = $('.navLink');

        $(navs).each(function(){
            $(this).toggleClass('navToggle');
        });

        $(dropdown).hide();
    });
    

    // Search input and icon
    const search = $('.searchBtn');
    const navHide = $('.navHide');
    const navImg = $('.navImg');

    $(search).on('click', function(){
        $(search).hide();

        if(window.innerWidth > 990) {
        $(navHide).replaceWith('<input style="height: 44px;border:none; padding:0; margin-top: 13px ; width: 53%;border-radius: 4px; background-color: #f7f7f7; text-indent: 50px; background-image:url(img/icon-search.png);background-position: 14px 14px;background-repeat: no-repeat;" type="search" id="newSearch" placeholder="Search text...">');

            $("#newSearch").on("blur", function(){
                $("#newSearch").replaceWith(navHide);
                $(search).show();
            });
        } else {
            $(navImg).replaceWith('<input style="height: 44px;border:none; padding:0; margin: -10px 5px; width: 90%;border-radius: 4px; background-color: #f7f7f7; text-indent: 50px; background-image:url(img/icon-search.png);background-position: 14px 14px;background-repeat: no-repeat;" type="search" id="newSearch" placeholder="Search text...">');

            $("#newSearch").on("blur", function(){
                $("#newSearch").replaceWith(navImg);
                $(search).show();
            });
        }
    });
});


// Accordion Javascript
const accordionBtn = document.querySelectorAll('.accordion');
var acc = document.getElementsByClassName("accordion");

accordionBtn.forEach( item => {
    item.addEventListener('click', function(){
        // this.classList.toggle('panelShow');
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight){
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        } 
    });
});


// Modal 

var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];

// Open modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// Close modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }


$(window).on('click', function(){
    if (event.target == modal) {
        modal.style.display = "none";
      }
});



// Consume JSON
let allLocations = [];
const carouselContainer = document.querySelector('.carouselImages');

fetch('./js/slider.json')
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        return data;
    })

    .then( data => {
        
        const { serbia, netherlands, bahamas} = data;

        
        carouselContainer.innerHTML = '<div class="generated"><img src="' + serbia[1] + '"><p>' + serbia[0] + '</p></div> <div class="generated"><img src="' + netherlands[1] + '"><p>' + netherlands[0] + '</p></div> <div class="generated" ><img src="' + bahamas[1] + '"><p>' + bahamas[0] + '</p></div>';
        });


        