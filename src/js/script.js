"use strict";

const GOODS = [
    { title: 'Shirt' , price: 150 },
    { title: 'Socks' , price: 50 },
    { title: 'Jacket', price: 350 },
    { title: 'Shoes' , price: 250 }
];

/*
var GOODS = [
    { title: 'Shirt' , price: 150 },
    { title: 'Socks' , price: 50 },
    { title: 'Jacket', price: 350 },
    { title: 'Shoes' , price: 250 }
];
*/


const renderGoodsItem = (title, price) =>
    `<div class="goods-list__item"><h3>${title}</h3><p>${price}</p></div>`;

/*
function renderGoodsItem(title, price) {

    return '<div class="goods-list__item"><h3>' + title + '</h3><p>' + price + '</p></div>';

};
*/

const renderGoodsList = list => {
    let goodsList = list.map(item => renderGoodsItem(item.title, item.price));
    document.querySelector('.goods-list').innerHTML = goodsList.join(""); //таким образом можно избавиться от запятых
};

/*
function renderGoodsList(list) {
    var goodsList = '';
    for (let i = 0; i < GOODS.length; i++) {
        var title = GOODS[i].title;
        var price = GOODS[i].price;
        goodsList += renderGoodsItem(title, price);
    }
    document.querySelector('.goods-list').innerHTML = goodsList;
};
*/

renderGoodsList(GOODS);