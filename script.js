let popupBg = document.querySelector('.popup__bg') // Фон попап окна
let popup = document.querySelector('.popup') // Попап
let openPopupButtons = document.querySelector('.open-popup') // Кнопка "Начать"
let dataList = document.querySelector('.data-list') // Список отображаемых данных
let inputs = document.querySelectorAll('input') // Поля ввода


openPopupButtons.addEventListener('click', (e) => { // Вешаем обработчик событий на клик по кнопке "Начать"
    e.preventDefault(); // Предотвращаем дефолтное поведение браузера
    popupBg.classList.add('active') // Добавляем класс 'active' для фона
    popup.classList.add('active') // Добавляем класс 'active' для попапа
    dataList.classList.add('active') // Добавляем класс 'active' для списка
})

document.addEventListener('click', (e) => { // Вешаем обработчик на весь документ
    if(e.target === popupBg) { // Если цель клика - фон, то:
        popupBg.classList.remove('active'); // Убираем активный класс с фона
        popup.classList.remove('active'); // С попапа
        dataList.classList.remove('active') // Со списка
    }
})

popup.addEventListener('submit', (e) => { // Вешаем обработчик событий на отправку формы, кнопка "Отправть"
    e.preventDefault(); 

    popupBg.classList.remove('active'); 
    popup.classList.remove('active'); 

    inputs.forEach((input)=>{
        if(input.value === ""){
            alert(`Поле "${input.getAttribute("name")}" не заполнено`) // Если одно из полей будет пустое, появиться алерт
        }
    })  
    
    const formData = new FormData(popup); // Создаем новый объект FormData для получения данных с формы
    const data = Object.fromEntries(formData); // Преобразуем в объект

    let json = JSON.stringify(data) // Преобразуем в JSON формат
    json = JSON.parse(json) // Распарс JSON

    for(key in json){ // Перебераем элемнеты по ключу и вставляем HTML разметку в список dataList
        let markup = `
        <span>${key}: ${json[key]}</sapn> <br>
        `
        dataList.innerHTML += markup
    }
    
})





