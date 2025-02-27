let nameValue = document.getElementById('nameInput');
let jobValue = document.getElementById('jotInput'); // Fix: should be 'jobInput'
let ageValue = document.getElementById('ageInput');
let bioValue = document.getElementById('bioInput');

let showName = document.getElementById('nameDisplay');
let showJob = document.getElementById('jobDisplay');
let showAge = document.getElementById('ageDisplay');
let showBio = document.getElementById('bioDisplay');

// Function to update text in real-time
function updateDisplay(inputElement, displayElement) {
    inputElement.addEventListener('input', () => {
        displayElement.textContent = inputElement.value;
    });
}

// Attach event listeners for real-time updates
updateDisplay(nameValue, showName);
updateDisplay(jobValue, showJob);
updateDisplay(ageValue, showAge);
updateDisplay(bioValue, showBio);
