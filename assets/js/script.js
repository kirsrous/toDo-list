//check off specific todos by clicking
$("ul").on("click", "li", function() {
	$(this).toggleClass("completed");
});

//click on X to delete Todo

$("ul").on("click", "span", function(event) {
	$(this).parent().fadeOut(1000,function(){
		$(this).remove();
	});
	event.stopPropagation();
});

$("input[type='text']").keypress(function(event) {
	if(event.which === 13) {
		//grabing new todo text
		var todoText = $(this).val();
		$(this).val("");
		//create a new li with text
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText +  "</li>");
	}
});

$(".fa-plus").click(function() {
	$("input[type='text']").fadeToggle();
})