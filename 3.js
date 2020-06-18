function sum() {
  let sum = 0;
  for (let i = 163; i <= 2048; i = i + 4) {
    sum += i;
  }
  return sum;
}
