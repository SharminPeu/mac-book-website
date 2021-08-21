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
const finalTotal = document.getElementById('final-total');


// update total Price
function updateTotalPrice() {
    const prices = parseInt(bestPrice.innerText);
    const cost = parseInt(memoryCost.innerText);
    const storage = parseInt(storageCost.innerText);
    const delivery = parseInt(deliveryCharge.innerText);
    const totalPrice = prices + cost + storage + delivery;
    price.innerText = totalPrice;
    // finalTotal.innerText = totalPrice;

}

// update Final Total
function updateFinalTotal() {
    updateTotalPrice();
    finalTotal.innerText = price.innerText;

}

// handle memory part
lowerMemory.addEventListener('click', function () {
    memoryCost.innerText = '0';
    updateTotalPrice();
    updateFinalTotal();
});
highMemory.addEventListener('click', function () {
    memoryCost.innerText = '180';
    updateTotalPrice();
    updateFinalTotal();
});


// for storage part 
lowerStorage.addEventListener('click', function () {
    storageCost.innerText = '0';
    updateTotalPrice();
    updateFinalTotal();
});
mediumStorage.addEventListener('click', function () {
    storageCost.innerText = '100';
    updateTotalPrice();
    updateFinalTotal();
});
highStorage.addEventListener('click', function () {
    storageCost.innerText = '180';
    updateTotalPrice();
    updateFinalTotal();
});

// for delivery part 
freeDelivery.addEventListener('click', function () {
    deliveryCharge.innerText = '0';
    updateTotalPrice();
    updateFinalTotal();
});
paidDelivery.addEventListener('click', function () {
    deliveryCharge.innerText = '20';
    updateTotalPrice();
    updateFinalTotal();
});

// for bouns part 
// handle pomo code 
function setPomoCode() {
    if (pomoCode.value.toLowerCase() == 'stevekaku') {
        const final = finalTotal.innerText - parseFloat(finalTotal.innerText / 5);
        finalTotal.innerText = final;
        pomoCode.value = '';
    }
    else {
        updateTotalPrice();
        updateFinalTotal();
        pomoCode.value = '';
    }
}

// handle pomo code and Final total price
buttonApplied.addEventListener('click', function () {
    setPomoCode();
});