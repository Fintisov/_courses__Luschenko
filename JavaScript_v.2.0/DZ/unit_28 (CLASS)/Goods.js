/*
* Create card
*/

class Goods {
    constructor(name, amount, image, count) {
        this.name = name;
        this.amount = amount;
        this.image = image;
        this.count = count;
    }

    draw(out) {
        document.querySelector(`${out}`).insertAdjacentHTML('beforeend',
            `<div class="my-card">
                    <p class="my-card__item card__title">${this.name}</p>
                    <p class="my-card__item card__amount">${this.amount} $</p>
                    <img class="my-card__item card__img" src="${this.image}" alt="images">
                    <p class="my-card__item card__count">count: ${this.count}</p> 
            </div>`
        );
    }
}
