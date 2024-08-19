$(() => {

    $('body').on("keyup", '.js-search-courses', function(event) {
        let value = $(this).val();

        $(".found_course").empty();
      
      	$(".title_courses_result span").text(value); 
        if(value=="")
        {
        	$(".courses").show();
        	$(".courses .course").show();
        	$(".title_courses_result").hide();
        }
        else
        {        	
        	$(".courses").show();
	        $(".title_courses_result").show();	

	        let	list2 = $(".courses:not(.not_my) .course.if_search .name")
	        list2.each(function(index) {	
			    let label = $(this).data("search");		 

			    if (label.toLowerCase().indexOf(value.toLowerCase()) == -1) {
			        $(this).closest(".course").hide();
			    } else {
			        $(this).closest(".course").show().clone().appendTo(".found_course");			        
			    }

			    /*let array = value.split(" ");
			    array = array.filter(Boolean);
			    for(let i=0;i<array.length;i++)
			    {	    	
			    	if (label.toLowerCase().indexOf(array[i].toLowerCase()) == -1) {
				        $(this).closest(".course").hide();
				    } else {
				        $(this).closest(".course").show().clone().appendTo(".found_course");
				        break;
				    }
			    }*/	
			});

			$(".courses:not(.not_my)").each(function(index) {
				let courses = $(this).find(".course");
				let check = false;
				courses.each(function(index) {
					if ($(this).is(':visible')) {
					    check = true;
					}
				});
				if(!check)
				{	
					$(this).hide();
				}
			});			

			$(".courses:not(.not_my)").hide();
        }	

        setTimeout(() => {
			observer = lozad('.lozad', {
				rootMargin: '200px 0px',
				threshold: 0,
				loaded: el => el.classList.add('loaded')
			})

			observer.observe()
		}, 200)
    }); 



    $(".title_courses_result button").on("click", function(){
		$(".js-search-courses").val("");			
        $(".title_courses_result").hide();
        $(".course, .courses").show();
        $(".found_course").empty();
	});


	$(".filter_courses_wrap .filter_item").on("click", function(){
		let tags = [];
        let text_array = [];

        $(this).toggleClass("active");

        $(".filter_courses_wrap .filter_item.active").each(function(){
        	tags.push($(this).data("value").toString());
        	text_array.push($(this).text());
        })

        $(".found_course").empty();

        if(!tags.length)
        {
        	$(".courses").show();
        	$(".courses .course").show();
        	$(".title_courses_result_tag").hide();
        }
	    else
        {        	
        	$(".courses").show();
	        $(".title_courses_result_tag").show();	

	        //Добавляем в заголовок
	        $(".title_courses_result_tag span").html("");
	        text_array.forEach(function(item, i, arr) {
			   $(".title_courses_result_tag span").append("<b>"+item+"</b>");
			});

	        let	list2 = $(".courses:not(.not_my) .course.if_search");
	        list2.each(function(index) {	
			    let label = $(this).data("tags");
			    label = label.toString().split(",");	

			    console.log("В элементе "+label);	
			    console.log("Выбрано в select: "+tags);	 

			    console.log(find_all_elements(tags, label)); 

			    if (!find_all_elements(tags, label)) {
			        $(this).hide();
			    } else {
			        $(this).show().clone().appendTo(".found_course");			        
			    }
			});

			$(".courses:not(.not_my)").each(function(index) {
				let courses = $(this).find(".course");
				let check = false;
				courses.each(function(index) {
					if ($(this).is(':visible')) {
					    check = true;
					}
				});
				if(!check)
				{	
					$(this).hide();
				}
			});			

			$(".courses:not(.not_my)").hide();
        }
        setTimeout(() => {
			observer = lozad('.lozad', {
				rootMargin: '200px 0px',
				threshold: 0,
				loaded: el => el.classList.add('loaded')
			})

			observer.observe()
		}, 200)

	});

	/*const tag = document.getElementById('tag')
    if(tag)
    {
        tag.addEventListener('valueChange.mdb.select', (e) => {        
            let tags = getSelectValues(tag);
            let text_array = getSelectValues2(tag);
            $(".found_course").empty();

            if(!tags.length)
	        {
	        	$(".courses").show();
	        	$(".courses .course").show();
	        	$(".title_courses_result_tag").hide();
	        }
		    else
	        {        	
	        	$(".courses").show();
		        $(".title_courses_result_tag").show();	

		        //Добавляем в заголовок
		        $(".title_courses_result_tag span").html("");
		        text_array.forEach(function(item, i, arr) {
				   $(".title_courses_result_tag span").append("<b>"+item+"</b>");
				});

		        let	list2 = $(".courses:not(.not_my) .course.if_search");
		        list2.each(function(index) {	
				    let label = $(this).data("tags");
				    label = label.toString().split(",");	

				    console.log("В элементе "+label);	
				    console.log("Выбрано в select: "+tags);	 

				    console.log(find_all_elements(tags, label)); 

				    if (!find_all_elements(tags, label)) {
				        $(this).hide();
				    } else {
				        $(this).show().clone().appendTo(".found_course");			        
				    }
				});

				$(".courses:not(.not_my)").each(function(index) {
					let courses = $(this).find(".course");
					let check = false;
					courses.each(function(index) {
						if ($(this).is(':visible')) {
						    check = true;
						}
					});
					if(!check)
					{	
						$(this).hide();
					}
				});			

				$(".courses:not(.not_my)").hide();
	        }
	        setTimeout(() => {
				observer = lozad('.lozad', {
					rootMargin: '200px 0px',
					threshold: 0,
					loaded: el => el.classList.add('loaded')
				})

				observer.observe()
			}, 200)
        })   
    }*/

    /*$(document).on('click', '.btn-save', function() {
        $(".filter form").submit();
    })    */

    $(".title_courses_result_tag button").on("click", function(){
        /*$(".title_courses_result_tag").hide();
        $(".course, .courses").show();
        $(".found_course").empty();*/

        /*$('#tag option').each(function(element) {
		    $(this).removeAttr('selected').prop('selected', false);
		});*/
		location.reload();

	});

})


function getSelectValues(select) {
	var result = [];
	var options = select && select.options;
	var opt;

	for (var i=0, iLen=options.length; i<iLen; i++) {
		opt = options[i];

	if (opt.selected) {
	  	result.push(opt.value || opt.text);
		}
	}
	return result;
}

function getSelectValues2(select) {
	var result = [];
	var options = select && select.options;
	var opt;

	for (var i=0, iLen=options.length; i<iLen; i++) {
		opt = options[i];

	if (opt.selected) {
	  	result.push(opt.text);
		}
	}
	return result;
}


function find_all_elements(number, arr) {
    return number.every(el => arr.includes(el));
}