const main = document.querySelector("main");
const URL_BASE = "https://rickandmortyapi.com/api/character";

let characterArray = [];

fetch(`${URL_BASE}`)
.then((response) => {
   return response.json()
  
})
 .then((character)=>{
  //console.log(character)
  characterArray = character.results
  for (i = 0; i < character.results.length; i++) {
    let personajes = character.results[i];
    console.log(personajes);
    let imagen = document.createElement("img");
    imagen.className = "marco";
    imagen.src = character.results[i].image;
    main.appendChild(imagen);

    //let name = document.createElement("h3");
    //name.className = "nombrePersonaje";
    //name.src = character.results[i].name;
    //imagen.appendChild(name)
   
    
   
    
  }
})
.catch((error)=>{
  console.log(error);
})

setTimeout(()=>{
console.log(characterArray);
},3000)


document.addEventListener("onclick", logInfo());
function logInfo(event) {
  console.log(event);
}