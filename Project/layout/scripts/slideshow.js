var slideIndex = 0;
var slides = document.getElementsByClassName("mySlides");
var dots = document.getElementsByClassName("dot");

showSlides();

function showSlides()
{    
    var i; 

    for (i = 0; i < slides.length; i++)
    {
        slides[i].style.display = "none"; 
    }

    slideIndex++;
    if (slideIndex> slides.length) {slideIndex = 1} 

    for (i = 0; i < dots.length; i++)
    {
        dots[i].className = dots[i].className.replace(" dot_active", "");
    }

        slides[slideIndex-1].style.display = "block";
        dots[slideIndex-1].className += " dot_active";
        setTimeout(showSlides, 8000); // Change image every 10 seconds
    }

    function currentSlide(no)
    {
        var i;    
        for (i = 0; i < slides.length; i++) {
               slides[i].style.display = "none"; 
        }
                
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" dot_active", "");
        }
                
                slideIndex = no;
                slides[no-1].style.display = "block";
                dots[no-1].className += " dot_active";
            }

            function plusSlides(n)
            {
              var newslideIndex = slideIndex + n;
              
              if(newslideIndex < 7 && newslideIndex > 0)
              {
                 currentSlide(newslideIndex);
              }
                
              else if(newslideIndex > 3)
              {
                 currentSlide(1);
              }
            
              else if(newslideIndex < 1)
              {
                 currentSlide(6);
              }
            }