$(() => {


    $(".image_info_sim .tooltype").on("click", function(){
		let id = $(this).data("id");


		Fancybox.show([{
			src: id,
			type: 'inline'
		}])
	});


	$(".simulator_action_debug .image_info_sim img").on("click", function(e){
		$('.simulator_point-form').trigger("reset"); //Line1
		let box = $(this);
		let offset = box.offset();
		let x = e.pageX - offset.left - 22.5
		let y = e.pageY - offset.top - 22.5;
		// переаводим в проценты
		let sizeBoxX = 	box.outerWidth();
		let sizeBoxY = 	box.outerHeight();

		x = (x/sizeBoxX) * 100;
		y = (y/sizeBoxY) * 100;

		console.log(x);
		console.log(y);

		//$(".image_info_sim").append('<div class="tooltype" data-id="#type_new" style="top:'+y+'%; left:'+x+'%; position: absolute;"></div>');

		Fancybox.close()
		Fancybox.show([{
			src: "#type_new",
			type: 'inline'
		}])
	});

})

