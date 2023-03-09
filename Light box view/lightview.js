const galleryItem=document.getElementsByClassName("gallery-item");
const lightBox=document.createElement("div");
const lightBoxContent=document.createElement("div");
const lightBoxImg=document.createElement("img");
const lightBoxPrev=document.createElement("div");
const lightBoxNext=document.createElement("div");

lightBox.classList.add('lightbox');
lightBoxContent.classList.add('lightbox-content');
lightBoxPrev.classList.add("fa","fa-angle-left","lightbox-prev");
lightBoxNext.classList.add("fa","fa-angle-right","lightbox-next")
lightBox.appendChild(lightBoxContent);
lightBoxContent.appendChild(lightBoxImg);
lightBoxContent.appendChild(lightBoxPrev);
lightBoxContent.appendChild(lightBoxNext);
document.body.appendChild(lightBox);
let index=1;
function showLightBox(n)
{
    if(n>galleryItem.length)
    {
        index=1;
    }
    else if(n<1){
        index=galleryItem.length;
    }
    let imageLocation=galleryItem[index-1].children[0].getAttribute("src");
    lightBoxImg.setAttribute("src",imageLocation);
}
function currentImage(){
  lightBox.style.display="block";
  let imageIndex=parseInt(this.getAttribute("data-index"));
    index=imageIndex;
  showLightBox(imageIndex);  
}
for(let value of galleryItem)
{
    value.addEventListener("click",currentImage);
}
function sliderImage(n)
{
    index+=n
    showLightBox(index);
}
function prevImage(){
    sliderImage(-1);
}
function nextImage(){
    sliderImage(1);
}
lightBoxPrev.addEventListener("click",prevImage);
lightBoxNext.addEventListener("click",nextImage);
function closeLightBox(event){
    if(this===event.target){
        lightBox.style.display="none"
    }
}
lightBox.addEventListener("click",closeLightBox);
