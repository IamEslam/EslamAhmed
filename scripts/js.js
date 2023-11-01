	
    // $(window).on('load', function() { // نتأكد من إكتمال الصفحة
      
    //     $('#status').fadeOut(); //Loading هنا نقوم بإخفاء عنصر 
    //     $('#preloader').delay(350).fadeOut('slow'); //Loading إخفاء عنصر الأب لعنصر  
    //     $('body').delay(350).css({'overflow':'visible'});// إظهار جسم الصفحة
         
    //   });
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
// Dialog=====================================================
// contacts=========================
$( function() {
  $( "#contact" ).dialog({
    autoOpen: false,
    show: {
      effect: "blind",
      duration: 1000
    },
    hide: {
      effect: "explode",
      duration: 1000
    }
  });
  
  $( "#openerContact" ).on( "click", function() {
    $( "#contact" ).dialog( "open" );
  });
} );
// Business skills=========================
$( function() {
  $( "#business" ).dialog({
    autoOpen: false,
    show: {
      effect: "blind",
      duration: 1000
    },
    hide: {
      effect: "explode",
      duration: 1000
    }
  });
  
  $( "#openerBusiness" ).on( "click", function() {
    $( "#business" ).dialog( "open" );
  });
} );
// Web skills=========================
$( function() {
  $( "#web" ).dialog({
    autoOpen: false,
    show: {
      effect: "blind",
      duration: 1000
    },
    hide: {
      effect: "explode",
      duration: 1000
    }
  });
  
  $( "#openerWeb" ).on( "click", function() {
    $( "#web" ).dialog( "open" );
  });
} );