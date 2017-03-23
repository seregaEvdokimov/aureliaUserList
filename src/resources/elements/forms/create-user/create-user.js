import { EventAggregator } from 'aurelia-event-aggregator';
import { inject, NewInstance } from 'aurelia-framework';
import { ValidationController } from 'aurelia-validation';

@inject(NewInstance.of(ValidationController))
export class CreateUser {

  constructor(validationController) {
    this.validationController = validationController;
  }

  user = {
    firstName: '',
    lastName: '',
    email: '',
    phone: ''
  };

  formSubmit() {
    console.log('submit');
  }
}

