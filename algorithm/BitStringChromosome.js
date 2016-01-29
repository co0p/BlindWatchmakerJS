var ChromosomeBase = require('./ChromosomeBase')
var util = require('util');

function BitStringChromosome(seed) {
  ChromosomeBase.apply(this, arguments);
}
util.inherits(BitStringChromosome, ChromosomeBase);

function generate() {
  return '';
}

function recombine() {
  return [1,2,3];
}

function fitness(chromosome) {
  return 1;
}

BitStringChromosome.prototype.generate = generate;
BitStringChromosome.prototype.recombine = recombine;
BitStringChromosome.prototype.fitness = fitness;
module.exports = BitStringChromosome;
