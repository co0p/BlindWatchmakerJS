
/*
 * GeneticAlgorithm.js
 */

// Private
var userCount = 0;

function depositeMinusFee(num1) {
    return num1 - 0.1;
}

function GeneticAlgorithm(n) {
    this.id = userCount;
    this.name = n;
    this._paid = false;
    this.balance = 0;
    userCount++;
}

GeneticAlgorithm.prototype.togglePaid = function() {
    this._paid = !this._paid;
};

GeneticAlgorithm.prototype.userType = function() {
    if(this._paid) return 'Paid User';
    else           return 'Free User';
};

GeneticAlgorithm.prototype.addBalance = function(amount) {
    this.balance += depositeMinusFee(amount);
};


module.exports = GeneticAlgorithm;
