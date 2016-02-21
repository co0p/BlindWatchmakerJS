class BasicReporter {

  constructor () { }

  observe (obj) {
    obj.on('start', (e, d) => this.println)
    obj.on('iteration', (e, d) => this.populationStatus)
    obj.on('done', (e, d) => this.println)
  }

  println (event, data) {
    console.log(event)
  }

  populationStatus (event, data) {
    console.log(`${data.currentIteration} \t / ${data.maxIteration}`)
  }
}

module.exports = BasicReporter
