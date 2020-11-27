// Задача 1

class AlarmClock {
  constructor() { 
      this.alarmCollection = [];
      this.timerId = null;
   }
   addClock(time, fn, id) {
    if (!id) {
      throw new Error('Не передан id будильника.');
    };
    if (this.alarmCollection.some(timer => timer.id == id)) {
      return console.error(`ID будильника "${id}" не уникален.`);
    };
    this.alarmCollection.push({id: id, time: time, callback: fn});
  }
  removeClock(id) {
    return this.alarmCollection.filter(alarm => alarm.id == id).length;
  }
  getCurrentFormattedTime() {
    return (new Date().getHours());  
    (new Date().getMinutes())  
  }

  start() {
    if (!thistimerId) {
      thistimerId = setInterval(() => this.alarmCollection.forEach(alarm => checkClock(alarm, )))
    }
  }
  

  stop() {
    if (this.timerId) {
      clearInterval(this.timerId);
      this.timerId = null;
   }
  }

  printAlarms() {
    console.log(`Печать всех будильников в количестве ${this.alarmCollection.length}`)
    this.alarmCollection.forEach(alarm => console.log(`Будильник №${alarm.id} установлен на ${alarm.time}`));
  }

  clearAlarms() {
    this.stop();
    this.alarmCollection.length = 0;

  }
}