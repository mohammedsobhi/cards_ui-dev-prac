let cards = [
  {
    title:'title card 1',
    id:1,
    data_1:'sdsd',
    data_2:'fdffd',
    data_3:'dsaas',
    items:[
      {
        title:'frontend1',
        id:1,
        note:'asd asd'
      },
      {
        title:'frontend2',
        id:2,
        note:'222222d'
      },
      {
        title:'backend3',
        id:3,
        note:'333'
      }
    ]
  },
  {
    title:'title card 2',
    id:2,
    data_1:34,
    data_2:'34234',
    data_3:'feeeeees',
    items:[
      {
        title:'frontend33',
        id:1,
        note:'a232d 12d'
      },
      {
        title:'frontend44',
        id:2,
        note:'er2d'
      },
      {
        title:'backend444444',
        id:3,
        note:'3vvvv'
      }
    ]
  },
  {
    title:'title card 2',
    id:2,
    data_1:34,
    data_2:'34234',
    data_3:'feeeeees',
    items:[
      {
        title:'frontend33',
        id:1,
        note:'a232d 12d'
      },
      {
        title:'frontend44',
        id:2,
        note:'er2d'
      },
      {
        title:'backend444444',
        id:3,
        note:'3vvvv'
      }
    ]
  },
  {
    title:'title card 2',
    id:2,
    data_1:34,
    data_2:'34234',
    data_3:'feeeeees',
    items:[
      {
        title:'frontend33',
        id:1,
        note:'a232d 12d'
      },
      {
        title:'frontend44',
        id:2,
        note:'er2d'
      },
      {
        title:'backend444444',
        id:3,
        note:'3vvvv'
      }
    ]
  },
  {
    title:'title card 2',
    id:2,
    data_1:34,
    data_2:'34234',
    data_3:'feeeeees',
    items:[
      {
        title:'frontend33',
        id:1,
        note:'a232d 12d'
      },
      {
        title:'frontend44',
        id:2,
        note:'er2d'
      },
      {
        title:'backend444444',
        id:3,
        note:'3vvvv'
      }
    ]
  },
];

let cardContainer = document.getElementById('cardContainer');

cards.forEach(card =>{
  let elementCard = document.createElement("div");
  elementCard.classList.add("card");


  let elementCardInnerHtml = `
  <div class="card-body">
  <h4 class="card-title">${card.title}</h4>
  <label for="choose">choose</label>
  <select name="choose" id="choose">`;

  let myTasks = card.items;

  for(var task in myTasks){
    elementCardInnerHtml += `<option value="1">${myTasks[task].title}</option>`;
  }

  elementCardInnerHtml += `</select>
  <ul class="data-list">
    <li class="data-item">${card.data_1}</li>
    <li class="data-item">${card.data_2}</li>
    <li class="data-item">${card.data_3}</li>
  </ul>
  <button class="btn" type="submit">➡</button>
</div>
  `;

  elementCard.innerHTML = elementCardInnerHtml;

  cardContainer.appendChild(elementCard);

});


