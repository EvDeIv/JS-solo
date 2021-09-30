class FLipper {
  constructor(node, currentTime, nextTime) {
    this.isFlipping = false;
    this.duration = 600;
    this.flipNode = node;
    this.frontNode = node.querySelector(".front");
    this.backNode = node.querySelector(".back");
    this.setFrontTime(currentTime);
    this.setBackTime(nextTime);
  }

  setBackTime(time) {
    this.backNode.dataset.number = time;
  }

  setFrontTime(time) {
    this.frontNode.dataset.number = time;
  }

  flipDown(currentTime, nextTime) {
    let _this = this;
    if (this.isFlipping) {
      return false;
    }

    this.isFlipping = true;
    this.setFrontTime(currentTime);
    this.setBackTime(nextTime);
    this.flipNode.classList.add("running");
    setTimeout(() => {
      _this.flipNode.classList.remove("running");
      _this.isFlipping = false;
      _this.setFrontTime(nextTime);
    }, this.duration);
  }
}

function getTimeFromDate(date) {
  const dateWithoutCmtOffset = new Date(
    date.getTime() + date.getTimezoneOffset() * 60 * 1000
  );
  const dateWithiutDays = dateWithoutCmtOffset
    .toTimeString()
    .slice(0, 8)
    .split(":")
    .join("");
  const daysOfDate = pad(Math.floor(date / (1000 * 60 * 60 * 24))).toString();

  return daysOfDate + dateWithiutDays;
}

function pad(value) {
  return String(value).padStart(2, "0");
}

const flips = document.querySelectorAll(".flip");
const now = new Date();
const targetDate = new Date("January 1 2022 00:00:00");
const deltaTime = new Date(targetDate.getTime() - now.getTime());
const nowTimeStr = getTimeFromDate(deltaTime);
const nextTimeStr = getTimeFromDate(new Date(deltaTime.getTime() - 1000));

const flippers = Array.from(flips).map(function (flip, i) {
  return new FLipper(flip, nowTimeStr[i], nextTimeStr[i]);
});

setInterval(() => {
  const now = new Date();
  const targetDate = new Date("January 1 2022 00:00:00");
  const deltaTime = new Date(targetDate.getTime() - now.getTime());
  const nowTimeStr = getTimeFromDate(deltaTime);
  const nextTimeStr = getTimeFromDate(new Date(deltaTime.getTime() - 1000));
  console.log(getTimeFromDate(deltaTime));
  console.log(getTimeFromDate(new Date(deltaTime.getTime() - 1000)));

  for (let i = 0; i < flippers.length; i++) {
    if (nowTimeStr[i] === nextTimeStr[i]) {
      continue;
    }
    flippers[i].flipDown(nowTimeStr[i], nextTimeStr[i]);
  }
}, 1000);
