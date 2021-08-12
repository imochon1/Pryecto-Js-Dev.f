const main = document.querySelector("main");
const URL_BASE = "https://rickandmortyapi.com/api/character";

let characterArray = [];
const imgCard = document.getElementById("imgCard")




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
    imagen.id= i;
    imagen.className = "marco";
    imagen.src = character.results[i].image;
    main.appendChild(imagen);
      
         
    imagen.addEventListener("click", () => {
      location.href = `index2.html?id=${imagen.id}`
      
    }); 
    
  }
})
.catch((error)=>{
  console.log(error);
})

setTimeout(()=>{
console.log(characterArray);
},3000)

