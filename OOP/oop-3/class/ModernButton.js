class ModernButton extends Button {
    constructor(width, height, background, value, borderRadius = 0) {
        super(width, height, background, value);
        this.borderRadius = borderRadius;
    }

    render() {
        const button = super.render();
        button.style.borderRadius = `${this.borderRadius}px`;
        return button;
    }
}