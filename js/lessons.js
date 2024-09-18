 const lessonsData = [
    {
        "id": "321",
        "title": "История создания Яндекса",
        "description": "Узнайте, как появилась одна из крупнейших IT-компаний России.",
        "levels": [
            {
                "id": "1",
                "video": "https://xskill.com/test1/Untitled%20Video.mp4",
                "question": "В каком году была основана компания CompTek, ставшая предшественницей Яндекса?",
                "options": [
                    {"text": "1985", "correct": false},
                    {"text": "1989", "correct": true},
                    {"text": "1993", "correct": false},
                    {"text": "2000", "correct": false}
                ],
                "explanation": "https://xskill.com/test1/Untitled%20Video.mp4"
            },
            {
                "id": "2",
                "video": "https://xskill.com/test1/Untitled%20Video.mp4",
                "question": "Кто придумал название 'Яндекс'?",
                "options": [
                    {"text": "Только Аркадий Волож", "correct": false},
                    {"text": "Только Илья Сегалович", "correct": false},
                    {"text": "Аркадий Волож и Илья Сегалович вместе", "correct": true},
                    {"text": "Сотрудники CompTek коллективно", "correct": false}
                ],
                "explanation": "https://xskill.com/test1/Untitled%20Video.mp4"
            },
            {
                "id": "3",
                "video": "https://xskill.com/test1/Untitled%20Video.mp4",
                "finalMessage": "На этом наш урок о истории создания Яндекса подходит к концу. Спасибо за внимание!"
            }
        ]
    },
    {
        "id": "123",
        "title": "История создания Google",
        "description": "Познакомьтесь с историей возникновения мирового IT-гиганта.",
        "levels": [
            {
                "id": "1",
                "video": "https://xskill.com/test1/Untitled%20Video.mp4",
                "question": "В каком году был основан Google?",
                "options": [
                    {"text": "1996", "correct": false},
                    {"text": "1998", "correct": true},
                    {"text": "2000", "correct": false},
                    {"text": "2002", "correct": false}
                ],
                "explanation": "https://xskill.com/test1/Untitled%20Video.mp4"
            },
            {
                "id": "2",
                "video": "https://xskill.com/test1/Untitled%20Video.mp4",
                "finalMessage": "Вы узнали основные факты из истории создания Google. Спасибо за участие!"
            }
        ]
    }
    ];

    function insertVideoById(id, targetElementId) {
        const lesson = lessonsData.find(l => l.id === id);
        if (!lesson) {
            console.error(`Урок с ID ${id} не найден`);
            return;
        }

        const targetElement = document.getElementById(targetElementId);
        if (!targetElement) {
            console.error(`Элемент с ID ${targetElementId} не найден`);
            return;
        }

        const showInfo = targetElement.dataset.showInfo === "true";
        const lessonElement = createLessonElement(lesson, lesson.id, showInfo);
        targetElement.appendChild(lessonElement);
        initializeLesson(lesson, lessonElement, lesson.id);
    }

    function createLessonElement(lesson, index, showInfo) {
        const lessonContainer = document.createElement('div');
        lessonContainer.className = 'lesson-container';
        lessonContainer.innerHTML = `
            ${showInfo ? `
                <h2>${lesson.title}</h2>
                <p class="video-description">${lesson.description}</p>
            ` : ''}
            <div class="videoContainer">
                <video id="video${index}" playsinline webkit-playsinline width="100%">
                    <source src="" type="video/mp4">
                    Ваш браузер не поддерживает видео тег.
                </video>
                <div class="video-loader">
                    <div class="spinner"></div>
                </div>
                <div class="videoControls">
                    <button class="playPauseBtn">Воспроизвести</button>
                    <button class="restartBtn hidden">Перезапустить</button>
                </div>
                <div class="questionContainer"></div>
                <div class="finalMessageContainer"></div>
            </div>
        `;
        return lessonContainer;
    }

    function initializeLesson(lesson, lessonElement, index) {
        let currentLevel;
        let currentLevelIndex = 0;
        let isFirstPlay = true;

        const video = lessonElement.querySelector(`#video${index}`);
        const playPauseBtn = lessonElement.querySelector('.playPauseBtn');
        const restartBtn = lessonElement.querySelector('.restartBtn');
        const videoControls = lessonElement.querySelector('.videoControls');
        const questionContainer = lessonElement.querySelector('.questionContainer');
        const finalMessageContainer = lessonElement.querySelector('.finalMessageContainer');
        const videoLoader = lessonElement.querySelector('.video-loader');

        function startLesson() {
            currentLevelIndex = 0;
            currentLevel = lesson.levels[currentLevelIndex];
            isFirstPlay = true;
            loadLevel(currentLevel);
            finalMessageContainer.style.display = 'none';
            videoControls.style.display = 'flex';
            restartBtn.classList.add('hidden');
        }

        function loadLevel(level) {
            if (!level || !level.video) {
                console.error('Некорректные данные уровня');
                endLesson();
                return;
            }
            videoLoader.style.display = 'flex';
            video.src = level.video;
            video.load();
            questionContainer.innerHTML = '';
            questionContainer.style.display = 'none';
            videoControls.style.display = 'flex';
            
            video.oncanplay = function() {
                videoLoader.style.display = 'none';
                if (isFirstPlay) {
                    video.pause();
                    playPauseBtn.textContent = 'Воспроизвести';
                } else {
                    video.play().then(() => {
                        playPauseBtn.textContent = 'Пауза';
                    }).catch(e => {
                        console.error("Ошибка автовоспроизведения:", e);
                        playPauseBtn.textContent = 'Воспроизвести';
                    });
                }
            };
        }

        function showQuestion() {
            if (currentLevel.finalMessage) {
                endLesson();
                return;
            }
            
            questionContainer.innerHTML = `
                <h3>${currentLevel.question}</h3>
                ${currentLevel.options.map((option, optionIndex) => 
                    `<button onclick="window.selectOption${index}(${optionIndex})">${option.text}</button>`
                ).join('')}
            `;
            questionContainer.style.display = 'flex';
            videoControls.style.display = 'none';
        }

        window[`selectOption${index}`] = function(optionIndex) {
            const selectedOption = currentLevel.options[optionIndex];
            if (selectedOption.correct) {
                currentLevelIndex++;
                if (currentLevelIndex < lesson.levels.length) {
                    currentLevel = lesson.levels[currentLevelIndex];
                    loadLevel(currentLevel);
                } else {
                    endLesson();
                }
            } else {
                video.src = currentLevel.explanation;
                video.load();
                video.play();
                questionContainer.style.display = 'none';
                videoControls.style.display = 'flex';
            }
        }

        function endLesson() {
            finalMessageContainer.innerHTML = `
                <h2>${lesson.levels[lesson.levels.length - 1].finalMessage}</h2>
                <button onclick="window.restartLesson${index}()">Начать урок заново</button>
            `;
            finalMessageContainer.style.display = 'flex';
            questionContainer.style.display = 'none';
            videoControls.style.display = 'none';
        }

        window[`restartLesson${index}`] = function() {
            finalMessageContainer.style.display = 'none';
            startLesson();
        }

        video.addEventListener('ended', function() {
            if (currentLevelIndex < lesson.levels.length - 1) {
                showQuestion();
            } else {
                endLesson();
            }
        });

        playPauseBtn.addEventListener('click', function() {
            if (video.paused) {
                video.play();
                playPauseBtn.textContent = 'Пауза';
                if (isFirstPlay) {
                    isFirstPlay = false;
                    restartBtn.classList.remove('hidden');
                }
            } else {
                video.pause();
                playPauseBtn.textContent = 'Воспроизвести';
            }
        });

        restartBtn.addEventListener('click', function() {
            video.currentTime = 0;
            video.play();
            playPauseBtn.textContent = 'Пауза';
        });

        video.addEventListener('loadstart', function() {
            videoLoader.style.display = 'flex';
        });

        video.addEventListener('canplay', function() {
            videoLoader.style.display = 'none';
        });

        startLesson();
    }

    document.addEventListener('DOMContentLoaded', function() {
        const lessonContainers = document.querySelectorAll('[id^="lesson"]');
        lessonContainers.forEach(container => {
            const lessonId = container.id.replace('lesson', '');
            insertVideoById(lessonId, container.id);
        });
    });