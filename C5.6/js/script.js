const btn = document.querySelector('.j-btn-request');
const result= document.querySelector('.j-result');

//Использование fetch, async/await
const useRequest = () => {
  const limitValue = document.querySelector('input').value;
  let arr = limitValue.split(' ');
  console.log(typeof arr)
  let newArr = arr.join('');
  console.log(typeof arr)
  return fetch('https://picsum.photos/' + newArr)
    .then((response) => {
     // console.log('response', response.url)
     let a = response.url
     return a
  })
    .then((resultEnd) => {
     function resultImg(img) {
        let imgNode = `
          <div class="img-result">
            <img src="${img}" alt="Пример">
          </div>
      `
        return result.innerHTML = imgNode;
      }
    return resultImg(resultEnd)
  })
  //Добавил для отлова ошибки, хотя нужна конечно валидация
  .catch(() => {
    function errorNode(){
    let imgNode = `
      <div>
        <p class='error-mes'>"Error! Введите допустимое значение!"</p>
      </div>
  `
      return result.innerHTML = imgNode;
  };
   return errorNode()
  })
}

btn.addEventListener('click', async () => {
  const requestResult = await useRequest();
})

//Без использования fetch, async/await. 1-ый вариант.

// function resultImg(img) {
//   let imgNode = `
//     <div class="img-result">
//       <img src="${img}" alt="Пример">
//     </div>
// `
//   return result.innerHTML = imgNode;
// };

// function err(value){
//   let imgNode = `
//     <div>
//       <p class='error-mes'>${value}</p>
//     </div>
// `
//     return result.innerHTML = imgNode;
// };

// btn.addEventListener('click', () => {
//   const limitValue = document.querySelector('input').value;
//   //Тут используется 2 вводимых значения. Как добавить валидацию здесь, я не догнал, как и выше. Я так понимаю необходипо перебором forEach, это реализовать
//   let arr = limitValue.split(' ');
//   //Тут должна быть валидация массива
//   let newArr = arr.join('');
//   let url = 'https://picsum.photos/' + newArr;
//   return resultImg(url);
  
  //Тут если остаить вводимое только 1 значение(последнне, если убрать массив, используя одно значение + валидация)
  //И тут же будет использоваться функция err при неверном значении
  // if(limitValue >= 100 && limitValue <= 300){
  //   return resultImg(url);
  // } else {
  //   let mess = 'Error! Введите допустимое значение!'
  //   return err(mess);
  // }
    
// });