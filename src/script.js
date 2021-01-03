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
  incrementBtn.onclick = () => {
    const dataObj = declareProperty(incrementBtn);
    let { qty, itemVal } = dataObj;
    qty++;
    itemVal += itemSet[index];
    netVal -= itemSet[index];

    selectProperty(incrementBtn, qty, itemVal, netVal);
  };
});

//Decrement button (function)
decrementBtns.forEach((decrementBtn, index) => {
  decrementBtn.onclick = () => {
    const dataObj = declareProperty(decrementBtn);
    let { qty, itemVal } = dataObj;
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
  const prop = propertySelector(btn);
  const { qtySelect, itemSelect } = prop;
  qtySelect.innerText = qty;
  itemSelect.innerText = itemVal;
  netPrice.innerText = `$${netVal}`;
}

//Declare property (qty, itemPrice)
function declareProperty(btn) {
  const prop = propertySelector(btn);
  const { qtySelect, itemSelect } = prop;
  let qty = parseInt(qtySelect.innerText);
  let itemVal = parseInt(itemSelect.innerText);

  return {
    qty: qty,
    itemVal: itemVal,
  };
}

//Parent, quantity, itemprice selector
function propertySelector(btn) {
  const parentEl = btn.parentElement.parentElement;
  const qtySelect = parentEl.querySelector(".qty");
  const itemSelect = parentEl.querySelector(".item-price");

  return {
    qtySelect: qtySelect,
    itemSelect: itemSelect,
  };
}
