// Timing is Everything

class Clock {
  constructor() {
    const date = new Date();
    this.hours = date.getHours();
    this.minutes = date.getMinutes();
    this.seconds = date.getSeconds();

    this.printTime();


    setInterval(this._tick.bind(this), 1000);
  }

  printTime() {
    console.log(`${this.hours}:${this.minutes}:${this.seconds}`);
  }


  _tick() {
    this.increment_seconds();
    this.printTime();
  }

  increment_seconds() {
    this.seconds++;
    if (this.seconds === 60) {
      this.seconds = 0;
      this.increment_minutes();
    }
  }

  increment_minutes() {
    this.minutes++;
    if (this.minutes === 60) {
      this.minutes = 0;
      this.increment_hours();
    }
  }

  increment_hours() {
    this.hours++;
    if (this.hours === 24) {
      this.hours = 0;
    }
  }

}

const clock = new Clock();
