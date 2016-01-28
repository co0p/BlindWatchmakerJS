/**
 * name: index.js
 *
 * Entry point for the genetic algorithm example
 */

var GeneticAlgorithm = require('./algorithm/GeneticAlgorithm');
var chromosome = require('./chromosomes/BitString');

var engine = new GeneticAlgorithm(chromosome, {
    maxPopulation: 100,
    maxIteration: 100
});

console.log('generate initial Population');

while(!engine.done()) {
    console.log('assess');
    console.log('recombine');
    console.log('selection');
}


