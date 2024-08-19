$(() => {

    /*$('body').on("keyup", '.js-search-courses', function(event) {
        let value = $(this).val();*/


	/*$(".filter_courses_wrap .filter_item").on("click", function(){
        $(this).toggleClass("active");*/


    const textarea = document.querySelector('#autoresize');

    textarea.addEventListener( 'input', autosize );
                 
    function autosize(){
        this.style.height = 'auto';
        let applyNow = this.style.offsetHeight;
        this.style.height = this.scrollHeight + 0 + 'px';
    }


    $(".select_cats_all").on("click", function(){
    	$(".filter_cats_item").addClass("active");    	
    	$(".select_cats_filter").removeClass("error");
    });

    $(".deselect_cats_all").on("click", function(){
    	$(".filter_cats_item").removeClass("active")
    });


    $(".filter_cats_item").on("click", function(){
    	$(this).toggleClass("active");    	
    	$(".select_cats_filter").removeClass("error");
    });

    $(".search_ai").on("click", function(){
    	$(".checkbox_ai").prop("checked", true);
    	$(".select_cats").addClass("active");
        $(".js-search").addClass("ai").prop("placeholder", "Введите ваш вопрос");
        $(".search_faq").addClass("ai");
        $(".wrap_search_default").hide();
        $(".search_ai").removeClass("active");
    });

    $(".select_search input").on("change", function(){
    	if($(".select_search input:checked").val()==2)
    	{    		
    		$(".select_cats").addClass("active");
    		$(".js-search").addClass("ai").prop("placeholder", "Введите ваш вопрос");
    		$(".search_faq").addClass("ai");
            $(".wrap_search_default").hide();
            $(".search_ai").removeClass("active");
    	}
    	else
    	{
    		$(".select_cats").removeClass("active");
    		$(".js-search").removeClass("ai").prop("placeholder", "Напишите термин");
    		$(".search_faq").removeClass("ai");
    		$(".wrap_search_ai").hide();
    		$(".wrap_search_default").show();

    	}
    });

    $('body').on("click", '.search_faq.ai button', function(event) {
    	event.preventDefault()
        $(".search_ai").removeClass("active");
    	//Запрос к AI 
    	if($(".filter_cats_item.active").length!=0){
    		$(".wrap_search_default").hide();
    		$(".wrap_search_ai").show();
    		setTimeout(() => {
				$(".search_ai_loading").hide();	
				$(".search_ai_content").show();
			}, 3000);
    	}
    	else
    	{
    		$(".select_cats_filter").addClass("error");
    	}
    });

    $(".search_ai_history_show:not(.red)").on("click", function(){
    	console.log($(this).text())
    	if($(this).text()=="Посмотреть ответ"){
    		$(this).text("Скрыть ответ").parent().parent().parent().find(".search_ai_history_desc").show();
    	}
    	else{
			$(this).text("Посмотреть ответ").parent().parent().parent().find(".search_ai_history_desc").hide();
    	}
    });


    $(".filter_cats_modal_close").on("click", function(){
        $('.mini_modal, .mini_modal_btn').removeClass('active')
        if (is_touch_device()) $('body').css('cursor', 'default')
    });



})

function addAI(){
    if($(".wrap_search_default").is(':visible'))
    {
    	if(!$(".accordion_item").is(':visible')){
    		$(".title_faq_result span").text("По Вашему запросу ничего не найдено. Попробуйте поискать с нейросетью")
    		$(".search_ai").addClass("active");
    	}
    	else
    	{
    		$(".title_faq_result span").text("Результаты поиска");
    		$(".search_ai").removeClass("active");
    	}
    }
}