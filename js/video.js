document.addEventListener('DOMContentLoaded', function() {
    // Находим все кнопки-контейнеры для видеоплееров
    const videoPlayerButtons = document.querySelectorAll('.video-player-btn');

    videoPlayerButtons.forEach(button => {
        const video = button.querySelector('.my-video');
        const videoControl = button.querySelector('.video-control'); // Контролы теперь внутри кнопки
        const playButton = videoControl.querySelector('.play-button');
        const pauseButton = videoControl.querySelector('.pause-button');

        // Функция для переключения иконок, локальная для каждого блока
        function toggleIcons(isPlaying) {
            if (isPlaying) {
                playButton.classList.remove('active');
                pauseButton.classList.add('active');
                // Опционально: скрыть контролы, когда видео играет, чтобы не мешали
                // videoControl.style.opacity = '0';
                // videoControl.style.pointerEvents = 'none'; // Чтобы клики проходили на видео
            } else {
                playButton.classList.add('active');
                pauseButton.classList.remove('active');
                // Опционально: показать контролы, когда видео на паузе/остановлено
                // videoControl.style.opacity = '1';
                // videoControl.style.pointerEvents = 'auto';
            }
        }

        // Изначально показываем кнопку Play
        toggleIcons(false);

        // Добавляем обработчик клика по самой кнопке-контейнеру (.video-player-btn)
        button.addEventListener('click', function() {
            if (video.paused || video.ended) {
                // Если какое-то другое видео играет, поставить его на паузу
                document.querySelectorAll('.my-video').forEach(otherVideo => {
                    if (otherVideo !== video && !otherVideo.paused) {
                        otherVideo.pause();
                    }
                });
                video.play();
            } else {
                video.pause();
            }
        });

        // Обработчики событий видеоплеера для ТЕКУЩЕГО видео
        video.addEventListener('play', function() {
            toggleIcons(true);
        });

        video.addEventListener('pause', function() {
            toggleIcons(false);
        });

        video.addEventListener('ended', function() {
            toggleIcons(false);
        });

        video.addEventListener('playing', function() {
            toggleIcons(true);
        });
    });
});
