WW = window.innerWidth || document.clientWidth || document.getElementsByTagName('body')[0].clientWidth
WH = window.innerHeight || document.clientHeight || document.getElementsByTagName('body')[0].clientHeight
$(() => {




	$(".show_courses_not_complete").click(function (e) {
		$(".show_courses_not_complete").toggleClass("active");
		$(".courses_not_complete_list").toggleClass("active");
		if($(".show_courses_not_complete").hasClass("active")){
			$(".show_courses_not_complete span").text("Скрыть курсы")
		}
		else{
			$(".show_courses_not_complete span").text("Показать курсы")
		}
	});
	// if($(".loading").length>0){
	// 	setTimeout(() => {
	// 		$(".loading").removeClass("loading");
	// 		$(".trainer_ai_loading").hide();
	// 		$(".trainer_ai_body").removeClass("hide");
	// 	}, 3000);
	// }
	//
	// $('.play_text .inner').click(function (e) {
	// 	$('.play_text').find(".inner").hide();
	// 	$('.play_text').find(".load").show();
	// 	setTimeout(() => {
	// 		$('.play_text').find(".load").hide();
	// 		$('.play_text').find(".player").show();
	// 	}, 3000);
	// });
	//

	$(".js-trainer_ai_button-record").click(function (e) {
		$(this).toggleClass("active");
		$(".trainer_ai_record").toggleClass("hide");
		$(".trainer_ai_textedit").addClass("hide");
		$(".js-trainer_ai_button-textedit").removeClass("active");
	});

	$(".js-trainer_ai_button-textedit").click(function (e) {
		$(this).toggleClass("active");
		$(".trainer_ai_textedit").toggleClass("hide");
		$(".trainer_ai_record").addClass("hide");
		$(".js-trainer_ai_button-record").removeClass("active");
	});

	$(".rating-area2 > label:nth-child(n+5)").click(function (e) {
		console.log($(this).parent().data("modal"));
		Fancybox.show([{
			src: $(this).parent().data("modal"),
			type: 'inline'
		}])
	});

	$(document).on('click', '.trainer_ai_hint_title', function (e) {
		$(this).next().show();
		$(this).find("span").text("Подсказка");
	});



	// tippy('[data-tippy-content]');
	function handleFileSelect(evt) {
		var files = evt.target.files; // FileList object
		// Loop through the FileList and render image files as thumbnails.
		for (var i = 0, f; f = files[i]; i++) {
			// Only process image files.
			if (!f.type.match('image.*')) {
				alert("Image only please....");
			}
			var reader = new FileReader();
			// Closure to capture the file information.
			reader.onload = (function (theFile) {
				return function (e) {
					// Render thumbnail.
					var span = document.createElement('span');
					span.innerHTML = ['<img class="thumb" title="', escape(theFile.name), '" src="', e.target.result, '" />'].join('');
					$("#outputMulti").append(span);
					$(".img_file").show();
					$(".clear_input").show();
				};
			})(f);
			// Read in the image file as a data URL.
			reader.readAsDataURL(f);
		}
	}
	if (document.getElementById('imgInp')) {
		document.getElementById('imgInp').addEventListener('change', handleFileSelect, false);
	}

	$(".message_continue .green, .message_continue .red").click(function (e) {
		$(".message_continue .green, .message_continue .red").hide();
		$(".message_continue .blue, .message_continue .yellow").addClass("active");
	});


	// $(".learning-paths .training-plan_item ul li span").click(function (e) {
	// 	e.preventDefault();
	// 	$(this).parent().toggleClass("active");
	// });


	$('.clear_input').click(function (e) {
		$(".clear_input").hide();
		$(".img_file").hide();
		$("#outputMulti").html("");
		document.getElementById("imgInp").value = "";
	});



	$(".create-report_wrap_hide").each(function (index) {
		if ($(this).outerHeight() > 46) {
			$(this).css("height", "46px");
			$(this).after("<a href='' class='js-open-report'>Показать все</a>");
		}
	})

	$('body').on('click', '.js-open-report', function (e) {
		e.preventDefault();
		$(this).hide().prev().css("height", "100%");
	});

	// $('body').on('click', '.shop_modal-btn', function (e) {
	// 	e.preventDefault()
	// 	Fancybox.close()
	// });


	$('.addition_btn').click(function (e) {
		e.preventDefault();
		$('.addition form').addClass('active');
		$('.addition_btn').remove();
		$('.addition_arrow').show();
	});

	$('.addition form button').click(function (e) {
		e.preventDefault();
		$('.addition form .line').hide();
		$('.addition form button.send').hide();
		$(".js-more-addition").show();
		$('.addition form .form-text').addClass('active');
	});


	$('.js-more-addition').click(function (e) {
		e.preventDefault();
		$(this).hide();
		$('.addition form button.send').show();
		$('.addition form .form-text').removeClass('active');
		$('.addition form .line').show();
	});


	$(".education_more_link").click(function (e) {
		$(".education_description").css("height", "auto");
		$(this).hide();
	});

	$(".idea_check-bottom button").click(function (e) {
		$(".commission-decision, .idea_form").hide();
		$(".new_load").show();

		setTimeout(() => {
			$(".new_load").hide();
			$(".idea_form2").show();
		}, 3000);

	});

	$('.intellect-top_btn').click(function () {
		el = $(this)
		$(this).parent().next().slideToggle(300, function () {
			if ($(this).is(':hidden')) {
				el.html('Предложить');
			} else {
				el.html('Отменить');
			}
		});
	});


	if ($(".sortable").length) {
		sortable('.sortable')[0].addEventListener('sortupdate', function (e) {
			$(".answer_btn").show();
		});
	}


	$('body').on('click', '.text_block_show_more', function (e) {
		e.preventDefault()
		$(".text_block_hide").addClass("active");
		$(this).hide();
	});


	$('body').on('click', '.shop-news_btn', function (e) {
		e.preventDefault()
		$(".accrual_item.hide").addClass("active");
		$(this).hide();
	});


	$('.adding-question_btn').click(function (e) {
		e.preventDefault()
		$('.adding-question_hide').slideToggle(300, function () {
			if ($(this).is(':hidden')) {
				$('.adding-question_btn span').html('Показать');
				$(".adding-question_btn").removeClass("active");
			} else {
				$('.adding-question_btn span').html('Свернуть');
				$(".adding-question_btn").addClass("active");
			}
		});
	});

	$('.bearing-nav_title-btn').click(function (e) {
		e.preventDefault()
		$('.bearing-nav_hide').slideToggle(300, function () {
			if ($(this).is(':hidden')) {
				$('.bearing-nav_title-btn span').html('Показать');
				$(".bearing-nav_title-btn").removeClass("active");
			} else {
				$('.bearing-nav_title-btn span').html('Скрыть');
				$(".bearing-nav_title-btn").addClass("active");
			}
		});
	});



	$('.event-feed .idea-block_item-link').click(function (e) {
		e.preventDefault()
		$('.content_block').addClass('active');
		$(this).css('display', 'none')
	});



	var currentStep = 1,
		totalSteps = $(".simulator-quiz_block .step").length - 1;

	$(".js-select_step").click(function (e) {
		$('.simulator-quiz .step').hide()
		$('.simulator-quiz .step' + 0).fadeIn(500)
		$(".simulator-quiz .btns").hide();
	});

	$(".simulator-quiz_item_step").click(function (e) {
		e.preventDefault()
		$('.simulator-quiz .step').hide()
		$('.simulator-quiz .step' + $(this).data("number")).fadeIn(500)
		currentStep = $(this).data("number");
		$('.simulator-quiz .progress .count .current').text(Math.round(currentStep / totalSteps * 100) + '%')
		$('.simulator-quiz .progress .progress_bar div').width(currentStep / totalSteps * 100 + '%')
		$(".simulator-quiz .btns").show();
	});


	$('.simulator-quiz .head .count .total').text(totalSteps)

	$('.simulator-quiz .progress .count .current').text(Math.round(currentStep / totalSteps * 100) + '%')
	$('.simulator-quiz .progress .progress_bar div').width(currentStep / totalSteps * 100 + '%')


	document.addEventListener('keydown', function (event) {

		if ((event.code === 'ArrowRight' || event.code === 'PageDown') && currentStep < totalSteps) {
			currentStep++

			$('.simulator-quiz .step').hide()
			$('.simulator-quiz .step' + currentStep).fadeIn(500)

			$('.simulator-quiz .progress .count .current').text(Math.round(currentStep / totalSteps * 100) + '%')
			$('.simulator-quiz .progress .progress_bar div').width(currentStep / totalSteps * 100 + '%')

			currentStep > 1
				? $('.simulator-quiz .prev_btn').removeClass('disabled')
				: $('.simulator-quiz .prev_btn').addClass('disabled')

			if (currentStep == totalSteps) {
				$('.simulator-quiz .head').hide()
				$('.simulator-quiz .next_btn').addClass('disabled')
			} else {
				$('.simulator-quiz .head').show()
				$('.simulator-quiz .next_btn').removeClass('disabled')
			}
		}
		if ((event.code === 'ArrowLeft' || event.code === 'PageUp') && currentStep > 1) {
			if (currentStep > 1) {
				currentStep = currentStep - 1

				$('.simulator-quiz .step').hide()
				$('.simulator-quiz .step' + currentStep).fadeIn(500)

				$('.simulator-quiz .progress .count .current').text(Math.round(currentStep / totalSteps * 100) + '%')
				$('.simulator-quiz .progress .progress_bar div').width(currentStep / totalSteps * 100 + '%')

				currentStep > 1
					? $('.simulator-quiz .prev_btn').removeClass('disabled')
					: $('.simulator-quiz .prev_btn').addClass('disabled')

				if (currentStep == totalSteps) {
					$('.simulator-quiz .head').hide()
					$('.simulator-quiz .next_btn').addClass('disabled')
				} else {
					$('.simulator-quiz .head').show()
					$('.simulator-quiz .next_btn').removeClass('disabled')
				}
			}
		}
	});


	$('.simulator-quiz .next_btn').click(function (e) {
		e.preventDefault()

		currentStep++

		$('.simulator-quiz .step').hide()
		$('.simulator-quiz .step' + currentStep).fadeIn(500)

		$('.simulator-quiz .progress .count .current').text(Math.round(currentStep / totalSteps * 100) + '%')
		$('.simulator-quiz .progress .progress_bar div').width(currentStep / totalSteps * 100 + '%')

		currentStep > 1
			? $('.simulator-quiz .prev_btn').removeClass('disabled')
			: $('.simulator-quiz .prev_btn').addClass('disabled')

		if (currentStep == totalSteps) {
			$('.simulator-quiz .head').hide()
			$('.simulator-quiz .next_btn').addClass('disabled')
		} else {
			$('.simulator-quiz .head').show()
			$('.simulator-quiz .next_btn').removeClass('disabled')
		}
	})


	$('.simulator-quiz .prev_btn').click(function (e) {
		e.preventDefault()

		if (currentStep > 1) {
			currentStep = currentStep - 1

			$('.simulator-quiz .step').hide()
			$('.simulator-quiz .step' + currentStep).fadeIn(500)

			$('.simulator-quiz .progress .count .current').text(Math.round(currentStep / totalSteps * 100) + '%')
			$('.simulator-quiz .progress .progress_bar div').width(currentStep / totalSteps * 100 + '%')

			currentStep > 1
				? $('.simulator-quiz .prev_btn').removeClass('disabled')
				: $('.simulator-quiz .prev_btn').addClass('disabled')

			if (currentStep == totalSteps) {
				$('.simulator-quiz .head').hide()
				$('.simulator-quiz .next_btn').addClass('disabled')
			} else {
				$('.simulator-quiz .head').show()
				$('.simulator-quiz .next_btn').removeClass('disabled')
			}
		}
	})



	$('body').on('click', '.change-history_link', function (e) {
		e.preventDefault()
		$(".change-history_items.hide").addClass("active");
		$(this).hide();
	});

	$('body').on('click', '.close_new_message', function (e) {
		e.preventDefault()
		$(this).parent().slideUp();
	});
	// Боковая колонка - Меню

	$('aside .menu .item > a.sub_link').click(function (e) {
		e.preventDefault()

		$(this).toggleClass('open').next().slideToggle(300)
	});

	// $(".register .submit_btn").prop("disabled", true);

	$('body').on('change', '#remember_check', function (e) {
		if ($("#remember_check").prop("checked")) {
			$(".register .submit_btn").prop("disabled", false);
		}
		else {
			$(".register .submit_btn").prop("disabled", true);
		}
	});


	$('body').on('click', '.details_item-head', function (e) {
		e.preventDefault()
		$(this).next('.details_item-body').slideToggle();
		if ($(this).find(".details_item-link-yellow").hasClass("active")) {
			$(this).find(".details_item-link-yellow").html('<span>Свернуть</span><svg class="icon"><use xlink:href="/images/sprite.svg#turn"></use></svg>').removeClass("active");
		}
		else {
			$(this).find(".details_item-link-yellow").html('<span>Подробнее</span><svg class="icon"><use xlink:href="/images/sprite.svg#link-more"></use></svg>').addClass("active");
		}
	});

	$('body').on('click', '.details_item-body .details_item-link-yellow', function (e) {
		e.preventDefault()
		$(this).parent().hide('.details_item-body');
		$(this).parent().prev().find(".details_item-link-yellow").html('<span>Подробнее</span><svg class="icon"><use xlink:href="/images/sprite.svg#link-more"></use></svg>').addClass("active");
	});




	$('.mission1 .mission_more-btn').click(function(e){
		e.preventDefault()
		$('.mission1 .mission_item.hide').slideToggle(200, function(){
			if ($(this).is(':hidden')) {
				$('.mission1 .mission_more-btn').html('Показать все');
			} else {
				$('.mission1 .mission_more-btn').html('Свернуть');
			}
		});
	});


	$('.mission2 .mission_more-btn').click(function(e){
		e.preventDefault()
		$('.mission2 .mission_item.hide').slideToggle(200, function(){
			if ($(this).is(':hidden')) {
				$('.mission2 .mission_more-btn').html('Показать все');
			} else {
				$('.mission2 .mission_more-btn').html('Свернуть');
			}
		});
	});



	$('.tool_more').click(function(e){
		e.preventDefault()
		$('.tool_hide').addClass('active');
		$('.tool_more').css('display', 'none');
	});


	// Видео плеер
	/*if ('function' === typeof MediaPlayer) {
		[].forEach.call(document.querySelectorAll('audio[controls], video[controls]'), function (media) {
			player = media.player = new MediaPlayer(media, {
				svgs: {
					play: 'images/sprite.svg#symbol-play',
					pause: 'images/sprite.svg#symbol-pause',
					mute: 'images/sprite.svg#symbol-mute',
					unmute: 'images/sprite.svg#symbol-unmute',
					enterFullscreen: 'images/sprite.svg#symbol-enterFullscreen',
					leaveFullscreen: 'images/sprite.svg#symbol-leaveFullscreen'
				},
			})
		})

		$('.video_player .rewind_btn').click(e => {
			e.preventDefault()

			player.media.currentTime = player.media.currentTime - 15
		})

		$('.video_player .forward_btn').click(e => {
			e.preventDefault()

			player.media.currentTime = player.media.currentTime + 30
		})
	}*/
	if ('function' === typeof MediaPlayer) {
		[].forEach.call(document.querySelectorAll('audio[controls]:not(.not)'), function (media) {
			player = media.player = new MediaPlayer(media, {
				svgs: {
					mute: '/images/sprite.svg#ic_mute',
					unmute: '/images/sprite.svg#ic_mute',
					play: '/images/sprite.svg#ic_play',
					pause: '/images/sprite.svg#ic_pause',
				},
			})
		})
	}

	// Аккордион
	$('body').on('click', '.accordion .accordion_item .head', function (e) {
		e.preventDefault()

		const $item = $(this).closest('.accordion_item'),
			$accordion = $(this).closest('.accordion')

		if ($item.hasClass('active')) {
			$item.removeClass('active').find('.data').slideUp(300)
		} else {
			$accordion.find('.accordion_item').removeClass('active')
			$accordion.find('.data').slideUp(300)

			$item.addClass('active').find('.data').slideDown(300)
		}
	})


	$('body').on('click', '.bearing .accordion2  .accordion_item:not(:has(.tabs)) .head, .bearing .accordion2 .accordion_item .head .faq_btns, .bearing .accordion2 .accordion_item .title', function (e) {
		e.preventDefault()

		const $item = $(this).closest('.accordion_item'),
			$accordion = $(this).closest('.accordion2')

		if ($item.hasClass('active')) {
			$item.removeClass('active').find('.data').slideUp(300)
		} else {
			$accordion.find('.accordion_item').removeClass('active')
			$accordion.find('.data').slideUp(300)

			$item.addClass('active').find('.data').slideDown(300)
		}
	})

	$('body').on('click', '.bearing-nav_hide a', function (e) {
		e.preventDefault()

		let id = $(this).data("id");

		const $item = $(".accordion_item").eq(id),
			$accordion = $('.accordion2');

		if ($item.hasClass('active')) {
			$item.removeClass('active').find('.data').slideUp(300)
		} else {
			$accordion.find('.accordion_item').removeClass('active')
			$accordion.find('.data').slideUp(300)

			$item.addClass('active').find('.data').slideDown(300)
		}
	})



	$(".title_faq_result button").on("click", function () {
		$(".js-search").val("");
		$(".title_faq").show();
		$(".title_faq_result").hide();
		let list = $(".accordion_item");
		list.each(function (index) {
			$(this).show();
		});
		//$(".highlight").replaceWith(function () { return $(this).contents(); });
	});

	/*$('body').on("keyup", '.js-search', function (event) {
		//$(".highlight").replaceWith(function () { return $(this).contents(); });
		let value = $(this).val();
		if (value == "") {
			$(".title_faq").show();
			$(".title_faq_result").hide();
		}
		else {
			$(".title_faq").hide();
			$(".title_faq_result").show();
		}

		let list = $(".accordion_item .text_block_wrap");
		list.each(function (index) {
			let label_html = $(this).html();
			let label = $(this).text();
			if (label.toLowerCase().indexOf(value.toLowerCase()) == -1) {
				$(this).closest(".accordion_item").hide();
			} else {
				$(this).closest(".accordion_item").show();
				if (value.length > 1) {
					var re = new RegExp(value, 'gi');
					//$(this).html(label_html.replace(re, '<span class="highlight">' + value + '</span>'));
				}
			}
		});

		addAI();
	});*/


	// Тест - Поля ввода в тексте
	var input = document.querySelectorAll('.test_data .step .answers .text .input'),
		buffer = []

	for (var i = 0; input.length > i; i++) {
		buffer[i] = document.createElement('div')
		buffer[i].className = 'input_buffer'

		input[i].parentNode.insertBefore(buffer[i], input[i].nextSibling)

		input[i].oninput = function () {
			this.nextElementSibling.innerHTML = this.value
			this.style.width = this.nextElementSibling.clientWidth + 'px'
		}
	}

	if ($(".shop-new_leader .swiper").length > 0) {
		var swiper = new Swiper('.shop-new_leader .swiper', {
			slidesPerView: 3,
			spaceBetween: 13,
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			},
			breakpoints: {
				320: {
					slidesPerView: 1,
					spaceBetween: 0
				},
				480: {
					slidesPerView: 2,
					spaceBetween: 13
				},
				767: {
					slidesPerView: 3,
					spaceBetween: 13
				}
			}
		})
	}


	// Тест - Пары
	function lineDistance(x, y, x0, y0) {
		return Math.sqrt((x -= x0) * x + (y -= y0) * y)
	}

	function line_exists(stem, option) {
		var $exists = false

		$(".line").each(function () {
			if (
				$(this).data("stem") === stem.attr("id") &&
				$(this).data("option") === option.attr("id")
			) {
				$exists = true
			}
		})

		return $exists
	}

	function drawLine(stem, option) {
		// $(".answer_btn").show();
		var pointA = stem.offset(),
			pointB = option.offset()

		pointA.left = pointA.left + stem.outerWidth()
		pointA.top = pointA.top + stem.outerHeight() / 2

		pointB.top = pointB.top + option.outerHeight() / 2

		var angle =
			Math.atan2(pointB.top - pointA.top, pointB.left - pointA.left) *
			180 /
			Math.PI

		var distance = lineDistance(
			pointA.left,
			pointA.top,
			pointB.left,
			pointB.top
		)

		var line = $('<div class="line"/>')

		line.append($('<div class="point"/>'))
		line.attr("data-stem", stem.attr("id"))
		line.attr("data-option", option.attr("id"))

		$(".couples").append(line)

		line.css({
			"transform": "rotate(" + angle + "deg)",
			"width": distance + "px",
			"position": "absolute"
		})

		pointB.top > pointA.top
			? $(line).offset({ top: pointA.top, left: pointA.left })
			: $(line).offset({ top: pointB.top, left: pointA.left })
	}


	$(".stems li").on("click", function () {
		stem = $(this);
		if (!stem.hasClass("matched")) {
			stem.toggleClass("selected");

			$(".stems li").not(stem).removeClass("selected");

			$(".options li").removeClass("selected");

			if (stem.hasClass("selected")) {
				var stem_lines = $('.line[data-stem="' + stem.attr("id") + '"]');
				stem_lines.each(function () {
					var $option = $(this).data("option");
					$('.options li[id="' + $option + '"]').addClass("selected")
				});
				$(".options").addClass("ready");
			} else {
				$(".options").removeClass("ready");
			}
		}
	});

	$(".options li").on("click", function () {
		if ($(".options").hasClass("ready")) {
			if (!$(this).hasClass("active")) {
				$(this).toggleClass("selected")

				var stem = $(".stems li.selected"),
					option = $(this)

				if (!line_exists(stem, option)) {
					drawLine(stem, option);

					let num = option.data('field_num');
					stem.find('.answer-field').val(num);
				} else {
					$(
						'.line[data-stem="' +
						stem.attr("id") +
						'"][data-option="' +
						option.attr("id") +
						'"]'
					).remove()
				}

				var stem_lines = $('.line[data-stem="' + stem.attr("id") + '"]')

				stem_lines.length > 0
					? stem.addClass('matched')
					: stem.removeClass('matched')

				$(this).addClass("active");
				$(".stems li").removeClass("selected");
				$(this).removeClass("selected");
				$(".options").removeClass("ready")
			}
		}

		if ($(".stems li.matched").length == $(".stems li").length) {
			$(".answer_btn").show();
		}
	})


	// Тест - Перетаскивание
	sortable('.sortable')


	// Моб. меню
	$('.mob_header .menu_btn').click((e) => {
		e.preventDefault()

		$('.mob_header .menu_btn').addClass('active')
		$('body').addClass('menu_open')
		$('aside').fadeIn(300)
	})

	$('aside .close_btn').click((e) => {
		e.preventDefault()

		$('.mob_header .menu_btn').removeClass('active')
		$('body').removeClass('menu_open')
		$('aside').fadeOut(300)
	})


	// Квиз
	// let totalSteps = $('.quiz .step').length,
	// 	currentStep = 1
	//
	// $('.quiz .count .total').text(totalSteps)
	//
	// $('.quiz .answers label').click(function () {
	// 	let answerText = $(this).text(),
	// 		questionText = $(this).closest('.step').find('.question').text()
	//
	// 	$('.quiz .total_answers .template .question span').text(questionText)
	// 	$('.quiz .total_answers .template .answer span').text(answerText)
	// 	$('.quiz .total_answers .template').before($('.quiz .total_answers .template').html())
	//
	// 	$('.quiz .step').hide()
	// 	$(this).closest('.step').next().fadeIn(300)
	//
	// 	$('.quiz .total_answers').fadeIn(300)
	// 	$('.quiz .btns').css('display', 'flex')
	//
	// 	currentStep++
	//
	// 	if (currentStep > totalSteps) {
	// 		$('.quiz .btns, .quiz .steps, .quiz .total_answers').hide()
	// 		$('.quiz .result').fadeIn(300)
	// 	} else {
	// 		$('.quiz .count .current').text(currentStep)
	// 	}
	// })
	//
	// $('.quiz .btns .prev_btn').click(function (e) {
	// 	e.preventDefault();
	//
	// 	$('.quiz .step').hide();
	// 	$('.quiz .step').eq(currentStep - 1).prev().fadeIn(300);
	// 	$('.quiz .total_answers .template').prev().remove();
	//
	// 	currentStep = currentStep - 1;
	// 	$('.quiz .count .current').text(currentStep)
	// })


	// Аудио сообщения
	// const audios = document.querySelectorAll('.audio_wave'),
	// 	inits = []
	//
	// var i = 0
	//
	// audios.forEach(el => {
	// 	inits[i] = WaveSurfer.create({
	// 		container: el,
	// 		waveColor: '#ABAAE2',
	// 		progressColor: el.classList.contains('light') ? '#fff' : '#0B00D8',
	// 		cursorColor: 'transparent',
	// 		barWidth: 2,
	// 		barRadius: 2,
	// 		cursorWidth: 0,
	// 		height: 66,
	// 		barGap: 2
	// 	})
	//
	// 	inits[i].load(el.getAttribute('data-file'))
	//
	// 	inits[i].on('finish', function () {
	// 	    $('.audio_message .btn.active').toggleClass('active');
	// 	});
	//
	// 	i++
	// });

	// setTimeout(() => {
	// 	i = 0
	// 	$('.audio_message .duration').each(function () {
	// 		$(this).text(sec2time(inits[i].getDuration()))
	// 		i++
	// 	})
	// }, 1000);

	i = 0
	$('.audio_message .btn').each(function () {
		$(this).attr('data-index', i)
		i++
	})

	let audio_wave_new;
	let newWave;

	// $('body').on('click', '.audio_message .btn', function (e) {
	// 	let index = $(this).data('index')
	//
	// 	$(this).toggleClass('active')
	// 	if($(this).hasClass("btn_new"))
	// 	{
	// 		newWave.playPause(newWave)
	// 	}
	// 	else
	// 	{
	// 		inits[index].playPause(inits[index])
	// 	}
	//
	// });






	$(".test").on("click", function (e) {
		e.preventDefault();
		$(".messages").append('<div class="message"><div class="photo"><img src="images/tmp/person_photo.jpg"></div><div class="info"><div class="name">Василий Иванович</div><div class="audio_message"><button class="btn btn_new" data-index="1" data-action="play"><svg class="icon"><use xlink:href="images/sprite.svg#ic_play"></use></svg><svg class="icon"><use xlink:href="images/sprite.svg#ic_pause"></use></svg></button><div class="audio_wave audio_wave_new" data-file="https://wavesurfer-js.org/example/media/demo.wav"></div><div class="duration duration_new"></div></div></div>					</div>');
		audio_wave_new = document.querySelector('.audio_wave_new');
		newWave = WaveSurfer.create({
			container: audio_wave_new,
			waveColor: '#ABAAE2',
			progressColor: audio_wave_new.classList.contains('light') ? '#fff' : '#0B00D8',
			cursorColor: 'transparent',
			barWidth: 2,
			barRadius: 2,
			cursorWidth: 0,
			height: 66,
			barGap: 2
		});
		newWave.load(audio_wave_new.getAttribute('data-file'));
		newWave.on('finish', function () {
			$('.audio_message .btn.active').toggleClass('active');
		});
		setTimeout(() => {
			$('.audio_message .duration_new').each(function () {
				$(this).text(sec2time(newWave.getDuration()))
			});
			$(".btn_new").toggleClass('active');
			newWave.playPause(newWave);
		}, 1000);
	});


	// Диалог - Подсказка
	$('body').on('click', '.dialog .message .prompt .yes_btn', function (e) {
		e.preventDefault()

		$(this).toggleClass('active').closest('.prompt').find('.prompt-box').slideToggle(300)
	})

	$('body').on('click', '.dialog .message .prompt .no_btn', function (e) {
		e.preventDefault();

		$(this).closest('.prompt').slideUp(200)
	});





	$('.ask-questions_btn').click(function (e) {
		e.preventDefault()
		$('.ask-questions_btn').toggleClass('active');
	});


	$('.ask-questions_btn').click(function (e) {
		e.preventDefault()
		$('.ask-questions_form').slideToggle(20, function () {
			if ($(this).is(':hidden')) {
				$('.ask-questions_btn').html('Задать вопрос');
			} else {
				$('.ask-questions_btn').html('Скрыть');
			}
		});
	});



	// Клик по лайку
	$(document).on('click', '.likes button', function (e) {
		e.preventDefault();
		$(".likes button").removeClass('active');
		$(this).addClass('active');
	})


	$('body').on('click', '.modal-intellect_link', function (e) {
		e.preventDefault()
		Fancybox.close()
	});

	// Всплывающие окна
	$('body').on('click', '.modal_content_eye', function (e) {
		e.preventDefault()
		Fancybox.close()
		Fancybox.show([{
			src: $(this).data('content'),
			type: 'inline'
		}],
			{
				on: {
					closing: (fancybox, slide) => {
						let videos = $('.modal video, .video_message video, audio');
						$.each(videos, function (key, video) {
							video.pause();
							video.currentTime = 0;
						});
					},
				},
			})
	})


	// приостанавливает все аудио
	function pause_audios() {
		$('audio').each(function () {
			this.pause();
			this.currentTime = 0;
		});
	}


	// Всплывающие окна
	$('body').on('click', '.details_item-dialog-link', function (e) {
		e.preventDefault()

		Fancybox.close()

		Fancybox.show([{
			src: $(this).data('content'),
			type: 'inline'
		}], {
			on: {
				closing: (fancybox, slide) => {
					let videos = $('video');
					$.each(videos, function (key, video) {
						video.pause();
						video.currentTime = 0;
					});
					let audios = $('audio');
					$.each(audios, function (key, audio) {
						audio.pause();
						audio.currentTime = 0;
					});
				},
			},
		})
	})

	$('body').on('click', '.js-show', function (e) {
		e.preventDefault()
		let block = $(this).data("block");

		$(".controls_button").addClass("hide");
		console.log(block);
		$(block).show();
	});

	$('body').on('click', '.go_controls_button', function (e) {
		e.preventDefault()
		$(".block_control").hide();
		$(".controls_button").removeClass("hide");
	});
	

	// Восстановление пароля
	// $('.auth .recovery .form').submit(function (e) {
	// 	e.preventDefault()
	//
	//
	// })


	$('body').on('click', '.auth .form .view_btn', function (e) {
		e.preventDefault()

		let parent = $(this).closest('.field')

		!$(this).hasClass('active')
			? parent.find('.input').attr('type', 'text')
			: parent.find('.input').attr('type', 'password')

		$(this).toggleClass('active')
	})

	$('.audio-notes_description-decoding').click(function () {
		$(this).parent().parent().next().slideToggle(300);
	});


	$('.audio-notes_description-decoding').click(function () {
		if ($(this).text() == "Скрыть расшифровку") {
			$(this).text("Расшифровка");
		} else {
			$(this).text("Скрыть расшифровку");
		};
	});


	$('.audio-notes_btn').click(function (e) {
		e.preventDefault();
		if ($(this).text() == "Отменить заметку") {
			$(this).text("Записать заметку");
			$(".audio_wrapper").slideToggle(300);
		} else {
			$(this).text("Отменить заметку");
			$(".audio_wrapper").slideToggle(300);
		};
	});

	$('.js-open-record').click(function (e) {
		e.preventDefault();
		$(this).toggleClass("active");
		if (!$(this).hasClass("active")) {
			$(this).text("Записать аудио-подсказку");
			$(".js-block_record").slideToggle(300);
			$(".audio-notes_text").slideToggle(300);
		} else {
			$(this).text("Отменить запись");
			$(".js-block_record").slideToggle(300);
			$(".audio-notes_text").slideToggle(300);
		};
	});

	$('.js-upload-record').click(function (e) {
		e.preventDefault();
		$(this).toggleClass("active");
		if (!$(this).hasClass("active")) {
			$(this).text("Загрузить с диска");
			$(".js-block_upload").slideToggle(300);
			$(".audio-notes_text").slideToggle(300);
		} else {
			$(this).text("Отменить загрузку");
			$(".js-block_upload").slideToggle(300);
			$(".audio-notes_text").slideToggle(300);
		};
	});

	/*$('.js-open-record').click(function(e) {
		e.preventDefault();
		$(this).toggleClass("active");
		if (!$(this).hasClass("active")) {
			$(this).text("Записать аудио-подсказку");
			$(".js-block_record").slideToggle(300);
			$(".audio-notes_text").slideToggle(300);
		} else {
			$(this).text("Отменить запись");
			$(".js-block_record").slideToggle(300);
			$(".audio-notes_text").slideToggle(300);
		};
	});

	$('.js-upload-record').click(function(e) {
		e.preventDefault();
		$(this).toggleClass("active");
		if (!$(this).hasClass("active")) {
			$(this).text("Загрузить с диска");
			$(".js-block_upload").slideToggle(300);
			$(".audio-notes_text").slideToggle(300);
		} else {
			$(this).text("Отменить загрузку");
			$(".js-block_upload").slideToggle(300);
			$(".audio-notes_text").slideToggle(300);
		};
	});*/


	// $(".task-page_btn button").click(function (e) {
	// 	e.preventDefault();
	// 	$('.solutions-tasks').addClass('active');
	// 	$(".solutions-tasks .solutions-tasks_wrap").show();
	// 	$(".solutions-tasks2 .solutions-tasks_wrap").hide();
	// 	setTimeout(() => {
	// 		$('.solutions-tasks').removeClass('active');
	// 		$(".solutions-tasks .solutions-tasks_wrap").hide();
	// 		$(".solutions-tasks2 .solutions-tasks_wrap").show();
	// 		$('.solutions-tasks2').addClass('active');
	// 		$(".solutions-tasks .wrapper_head").hide();
	// 	}, 3000);
	// });

	/*$(".solutions-tasks3 .solutions-tasks_top-delete").click(function (e) {
		e.preventDefault();
		$(this).parent().parent().parent().hide();
	});*/

	if ($(".js-example-basic-multiple").length > 0) {
		$('.js-example-basic-multiple').select2();
	}

	if ($(".js-example-basic-single").length > 0) {
		$('.js-example-basic-single').select2();
	}
	if ($(".js-example-basic-single2").length > 0) {
		$('.js-example-basic-single2').select2({ minimumResultsForSearch: Infinity });
	}

	$(".solutions-tasks_text_togger").click(function (e) {
		$(this).hide().next().show();
	});

	$(".audio-notes_description-redactor").click(function (e) {
		$(this).parent().next().show();
	});



	$('.calend_item').on('click', function (event) {
		$(this).toggleClass('active');
	});


	$('.almanac_item').on('click', function (event) {
		$(this).toggleClass('active');
	});

	$('body').on('click', '.password-control', function (e) {
		e.preventDefault()
		if ($('#password-input').attr('type') == 'password') {
			$('#password-input').attr('type', 'text');
		} else {
			$('#password-input').attr('type', 'password');
		}
	});


	$('.almanac_item').on('click', function (event) {
		$(this).toggleClass('active');
	});

	$('body').on('click', '.password-control', function (e) {
		e.preventDefault()
		if ($('#password-input').attr('type') == 'password') {
			$('#password-input').attr('type', 'text');
		} else {
			$('#password-input').attr('type', 'password');
		}
	});




	// Табы
	var locationHash = window.location.hash

	$('body').on('click', '.tabs button', function (e) {
		e.preventDefault()

		if (!$(this).hasClass('active')) {
			const $parent = $(this).closest('.tabs_container'),
				activeTab = $(this).data('content'),
				$activeTabContent = $(activeTab),
				level = $(this).data('level')

			$parent.find('.tabs:first button').removeClass('active')
			$parent.find('.tab_content.' + level).removeClass('active')

			$(this).addClass('active')
			$activeTabContent.addClass('active')
		}
	})

	if (locationHash && $('.tabs_container').length) {
		const $activeTab = $('.tabs button[data-content=' + locationHash + ']'),
			$activeTabContent = $(locationHash),
			$parent = $activeTab.closest('.tabs_container'),
			level = $activeTab.data('level')

		$parent.find('.tabs:first button').removeClass('active')
		$parent.find('.tab_content.' + level).removeClass('active')

		$activeTab.addClass('active')
		$activeTabContent.addClass('active')

		$('html, body').stop().animate({ scrollTop: $activeTabContent.offset().top }, 1000)
	}



})



