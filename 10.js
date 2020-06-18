function min() {
  let num = Infinity;
  while (num) {
    let nextnum = prompt();
    nextnum < num ? (num = nextnum) : num;
    if (nextnum == 'stop') {
      console.log(num);
      break;
    }
  }
}
min();
