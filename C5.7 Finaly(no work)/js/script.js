const BTN_NODE = document.querySelector('.j-btn-request'); //Кнопка исполнения кода
const RESULT_NODE = document.querySelector('.j-result'); //Поле, где будет выводиться результат

const USE_REQUEST = () => {
  //Находим инпут номера страницы
  const ONE_INPUT_NODE = document.querySelector('.j-inpt').value;
  //Преобразуем строковое значение номера страницы в число
  const IS_NUMB_ONE = Number.parseInt(ONE_INPUT_NODE);
  
  //Находим инпут лимита 
  const TWO_INPUT_NODE = document.querySelector('.j-inpt2').value;
  //Преобразуем строковое значение лимита страницы в число
  const IS_NUMB_TWO = Number.parseInt(TWO_INPUT_NODE);
  
  //Основная логика кода
  function valOne(){
    //Проверяем, что получили именно число, а не строку
    if(!Number.isNaN(IS_NUMB_ONE) && !Number.isNaN(IS_NUMB_TWO)){
      //Проверяем оба инпута на нужные значения
      if(IS_NUMB_ONE >= 1 && IS_NUMB_ONE <= 10 && IS_NUMB_TWO >= 1 && IS_NUMB_TWO <= 10){
        return fetch('https://picsum.photos/v2/list?page=' + IS_NUMB_ONE + '&limit='+ IS_NUMB_TWO)
          .then((response) =>{
            const PHOTO_URL = JSON.parse(response)
            
            console.log(PHOTO_URL)
            return PHOTO_URL
        })
          .then((resultEnd) => {
            console.log(resultEnd)
            function resultImg(apiImg) {
              let cards = '';
              //Я не смог реализовать вывод картинки. Вроде работает код, но нет. Опустил руки тут.
              apiImg.forEach(item => {
                 const cardBlock = `
                   <div class="card">
                     <img
                       src="${item.download_url}"
                       class="card-image"
                     />
                     <p>${item.author}</p>
                   </div>
                 `
                cards = cards + cardBlock;
              })
                return RESULT_NODE.innerHTML = cards
              // console.log(cards)
             }
            
            return resultImg(resultEnd)
        })
        .then((results) =>{
          console.log(results)
        })
      } else if(IS_NUMB_ONE > 1 && IS_NUMB_ONE <= 10) {
        function limit_limit(){
          let messErr = `
          <div class="errors">
            <p>Лимит вне диапазона от 1 до 10</p>
          </div>
          `
          return RESULT_NODE.innerHTML = messErr
        }
        return limit_limit()
        
      } else if(IS_NUMB_TWO > 1 && IS_NUMB_TWO <= 10){
        function limit_limit(){
          let messErr = `
          <div class="errors">
            <p>Номер страницы вне диапазона от 1 до 10</p>
          </div>
          `
          return RESULT_NODE.innerHTML = messErr
        }
        return limit_limit()
        
      } else {
        function limit_limit(){
          let messErr = `
          <div class="errors">
            <p>Номер страницы и лимит вне диапазона от 1 до 10</p>
          </div>
          `
          return RESULT_NODE.innerHTML = messErr
        }
        return limit_limit()
        
      }
    } else {
      function limit_limit(){
          let messErr = `
          <div class="errors">
            <p>Введите цифры от 1 до 10</p>
          </div>
          `
          return RESULT_NODE.innerHTML = messErr
        }
        return limit_limit()
      
    }
  }
  //Временно, что бы понимать что происходит. В финальной версии закомментирую вывод в консоль. 
  console.log(valOne())
  
}


BTN_NODE.addEventListener('click', async () => {
  const requestResult = await USE_REQUEST();
})