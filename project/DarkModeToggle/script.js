const inputEl = document.querySelector(".input");
const BodyEl= document.querySelector("body")
inputEl.checked=JSON.parse(localStorage.getItem("mode"));
updateBody();
function updateBody(){
    if(inputEl.checked){
      BodyEl.style.backgroundColor="black";
    }
    else{
        BodyEl.style.backgroundColor="white";
    }
}

inputEl.addEventListener("input",()=>{
    updateBody();
    updateLocalStorage();
});

function updateLocalStorage(){
    localStorage.setItem("mode",JSON.stringify(inputEl.checked));
}