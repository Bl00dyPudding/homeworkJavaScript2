const goods = [
    { title: 'Shirt',  price: 150 },
    { title: 'Socks',  price: 50 },
    { title: 'Jacket', price: 350 },
    { title: 'Shoes',  price: 250 },
];

const renderItem = (title, price) => {
    let div = document.createElement('div');
    let h3  = document.createElement('h3');
    let p   = document.createElement('p');

    h3.innerText = title;
    p.innerText  = price;

    div.append(h3);
    div.append(p);

    return div;
};

const renderGoods = list => {
    document.querySelector('.goods').append(...list.map(item => renderItem(item.title, item.price)));
};

renderGoods(goods);
