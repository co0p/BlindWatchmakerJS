/**
* name: ChromosomeBase.js
*
* This is the base class, the engine will work with. Implement the
* stubs and the ga engine will do the rest.
*/

class Chromosome {
  constructor () {
    this.fitness = null
    this.bitstring = ''
  }

  generate () {
    throw new Error('Not implemented')
  }

  recombine () {
    throw new Error('Not implemented')
  }

  calculateFitness () {
    throw new Error('Not implemented')
  }

  setBitstring (str) {
    throw new Error('Not implemented')
  }
}

module.exports = Chromosome
