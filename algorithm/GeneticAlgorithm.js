class GeneticAlgorithm {

  constructor (_options) {
    let options = _options || {}

    this.randomSeed = options.randomSeed || 1234567
    this.maxPopulation = options.maxPopulation || 100
    this.maxInteration = options.maxInteration || 100
    this.eliteSize = options.eliteSize || 0
    this.currentIteration = null
    this.population = null

    if (!options.ChromosomeClass) {
      throw new Error('Missing ChromosomeClass class')
    }
    this.ChromosomeClass = options.ChromosomeClass
  }

  /*
  1. start with a randomly generated set of  candidates
  2. rank each candidate using a fitness function
  3. generate a new set of candidates using the most promising candidates, based on the fitness*
  4. add some randomness to escape local optima
  5. go back to step 2 until you are done**
  */
  start () {
    this.currentIteration = 0
    this.population = []

    // 1. start with a randomly generated set of  candidates
    for (let i = 0; i < this.maxPopulation; i++) {
      this.population.push(new this.ChromosomeClass(this.randomSeed))
    }
    do {
      // 2. rank each candidate using a fitness function
      for (let candidate of this.population) {
        candidate.calculateFitness()
      }

      // TODO

      // 5. go back to step 2 until you are done
      this.currentIteration++
    } while (this.currentIteration < this.maxInteration)
  }
}

module.exports = GeneticAlgorithm
