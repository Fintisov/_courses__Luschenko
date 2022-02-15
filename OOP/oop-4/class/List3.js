class List3 extends List {
    constructor(item, cssClass) {
        super(item);
        this.cssClass = cssClass;
    }

    render() {
        const ul3 = super.render();
        this.cssClass.forEach(elem => {
            ul3.classList.add(elem);
        })

        return ul3;
    }
}