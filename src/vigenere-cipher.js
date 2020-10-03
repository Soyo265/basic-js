const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor (isDirect = true) {
    this.alpabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    this.isDirect = isDirect;
  }

  encrypt(message, key) {
    if (arguments.length < 2) throw new Error();

    message = [...message.toUpperCase()];
    key = [...key.toUpperCase()];

    let positionForKey = 0;
    for (let i = 0; i < message.length; i++) {
      if (!this.alpabet.includes(message[i])) continue;

      const charPositionFromMsg = this.alpabet.indexOf(message[i]);
      const charPositionFromKey = this.alpabet.indexOf(key[positionForKey]);

      message[i] = this.alpabet[ (charPositionFromMsg + charPositionFromKey) % this.alpabet.length ];
      positionForKey = ++positionForKey % key.length;
    }

    return this.isDirect ? message.join('') : message.reverse().join('');
  }

  decrypt(message, key) {
    if (arguments.length < 2) throw new Error();

    message = [...message.toUpperCase()];
    key = [...key.toUpperCase()];

    let positionForKey = 0;
    for (let i = 0; i < message.length; i++) {
      if (!this.alpabet.includes(message[i])) continue;

      const charPositionFromMsg = this.alpabet.indexOf(message[i]);
      const charPositionFromKey = this.alpabet.indexOf(key[positionForKey]);

      message[i] = this.alpabet[ ((charPositionFromMsg - charPositionFromKey) + this.alpabet.length) % this.alpabet.length ];
      positionForKey = ++positionForKey % key.length;
    }

    return this.isDirect ? message.join('') : message.reverse().join('');
  }
}

module.exports = VigenereCipheringMachine;
