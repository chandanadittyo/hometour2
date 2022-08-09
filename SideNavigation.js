$(document).ready(function(){
  $(window).ready(function() {
    $(".loader").delay(2000).fadeOut("slow");
    $("#overlayer").delay(2000).fadeOut("slow");
  })
})
 



$('.btn').click(function(){
    $(this).toggleClass("click");
    $('.sidebar').toggleClass("show");
    
    });

    $('#container').click(function(){
      $('.sidebar ').removeClass("show");
      $('.btn ').removeClass("click");
      
      });
      
    
    
    $('.sidebar ul li a').click(function(){
 
    var id = $(this).attr('id');
    $('nav ul li ul.item-show-'+id).toggleClass("show");
    $('nav ul li #'+id+' span').toggleClass("rotate");
    
    });
    
    $('nav ul li').click(function(){
    $(this).addClass("active").siblings().removeClass("active");
    });

    $('next_text').click(function(){
      $(this).addClass("active").siblings().removeClass("active");
    });

    $(document).ready(function(){
     
      
        $("nav ul li").click(function(){
          $(window).ready(function() {
            $(".loader").delay(2000).fadeOut("slow");
            $("#overlayer").delay(2000).fadeOut("slow");
            console.log('chck');
            
          })
          changeScene();

        });
        
        console.log('nav working');
        $("nav ul li").click(function(){
         
          $("canvas").fadeIn();
        });
      });

      $('a') .click(function(){
        $(".loader").delay(2000).fadeOut("slow");
        $("#overlayer").delay(2000).fadeOut("slow");
      });

      
  
