import { inject, NewInstance } from 'aurelia-dependency-injection';
import { ValidationController, ValidationRules } from 'aurelia-validation';

@inject(NewInstance.of(ValidationController))
export class Registration {
    firstName = '';
    lastName = '';
    email = '';

    constructor(controller) {
        this.controller = controller;
    }

    submit() {
        this.controller.validate().then((res) => {
            console.info(res)
        }).catch((e) => {
            console.log(e)
        });
    }
}

ValidationRules
    .ensure('email').required()
    .on(Registration);