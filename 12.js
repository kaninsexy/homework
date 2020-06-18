function min() {
  let num1 = Infinity;
  let num2 = Infinity;
  let num3 = -Infinity;
  while (num1 && num2) {
    let nextnum = prompt();
    if (Number(nextnum) < num1 && Number(nextnum) < num2) {
      num1 = Number(nextnum);
      console.log(`num1 = ${num1}`);
    } else if (Number(nextnum) > num1 && Number(nextnum) > num3) {
      num2 = Number(nextnum);
      num3 = Number(nextnum) * -1;
      console.log(`num2 = ${num2}`);
    } else if (nextnum == 'stop') {
      return `Smallest is ${num1},Biggest is ${num2}`;
      break;
    }
  }
}
min();
