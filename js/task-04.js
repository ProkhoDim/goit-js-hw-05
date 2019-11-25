'use strict';

class StringBuilder {
  constructor(str) {
    this._value = str.split('');
  }

  get value() {
    return this._value.join('');
  }

  append(str) {
    this._value.push(str);
    return this._value.join('');
  }

  prepend(str) {
    this._value.unshift(str);
    return this._value.join('');
  }

  pad(str) {
    this._value.unshift(str);
    this._value.push(str);

    return this._value.join('');
  }
}

const builder = new StringBuilder('.');

builder.append('^');
console.log(builder.value); // '.^'

builder.prepend('^');
console.log(builder.value); // '^.^'

builder.pad('=');
console.log(builder.value); // '=^.^='
