function min() {
  let num = 0;
  let n = 0;
  while (true) {
    let nextnum = prompt();
    if (nextnum !== 'stop') {
      num += Number(nextnum);
      n += 1;
      console.log(num);
      console.log(n);
    } else if (nextnum == 'stop') {
      average = num / n;
      return `${average}`;
      break;
    }
  }
}
min();
