// // Instantiate global function values -----------
// let DATA = [];

// let dataFileNames = [
//     "chaosMutations.json",
//     "drunkEffects.json",
//     "effectMatrix.json",
//     "fightEntitiesTemplates.json",
//     "hitMatrix.json",
//     "movementValues.json",
//     "hitLocations.json"
// ];

// // Get data from data.json
// var xmlhttp = new XMLHttpRequest();
// dataFileNames.forEach(fileName => {
//     xmlhttp.onreadystatechange = function() {
//         if (this.readyState == 4 && this.status == 200) {
//             DATA.push(JSON.parse(this.responseText));
//         }
//     };
    
//     xmlhttp.open("GET", "./source/js/data/" + fileName, false);
//     xmlhttp.send();
// });
// // ----------------------------------------------

// /**
//  * 
//  * @param {string} entityType 
//  * @param {*} diceValue 
//  */
// function GetHitLocation (entityId, diceValue = "random") {
//     let random = 0;
//     let hitLocationsData = GetLocationEntityList();
//     let entity = false;
//     let returner = false;

//     for (let tempEntity in hitLocationsData) {
//         if (tempEntity.id == entityId) {
//             entity = tempEntity;
//             break;
//         }
//     }

//     if (entity == false) {
//         console.error("Entity with given id not found.");
//         return false;
//     }
    
//     if (diceValue === "random") {
//         random = randomizer.GetRandomNumber(1, 100);
//     }
//     else {
//         // TODO: 
//         window.alert("Brak połączenia z internetem");
//     }

//     for (let location in entity.values) {
//         if (random >= location.from && random <= location.to) {
//             returner = entity.effect;
//             break;
//         }
//     }
    
//     return returner;
// }

// function GetLocationEntityList () {
//     return DATA[6];
// }

function ToggleShowHaurioData (toggler) {
    // This is a workaround solutiong, because the
    // button-checkbox like value changer works slower
    // than this function
    if (toggler.value == "off")
        $("#haurio-tile").removeClass("is-hidden");
    else
        $("#haurio-tile").addClass("is-hidden");
}