$(window).on('load', () => {
	// Выравнивание элементов в сетке
	$('.courses .row').each(function () {
		namesHeight($(this), parseInt($(this).css('--courses_count')))
	})

	$('.simulators .row').each(function () {
		namesHeight($(this), parseInt($(this).css('--simulators_count')))
	})

	$('.articles .row').each(function () {
		namesHeight($(this), parseInt($(this).css('--articles_count')))
	})

	$('.discussions .row').each(function () {
		namesHeight($(this), parseInt($(this).css('--discussions_count')))
	})

	$('.polls .row').each(function () {
		namesHeight($(this), parseInt($(this).css('--polls_count')))
	})

	$('.webinars .row').each(function () {
		namesHeight($(this), parseInt($(this).css('--webinars_count')))
	})

	$('.podcasts .row').each(function () {
		namesHeight($(this), parseInt($(this).css('--podcasts_count')))
	})

	$('.workbook .row').each(function () {
		namesHeight($(this), parseInt($(this).css('--workbook_count')))
	})

	$('.files .row').each(function () {
		namesHeight2($(this), 100)
	})

	$('.webinar_more').each(function () {
		setHeight2($(this));
	})
})



$(window).on('resize', () => {
	WH = window.innerHeight || document.clientHeight || document.getElementsByTagName('body')[0].clientHeight
	let windowW = window.outerWidth

	if (typeof WW !== 'undefined' && WW != windowW) {
		// Перезапись ширины окна
		WW = window.innerWidth || document.clientWidth || document.getElementsByTagName('body')[0].clientWidth

		// Моб. версия
		if (!fakeResize) {
			fakeResize = true
			fakeResize2 = false

			document.getElementsByTagName('meta')['viewport'].content = 'width=device-width, initial-scale=1, maximum-scale=1'
		}

		if (!fakeResize2) {
			fakeResize2 = true

			if (windowW < 375) document.getElementsByTagName('meta')['viewport'].content = 'width=375, user-scalable=no'
		} else {
			fakeResize = false
			fakeResize2 = true
		}


		// Выравнивание элементов в сетке
		$('.courses .row').each(function () {
			namesHeight($(this), parseInt($(this).css('--courses_count')))
		})

		$('.simulators .row').each(function () {
			namesHeight($(this), parseInt($(this).css('--simulators_count')))
		})

		$('.articles .row').each(function () {
			namesHeight($(this), parseInt($(this).css('--articles_count')))
		})

		$('.discussions .row').each(function () {
			namesHeight($(this), parseInt($(this).css('--discussions_count')))
		})

		$('.polls .row').each(function () {
			namesHeight($(this), parseInt($(this).css('--polls_count')))
		})

		$('.webinars .row').each(function () {
			namesHeight($(this), parseInt($(this).css('--webinars_count')))
		})

		$('.podcasts .row').each(function () {
			namesHeight($(this), parseInt($(this).css('--podcasts_count')))
		})

		$('.workbook .row').each(function () {
			namesHeight($(this), parseInt($(this).css('--workbook_count')))
		})

		$('.files .row').each(function () {
			namesHeight2($(this), 100)
		})

	}
})


