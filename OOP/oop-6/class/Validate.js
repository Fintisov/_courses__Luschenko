class Validate {
    constructor(a) {
        this.a = a;
    }

    static isNumber(value) {
        return (typeof value) === "number";
    }

    static isInt(value) {
        return Number.isInteger(value)
    }

    static isFloat(value) {
        return !Number.isInteger(value)
    }

    static isChar(value) {
        return String(value).length === 1;
    }

    static isString(value) {
        return typeof value === "string";
    }

    static isBoolean(value) {
        return typeof value === "boolean";
    }

    static toMoney(value) {
        let coins = null;

        value = value.toFixed(2);
        value = value.split("");
        coins = value.splice(-3);

        for (let i = value.length - 3; i > 0; i = i - 3) {
            value.splice(i, 0, " ")
        }

        value = value.concat(coins).join("");

        return value;
    }
}