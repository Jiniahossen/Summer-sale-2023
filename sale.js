let total=0;

function productPriceAndTitle(target){
    const selectedProductItems=document.getElementById('selected-items');
    const productItemName=target.parentNode.childNodes[1].childNodes[3];
    const productName=productItemName.innerText;
    const p=document.createElement("p");
    const count=selectedProductItems.childElementCount;
    p.innerHTML=`${count+1}.${productName}`
    selectedProductItems.appendChild(p);
    p.classList.add('mb-2');
    const productPrice=target.childNodes[7].childNodes[0];
    const price=productPrice.innerText;
    total=parseFloat(total)+parseFloat(price);
    document.getElementById("total-price").innerText=total;
}

// calculate Discount  amount

function haveCuponButton(){
    console.log('added');
}

// get field amount
function getInputFieldAmount(id) {
    const inputFieldAmount = document.getElementById(id);
    const inputAmount = inputFieldAmount.value;
    const inputPrice = parseFloat(inputAmount);
    return inputPrice;
}

// set field amount
function setInputFieldAmount(priceId,amount){

    const priceValueText=document.getElementById(priceId);
    priceValueText.innerText=amount;

}