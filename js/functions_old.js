$(() => {
	// Есть ли поддержка тач событий или это apple устройство
	if (!is_touch_device() || !/(Mac|iPhone|iPod|iPad)/i.test(navigator.platform) || !navigator.platform.includes("Mac")) $('html').addClass('custom_scroll')


	// Ленивая загрузка
	setTimeout(() => {
		observer = lozad('.lozad', {
			rootMargin: '200px 0px',
			threshold: 0,
			loaded: el => el.classList.add('loaded')
		})

		observer.observe()
	}, 200)


	// Установка ширины стандартного скроллбара
	$(':root').css('--scroll_width', widthScroll() + 'px')


	// Кастомный select
	$('select').niceSelect()


	// Fancybox
	Fancybox.defaults.autoFocus = false
	Fancybox.defaults.trapFocus = false
	Fancybox.defaults.dragToClose = false
	Fancybox.defaults.placeFocusBack = false
	Fancybox.defaults.l10n = {
		CLOSE: "Закрыть",
		NEXT: "Следующий",
		PREV: "Предыдущий",
		MODAL: "Вы можете закрыть это модальное окно нажав клавишу ESC"
	}

	Fancybox.defaults.template = {
		closeButton: '<svg><use xlink:href="images/sprite.svg#ic_close"></use></svg>',
	}

	// Всплывающие окна
	$('body').on('click', '.modal_btn', function (e) {
		e.preventDefault()

		Fancybox.close()

		Fancybox.show([{
			src: $(this).data('content'),
			type: 'inline'
		}],
			{
				on: {
					closing: (fancybox, slide) => {
						if (fancybox.items[0].src == "#video_modal") {
							video = document.querySelector(".video_new");
							video.pause();
							video.currentTime = 0;
						}
					},
				},
			})
	})

	$('body').on('click', '.modal .close_bnt', function (e) {
		e.preventDefault()

		Fancybox.close()
	})

	$('body').on('click', '.projects-modal_btn', function (e) {
		e.preventDefault()

		Fancybox.close()
	})


	$(document).ready(function() {
		if($('.js-example-basic-single').length>0){
			$('.js-example-basic-single').select2();
		}
	});


	// выбрать все checkbox`ы
	$(".choose-link").click(function (e) {
		e.preventDefault()
		var t = $(this).parents('.form_item');
		t.find('input[type=checkbox]').each(function() {
		  this.checked = true; 
		});
	  }); 
	  // отменить все checkbox`ы	
	  $(".remove-link").click(function (e) {
		e.preventDefault()
		var t = $(this).parents('.form_item');
		t.find('input[type=checkbox]').each(function() { 
		  this.checked = false; 
		}); 
	  });


	// Мини всплывающие окна
	$('.mini_modal_btn').click(function (e) {
		e.preventDefault()

		const modalId = $(this).data('modal-id')

		if ($(this).hasClass('active')) {
			$(this).removeClass('active')
			$('.mini_modal').removeClass('active')

			if (is_touch_device()) $('body').css('cursor', 'default')
		} else {
			$('.mini_modal_btn').removeClass('active')
			$(this).addClass('active')

			$('.mini_modal').removeClass('active')
			$(modalId).addClass('active')

			if (is_touch_device()) $('body').css('cursor', 'pointer')
		}
	})

	// Закрываем всплывашку при клике за её пределами
	$(document).click((e) => {
		if ($(e.target).closest('.modal_cont').length === 0) {
			$('.mini_modal, .mini_modal_btn').removeClass('active')

			if (is_touch_device()) $('body').css('cursor', 'default')
		}
	})

	$('.webinar-modal_head button').click(function (e) {
		e.preventDefault()
		$('.mini_modal').removeClass('active')
		$('.mini_modal_btn').removeClass('active')
	})

	
	// Моб. версия
	fakeResize = false
	fakeResize2 = true

	if (document.body.clientWidth < 375) {
		document.getElementsByTagName('meta')['viewport'].content = 'width=375, user-scalable=no'
	}
})



// Вспомогательные функции
const setHeight = (className) => {
	let maxheight = 0

	className.each(function () {
		const elHeight = $(this).outerHeight()

		if (elHeight > maxheight) maxheight = elHeight
	})

	className.outerHeight(maxheight)
}

// Вспомогательные функции
const setHeight2 = (className) => {
	const elHeight = className.prev().outerHeight()
	className.outerHeight(elHeight)
}



const is_touch_device = () => !!('ontouchstart' in window)


const widthScroll = () => {
	let div = document.createElement('div')

	div.style.overflowY = 'scroll'
	div.style.width = '50px'
	div.style.height = '50px'
	div.style.visibility = 'hidden'

	document.body.appendChild(div)

	let scrollWidth = div.offsetWidth - div.clientWidth
	document.body.removeChild(div)

	return scrollWidth
}

