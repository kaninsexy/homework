function min() {
  let num1 = Infinity;
  let num2 = Infinity;
  let num3 = Infinity;
  while (num1 && num2 && num3) {
    let nextnum = prompt();
    nextnum < num1 && nextnum < num2 && nextnum < num3
      ? (num1 = nextnum)
      : nextnum > num1 && nextnum < num2 && nextnum < num3
      ? (num2 = nextnum)
      : nextnum > num1 && nextnum > num2 && nextnum < num3
      ? (num3 = nextnum)
      : nextnum;
    if (nextnum == 'stop') {
      return `Smallest is ${num1},2nd Smallest is ${num2},3rd Smallest is ${num3}`;

      break;
    }
  }
}
min();
