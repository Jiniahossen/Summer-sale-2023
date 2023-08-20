let total=0;
const applyCuponButton=document.getElementById('apply-button');
const makePurchaseButton=document.getElementById('make-purchase');

applyCuponButton.disabled=true;
applyCuponButton.style.backgroundColor='#ccc';
makePurchaseButton.disabled=true;
makePurchaseButton.style.backgroundColor='#ccc';

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

    if(total===0){
        makePurchaseButton.disabled =true;
        makePurchaseButton.style.backgroundColor='#ccc';
    }
    else{
        makePurchaseButton.disabled=false;
        makePurchaseButton.style.backgroundColor='#ec4899';
    }
    if(total>=200){
        applyCuponButton.disabled=false;
        applyCuponButton.style.backgroundColor='#ec4899';
    }
    else{
        applyCuponButton.disabled=true;
        applyCuponButton.style.backgroundColor='#ccc';
    }
}

// calculate Discount  amount

function haveCuponButton(){

    const discountCuponFeildValue=document.getElementById('cupon-field-value');
    const discountCuponFieldTextValue=discountCuponFeildValue.value;

    const totalPriceTextValue=document.getElementById('total-price');
    const totalPriceValue=totalPriceTextValue.innerText;

    const calculateDiscountAmount=totalPriceValue*0.2;
    const totalAfterDiscount=totalPriceValue-calculateDiscountAmount;

    if(discountCuponFieldTextValue==='SELL200'){
        setInputFieldAmount('discount-price',calculateDiscountAmount)
        setInputFieldAmount('total-amount',totalAfterDiscount)

    }
    else{
        alert('You have enter a wrong cupon code');
    }

}

// set field amount
function setInputFieldAmount(priceId,amount){

    const priceValueText=document.getElementById(priceId);
    priceValueText.innerText=amount;

}