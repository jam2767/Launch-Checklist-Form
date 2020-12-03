// Write your JavaScript code here!
window.addEventListener("load", function(){
   fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response){
      response.json().then(function(json){
         let div = document.getElementById("missionTarget");
         div.innerHTML = `
         <h2>Mission Destination</h2>
         <ol>
            <li>Name: ${json[0].name}</li>
            <li>Diameter: ${json[0].diameter}</li>
            <li>Star: ${json[0].star}</li>
            <li>Distance from Earth: ${json[0].distance}</li>
            <li>Number of Moons: ${json[0].moons}</li>
         </ol>
         <img src="${json[0].image}">`;
      });
   });

   let form = document.getElementById("launchForm");
   form.addEventListener("submit", function(event){
      let pilotNameInput = document.querySelector("input[name=pilotName]");
      let copilotName = document.querySelector("input[name=copilotName]");
      let fuelLevel = document.querySelector("input[name=fuelLevel]");
      let cargoMass = document.querySelector("input[name=cargoMass]");

      pilotStatus = document.getElementById("pilotStatus");
      pilotStatus.innerHTML=`Pilot ${pilotNameInput.value} is ready for launch.`;
      copilotStatus = document.getElementById("copilotStatus");
      copilotStatus.innerHTML=`Co-pilot ${copilotName.value} is ready for launch.`;

      faultyItems=document.getElementById("faultyItems");
      cargoStatus=document.getElementById("cargoStatus");
      fuelStatus = document.getElementById("fuelStatus");
      launchStatus = document.getElementById("launchStatus");


      if (pilotNameInput.value.trim() === "" || copilotName.value.trim() === "" || fuelLevel.value.trim() === "" || cargoMass.value.trim() === ""){
         alert("All fields are required!");
         event.preventDefault();

      } else if (!isNaN(pilotNameInput.value) || !isNaN(copilotName.value)){
         alert("Make sure to enter valid information for each field!");
         event.preventDefault();

      } else if (isNaN(fuelLevel.value) || isNaN(cargoMass.value)){
         alert("Make sure to enter valid information for each field!");
         event.preventDefault();

      } else if (Number(fuelLevel.value) < 10000){
         fuelStatus.innerHTML="Fuel level too low for launch.";
         faultyItems.style.visibility="visible";
         launchStatus.innerHTML="Shuttle not ready for launch";
         launchStatus.style.color="red";

         if (Number(cargoMass.value) > 10000){
            cargoStatus.innerHTML="Cargo mass too high for launch";
         }

          } else if (Number(cargoMass.value) > 10000){
            cargoStatus.innerHTML="Cargo mass too high for launch";
            faultyItems.style.visibility="visible";
            launchStatus.innerHTML="Shuttle not ready for launch";
            launchStatus.style.color="red";

          } else {
            faultyItems.style.visibility="visible";
             launchStatus.innerHTML="Shuttle is ready for launch";
             launchStatus.style.color="green";
          }
      event.preventDefault();
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
