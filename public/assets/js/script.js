$(document).ready(function () {
	$(".delete-burger").on("click", function (event) {
		event.preventDefault();
		var burger_id = $(this).data("id");
		console.log(burger_id);
		$.ajax({
			method: "DELETE",
			url: "/api/burger/" + burger_id,
		}).then(function (data) {
			// reload page to display updated data
			location.reload();
		});
	});
});
