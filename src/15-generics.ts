function getValue<T>(value: T) {
  return value;
}

getValue(12).toFixed();
getValue('name').toLowerCase();
// this form is valid
getValue<string>('firstname').toLowerCase();
