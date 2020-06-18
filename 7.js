function sum() {
  let sum = 0;
  for (let i = 1; i <= 87; i = i + 1) {
    sum += i * (i + 1) * (i + 2);
  }
  return sum;
}
sum();
