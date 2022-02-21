/*
* added section "sale"
*/

class Goods2 extends Goods {
    constructor(name, amount, images, count, sale) {
        super(name, amount, images, count);

        this.sale = sale;
    }

    draw(out) {
        super.draw(out);

        let allCard = document.querySelectorAll(`${out} .my-card`);
        allCard[allCard.length - 1].insertAdjacentHTML("beforeend", `<p>sale: ${this.sale}</p>`);
    }
}

