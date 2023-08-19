
function productOnePriceAndTitle(){
    const productOne=setProductFieldPrice('product-one-price');
    
   
}




// Set function

function setProductFieldPrice(productId){
    const productFieldId=document.getAnimations(productId);
    const productFieldValueText= productFieldId.innerText;
    const productFieldValue =parseFloat(productFieldValueText);
    return productFieldValue;
}

// get function

function getProductPriceInTotalField(){
    
}