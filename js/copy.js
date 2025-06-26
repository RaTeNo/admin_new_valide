$(() => {

    // Получаем ссылки на кнопку и область контента
    const commentButton = document.getElementById('comment-button');
    const contentArea = document.querySelector('.text_block');

    // Глобальная переменная для хранения выделенного текста
    let selectedText = '';

    // Функция для показа кнопки
    const showButton = (selection) => {
        const range = selection.getRangeAt(0);
        const rect = range.getBoundingClientRect();

        if (rect.width === 0 && rect.height === 0) {
            hideButton();
            return;
        }

        const top = rect.bottom + window.scrollY + 10;
        const left = rect.left + window.scrollX + (rect.width / 2) - (commentButton.offsetWidth / 2);
        
        commentButton.style.top = `${top}px`;
        commentButton.style.left = `${left}px`;
        
        commentButton.classList.add('visible');
    };

    // Функция для скрытия кнопки
    const hideButton = () => {
        commentButton.classList.remove('visible');
    };

    // 1. Слушаем событие "pointerup" - это универсальное событие для "отпускания" (мыши или пальца)
    contentArea.addEventListener('pointerup', (event) => {
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

    // 2. Слушаем клик по самой кнопке (событие 'click' универсально и работает везде)
    commentButton.addEventListener('click', () => {
        alert(`Вы хотите прокомментировать:\n\n"${selectedText}"`);
        
        hideButton();
        window.getSelection().removeAllRanges();
    });

    // 3. Слушаем событие "pointerdown" по всему документу, чтобы скрыть кнопку
    // Это универсальный аналог "mousedown" для мыши и "touchstart" для пальца
    document.addEventListener('pointerdown', (event) => {
        // Проверяем, что клик/тап был не по самой кнопке
        // и не внутри контента (чтобы не конфликтовать с pointerup)
        if (!commentButton.contains(event.target) && !contentArea.contains(event.target)) {
            hideButton();
        }
    });

});