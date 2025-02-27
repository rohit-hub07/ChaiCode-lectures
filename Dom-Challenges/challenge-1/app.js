/**
 * Write your challenge solution here
 */

const bulbBtn = document.getElementById('bulb')
const tglBtn = document.getElementById('toggleButton');
const statusBtn = document.getElementById('status')

tglBtn.addEventListener('click', ()=>{
  if(tglBtn.innerText === 'Turn On'){
    bulbBtn.style.backgroundColor = 'yellow'
    tglBtn.innerText = 'Turn off'
    statusBtn.innerText = 'Status: On';
  }else{
    bulbBtn.style.backgroundColor = 'grey'
    tglBtn.innerText = 'Turn On';
    statusBtn.innerText = 'Status: Off';
    // document.body.style.backgroundColor = 'black'
  } 
})


// First, get a reference to the image.
const image = document.getElementById('bulb');

// Then, define a function that toggles a "glow" CSS class.
function toggleGlow() {
  image.classList.toggle('glow');
}

// Finally, add an event listener that toggles the class when the image is clicked.
image.addEventListener('click', toggleGlow);
