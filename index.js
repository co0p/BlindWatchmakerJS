/**
 * name: index.js
 *
 * Entry point for the genetic algorithm example
 */

var GeneticAlgorithm = require('./algorithm/GeneticAlgorithm')
var BitStringChromosome = require('./algorithm/BitStringChromosome')

var engine = new GeneticAlgorithm({
  randomSeed: 123,
  ChromosomeClass: BitStringChromosome,
  maxPopulation: 100,
  maxIteration: 100
})

engine.start()
