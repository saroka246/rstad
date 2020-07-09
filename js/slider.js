$(document).ready(function(){
    $('.burger').click(function(event){
        $('.burger,.nav-row').toggleClass('active-menu');
        $('body').toggleClass('lock');
        $('.burger').toggleClass('burger-lock');
    });
   $('.slider').slick({
       dots:true,
       arrows:false,
       initialSlide:1
       
   });
    $('.card-slider').slick({
        slidesToShow:5,
        responsive:[
            {
                breakpoint:1230,
                settings:{
                    slidesToShow:4,
                } 
            }, {breakpoint:992,
                settings:{
                    slidesToShow:3,
                    arrows:false,
                }
               },{breakpoint:768,
                settings:{
                    slidesToShow:2,
                    arrows:false,
                }
               }
            ,{breakpoint:481,
                settings:{
                    slidesToShow:1,
                    arrows:false,
                }
               }
        ]
    
   });
    $('.qa-slider').slick({
     slidesToShow:3,
        responsive:[
            {
                breakpoint:1200,
                settings:{
                    slidesToShow:2,
                } 
            }, {breakpoint:992,
                settings:{
                    slidesToShow:2,
                    arrows:false,
                }
               },{breakpoint:768,
                settings:{
                    slidesToShow:1,
                    arrows:false,
                }
               }
            ,{breakpoint:481,
                settings:{
                    slidesToShow:1,
                    arrows:false,
                }
               }
        ]
   });
    
});