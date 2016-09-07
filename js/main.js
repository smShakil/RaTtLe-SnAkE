$('.ui.dropdown')
  .dropdown()
;

$(document).ready(function(){
   $(".toggle_menu_1").click(function(){
        $(".toggle_item_1").slideToggle();
       $(".toggle_item_2,.toggle_item_3,.toggle_item_4,.toggle_item_5,.toggle_item_6,.toggle_item_7").slideUp();
    });

});
$(document).ready(function(){
   $(".toggle_menu_2").click(function(){
        $(".toggle_item_2").slideToggle();
       $(".toggle_item_1,.toggle_item_3,.toggle_item_4,.toggle_item_5,.toggle_item_6,.toggle_item_7").slideUp();
    });

});
$(document).ready(function(){
   $(".toggle_menu_3").click(function(){
        $(".toggle_item_3").slideToggle();
       $(".toggle_item_1,.toggle_item_2,.toggle_item_4,.toggle_item_5,.toggle_item_6,.toggle_item_7").slideUp();
    });

});
$(document).ready(function(){
   $(".toggle_menu_4").click(function(){
        $(".toggle_item_4").slideToggle();
       $(".toggle_item_1,.toggle_item_2,.toggle_item_3,.toggle_item_5,.toggle_item_6,.toggle_item_7").slideUp();
    });

});
$(document).ready(function(){
   $(".toggle_menu_5").click(function(){
        $(".toggle_item_5").slideToggle();
       $(".toggle_item_1,.toggle_item_2,.toggle_item_3,.toggle_item_4,.toggle_item_6,.toggle_item_7").slideUp();
    });

});
$(document).ready(function(){
   $(".toggle_menu_6").click(function(){
        $(".toggle_item_6").slideToggle();
       $(".toggle_item_1,.toggle_item_2,.toggle_item_3,.toggle_item_4,.toggle_item_5,.toggle_item_7").slideUp();
    });

});
$(document).ready(function(){
   $(".toggle_menu_7").click(function(){
        $(".toggle_item_7").slideToggle();
       $(".toggle_item_1,.toggle_item_2,.toggle_item_3,.toggle_item_4,.toggle_item_5,.toggle_item_6").slideUp();
    });

});


$('.demo.sidebar')
  .sidebar('setting', 'transition', 'overlay')
  .sidebar('toggle')
;
$('.left.demo.sidebar').first()
  .sidebar('attach events', '.toggle.button')
;
$('.toggle.button')
  .removeClass('disabled')
;

//Full Screen code

$('.message .close')
  .on('click', function() {
    $(this)
      .closest('.message')
      .transition('scale')
    ;
  })
;