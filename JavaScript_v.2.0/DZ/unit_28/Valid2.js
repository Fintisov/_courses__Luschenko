/*
*  check Valid Password and Email
* */

class Valid2 extends Valid {
    constructor(email, password, isValid, emailError = "", passwordError = "") {
        super(email, password, isValid);

        this.emailError = emailError;
        this.passwordError = passwordError;
    }

    validate() {
        super.validate();

        if (this.email.length === 0) {
            this.isValid = false;
        }

        if (!this.isValid) {
            this.emailError = "email empty";
            this.passwordError = "min length 6";
        }
    }
}