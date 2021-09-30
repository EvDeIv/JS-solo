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
  return date.toTimeString().slice(0, 8).split(":").join("");
}

const flips = document.querySelectorAll(".flip");
let now = new Date();
let nowTimeStr = getTimeFromDate(new Date(now.getTime() - 1000));
let nextTimeStr = getTimeFromDate(now);
const flippers = Array.from(flips).map(function (flip, i) {
  return new FLipper(flip, nowTimeStr[i], nextTimeStr[i]);
});

setInterval(() => {
  let now = new Date();
  let nowTimeStr = getTimeFromDate(new Date(now.getTime() - 1000));
  let nextTimeStr = getTimeFromDate(now);

  for (let i = 0; i < flippers.length; i++) {
    if (nowTimeStr[i] === nextTimeStr[i]) {
      continue;
    }
    flippers[i].flipDown(nowTimeStr[i], nextTimeStr[i]);
  }
}, 1000);
