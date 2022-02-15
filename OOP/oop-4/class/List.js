class List {
    constructor(item) {
        this.item = item;
    }

    render() {
        const ul1 = document.createElement("ul");

        this.item.forEach(elem => {
            ul1.insertAdjacentHTML(
                "beforeend",
                `<li>${elem}</li>`);
        })

        return ul1;
    }
}



