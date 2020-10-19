const resultNode = document.querySelector('.j-result');
const btnNode = document.querySelector('.j-btn-request');
function displayResult(apiData) {
  let cards = '';
  apiData.forEach(item => {
    const cardBlock = `
      <div class="card">
        <img
          src="${item.download_url}"
          class="card-image"
        />
        <p>${item.author}</p>
      </div>
    `;
    cards = cards + cardBlock;
  });
  resultNode.innerHTML = cards;
}
function useRequest(url) {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);
  xhr.onload = function() {
    if (xhr.status != 200) {
      console.log('Статус ответа: ', xhr.status);
    } else {
      const result = JSON.parse(xhr.response);
      displayResult(result);
    }
  };
  xhr.onerror = function() {
    console.log('Ошибка! Статус ответа: ', xhr.status);
  };
  xhr.send();
};
btnNode.addEventListener('click', () => {
  // формирование url
  const limitValue = document.querySelector('input').value;
  let url = 'https://picsum.photos/v2/list/?limit=' + limitValue;
  // запрос
  if (limitValue > 0 && limitValue <= 10) {
    useRequest(url);
  }
});

// function useRequest(url, callback) {
//   var xhr = new XMLHttpRequest();
//   xhr.open('GET', url, true);
  
//   xhr.onload = function() {
//     if (xhr.status != 200) {
//       console.log('Статус ответа: ', xhr.status);
//     } else {
//       const result = JSON.parse(xhr.response);
//       if (callback) {
//         callback(result);
//       }
//     }
//   };
  
//   xhr.onerror = function() {
//     console.log('Ошибка! Статус ответа: ', xhr.status);
//   };
  
//   xhr.send();
// };

// // Ищем ноду для вставки результата запроса
// const resultNode = document.querySelector('.j-result');
// // Ищем кнопку, по нажатии на которую будет запрос
// const btnNode = document.querySelector('.j-btn-request');


// // Ищем данные из input
// // const valueNode = document.querySelector('input').value;
// // setTimeout( () => console.log(valueNode), 3000);

// function displayResult(apiData) {
//   let cards = '';
//   // console.log('start cards', cards);
  
//   apiData.forEach(item => {
//     const cardBlock = `
//       <div class="card">
//         <img
//           src="${item.download_url}"
//           class="card-image"
//         />
//         <p>${item.author}</p>
//       </div>
//     `;
//     cards = cards + cardBlock;
//   });
  
//   // console.log('end cards', cards);
    
//   resultNode.innerHTML = cards;
// }

// function clickOn(value) {
//   if (value <= 10 || value >=1) {
//     return 'https://picsum.photos/v2/list/?limit=' + value;
//     console.log(value)
//   } else {
//     return 'Число вне диапазона от 1 до 10'
//   }
// }
// // console.log(clickOn(valueNode))
// // btnNode.addEventListener('click', clickOn(valueNode));
// btnNode.addEventListener('click', () => {
//   useRequest(clickOn(valueNode), displayResult);
// });

// // btnNode.addEventListener('click', function(valueNode) {
// //   if (valueNode <= 10 || valueNode >=1) {
// //     return useRequest('https://picsum.photos/v2/list/?limit= ' + valueNode, displayResult);
// //   } else {
// //     return 'число вне диапазона от 1 до 10'
// //   }
  
// // });