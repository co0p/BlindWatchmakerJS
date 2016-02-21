/**
* name: ChromosomeBase.js
*
* This is the base class, the engine will work with. Implement the
* stubs and the ga engine will do the rest.
*/

class Chromosome {
  constructor (seed) { }
  generate () {
    throw new Error('Not implemented')
  }

  recombine () {
    throw new Error('Not implemented')
  }

  calculateFitness () {
    throw new Error('Not implemented')
  }
}
module.exports = Chromosome
