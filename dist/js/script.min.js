"use strict";

///ES5///

/*
var GOODS = [
    { title: 'Shirt' , price: 150 },
    { title: 'Socks' , price: 50  },
    { title: 'Jacket', price: 350 },
    { title: 'Shoes' , price: 250 }
];

function renderGoodsItem(title, price) {
    return '<div class="goods-list__item"><h3>' + title + '</h3><p>' + price + '</p></div>';
};

function renderGoodsList(list) {
    var goodsList = '';
    for (let i = 0; i < GOODS.length; i++) {
        var title = GOODS[i].title;
        var price = GOODS[i].price;
        goodsList += renderGoodsItem(title, price);
    }
    document.querySelector('.goods-list').innerHTML = goodsList;
};

renderGoodsList();
*/

///ES6///

/*
const GOODS = [
    { title: 'Shirt' , price: 150 },
    { title: 'Socks' , price: 50  },
    { title: 'Jacket', price: 350 },
    { title: 'Shoes' , price: 250 }
];

const renderGoodsItem = (title = 'Заголовок', price = 'Цена') =>
    `<div class="goods-list__item"><h3>${title}</h3><p>${price}</p></div>`;

const renderGoodsList = (list = GOODS) => {
    let goodsList = list.map(item => renderGoodsItem(item.title, item.price));
    document.querySelector('.goods-list').innerHTML = goodsList.join(""); //таким образом можно избавиться от запятых
};

renderGoodsList();
*/

class GoodsItem {
    constructor (title, price) {
        this.title = title;
        this.price = price;
    }
    render () {
        return `<div class="goods-list__item"><h3>${this.title}</h3><p>${this.price}</p></div>`;
    }
}

class GoodsList {
    constructor () {
        this.goods = [];
    }
    fetchGoods () {
        this.goods = [
            { title: 'Shirt' , price: 150 },
            { title: 'Socks' , price: 50  },
            { title: 'Jacket', price: 350 },
            { title: 'Shoes' , price: 250 }
        ];
    }
    render () {
        let listHtml = '';
        this.goods.forEach(good => {
            const goodItem = new GoodsItem(good.title, good.price);
            listHtml += goodItem.render();
        });
        document.querySelector('.goods-list').innerHTML = listHtml;
    }
    totalPrice () {
        let price = 0;
        this.goods.forEach(good => {
            price += good.price;
        });
        return console.log(`Суммарная стоимость товаров: ${price}.`);
    }
}

class Cart {
    constructor () {

    }
    showAll () {

    }
}

class CartElement {
    constructor () {

    }
    addElement () {

    }
    removeElement () {

    }
}

const list = new GoodsList;
list.fetchGoods();
list.render();
list.totalPrice();


/// Hamburger ///
/// который я не доделал, потому что тупой :( ///

const SIZE = [
    {
        name: 'Маленький',
        price: 50,
        calories: 20
    },
    {
        name: 'Большой',
        price: 100,
        calories: 40
    }
];
const STUFFING = [
    {
        name: 'Сыр',
        price: 10,
        calories: 20
    },
    {
        name: 'Салат',
        price: 20,
        calories: 5
    },
    {
        name: 'Картофель',
        price: 15,
        calories: 10
    }
];
const TOPPING = [
    {
        name: 'Специи',
        price: 15,
        calories: 0
    },
    {
        name: 'Майонез',
        price: 20,
        calories: 5
    }
];

class Hamburger {
    constructor (size) {
        this.size = size.name;
        this.calories = [];
        this.calories.push(size.calories);
        this.price = [];
        this.price.push(size.price);
    };
    addStuffing (stuffing) {

    };
    removeStuffing (stuffing) {

    };
    addTopping (topping) {

    };
    removeTopping (topping) {

    };
    calculatePrice () {

    };
    calculateCalories () {

    };
}

let hamburger = new Hamburger(SIZE[1]);

console.log(hamburger);

