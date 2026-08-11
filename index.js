/*** You will not need this file until Unit 5 ***/
/*** Dark Mode ***
  
  Purpose:
  - Use this starter code to add a dark mode feature to your website.

  When To Modify:
  - [ ] Project 5 (REQUIRED FEATURE) 
  - [ ] Any time after
***/

// Step 1: Select the theme button
let themeButton = document.getElementById("theme-button"); 

// Step 2: Write the callback function
const toggleDarkMode = () => {
    document.body.classList.toggle("dark-mode");
    // This section will run whenever the button is clicked
    
}

// Step 3: Register a 'click' event listener for the theme button,
//             and tell it to use toggleDarkMode as its callback function
themeButton.addEventListener("click", toggleDarkMode);




/*** Form Handling [PLACEHOLDER] [ADDED IN UNIT 6] ***/
/* - When the user submits the RSVP form, the name and state they 
    entered should be added to the list of participants.

  When To Modify:
  - [ ] Project 6 (REQUIRED FEATURE)
  - [ ] Project 6 (STRETCH FEATURE) 
  - [ ] Project 7 (REQUIRED FEATURE)
  - [ ] Project 9 (REQUIRED FEATURE)
  - [ ] Any time between / after
***/

// Step 1: Add your query for the submit RSVP button here
const rsvpButton = document.getElementById("rsvp-button");

// Step 2: Write your code to manipulate the DOM here
const addParticipant = (event, person) => {
 
    // Create new paragraph
    const newParticipant = document.createElement("p");

    // Add text
    newParticipant.textContent =
        `${person.name} (${person.email}) loves ${person.brand} and is coming to STRILLA!`;

    // Find RSVP list
    const participants = document.getElementById("rsvp-participants");

    // Add participant
    participants.appendChild(newParticipant);
};



/*** Form Validation ***/

// Step 2: Write the callback function
const validateForm = (event) =>  {

    event.preventDefault();

    let containsErrors = false;

    let rsvpInputs = document.getElementById("rsvp-form").elements;

    let person = {
    name: rsvpInputs[0].value,
    email: rsvpInputs[1].value,
    brand: rsvpInputs[2].value
};


 // accesses and saves value of first input
    // add more properties here
  

    // Loop through all inputs
    for (let i = 0; i < rsvpInputs.length; i++) {

        // Skip the button
        if (rsvpInputs[i].type === "button") {
            continue;
        }
                                            
        // Validate input 
        if (person.name.length < 2) {
            containsErrors = true;
            rsvpInputs[0].classList.add("error");
        } else {
            rsvpInputs[0].classList.remove("error");
        }

     if (person.email.length < 2) {
    containsErrors = true;
    rsvpInputs[1].classList.add("error");
} else {
    rsvpInputs[1].classList.remove("error");
}

if (person.brand.length < 2) {
    containsErrors = true;
    rsvpInputs[2].classList.add("error");
} else {
    rsvpInputs[2].classList.remove("error");
}
    }
     

    // If there are no errors
    if (!containsErrors) {

      addParticipant(event, person);

        toggleModal(person);

        // Clear the form
        for (let i = 0; i < rsvpInputs.length; i++) {
            if (rsvpInputs[i].type !== "button") {
                rsvpInputs[i].value = "";
            }
        }
    }
 };


// Step 3: Replace the form button's event listener
rsvpButton.addEventListener("click", validateForm);

/*** Animations [PLACEHOLDER] [ADDED IN UNIT 8] ***/
/*** Scroll Animations ***
  
  Purpose:
  - Use this starter code to add scroll animations to your website.

  When To Modify:
  - [ ] Project 8 (REQUIRED FEATURE)
  - [ ] Any time after
***/

// Step 1: Select all elements with the class 'revealable'.
let revealableContainers = document.querySelectorAll(".revealable");

// Step 2: Write function to reveal elements when they are in view.
const reveal = () => {
    for (let i = 0; i < revealableContainers.length; i++) {
        let current = revealableContainers[i];

        // Get current height of container and window
        let windowHeight = window.innerHeight;
        let topOfRevealableContainer =  revealableContainers[i].getBoundingClientRect().top;
        let revealDistance = parseInt(getComputedStyle(current).getPropertyValue('--reveal-distance'), 10);

        // If the container is within range, add the 'active' class to reveal
        if (topOfRevealableContainer < windowHeight - revealDistance) {
            revealableContainers[i].classList.add("active")
        }
        // If the container is not within range, hide it by removing the 'active' class
        else { 
            revealableContainers[i].classList.remove("active");
        }
    }
}

// Step 3: Whenever the user scrolls, check if any containers should be revealed
window.addEventListener('scroll', reveal);
 reveal();
/*** Success Modal [PLACEHOLDER] [ADDED IN UNIT 9] ***/
const toggleModal = (person) => {
    const modal = document.getElementById("success-modal");
    const modalContent = document.getElementById("modal-text");
     // TODO
    
    // TODO: Update modal display to flex
    modal.style.display = "flex";

    // TODO: Update modal text to personalized message
            modalContent.textContent = `Can't wait to see you at STRIlLA, ${person.name}!`;

            let intervalId = setInterval(animateImage, 500); 
    
    // Set modal timeout to 5 seconds
     setTimeout(() => {
    // TODO: Update modal display to none
    modal.style.display = "none";
    clearInterval(intervalId);
}, 5000);
};

// TODO: animation variables and animateImage() function

let rotateFactor = 0;
 const modalImage = document.getElementById("modal-image");

const animateImage = () => { 
    if (rotateFactor === 0) {
        rotateFactor = -10;
    } else { 
        rotateFactor = 0;
    }
        modalImage.style.transform = `rotate(${rotateFactor}deg)`;
    
};

       
