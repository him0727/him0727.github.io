$(".button-collapse").sideNav({
	menuWidth: 300, 
	edge: "right", 
	closeOnClick: true,
	draggable: true
});

$(document).on("scroll", function (e) {
	$("nav").css({'background-color':'rgba(238, 238, 238,' + ($(document).scrollTop() / 210 - 0.2 + ')'),
		'-webkit-box-shadow':'0px -1px 11px 2px rgba(51,50,51,0.85)',
		'-moz-box-shadow':'0px -1px 11px 2px rgba(51,50,51,0.85)', 
		'box-shadow':'0px -1px 11px 2px rgba(51,50,51,0.85)'});
	var s = $(document).scrollTop();
	if (s >= 0 && s < 150) {
		$("nav").css({'-webkit-box-shadow':'0px 0px 0px 0px',
			'-moz-box-shadow':'0px 0px 0px 0px', 
			'box-shadow':'0px 0px 0px 0px'});
	}
})

if (!String.prototype.format) {
	String.prototype.format = function() {
		var args = arguments;
		return this.replace(/{(\d+)}/g, function(match, number) { 
			return typeof args[number] != "undefined" ? args[number] : match;
		});
	};
}

function loadContent(target) {
	var response;
	$.ajax({
		url: "data.json",
		async: false,
		success: function(result) {
			response = result[target];
		}, 
		error: function(xhr, status, thrown) {
			alert("Error when loading content: " + status);
		}
	});
	return response;
}

function go(target) {
	$("#content").load(target);
}