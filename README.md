# BlindWatchmakerJS


This is an attempt to explore the beauty of genetic algorithms in an approachable way using ... wait for it ... JS.

This project is meant to be run using node using the harmony flag. I am using ES6 (:rocket:) and will follow the js style standard


## running the demo

The demo is meant to show how a genetic algorithm works towards a solution; borrowing a few ideas from (god's|darwin's) evolution process.

 * download the repo
 * `npm install`
 * `npm run start`

## about genetic algorithms

The idea is quite simple:

1. start with a randomly generated set of  candidates
2. rank each candidate using a fitness function
3. generate a new set of candidates using the most promising candidates, based on the fitness*
4. add some randomness to escape local optima
5. go back to step 2 until you are done**


(* using crossover functions, elitism, island models, ... )

(** number of iterations reached, no more time, no improvement, ...)

read more about it at:
  https://en.wikipedia.org/wiki/Genetic_algorithm




## badges for the win

[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)

[![nodejs](https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/233px-Node.js_logo.svg.png)](https://nodejs.org/en/)
