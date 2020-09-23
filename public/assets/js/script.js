$(document).ready(function () {
	$(".delete-burger").on("click", function (event) {
		event.preventDefault(); // ← Makes origioonal delete btn stop working
		var burger_id = $(this).data("id");
		console.log("Burger Id#: ", burger_id);
		$.ajax({
			type: "DELETE",
			url: "/api/burger/" + burger_id,
		}).then(function (data) {
			location.reload();
		});
	});
});
