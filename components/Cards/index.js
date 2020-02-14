// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

function cardCreator(obj){
  // Create Elements
  const card = document.createElement('div');
  const headline = document.createElement('div');
  const author = document.createElement('div');
  const imgContainer = document.createElement('div');
  const img = document.createElement('img');
  const authorsName = document.createElement('span');

  // Add classes
  card.classList.add('card');
  headline.classList.add('headline');
  author.classList.add('author');
  imgContainer.classList.add('img-container');

  // Structure Elements
  card.appendChild(headline);
  card.appendChild(author);
  author.appendChild(imgContainer);
  imgContainer.appendChild(img);
  author.appendChild(authorsName);

  // Headline Source
  headline.textContent = obj.headline;

  // Img Source
  img.src = obj.authorPhoto;

  // Authors' Names Source
  authorsName.textContent = `By ${obj.authorName}`;

  return card;
}

// console.log(cardCreator());

const cardsContainer = document.querySelector('.cards-container');
// cardsContainer.appendChild(cardCreator());
// console.log('cards container', cardsContainer);


axios.get('https://lambda-times-backend.herokuapp.com/articles')
.then((result) => {
  // console.log(result.data.articles)
  const values = Object.values(result.data)
  // console.log(values)
  const entries = Object.values(values[0])
  console.log('entries: ',entries)
  // console.log('entries: ',entries[0])
  // console.log('entries: ',entries[1])
  const newArr = [];
  
  entries.forEach(item => {
    // console.log('item: ',item);
    item.forEach(i => {
      // console.log('i: ', i)
      newArr.push(i);
    })
  })
  
  console.log('newArr: ',newArr)

  newArr.forEach(item => {
    // console.log(item)
    cardsContainer.appendChild(cardCreator(item));
  });
})



