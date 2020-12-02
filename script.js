// Write your JavaScript code here!
window.addEventListener("load", function(){
   let form = document.getElementById("launchForm");
   form.addEventListener("submit", function(event){
      let pilotNameInput = document.querySelector("input[name=pilotName]");
      let copilotName = document.querySelector("input[name=copilotName]");
      let fuelLevel = document.querySelector("input[name=fuelLevel]");
      let cargoMass = document.querySelector("input[name=cargoMass]");

      if (pilotNameInput.value.trim() === "" || copilotName.value.trim() === "" || fuelLevel.value.trim() === "" || cargoMass.value.trim() === ""){
         alert("All fields are required!");
         event.preventDefault();

      } else if (!isNaN(pilotNameInput.value) || !isNaN(copilotName.value)){
         alert("Make sure to enter valid information for each field!");
         event.preventDefault();
         
      } else if (isNaN(fuelLevel.value) || isNaN(cargoMass.value)){
         alert("Make sure to enter valid information for each field!");
         event.preventDefault();
      }
   });
});

/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
