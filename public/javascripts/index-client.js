//deals with button pushes and such

$("button").click(function () {
	var num = $(this)[0].id;
	$.get('/hand/move', {num: num}, function (data) {
		console.log(data)
	});
});