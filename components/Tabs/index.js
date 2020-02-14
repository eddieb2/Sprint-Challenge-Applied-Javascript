// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

function tabCreator(obj){
  // Create Element
  const tab = document.createElement('div');

  // Add Class
  tab.classList.add('tab');

  // Content
  tab.textContent = obj;

  // Test
  // console.log(tab);

  // Return Structure
  return tab;
}

// Test
console.log(tabCreator());

// Select where to go and add it
const topics = document.querySelector('.topics')
topics.appendChild(tabCreator());
console.log(topics)

axios.get('https://lambda-times-backend.herokuapp.com/topics')
.then((result) => {
  // console.log('Topics Data: ',result.data) 
  const arr = Object.values(result.data);
  // console.log('test1 :', arr)
  // console.log('each topic: ', arr[0][1])

  const newArr = [];
  // console.log('newArr', newArr)
  arr[0].forEach(item => {
    newArr.push(item);
  });

  newArr.forEach(item => {
    topics.appendChild(tabCreator(item));
  });
})

