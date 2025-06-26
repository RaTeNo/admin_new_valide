$(() => {

    // Получаем ссылки на кнопку и область контента
    const commentButton = document.getElementById('comment-button');
    const contentArea = document.querySelector('.text_block');

    // Глобальная переменная для хранения выделенного текста
    let selectedText = '';

    // Функция для показа кнопки
    const showButton = (selection) => {
        const range = selection.getRangeAt(0); // Получаем диапазон выделения
        const rect = range.getBoundingClientRect(); // Получаем его координаты и размеры

        // Если выделение пустое или схлопнутое, ничего не делаем
        if (rect.width === 0 && rect.height === 0) {
            hideButton();
            return;
        }

        // Позиционируем кнопку над центром выделенного текста
        // window.scrollX/Y нужны, чтобы позиция была правильной при прокрутке страницы
        const top = rect.top + window.scrollY - commentButton.offsetHeight - 10;
        const left = rect.left + window.scrollX + (rect.width / 2) - (commentButton.offsetWidth / 2);
        
        commentButton.style.top = `${top}px`;
        commentButton.style.left = `${left}px`;
        
        // Показываем кнопку с плавной анимацией
        commentButton.classList.add('visible');
    };

    // Функция для скрытия кнопки
    const hideButton = () => {
        commentButton.classList.remove('visible');
    };

    // 1. Слушаем событие "отпускания кнопки мыши" в области контента
    contentArea.addEventListener('mouseup', (event) => {
         // Используем небольшую задержку, чтобы браузер успел обработать выделение
        setTimeout(() => {
            const selection = window.getSelection();
            selectedText = selection.toString().trim();
            
            // Если что-то выделено - показываем кнопку
            if (selectedText.length > 0) {
                showButton(selection);
            } else {
                hideButton();
            }
        }, 10);
    });

    // 2. Слушаем клик по самой кнопке
    commentButton.addEventListener('click', () => {
        // Здесь будет ваша логика для открытия модального окна или отправки комментария
        alert(`Вы хотите прокомментировать:\n\n"${selectedText}"`);
        
        // После клика скрываем кнопку и убираем выделение с текста
        hideButton();
        window.getSelection().removeAllRanges();
    });

    // 3. Слушаем клик по всему документу, чтобы скрыть кнопку, если кликнули мимо
    document.addEventListener('mousedown', (event) => {
        // Проверяем, что клик был не по самой кнопке
        // и не внутри контента (чтобы не конфликтовать с mouseup)
        if (!commentButton.contains(event.target) && !contentArea.contains(event.target)) {
            hideButton();
        }
    });

});