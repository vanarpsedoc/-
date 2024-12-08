const buttonEl=document.querySelector(".image-container");
const btnEl = document.querySelector(".btn");
btnEl.addEventListener("click",()=>{
   addNewImages();
});
let imageNumber=10;
function addNewImages(){
    for (let index = 0; index < imageNumber; index++) {
        const newImgEl = document.createElement("img");
        newImgEl.src = `https://picsum.photos/300?random=${Math.floor(Math.random() * 1000)}`;
        newImgEl.style.margin="10px";
      buttonEl.appendChild(newImgEl)
        
    }
   
}