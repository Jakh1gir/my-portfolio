// script.js

document.addEventListener("DOMContentLoaded", () => {
    // Используйте правильный класс, который соответствует вашему HTML
    const skills = document.querySelector(".skill-items"); // Убедитесь, что класс совпадает с HTML
    const skillItems = Array.from(document.querySelectorAll(".skill-item")); // Элементы внутри

    if (!skills || skillItems.length === 0) {
        console.error("Контейнер или элементы не найдены. Проверьте классы в HTML!");
        return;
    }

    const skillWidth = skillItems[0].offsetWidth + 10; // Ширина элемента + отступы

    // Дублируем элементы для бесконечного списка
    skills.append(...skillItems.map((item) => item.cloneNode(true)));

    let scrollPosition = 0; // Начальная позиция скроллинга

    function autoScroll() {
        scrollPosition -= 0.5; // Скорость прокрутки
        // Если первый элемент полностью скрыт, перемещаем его в конец
        if (Math.abs(scrollPosition) >= skillWidth) {
            scrollPosition = 0; // Сбрасываем положение
            const firstItem = skills.firstElementChild;
            skills.appendChild(firstItem); // Перемещаем первый элемент в конец
        }

        skills.style.transform = `translateX(${scrollPosition}px)`; // Двигаем контейнер
        requestAnimationFrame(autoScroll); // Продолжаем анимацию
    }

    autoScroll(); // Запуск скроллинга
});

function toggleMenu() {
    const navMenu = document.querySelector('.nav-menu');
    navMenu.classList.toggle('active');
}

document.addEventListener("DOMContentLoaded", () => {
    const textElement = document.querySelector(".typed-text");
    const cursorElement = document.querySelector(".blinking-cursor");

    // Список приветствий
    const greetings = [
        "Добро пожаловать на мой сайт!",
        "Привет, рад видеть тебя здесь!",
        "Ты в мире кода и творчества!",
        "Здесь ты узнаешь обо мне больше!",
        "Спасибо, что зашёл, приятного просмотра!"
    ];

    const typingSpeed = 70; // Скорость печати (мс)
    const delayBetweenTexts = 1500; // Задержка между приветствиями (мс)

    let textIndex = 0; // Индекс текущего приветствия
    let charIndex = 0; // Индекс символа в строке

    function typeText() {
        if (charIndex < greetings[textIndex].length) {
            textElement.textContent += greetings[textIndex].charAt(charIndex);
            charIndex++;
            setTimeout(typeText, typingSpeed);
        } else {
            setTimeout(deleteText, delayBetweenTexts); // Ждём и стираем текст
        }
    }

    function deleteText() {
        if (charIndex > 0) {
            textElement.textContent = greetings[textIndex].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(deleteText, typingSpeed / 2); // Ускоренное удаление
        } else {
            textIndex = (textIndex + 1) % greetings.length; // Следующее приветствие
            setTimeout(typeText, typingSpeed);
        }
    }

    typeText(); // Запуск анимации
});




  

document.addEventListener("DOMContentLoaded", () => 
    {
    const profilePhoto = document.querySelector(".profile-photo");
    const headerTitle = document.querySelector(".animated-header");
    const aboutSection = document.querySelector("#about");   
    
    window.addEventListener("scroll", function () {
        const aboutBottom = aboutSection.getBoundingClientRect().bottom;
        const headerHeight = document.querySelector("header").offsetHeight;

        if (aboutBottom <= headerHeight + 20) {
            // Закрепляем фото и сдвигаем заголовок
            profilePhoto.classList.add("fixed-photo");
            headerTitle.classList.add("shifted-title");
        } else {
            // Возвращаем все обратно
            profilePhoto.classList.remove("fixed-photo");
            headerTitle.classList.remove("shifted-title");
        }
    });

});


document.addEventListener("DOMContentLoaded", () => {
    const tags = document.querySelectorAll(".tag");
    let currentTag = 0;
  
    function showTags() {
      tags.forEach((tag, index) => {
        tag.style.display = index === currentTag ? "block" : "none";
      });
      currentTag = (currentTag + 1) % tags.length;
    }
  
    setInterval(showTags, 3000); // Смена каждые 3 секунды
  });
  
// Функция для показа описания при наведении
function showDescription(element) {
    let description = element.querySelector('.portfolio-description');
    let shortText = element.querySelector('.portfolio-short');

    description.style.display = "block";
    shortText.style.display = "none";
}

// Функция для скрытия описания при уходе мыши
function hideDescription(element) {
    let description = element.querySelector('.portfolio-description');
    let shortText = element.querySelector('.portfolio-short');

    description.style.display = "none";
    shortText.style.display = "block";
}

// Функция открытия модального окна
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = "block";
        modal.style.animation = "fadeIn 0.3s ease-in-out";
    }
}

// Функция закрытия модального окна
function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = "none";
    }
}

// Закрытие модального окна при клике вне его содержимого
window.addEventListener("click", (event) => {
    const modals = document.querySelectorAll(".modal");
    modals.forEach((modal) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});



