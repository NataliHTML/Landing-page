$(document).ready(function () {
	$(".btn-ricardo").click(function () {
		$(".btn-ricardo").hide();
		$(".social-ricardo").fadeIn();
	});
	$(".btn-alberto").click(function () {
		$(".btn-alberto").hide();
		$(".social-alberto").fadeIn();
	});
	$(".btn-thomas").click(function () {
		$(".btn-thomas").hide();
		$(".social-thomas").fadeIn();
	});
	$('.btn-menu').click(function () {
		$('.modal').show()
	});
	$('.btn-close').click(function () {
		$('.modal').hide()
	});
});