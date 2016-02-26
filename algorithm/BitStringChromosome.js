class BitStringChromosome {

  constructor () {
    this._value = this.generate()
    this._bitString = this.valueToBitString(this._value)
  }

  generate () {
    let value = []
    value.push(randomInt(0, 100))
    value.push(randomInt(0, 100))
    value.push(randomInt(0, 100))
    value.push(randomInt(0, 100))
    return value
  }

  valueToBitString (value) {
    let bitstring = ''
    for (let val of value) {
      bitstring += dec2bin(val)
    }
    return bitstring
  }

  bitStringToValue (bitString) {
    let value = []
    let bitStringChunkSize = 32
    let chunk = null
    for (var i = 0, len = bitString.length; i < len; i += bitStringChunkSize) {
      chunk = bitString.substring(i, i + bitStringChunkSize)
      value.push(bin2dec(chunk))
    }
    return value
  }

  recombine (other) {
    return '1'
  }

  calculateFitness () {
    let posCount = 0
    for (let char of this._bitString) {
      if (char === '1') posCount++
    }
    this.fitness = posCount
  }

  toString () {
    return this.bitStringToValue(this._bitString)
  }
}

// only works for positive numbers
function dec2bin (posNumber) {
  // posNumber must be between -2147483648 and 2147483647
  var sMask = ''
  for (var nFlag = 0, nShifted = posNumber; nFlag < 32; nFlag++) {
    sMask += String(nShifted >>> 31)
    nShifted <<= 1
  }
  return sMask
}

function bin2dec (bitString) {
  return parseInt(bitString, 2)
}

function randomInt (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

module.exports = BitStringChromosome
