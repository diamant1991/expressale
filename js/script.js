	$(".phone").mask("+7 999 999-99-99");
$(document).ready(function() {
      $('select.nice').niceSelect();      
});
$(document).ready(function() {
      $('select.nice1').niceSelect();      
});
$(document).ready(function() {
      $('select.nice2').niceSelect();      
});
$(document).ready(function() {
      $('select.nice3').niceSelect();      
});

$(document).ready(function(){
  $('.view-item-carousel').owlCarousel({
  	loop:true,
    margin:5,
    nav:true,
    dots: false,
    smartSpeed: 800,
    responsive:{
        0:{
            items:1
        },
        450:{
            items:2
        },
        768:{
            items:3
        },
        992:{
            items:4
        },
        1200:{
            items:5
        }
    }
  });
  $('.thumb-carousel').owlCarousel({
  	loop:true,
    margin:0,
    dots: false,
    nav: true,
    smartSpeed: 800,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
  });
  $('#product-carousel').bxSlider({
	  pagerCustom: '#bx-pager',
	  controls: false,
	  mode: 'fade'
	});
});

var tab = new Array('.tab-descr','.tab-char', '.tab-review', '.tab-gar', '.tab-del');

function opcl(arr, e){
  if ($(e).css('display') == 'none'){
    for(var i in arr){
       $(arr[i]).hide();     
    }
    $(e).show();       
  }
}
$('.tab-btn').click(function(event) {
	$('.tab-btn').removeClass('active')
	$(this).addClass('active')
});

	 $('.code2').click(function(){
		$('.workarea3 .corzina .cark .right .bl_2 .code').toggleClass('active').closest('.bl_2').find('.hidy').slideToggle();
		$('.workarea3 .corzina .cark .right .bl_2 .eco').toggleClass('active')
	});

	 $('.delete-filter').click(function(event) {
	 	$(this).parent().remove();
	 });
	
	$('.minus').click(function () {
		var $input = $(this).parent().find('input');
		var count = parseInt($input.val()) - 1;
		count = count < 1 ? 1 : count;
		$input.val(count);
		$input.change();
		return false;
});

$('.plus').click(function () {
var $input = $(this).parent().find('input');
$input.val(parseInt($input.val()) + 1);
$input.change();
return false;
});	
	jQuery(function()
	{
		jQuery('.scroll_block').jScrollPane({autoReinitialise:true});
		
	});
	
$(document).ready(function() {
	$(".left_nav").accordion({
		accordion:false,
		speed: 500,
		closedSign: '<em class="plus"></em>',
		openedSign: '<em class="minus"></em>'
	});
});





jQuery("#slider").slider({
	min: 0,
	max: 1000,
	values: [0,1000],
	range: true,
	stop: function(event, ui) {
		jQuery("input#minCost").val(jQuery("#slider").slider("values",0));
		jQuery("input#maxCost").val(jQuery("#slider").slider("values",1));
    },
    slide: function(event, ui){
		jQuery("input#minCost").val(jQuery("#slider").slider("values",0));
		jQuery("input#maxCost").val(jQuery("#slider").slider("values",1));
    }
});
jQuery("input#minCost").change(function(){
	var value1=jQuery("input#minCost").val();
	var value2=jQuery("input#maxCost").val();

    if(parseInt(value1) > parseInt(value2)){
		value1 = value2;
		jQuery("input#minCost").val(value1);
	}
	jQuery("#slider").slider("values",0,value1);	
});

	
jQuery("input#maxCost").change(function(){
	var value1=jQuery("input#minCost").val();
	var value2=jQuery("input#maxCost").val();
	
	if (value2 > 1000) { value2 = 1000; jQuery("input#maxCost").val(1000)}

	if(parseInt(value1) > parseInt(value2)){
		value2 = value1;
		jQuery("input#maxCost").val(value2);
	}
	jQuery("#slider").slider("values",1,value2);
});
