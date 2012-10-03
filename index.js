//window.alert("HI");
//console.log($);


$(function() {
    $(".stuffs").css("color","red");
    $("h1").css("position","absolute");
    setTimeout(function() {
	$("h1").animate({
	    left:"400px"
	}, 1000);
    },3000);

});
