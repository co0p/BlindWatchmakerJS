const EventEmitter = require('events')
const seedrandom = require('seedrandom')
const _ = require('lodash')

class GeneticAlgorithm extends EventEmitter {

  constructor (ChromosomeClass) {
    super()

    // we will use the following chromosome for the genetic algorithm
    if (ChromosomeClass === undefined) {
      throw new Error('Missing ChromosomeClass class')
    }
    this._ChromosomeClass = ChromosomeClass

    // private stuff
    this._currentIteration = null
    this._population = null

    // reasonable default settings
    this.randomSeed = 1234567
    this.maxPopulation = 100
    this.maxIteration = 100
    this.tournamentSize = 3
    this.selectionProbability = 0.87
  }

  /*
  1. start with a randomly generated set of  candidates
  2. rank each candidate using a fitness function
  3. generate a new set of candidates using the most promising candidates, based on the fitness*
  4. add some randomness to escape local optima
  5. go back to step 2 until you are done**
  */
  start () {
    // initialize random generator
    Math.seedrandom(this.randomSeed)

    this._currentIteration = 0
    this._population = []
    let elite = []

    // 1. start with a randomly generated set of  candidates
    for (let i = 0; i < this.maxPopulation; i++) {
      this._population.push(new this._ChromosomeClass())
    }
    this._broadcast('start')

    do {
      // 2. rank each candidate using a fitness function
      for (let candidate of this._population) {
        candidate.calculateFitness()
      }

      // sort the population
      _.sortBy(this._population, 'fitness').reverse()

      // 3. selection time
      elite = this.getElite(this._.population, this.eliteSize);
      this._population = this.tournamentSelection(this._population, )


      // add elite back to population
      this._population = this._population.concat(elite)

      // 5. go back to step 2 until you are done
      this._broadcast('iteration')
      this._currentIteration++
    } while (this._currentIteration <= this.maxIteration)

    this._broadcast('done')
  }

  set (_name, value) {
    let name = _name.replace('_', _name)
    if (Object.hasOwnProperty.call(this, name)) {
      Object.defineProperty(this, name, { value: value })
    }
    return this
  }

  _getPopulation () {
    return this._population
  }

  _broadcast (event) {
    this.emit(event, event, {
      'state': this.state,
      'randomSeed': this.randomSeed,
      'maxPopulation': this.maxPopulation,
      'maxIteration': this.maxIteration,
      'currentIteration': this._currentIteration,
      'eliteSize': this.eliteSize,
      'population': this._getPopulation() // is being reassigned; will loose reference
    })
  }
}

module.exports = GeneticAlgorithm
