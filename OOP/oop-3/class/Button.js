class Button {
    constructor(width, height, background, value) {
        this.width = width;
        this.height = height;
        this.background = background;
        this.value = value;
    }

    render() {
        const myBtn = document.createElement("button");
        myBtn.style.width = `${this.width}px`;
        myBtn.style.height = `${this.height}px`;
        myBtn.style.backgroundColor = this.background;
        myBtn.textContent = this.value;

        return myBtn;
    }
}
