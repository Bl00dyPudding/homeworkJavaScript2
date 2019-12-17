class Item {
    constructor(title, price) {
        this.title = title;
        this.price = price;
    }

    render () {
        let div = document.createElement('div');
        let h3  = document.createElement('h3');
        let p   = document.createElement('p');
        let button   = document.createElement('button');

        h3.innerText = this.title;
        p.innerText  = this.price;
        button.innerText = 'В корзину';

        button.onclick = this.addToBasket;

        div.append(h3);
        div.append(p);
        div.append(button);

        return div;
    }

    addToBasket() {
        fetch('https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/addToBasket.json')
            .then(response => response.json())
            .then(result => console.log(result))
            .catch(err => new Error(err));
    }
}

class Goods {
    constructor() {
        this.total = 0;
    }

    async fetchGoods() {
        await fetch('https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/catalogData.json')
            .then(response => response.json())
            .then(result => this.goods = result)
            .catch(err => new Error(err));
    }

    render() {
        const list = [];
        this.goods.forEach(good => {
            let goodsItem = new Item(good['product_name'], good['price']);
            list.push(goodsItem.render());
        });
        document.querySelector('.goods').append(...list);

        let p = document.createElement('p');
        p.innerText  = `Общая сумма: ${this.total}`;
        document.querySelector('.goods').append(p);
    }

    totalSum() {
        let initialValue = 0;
        this.total = this.goods.reduce((a, c) => a + c['price'], initialValue);
    }
}

const goodsList = new Goods();
goodsList.fetchGoods()
    .then(() => goodsList.totalSum())
    .then(() => goodsList.render());
