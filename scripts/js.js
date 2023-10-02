	
    $(window).on('load', function() { // نتأكد من إكتمال الصفحة
      
        $('#status').fadeOut(); //Loading هنا نقوم بإخفاء عنصر 
        $('#preloader').delay(350).fadeOut('slow'); //Loading إخفاء عنصر الأب لعنصر  
        $('body').delay(350).css({'overflow':'visible'});// إظهار جسم الصفحة
         
      });