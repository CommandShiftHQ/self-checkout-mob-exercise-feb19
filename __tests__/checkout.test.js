const { scanItem, addItemToBasket, calculateBasketTotal, removeItemFromBasket } = require('../checkout.js');

const orange = {
    barcode: 789,
    price: 7,
};

const pineapple = {
    barcode: 5367,
    price: 80,
};

const kiwi = {
    barcode: 765,
    price: 25,
};

const apple = {
    barcode: 123,
    price: 5,
};

const banana = {
    barcode: 456,
    price: 6
};

const productCatalogue = [orange, pineapple, kiwi, apple, banana];

it('finds an item from the product catalogue after scanning a barcode', () => {
    // behaviour and expectations go here?
    // we scan barcode 456
    // then we get expect to get banana object
    expect(scanItem(456, productCatalogue)).toEqual({
        barcode: 456,
        price: 6
    });
});

describe('Customer Shopping Basket Functionality', () => {
    let erselsBasket;

    beforeEach(() => {
        erselsBasket = [pineapple];
    })

    it('adds an item to the shopping basket of the customer', () => {
        expect(erselsBasket).toHaveLength(1);
        addItemToBasket(kiwi, erselsBasket)
        expect(erselsBasket).toHaveLength(2);
        expect(erselsBasket[1]).toEqual(kiwi);
    });
    
    it('calculates total price of items in the shopping basket', () => {
        addItemToBasket(kiwi, erselsBasket)
        expect(calculateBasketTotal(erselsBasket)).toBe(105);
    });

    it('removes an item from the basket', () => {
        expect(erselsBasket).toHaveLength(1);
        addItemToBasket(kiwi, erselsBasket)
        removeItemFromBasket(pineapple, erselsBasket);
        expect(erselsBasket[0]).toEqual(kiwi);
    })
});

