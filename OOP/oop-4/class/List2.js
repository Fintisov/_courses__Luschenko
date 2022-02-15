class List2 extends List {
    constructor(item, cssClass) {
        super(item);
        this.cssClass = cssClass;
    }

    render() {
        const ul2 = super.render();
        ul2.classList.add(this.cssClass);

        return ul2;
    }
}

