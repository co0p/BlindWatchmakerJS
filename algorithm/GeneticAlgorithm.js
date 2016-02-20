class GeneticAlgorithm {

  constructor (_options) {
    let options = _options || {}

    this.chromosome = options.chromosome || null
    if (!this.chromosome) {
      throw new Error('Missing chromosome definition')
    }

    this.randomSeed = options.randomSeed || 1234567
    this.maxPopulation = options.maxPopulation || 100
    this.maxInteration = options.maxInteration || 100
    this.eliteSize = options.eliteSize || 0
    this.currentIteration = null
  }

  start () {
    console.log('start')
    this.population = this.chromosome.generate(this.randomSeed)

    while (!this.done()) { }
  }

  done () {
    console.log('done')
    return this.currentIteration === this.maxInteration || this.currentIteration === null
  }
}

module.exports = GeneticAlgorithm
