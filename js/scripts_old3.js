    WW = window.innerWidth || document.clientWidth || document.getElementsByTagName('body')[0].clientWidth
    WH = window.innerHeight || document.clientHeight || document.getElementsByTagName('body')[0].clientHeight
    $(() => {
	// tippy('[data-tippy-content]');



        $(".idea_check-bottom button").click(function (e) {
            $(".commission-decision, .idea_form").hide();
            $(".new_load").show();

            setTimeout(() => {
                $(".new_load").hide();
                $(".idea_form2").show();
            }, 3000);

        });


	if($(".sortable").length)
	{
		sortable('.sortable')[0].addEventListener('sortupdate', function(e) {
			$(".answer_btn").show();
		});
	}

	$('body').on('click', '.text_block_show_more', function (e) {
		e.preventDefault()
		$(".text_block_hide").addClass("active");
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
		if($("#remember_check").prop("checked")){
			$(".register .submit_btn").prop("disabled", false);
		}
		else
		{
			$(".register .submit_btn").prop("disabled", true);
		}
	});


	$('body').on('click', '.details_item-head', function (e) {
		e.preventDefault()
		$(this).next('.details_item-body').slideToggle();
		if($(this).find(".details_item-link-yellow").hasClass("active"))
		{
			$(this).find(".details_item-link-yellow").html('<span>Свернуть</span><svg class="icon"><use xlink:href="/images/sprite.svg#turn"></use></svg>').removeClass("active");
		}
		else{
			$(this).find(".details_item-link-yellow").html('<span>Подробнее</span><svg class="icon"><use xlink:href="/images/sprite.svg#link-more"></use></svg>').addClass("active");
		}
	});

	$('body').on('click', '.details_item-body .details_item-link-yellow', function (e) {
		e.preventDefault()
		$(this).parent().hide('.details_item-body');
		$(this).parent().prev().find(".details_item-link-yellow").html('<span>Подробнее</span><svg class="icon"><use xlink:href="/images/sprite.svg#link-more"></use></svg>').addClass("active");
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

	$(".title_faq_result button").on("click", function(){
		$(".js-search").val("");
		$(".title_faq").show();
		$(".title_faq_result").hide();
		let	list = $(".accordion_item");
		list.each(function(index) {
			$(this).show();
		});
	});

	$('body').on("keyup", '.js-search', function(event) {
		let value = $(this).val();
		if(value=="")
		{
			$(".title_faq").show();
			$(".title_faq_result").hide();
		}
		else
		{
			$(".title_faq").hide();
			$(".title_faq_result").show();
		}

		let	list = $(".accordion_item");
		list.each(function(index) {
			let label = $(this).text();
			if (label.toLowerCase().indexOf(value.toLowerCase()) == -1) {
				$(this).hide();
			} else {
				$(this).show();
			}
		});
	});


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

        if($(".stems li.matched").length==$(".stems li").length)
        {
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


	$(".test").on("click", function(e){
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


	// Клик по лайку
	$(document).on('click', '.likes button', function(e) {
		e.preventDefault();
		$(".likes button").removeClass('active');
		$(this).addClass('active');
	})


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
				$.each(videos, function(key, video) {
					video.pause();
					video.currentTime = 0;
				});
			},
		},
	})
	})


	// приостанавливает все аудио
	function pause_audios() {
		$('audio').each(function(){
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
						$.each(videos, function(key, video) {
							video.pause();
							video.currentTime = 0;
						});
						let audios = $('audio');
						$.each(audios, function(key, audio) {
							audio.pause();
							audio.currentTime = 0;
						});
				},
			},
		})
	})

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


	// $(".audio-note .form-project").hide();
	$(".audio-notes_description-redactor").click(function (e) {
		e.preventDefault();
		$(".audio-note .form-project").css("display", "block");
		$(".audio-notes_description-redactor").addClass("active");
	});


	$('.audio-notes_description-decoding').click(function(){
		$(this).parent().parent().next().slideToggle(300);
	});


	$('.audio-notes_description-decoding').click(function() {
		if ($(this).text() == "Скрыть расшифровку") {
			$(this).text("Расшифровка");
		} else {
			$(this).text("Скрыть расшифровку");
		};
	});


	$('.audio-notes_btn').click(function(e) {
		e.preventDefault();
		if ($(this).text() == "Отменить заметку") {
			$(this).text("Записать заметку");
			$(".audio_wrapper").slideToggle(300);
		} else {
			$(this).text("Отменить заметку");
			$(".audio_wrapper").slideToggle(300);
		};
	});

	$(".task-page_btn button").click(function (e) {
		e.preventDefault();
		$('.solutions-tasks').addClass('active');
		$(".solutions-tasks .solutions-tasks_wrap").show();
		$(".solutions-tasks2 .solutions-tasks_wrap").hide();
		setTimeout(() => {
			$('.solutions-tasks').removeClass('active');
			$(".solutions-tasks .solutions-tasks_wrap").hide();
			$(".solutions-tasks2 .solutions-tasks_wrap").show();
			$('.solutions-tasks2').addClass('active');
			$(".solutions-tasks .wrapper_head").hide();
		}, 3000);
	});

	$(".solutions-tasks3 .solutions-tasks_top-delete").click(function (e) {
		e.preventDefault();
		$(this).parent().parent().parent().hide();
	});

	if ($(".js-example-basic-multiple").length > 0) {
		$('.js-example-basic-multiple').select2();
	}

	if ($(".js-example-basic-single").length > 0) {
		$('.js-example-basic-single').select2();
	}
	if ($(".js-example-basic-single2").length > 0) {
		$('.js-example-basic-single2').select2({minimumResultsForSearch: Infinity});
	}


	$('.calend_item').on('click', function(event){
		$(this).toggleClass('active');
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
$('body').on('click', '.buttonUp button', function(e) {
	e.preventDefault();
	$('body, html').stop(false, false).animate({
		scrollTop: 0
	}, 1000)
});


$(window).scroll(function(){
	// Кнопка 'Вверх'
	if( $(window).scrollTop() > $(window).innerHeight() ) {
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

$(".resend_link a").click(function(e){
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
