function sum() {
  let sum = 0;
  for (let i = 1; i <= 18954; i = i + 1) {
    i % 2 == 0 ? (sum -= i) : (sum += i);
  }
  return sum;
}
sum();
