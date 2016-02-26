var Table = require('cli-table')
var _ = require('lodash')

class BasicReporter {

  constructor () { }

  observe (obj) {
    obj.on('start', this.println)
    obj.on('iteration', this.populationStatus)
    obj.on('done', this.println)
  }

  println (event, data) {
    console.log(event)
  }

  populationStatus (event, data) {
    let sorted = _.sortBy(data.population, 'fitness').reverse()
    let bestCandidate = sorted[0]
    let lastCandidate = sorted[sorted.length - 1]
    let averageFitness = _.sumBy(data.population, 'fitness') / data.population.length

    let table = new Table({
      head: ['interation', 'specimen', 'fitness', 'value'], colWidths: [20, 20, 10, 50]
    })

    table.push([`${data.currentIteration} / ${data.maxIteration}`, 'best', bestCandidate.fitness, bestCandidate.toString()],
      [`${data.currentIteration} / ${data.maxIteration}`, 'avg', averageFitness, '-'],
      [`${data.currentIteration} / ${data.maxIteration}`, 'last', lastCandidate.fitness, lastCandidate.toString()])

    console.log(table.toString())
  }
}

module.exports = BasicReporter
