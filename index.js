/**
 * name: index.js
 *
 * Entry point for the genetic algorithm example
 */

const GeneticAlgorithm = require('./algorithm/GeneticAlgorithm')
const BitStringChromosome = require('./algorithm/BitStringChromosome')
const BasicReporter = require('./reporters/BasicReporter')

var ga = new GeneticAlgorithm(BitStringChromosome)
var reporter = new BasicReporter()

ga.set('randomSeed', 123)
  .set('maxPopulation', 200)
  .set('maxIteration', 150)

reporter.observe(ga)


ga.start()
