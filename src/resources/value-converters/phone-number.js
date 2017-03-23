export class PhoneNumberValueConverter {
  toView(value, separator) {
    return value.replace(/(\d{3})(\d{3})(\d{4})/, `$1${separator}$2${separator}$3`);
  }

  // fromView(value) {
  //   return value;
  // }
}