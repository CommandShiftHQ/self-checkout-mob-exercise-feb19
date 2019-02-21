const scanItem = (barcodeArg, catalogue) => catalogue.find(product => product.barcode === barcodeArg);


const SelfCheckout = function(catalogue) {
    this.catalogue = catalogue;
    this.basket = [];
}

SelfCheckout.prototype.addItemToBasket = function(item) {
    this.basket.push(item); 
}

SelfCheckout.prototype.calculateBasketTotal = function() {
    return this.basket.reduce((acc, item) => {
        return acc + item.price;
    }, 0); 
}

SelfCheckout.prototype.removeItemFromBasket = function (item) {
    const itemIndex = this.basket.indexOf(item);
    return this.basket.splice(itemIndex, 1);
}

module.exports = {
    scanItem,
    SelfCheckout
};