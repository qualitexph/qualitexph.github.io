$(document).ready(function(){
	$(".button-collapse").sideNav();
	$('.modal').modal();
	$('.slider').slider({
    indicators:false
	});
	$('.materialboxed').materialbox();
});

var tab1loaded, tab2loaded, tab3loaded, tab4loaded, tab5loaded;

$(window).load(function() {
	//$("#whole-content").addClass("tab-display");
	//$("#whole-content").addClass("tab-shower");
	$('.tab1-preloader').delay(1000).fadeOut('slow');
		
	setTimeout(function(){
		$('.tab1-hider').addClass("tab-display");
		setTimeout(function() {
			$('.tab1-hider').addClass("tab-shower");
			$(window).scrollTop($(window).scrollTop() + 1);
			$(window).scrollTop($(window).scrollTop() - 1);
			
			tab1loaded = true;
		}, 10);
		
	}, 1600);
});

$("#read-more").click(function(){	//Footer READ MORE
	$("#tab-opener5").trigger("click");
	return false;
	
});


$("#tab-opener").click(function() { //tab preloader
	
	var clicked = event.target.id;
	if(clicked === "tab-opener1"){
		if(!tab1loaded){
			//if tab1 still not loaded
			$('.tab1-preloader').delay(600).fadeOut('slow');
		
			setTimeout(function(){
				$('.tab1-hider').addClass("tab-display");
				setTimeout(function() {
					$('.tab1-hider').addClass("tab-shower");
					$(window).scrollTop($(window).scrollTop() + 1);
					$(window).scrollTop($(window).scrollTop() - 1);
					$('#tab1').addClass("tab-current");
					tab1loaded = true;
				}, 10);
				
			}, 1600);
		}
		else{
			if(!($("#tab1").hasClass("tab-current"))){
				$("#tab1").delay(10).fadeIn('slow');
				setTimeout(function() {
					$(window).scrollTop($(window).scrollTop() + 1);
					$(window).scrollTop($(window).scrollTop() - 1);
				}, 20);
				$('#tab1').addClass("tab-current");
			}
		}
		
		$("#tab2").fadeOut('fast');
		$("#tab2").removeClass("tab-current");
		$("#tab3").fadeOut('fast');
		$("#tab3").removeClass("tab-current");
		$("#tab4").fadeOut('fast');
		$("#tab4").removeClass("tab-current");
		$("#tab5").fadeOut('fast');
		$("#tab5").removeClass("tab-current");
		
	}
    else if(clicked === "tab-opener2"){
		
		if(!tab2loaded){
			$("#tab2").show();
			$('.tab2-preloader').delay(600).fadeOut('slow');
		
			setTimeout(function(){
				$('.tab2-hider').addClass("tab-display");
				setTimeout(function() {
					$('.tab2-hider').addClass("tab-shower");
					$(window).scrollTop($(window).scrollTop() + 1);
					$(window).scrollTop($(window).scrollTop() - 1);
					$('#tab2').addClass("tab-current");
					tab2loaded = true;
				}, 10);
			}, 1200);
		}
		else{
			if(!($("#tab2").hasClass("tab-current"))){
				$("#tab2").delay(10).fadeIn('slow');
				setTimeout(function() {
					$(window).scrollTop($(window).scrollTop() + 1);
					$(window).scrollTop($(window).scrollTop() - 1);
				}, 200);
				$('#tab2').addClass("tab-current");
			}
		}
		
		$("#tab1").fadeOut('fast');
		$("#tab1").removeClass("tab-current");
		$("#tab3").fadeOut('fast');
		$("#tab3").removeClass("tab-current");
		$("#tab4").fadeOut('fast');
		$("#tab4").removeClass("tab-current");
		$("#tab5").fadeOut('fast');
		$("#tab5").removeClass("tab-current");
		
	}
	else if(clicked === "tab-opener3"){
		if(!tab3loaded){
			$("#tab3").show();
			$('.tab3-preloader').delay(600).fadeOut('slow');
		
			setTimeout(function(){
				$('.tab3-hider').addClass("tab-display");
				setTimeout(function() {
					$('.tab3-hider').addClass("tab-shower");
					$('#tab3').addClass("tab-current");
					tab3loaded = true;
				}, 10);
			}, 1200);
		}
		else{
			if(!($("#tab3").hasClass("tab-current"))){
				$("#tab3").delay(10).fadeIn('slow');
				$('#tab3').addClass("tab-current");
			}
		}
		
		$("#tab1").fadeOut('fast');
		$("#tab1").removeClass("tab-current");
		$("#tab2").fadeOut('fast');
		$("#tab2").removeClass("tab-current");
		$("#tab4").fadeOut('fast');
		$("#tab4").removeClass("tab-current");
		$("#tab5").fadeOut('fast');
		$("#tab5").removeClass("tab-current");
		
	}
	else if(clicked === "tab-opener4"){
		if(!tab4loaded){
			$("#tab4").show();
			$('.tab4-preloader').delay(600).fadeOut('slow');
		
			setTimeout(function(){
				$('.tab4-hider').addClass("tab-display");
				setTimeout(function() {
					$('.tab4-hider').addClass("tab-shower");
					$('#tab4').addClass("tab-current");
					tab4loaded = true;
				}, 10);
			}, 1200);
		}
		else{
			if(!($("#tab4").hasClass("tab-current"))){
				$("#tab4").delay(10).fadeIn('slow');
				$('#tab4').addClass("tab-current");
			}
		}
		
		$("#tab1").fadeOut('fast');
		$("#tab1").removeClass("tab-current");
		$("#tab3").fadeOut('fast');
		$("#tab3").removeClass("tab-current");
		$("#tab2").fadeOut('fast');
		$("#tab2").removeClass("tab-current");
		$("#tab5").fadeOut('fast');
		$("#tab5").removeClass("tab-current");
	}
	else if(clicked === "tab-opener5" || clicked === "read-more"){
		if(!tab5loaded){
			$("#tab5").show();
			$('.tab5-preloader').delay(600).fadeOut('slow');
		
			setTimeout(function(){
				$('.tab5-hider').addClass("tab-display");
				setTimeout(function() {
					$('.tab5-hider').addClass("tab-shower");
					$('#tab5').addClass("tab-current");
					tab5loaded = true;
				}, 10);
			}, 1200);
		}
		else{
			if(!($("#tab5").hasClass("tab-current"))){
				$("#tab5").delay(10).fadeIn('slow');
				$('#tab5').addClass("tab-current");
			}
		}
		
		$("#tab1").fadeOut('fast');
		$("#tab1").removeClass("tab-current");
		$("#tab3").fadeOut('fast');
		$("#tab3").removeClass("tab-current");
		$("#tab2").fadeOut('fast');
		$("#tab2").removeClass("tab-current");
		$("#tab4").fadeOut('fast');
		$("#tab4").removeClass("tab-current");
	}
	
	
	
	//move the scroll slightly to fix parallax loading image
	/*
	setTimeout(function() {
		$(window).scrollTop($(window).scrollTop() + 1);
		$(window).scrollTop($(window).scrollTop() - 1);
	}, 10);
	*/
});


function sticky_relocate() { //sticky nav
  var window_top = $(window).scrollTop();
  var div_top = $('#sticky-anchor').offset().top;
  if (window_top > div_top) {
    $('#sticky').addClass('stick');
	$('#sticky').removeClass('inv');
    $('#sticky-anchor').height($('#sticky').outerHeight());
	
  }
  else {
    $('#sticky').removeClass('stick');
	$('#sticky').addClass('inv');
    $('#sticky-anchor').height(0);
  }
}

$(function() { //sticky nav
  $(window).scroll(sticky_relocate);
  sticky_relocate();
});

$(window).bind('DOMContentLoaded load resize', function () {
    if ($(window).innerWidth() <= 600) {
        $("#header-background-mobile").show();
        $("#header-background-desktop").hide();
    }else{
        $("#header-background-desktop").show();
        $("#header-background-mobile").hide();
    }

});

(function($){
  $(function(){
	$("#tab2").hide();
	$("#tab3").hide();
	$("#tab4").hide();
	$("#tab5").hide();
	
    $('.button-collapse').sideNav();
    $('.parallax').parallax();
  }); // end of document ready
})(jQuery); // end of jQuery name space

