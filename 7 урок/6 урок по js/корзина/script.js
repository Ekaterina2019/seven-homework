'use strict';

const basketBtn = document.querySelectorAll(".baskets");
const btnDel = document.querySelector(".delete").addEventListener('click', function (event) {
    baskets.deleteBasket(event);
})


for (let i = 0; i < basketBtn.length; i++) {
    basketBtn[i].addEventListener('click', function (event) {
        if (event.target.classList.contains("plus")) {
            let id = event.target.dataset.id
            let price = event.target.dataset.price
            let name = event.target.dataset.name
            baskets.plusFunction({
                id: id,
                name: name,
                price: price
            });
            baskets.renderTotalSum()
        }
        if (event.target.classList.contains("minus")) {
            let id = event.target.dataset.id
            let price = event.target.dataset.price
            let name = event.target.dataset.name
            baskets.minusFunction({
                id: id,
                name: name,
                price: price
            });
            baskets.renderTotalSum()
        }
    })
}

let baskets = {
    products: {},
    plusFunction(product) {
        if (this.products[product.id] === undefined) {
            this.products[product.id] = {
                price: product.price,
                name: product.name,
                count: 1
            }
        } else {
            this.products[product.id].count++
        }
        console.log(baskets.products)
        this.renderProduct(product)

    },
    minusFunction(product) {
        if (this.products[product.id].count === 1) {
            let countId = document.querySelector(`.productCount[data-id="${product.id}"]`);
            countId.parentNode.remove()
            delete this.products[product.id];
        } else {
            this.products[product.id].count--;
            let productExist = document.querySelector(`.productCount[data-id="${product.id}"]`);
        if (productExist) {
            productExist.textContent--;
            return;
        }
        }
    },

    deleteBasket() {
        let countId = document.querySelectorAll('.productCount')
        for(let i of countId) i.parentNode.remove()
        for (let key in baskets.products) delete baskets.products[key]
        baskets.renderTotalSum()
    },

    renderProduct(product) {
        let productExist = document.querySelector(`.productCount[data-id="${product.id}"]`);
        if (productExist) {
            productExist.textContent++;
            return;
        }
        let productRow = `
                <tr>
                    <th>${product.id}</th>
                    <th>${product.name}</th>
                    <th>${product.price}</th>
                    <th class="productCount" data-id="${product.id}">1</th>
                </tr>
            `;
        let tr = document.querySelector("thead");
        tr.insertAdjacentHTML('beforeend', productRow)
    },

    renderTotalSum(){
        document.querySelector('.total').textContent=this.getTotalsum();
    },

    getTotalsum(){
        let sum = 0
        for(let key in this.products){
            sum+= this.products[key].price*this.products[key].count
        }
        return sum
    },
}
