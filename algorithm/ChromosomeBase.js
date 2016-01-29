/**
* name: ChromosomeBase.js
*
* This is the base class, the engine will work with. Implement the
* stubs and the ga engine will do the rest.
*/

function ChromosomeBase(seed) {}

// should return a random chromosome
function generate() {
  throw new Error('Not implemented');
}

// takes two parents and creates a number of new children
function recombine(parent1, parent2) {
  throw new Error('Not implemented');
}

ChromosomeBase.prototype.generate = generate;
ChromosomeBase.prototype.recombine = recombine;

module.exports = ChromosomeBase;
