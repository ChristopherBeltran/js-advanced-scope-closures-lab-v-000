function produceDrivingRange(blockRange) {
  return function (start, end) {
    let blocks = parseInt(end, 10) - parseInt(start, 10)
    if (blocks <= blockRange) {
      return `within range by ${blockRange - blocks}`
    }
    else
    return `${blocks - blockRange} blocks out of range`
  };
};

function produceTipCalculator(percent) {
  return function (total) {
    return total * percent;
  }
}

function createDriver() {
  let driverId = 0;

  return class {
    constructor(name) {
      this.name = name;
      this.id = ++driverId;
    }
  };
};
