const refs = {
  timerContainer: document.querySelector(".timer"),
  tensDays: document.querySelector('[data-value="tensDays"]'),
  days: document.querySelector('[data-value="days"]'),
  tensHours: document.querySelector('[data-value="tensHours"]'),
  hours: document.querySelector('[data-value="hours"]'),
  tensMins: document.querySelector('[data-value="tensMins"]'),
  minutes: document.querySelector('[data-value="mins"]'),
  tensSecs: document.querySelector('[data-value="tensSecs"]'),
  seconds: document.querySelector('[data-value="secs"]'),
};

const timer = {
  start() {
    const targetDate = new Date("January 1, 2022, 00:00:00");
    setInterval(() => {
      const currentDate = new Date();
      const deltaDate = targetDate - currentDate;
      timeRerender(deltaDate);
    }, 1000);
  },
};

timer.start();

function timeRerender(time) {
  /*
   * Оставшиеся дни: делим значение UTC на 1000 * 60 * 60 * 24, количество
   * миллисекунд в одном дне (миллисекунды * секунды * минуты * часы)
   */
  let tensDaysNum = 0;
  let daysNum = Math.floor(time / (1000 * 60 * 60 * 24));
  if (daysNum >= 10) {
    tensDaysNum = Math.floor(daysNum / 10);
    daysNum = daysNum % 10;
  }

  /*
   * Оставшиеся часы: получаем остаток от предыдущего расчета с помощью оператора
   * остатка % и делим его на количество миллисекунд в одном часе
   * (1000 * 60 * 60 = миллисекунды * минуты * секунды)
   */

  let tensHoursNum = 0;
  let hoursNum = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  if (hoursNum >= 10) {
    tensHoursNum = Math.floor(hoursNum / 10);
    hoursNum = hoursNum % 10;
  }

  /*
   * Оставшиеся минуты: получаем оставшиеся минуты и делим их на количество
   * миллисекунд в одной минуте (1000 * 60 = миллисекунды * секунды)
   */
  let tensMinsNum = 0;
  let minsNum = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
  if (minsNum >= 10) {
    tensMinsNum = Math.floor(minsNum / 10);
    minsNum = minsNum % 10;
  }

  /*
   * Оставшиеся секунды: получаем оставшиеся секунды и делим их на количество
   * миллисекунд в одной секунде (1000)
   */
  let tensSecsNum = 0;
  let secsNum = Math.floor((time % (1000 * 60)) / 1000);
  if (secsNum >= 10) {
    tensSecsNum = Math.floor(secsNum / 10);
    secsNum = secsNum % 10;
  }

  refs.tensDays.textContent = `${tensDaysNum}`;
  refs.days.textContent = `${daysNum}`;
  refs.tensHours.textContent = `${tensHoursNum}`;
  refs.hours.textContent = `${hoursNum}`;
  refs.tensMins.textContent = `${tensMinsNum}`;
  refs.minutes.textContent = `${minsNum}`;
  refs.tensSecs.textContent = `${tensSecsNum}`;
  refs.seconds.textContent = `${secsNum}`;
}