// Кнопка 'Вверх'
$('body').on('click', '.buttonUp button', function (e) {
	e.preventDefault();
	$('body, html').stop(false, false).animate({
		scrollTop: 0
	}, 1000)
});


$(window).scroll(function () {
	// Кнопка 'Вверх'
	if ($(window).scrollTop() > $(window).innerHeight()) {
		$('.buttonUp').fadeIn(300)
	} else {
		$('.buttonUp').fadeOut(200)
	}
})



// Выравнивание заголовокв
function namesHeight(context, step) {
	let start = 0,
		finish = step,
		$items = context.find('> *')

	$items.find('.name, .desc').height('auto')

	$items.each(function () {
		setHeight($items.slice(start, finish).find('.name'))
		setHeight($items.slice(start, finish).find('.desc'))

		start = start + step
		finish = finish + step
	})
}



function namesHeight2(context, step) {
	console.log(step);
	let start = 0,
		finish = step,
		$items = context.find('> *')

	//$items.find('.name, .desc').height('auto')
	$items.each(function () {
		console.log($items.slice(start, finish));
		setHeight($items.slice(start, finish))
		setHeight($items.slice(start, finish))

		start = start + step
		finish = finish + step
	})
}



function sec2time(timeInSeconds) {
	let pad = (num, size) => ('000' + num).slice(size * -1),
		time = parseFloat(timeInSeconds).toFixed(3),
		// hours = Math.floor(time / 60 / 60),
		minutes = Math.floor(time / 60) % 60,
		seconds = Math.floor(time - minutes * 60)

	return pad(minutes, 2) + ':' + pad(seconds, 2);
}


