// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header() {
  // Create Elements
  const header = document.createElement('div');
  const date = document.createElement('span');
  const lambdaTimes = document.createElement('h1');
  const temp = document.createElement('span');

  // Add Classes to Elements
  header.classList.add('header');
  date.classList.add('date');
  temp.classList.add('temp');

  // Structure Elements
  header.appendChild(date);
  header.appendChild(lambdaTimes);
  header.appendChild(temp);

  // Add content to the Elements
  date.textContent = 'MARCH 28, 2019';
  lambdaTimes.textContent = 'Lambda Times';
  temp.textContent = '98°'

  // Test
  // console.log(header);

  // Return Structure
  return header;
}

// Test
// console.log('fxn structure',Header());

// Select Container where we want header to go 
const headerContainer = document.querySelector('.header-container');

// Add to the DOM
headerContainer.appendChild(Header());

