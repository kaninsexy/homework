function sum() {
  let sum = 0;
  for (let i = 1; i <= 155; i = i + 2) {
    sum += i * (i + 2) * (i + 4);
  }
  return sum;
}
sum();
