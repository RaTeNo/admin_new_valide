$(() => {
const audioPlayer = $(".tts.audio-block audio")[0];
	const progressBar = $(".tts .range-bar .progress-bar .length");	
	
	// function area
	const formatTime = (time) => {
		const min = Math.floor(time / 60);
		const sec = Math.floor(time % 60);
		const formattedMin = min < 10 ? `0${min}` : min;
		const formattedSec = sec < 10 ? `0${sec}` : sec;
		return `${formattedMin}:${formattedSec}`;
	};

	const updateProgress = () => {
		const { currentTime } = audioPlayer;
		const durationTime = audioPlayer.duration;
		const percentTime = ((currentTime / durationTime) * 100).toFixed(2);
		progressBar.css("width", `${percentTime}%`);
		// 播放時更新播放時間
		$(".time.current-time").html(formatTime(currentTime));
		console.log(formatTime(audioPlayer.duration));

	};
	// 新增功能audio tips判斷
	let showTipsSpeed = false
	// 新增player開始事件
	audioPlayer.addEventListener("play", () => {
		$(".audio-tip.play").addClass("hidden");
		// 新增功能audio tips區塊
		if(!showTipsSpeed) {
			$(".audio-tip.speed").removeClass("hidden");
			showTipsSpeed = true
		}
	});

	audioPlayer.addEventListener("timeupdate", updateProgress);

	audioPlayer.addEventListener("ended", () => {
		audioPlayer.currentTime = 0;
		$(".audio-play-icon").removeClass("hidden");
		$(".audio-pause-icon").addClass("hidden");
	});



	// click audio play button
	$(".audio-button").on("click", () => {
		if (audioPlayer.paused) {
			$(".audio-play-icon").addClass("hidden");
			$(".audio-pause-icon").removeClass("hidden");
			audioPlayer.play();
		} else {
			$(".audio-play-icon").removeClass("hidden");
			$(".audio-pause-icon").addClass("hidden");
			audioPlayer.pause();
		}
	});

	// progress bar click (audio seek function)
	$(".range-bar .progress-bar").on("click", function (e) {
		console.clear()
		const width = this.clientWidth;
		const clickX = e.offsetX;
		console.log(width)
		console.log(clickX)
		const { duration } = audioPlayer;
		console.log(duration)
		console.log((clickX / width) * duration)
		audioPlayer.currentTime = (clickX / width) * duration;
	});

	// custom select style & function
	$(".audio-speed-select").each(function () {
		const $this = $(this);
		const numberOfOptions = $this.children("option").length;
		$this.addClass("select-hidden");
		$this.wrap('<div class="select"></div>');
		$this.after('<div class="select-styled"></div>');

		const $styledSelect = $this.next("div.select-styled");
		$styledSelect.text($this.find("option[value='1']").text());

		const $list = $("<ul />", { class: "select-options" }).insertAfter(
			$styledSelect
		);

		for (let i = 0; i < numberOfOptions; i++) {
			$("<li />", {
				text: $this.children("option").eq(i).text(),
				rel: $this.children("option").eq(i).val()
			}).appendTo($list);
			if ($this.children("option").eq(i).is(":selected")) {
				$(`li[rel="${$this.children("option").eq(i).val()}"]`).addClass(
					"is-selected"
				);
			}
		}

		const $listItems = $list.children("li");

		$styledSelect.click(function (e) {
			e.stopPropagation();
			$("div.select-styled.active")
				.not(this)
				.each(function () {
					$(this).removeClass("active").next("ul.select-options").hide();
				});
			$(this).toggleClass("active").next("ul.select-options").toggle();
			// 新增功能audio tips區塊			
			if(showTipsSpeed = true){
				$('.tts.audio-block .audio-tip.speed').addClass('hidden')
			}
		});
		

			// load audio & total time into html
		$('.track_audio').trigger('load'); 

		$(".time.total-time").html(formatTime(audioPlayer.duration));

		// 點擊list item的選單
		$listItems.click(function (e) {
			e.stopPropagation();
			const thisRel = $(this).attr("rel");
			if (thisRel !== "default") {
				// 如果點擊不是default的選項時
				$styledSelect.text($(this).text()).removeClass("active");
				$this.val(thisRel);
				$list.find("li.is-selected").removeClass("is-selected");
				$list.find(`li[rel="${thisRel}"]`).addClass("is-selected");
				$list.hide();
				// 設定播放器語速
				audioPlayer.playbackRate = parseFloat(thisRel);
			} else {
				$styledSelect.removeClass("active");
				$list.hide();
			}
		});

		$(document).click(() => {
			$styledSelect.removeClass("active");
			$list.hide();
		});

		audioPlayer.addEventListener('loadedmetadata', function () {
		    if (audioPlayer.duration == Infinity) {
		        audioPlayer.currentTime = 1e101;
		        audioPlayer.ontimeupdate = () => {
		            this.ontimeupdate = () => {
		                return;
		            }
		            vid.currentTime = 0;
		            return;
		        }
		    }
		});

		
	});
});