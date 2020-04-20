const inputName = document.querySelector("#fname")
const inputFood =document.querySelector("#color")
const inputAnimal =document.querySelector("#song")

const newsURL ='https://newsapiraygorodskijv1.p.rapidapi.com/getArticles'
window.addEventListener('load', (event) => {
    document.querySelector("#fname").innerHTML = localStorage.getItem('name'); 
})

  
//gerneral call to functions and returning
btnCombine.onclick = function(){
 
    const name =inputName.value;
    //color
    const color =inputColor.value;
    var colorlower =color.toLowerCase();
    //song
    const song=inputSong.value;
    var songlower = song.toLowerCase()
    mergeHold.innerHTML = name + " your new favorite song is "+ colorlower+songlower;
    localStorage.setItem('name',name)
  
  

//https://www.w3schools.com/jsref/jsref_tolowercase.asp for lowercase the second input


