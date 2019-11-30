//Check off specific Todos By clicking
$("ul").on("click","li",function(){
   $(this).toggleClass("completed"); 
});

//Click on X to delete TODO
$("ul").on("click","span",function(event){
     $(this).parent().fadeOut(500, function(){
     	$(this).remove();                      //This this already points to parent
     });
     event.stopPropagation();
}); 

$("input[type='text'").keypress(function(event){
	if(event.which === 13){
		var todoText = $(this).val();
		$(this).val("");
		$("ul").append("<li><span><i class='far fa-trash-alt'></i></span>" + todoText + "</li>");

	}
});

$(".fa-edit").click(function(){
    $("input[type='text'").fadeToggle()
});