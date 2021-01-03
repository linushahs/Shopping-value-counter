//Selectors (DOM element)
const netPrice = document.querySelector(".net-price");
const itemPrice = document.querySelectorAll(".item-price");
const quantity = document.querySelectorAll(".qty");

//Button selectors
const incrementBtns = document.querySelectorAll(".increment-btn");
const decrementBtns = document.querySelectorAll(".decrement-btn");

//Declarations
let netVal = 100000;
let qtySet = 1;
let itemSet = [];

netPrice.innerText = `$${netVal}`;
quantity.forEach((e) => {
  e.innerText = qtySet;
});
itemPrice.forEach((e) => {
  itemSet.push(parseInt(e.innerText));
});

//function (both increment and decrement)
incrementBtns.forEach((incrementBtn, index) => {
  let qty = qtySet;
  let itemVal = itemSet[index];
  incrementBtn.onclick = () => {
    qty++;
    itemVal += itemSet[index];
    netVal -= itemSet[index];

    selectProperty(incrementBtn, qty, itemVal, netVal);
  };
});

//Decrement button (function)
decrementBtns.forEach((decrementBtn, index) => {
  let parentEl = decrementBtn.parentElement.parentElement;
  let qtySelect = parentEl.querySelector(".qty");
  let itemSelect = parentEl.querySelector(".item-price");

  decrementBtn.onclick = () => {
    let qty = parseInt(qtySelect.innerText);
    let itemVal = parseInt(itemSelect.innerText);
    if (qty === 1 && itemVal === itemSet[index]) {
      return "";
    } else {
      qty--;
      itemVal -= itemSet[index];
      netVal += itemSet[index];
    }

    selectProperty(decrementBtn, qty, itemVal, netVal);
  };
});

//Selects property of item, quantity
function selectProperty(btn, qty, itemVal) {
  let parentEl = btn.parentElement.parentElement;
  let qtySelect = parentEl.querySelector(".qty");
  let itemSelect = parentEl.querySelector(".item-price");
  qtySelect.innerText = qty;
  itemSelect.innerText = itemVal;
  netPrice.innerText = `$${netVal}`;
}
