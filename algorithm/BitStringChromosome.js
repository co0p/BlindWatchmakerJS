var Chromosome = require('./Chromosome')

class BitStringChromosome extends Chromosome {

  constructor (seed) {
    super(seed)
  }

  generate () {
    return ''
  }

  recombine () {
    return [1, 2, 3]
  }

  calculateFitness () {
    return 1
  }
}

module.exports = BitStringChromosome
