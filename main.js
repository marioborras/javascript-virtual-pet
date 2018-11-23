 // Add a variable "pet" equal to a object with the name (string), weight (number), and happiness (number) of your pet
const pet = {
    name: "Sparky",
    weight: 6,
    happiness:
}
// Updates your HTML with the current values in your pet dictionary
const updatePetInfoInHtml = () => {
   document.querySelector(".name").textContent = pet.name
   document.querySelector(".weight").textContent = pet.weight
   document.querySelector(".happiness").textContent = pet.happiness  
 }

const checkWeightAndHappinessBeforeUpdating =() => {
  // Add conditional so if weight is lower than zero, set it back to zero  
  if (pet.weight <= 0) {
    pet.weight = 0
  }
}
 
  
const clickedTreatButton = () => {
  // Increase pet happiness
  pet.happiness = pet.happiness + 2
  // Increase pet weight
  pet.weight = pet.weight + 3
  checkAndUpdatePetInfoInHtml();
}

const clickedPlayButton =() => {
  // Increase pet happiness
  pet.happiness = pet.happiness + 2
  // Decrease pet weight
  pet.weight--
  checkAndUpdatePetInfoInHtml();
}

 const clickedExerciseButton = () => {
  // Decrease pet happiness
  pet.happiness--
  // Decrease pet weight
  pet.weight = pet.weight - 2
  checkAndUpdatePetInfoInHtml();
}

  
const checkAndUpdatePetInfoInHtml = () => {
  checkWeightAndHappinessBeforeUpdating();  
  updatePetInfoInHtml();
}

// Called function to update the name, happiness, and weight of our pet in our HTML
checkAndUpdatePetInfoInHtml();
  
// When each button is clicked, it will "call" function for that button (functions are below)
document.querySelector("#treat-button").addEventListener("click",()=>{
 clickedTreatButton()
})
document.querySelector("#play-button").addEventListener("click",()=>{
 clickedPlayButton()
})
document.querySelector("#exercise-button").addEventListener("click",( )=> {
 clickedExerciseButton()
 })
  
    
    

  
