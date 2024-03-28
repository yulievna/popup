let popupBg = document.querySelector('.popup__bg') // Фон попап окна
let popup = document.querySelector('.popup') // Само окно
let openPopupButtons = document.querySelector('.open-popup') // Кнопка для показа окна
let sendPopupButton = document.querySelector('.send-popup') // Кнопка для скрытия окна
let dataList = document.querySelector('.data-list')
let inputs = document.querySelectorAll('input')


openPopupButtons.addEventListener('click', (e) => { // Для каждой вешаем обработчик событий на клик
    e.preventDefault(); // Предотвращаем дефолтное поведение браузера
    popupBg.classList.add('active') // Добавляем класс 'active' для фона
    popup.classList.add('active') // И для самого окна
    dataList.classList.add('active')
})

document.addEventListener('click', (e) => { // Вешаем обработчик на весь документ
    if(e.target === popupBg) { // Если цель клика - фон, то:
        popupBg.classList.remove('active'); // Убираем активный класс с фона
        popup.classList.remove('active'); // И с окна
        dataList.classList.remove('active')
    }
})

sendPopupButton.addEventListener('click', (e) => {
    
})

popup.addEventListener('submit', (e) => {
    e.preventDefault();

    popupBg.classList.remove('active'); // Убираем активный класс с фона
    popup.classList.remove('active'); // И с окна

    const formData = new FormData(popup);
    const data = Object.fromEntries(formData);

    let json = JSON.stringify(data)
    json = JSON.parse(json)

    for(key in json){
        let markup = `
        <span>${key}: ${json[key]}</sapn> <br>
        `
        dataList.innerHTML += markup
    }
    let param = []
    inputs.forEach((input)=>{
        if(input.value === ""){
            alert(`Поле "${input.getAttribute("name")}" не заполнено`)
        }
        else{
            param.push(input.value)
        }
    })  
})





