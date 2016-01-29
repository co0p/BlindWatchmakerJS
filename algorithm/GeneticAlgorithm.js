
/*
 * GeneticAlgorithm.js
 */

var chromosome = null;
var maxPopulation = 100;
var maxInteration = 100;
var eliteSize = 0;
var randomSeed = 123456;

var currentIteration = null;

/** constructor */
function GeneticAlgorithm(_options) {
    var options = _options || {};

    chromosome = options.chromosome || null;
    if (!chromosome) {
      throw new Error('Missing chromosome');
    }

    randomSeed = options.randomSeed || randomSeed;
    maxPopulation = options.maxPopulation || maxPopulation;
    maxInteration = options.maxInteration || maxInteration;
    eliteSize = options.eliteSize || eliteSize;
}

function start() {
  console.log('start');
  population = chromosome.generate(randomSeed);

  while(!done()) {
  }
}

function done() {
  console.log('done');
  return currentIteration === maxInteration || currentIteration === null;
}

GeneticAlgorithm.prototype.start = start;
module.exports = GeneticAlgorithm;
