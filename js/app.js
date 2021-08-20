const lowerMemory = document.getElementById('low-memory');
const highMemory = document.getElementById('high-memory');
const memoryCost = document.getElementById('memory-cost');
const bestPrice = document.getElementById('best-price');
const price = document.getElementById('total-price');
const lowerStorage = document.getElementById('low-storage');
const mediumStorage = document.getElementById('medium-storage');
const highStorage = document.getElementById('high-storage');
const storageCost = document.getElementById('storage-cost');
const freeDelivery = document.getElementById('free-delivery');
const paidDelivery = document.getElementById('paid-delivery');
const deliveryCharge = document.getElementById('delivery-charge');
const pomoCode = document.getElementById('pomo-code');
const buttonApplied = document.getElementById('button');
const finalTotal=document.getElementById('final-total')

//  function updateCost(number)
//  {
//      memoryCost.innerText=number;
//      storageCost.innerText=number;
//  }
//  for memory part 
lowerMemory.addEventListener('click', function () {
    memoryCost.innerText = '0';
    // updateCost('0');
    updateTotalPrice();
})
highMemory.addEventListener('click', function () {
    memoryCost.innerText = '180';
    // updateCost('180');
    updateTotalPrice();
})

// update total
function updateTotalPrice() {
    const prices = parseInt(bestPrice.innerText);
    const cost = parseInt(memoryCost.innerText);
    const storage = parseInt(storageCost.innerText);
    const delivery = parseInt(deliveryCharge.innerText);
    const totalPrice = prices + cost + storage + delivery;
    price.innerText = totalPrice;
    finalTotal.innerText=totalPrice;

}

// for storage part 
lowerStorage.addEventListener('click', function () {
    storageCost.innerText = '0';
    // updateCost('0');
    updateTotalPrice();
})
mediumStorage.addEventListener('click', function () {
    storageCost.innerText = '100';
    // updateCost('100');
    updateTotalPrice();
})
highStorage.addEventListener('click', function () {
    storageCost.innerText = '180';
    // updateCost('180');
    updateTotalPrice();
})
// for delivery part 
freeDelivery.addEventListener('click', function () {
    deliveryCharge.innerText = '0';
    // updateCost('180');
    updateTotalPrice();
})
paidDelivery.addEventListener('click', function () {
    deliveryCharge.innerText = '20';
    // updateCost('180');
    updateTotalPrice();
})

// for bouns part 
// handle pomo code 
buttonApplied.addEventListener('click',function(){
if(pomoCode.innerText =='stevekaku')
{
    console.log('right');
}
else{
    console.log('not right')
}

})