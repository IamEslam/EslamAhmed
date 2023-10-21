	
    $(window).on('load', function() { // نتأكد من إكتمال الصفحة
      
        $('#status').fadeOut(); //Loading هنا نقوم بإخفاء عنصر 
        $('#preloader').delay(350).fadeOut('slow'); //Loading إخفاء عنصر الأب لعنصر  
        $('body').delay(350).css({'overflow':'visible'});// إظهار جسم الصفحة
         
      });
// ----------------------------------------------------------

$(document).ready(function(){
  $("#desc-1").click(function(){
    $(".desc-1").toggle("slow");
  });
});

$(document).ready(function(){
  $("#desc-2").click(function(){
    $(".desc-2").toggle("slow");
  });
});

$(document).ready(function(){
  $("#desc-3").click(function(){
    $(".desc-3").toggle("slow");
  });
});

$(document).ready(function(){
  $("#desc-4").click(function(){
    $(".desc-4").toggle("slow");
  });
});

$(document).ready(function(){
  $("#desc-5").click(function(){
    $(".desc-5").toggle("slow");
  });
});