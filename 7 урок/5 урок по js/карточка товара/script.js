"use strict";
const buttons = document.querySelectorAll('button');
for(let i=0; i < buttons.length; i++){
    buttons[i].addEventListener('click', function(event){
        handleClick(event);
    })
}
 
const carText = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo incidunt ad necessitatibus. Nisi sunt aspernatur tempore consequatur assumenda nesciunt maxime laborum, ullam culpa eum beatae. Atque animi dicta reiciendis maxime?";

function handleClick (clickButton){
    const cardNode = clickButton.target.parentNode;
    const productName = {
     product:cardNode,
     img:cardNode.querySelector('img'),
     button:cardNode.querySelector('button')
 }
 const textBtn = productName.button.innerText;

    if(textBtn ==="Подробнее") {
        showText(productName);
    } else{
        hideText(productName);
    }
        
       
    
       function showText (productName){ //productName ={product: div.product, img: img.image}}
       productName.img.insertAdjacentHTML(`beforebegin`,`<div class="desc">${carText}</div>`);
       productName.img.style.display ="none",
       //productName.product.insertAdjacentHTML('afterend', '<div class="desc">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo incidunt ad necessitatibus. Nisi sunt aspernatur tempore consequatur assumenda nesciunt maxime laborum, ullam culpa eum beatae. Atque animi dicta reiciendis maxime? </div>');
       productName.button.innerText='Отмена'
   
    
    }
    function hideText(){
        productName.img.style.display ="block";
        cardNode.querySelector('.desc').remove();
        productName.button.innerText = "Подробнее";

    
    }


}