let TIME_LIMIT = 60;
let timePassed = 0;
let timeLeft = TIME_LIMIT;
startTimer();

function startTimer() {
	let timerInterval = null;
	timerInterval = setInterval(() => {

		// Количество времени, которое прошло, увеличивается на  1
		timePassed = timePassed += 1;
		timeLeft = TIME_LIMIT - timePassed;

		// Обновляем метку оставшегося времени
		$(".resend span").text(timeLeft);
	}, 1000);
	setTimeout(() => { $(".resend").hide(); $(".resend_link").show(); clearInterval(timerInterval); }, 60000);
}

$(".resend_link a").click(function (e) {
	e.preventDefault();
	TIME_LIMIT = 60;
	timePassed = 0;
	timeLeft = TIME_LIMIT;
	timerInterval = null;
	startTimer();
	$(".resend_link").hide();
	$(".resend").show();

});


function handle_audio() {
	let audio = document.getElementById("audio");
	$(".speed_controller button").click(function (e) {
		$(".speed_controller button").removeClass("active");
		$(this).addClass("active");
		audio.playbackRate = $(this).data("speed");
	});
}

document.addEventListener('DOMContentLoaded', function() {
    // 1. Получаем контейнер прокрутки
    const scrollContainer = document.querySelector('.converse_items.tabs');

    // 2. Получаем активный элемент
    const activeItem = document.querySelector('.converse_items.tabs .converse_item.active');

    if (scrollContainer && activeItem) {
        // 3. Вычисляем позицию активного элемента относительно контейнера
        // scrollLeft + offsetLeft - (scrollContainer.offsetWidth / 2) + (activeItem.offsetWidth / 2)
        // Этот расчет центрирует активный элемент в середине видимой области,
        // если он не слишком близко к началу или концу контейнера.
        // Более простой подход: (activeItem.offsetLeft - scrollContainer.offsetLeft)

        // Можно использовать scrollIntoView() для более простого решения
        // activeItem.scrollIntoView({
        //     behavior: 'smooth', // Для плавной прокрутки
        //     inline: 'center'   // Центрирует элемент по горизонтали
        // });

        // Или ручной расчет для более точного контроля:
        const itemOffsetLeft = activeItem.offsetLeft;
        const containerWidth = scrollContainer.offsetWidth;
        const itemWidth = activeItem.offsetWidth;

        // Позиция для прокрутки, чтобы активный элемент оказался примерно по центру
        // Вы можете настроить эту логику в зависимости от того, как именно вы хотите, чтобы выглядела прокрутка
        const scrollPosition = itemOffsetLeft - (containerWidth / 2) + (itemWidth / 2);

        // Устанавливаем scrollLeft контейнера
        // Добавляем проверку на поддержку smooth scroll, если это необходимо
        if ('scrollBehavior' in document.documentElement.style) {
            scrollContainer.scrollTo({
                left: scrollPosition,
                behavior: 'smooth'
            });
        } else {
            // Fallback для браузеров, не поддерживающих smooth scroll
            scrollContainer.scrollLeft = scrollPosition;
        }
    }
});

// document.addEventListener('DOMContentLoaded', function() {
//   	const video = document.querySelector('.trainer_ai_body_left video');
//   	const loader = document.querySelector('.trainer_ai_body_left .spinner');
//
//   	video.addEventListener('loadeddata', function() {
//   		console.log(1);
//   	  	video.classList.add('loaded');
//   	  	loader.style.display = 'none';
//   	});
//
//   	// На случай ошибки загрузки
//   	video.addEventListener('error', function() {
//   	  	loader.textContent = 'Ошибка загрузки видео';
//   	});
// });
