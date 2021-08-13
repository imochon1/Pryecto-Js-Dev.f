//const queryString = window.location.search;
//const urlParams = new URLSearchParams(queryString);
//console.log(queryString);
//// get the required parameter
//const param = urlParams.get("id"); // returns the value of parameter 'id'
//console.log("id",param);
//


const URL_BASE = "https://rickandmortyapi.com/api/character";


 fetch(`${URL_BASE}`)
 .then((response) => {
  return response.json()
})
 .then((responseArray)=>{
 
    for(i=0;i<responseArray.results.length;i++){
     let savedId = [responseArray.results[i].id]
     console.log(savedId);
    }
 
 
    
        
    
})


const button = document.getElementById("regreso");
button.addEventListener("onclick",function regresar(){
    location.href = "http://127.0.0.1:5500/index.html";
})
