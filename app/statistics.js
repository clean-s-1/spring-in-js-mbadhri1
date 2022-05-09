function getStatistics(numbers) {
    let min = NaN;
    let max = NaN;
    let average = NaN;
    if (numbers.length) {
         min = Math.min(...numbers);
         max = Math.max(...numbers);
        let sum = 0;
        numbers.forEach((number) => {
          sum += number;
        });
         average = sum / numbers.length;
    }
    return { min, max, average };
}

class EmailAlert {
  emailSent ;
  constructor() {
      this.emailSent = false;
  }
}
class LEDAlert {
  ledGlows;
  constructor() {
    this.ledGlows = false;
}
}
class StatsAlerter {
    emailAlert;
    ledAlert;
  constructor(maxThreshold, alerters) {
    this.maxThreshold = maxThreshold;
    // console.log(alerters)
    [this.emailAlert, this.ledAlert] = alerters;
    // console.log(this.emailAlert, this.ledAlert)
  }
  checkAndAlert(numbers) {
    let alert = numbers.some((number) => number >= this.maxThreshold);
    if (alert) {
      this.emailAlert.emailSent = true;
      this.ledAlert.ledGlows = true;
    }
  }
}

module.exports = {
  getStatistics,
  EmailAlert,
  LEDAlert,
  StatsAlerter,
};
