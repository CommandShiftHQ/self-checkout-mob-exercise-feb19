const scanItem = (barcodeArg, catalogue) => catalogue.find(product => product.barcode === barcodeArg);

const addItemToBasket = (item, shoppingBasket) => {
  shoppingBasket.push(item);
}

const calculateBasketTotal = (shoppingBasket) => {
    return shoppingBasket.reduce((acc, item) => {
        return acc + item.price;
    }, 0);
}

const removeItemFromBasket = (item, shoppingBasket) => {
    const itemIndex = shoppingBasket.indexOf(item);
    return shoppingBasket.splice(itemIndex, 1);
}

module.exports = {
    scanItem,
    addItemToBasket,
    calculateBasketTotal,
    removeItemFromBasket
};