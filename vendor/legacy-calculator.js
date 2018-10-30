function LegacyCalculator() {
  this.version = '1.0';

  this.summerizer = function(number1, number2) {
    return number1 + number2;
  };

  this.incrementer = function(num) {
    return num++;
  };

  this.getVersion = function() {
    return this.version;
  };
}
