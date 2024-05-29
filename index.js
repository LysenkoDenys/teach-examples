function randomExamples(min, max, qty) {
  let arrNew = [];
  while (arrNew.length < qty) {
    let a = min + Math.floor(Math.random() * max);
    let b = min + Math.floor(Math.random() * max);
    if (a + b <= max) {
      arrNew.push(`${a}+${b}=${a + b}`);
    } else if (a > b) {
      arrNew.push(`${a}-${b}=${a - b}`);
    } else {
      arrNew.push(`${b}-${a}=${b - a}`);
    }
  }
  return arrNew;
}

console.log(randomExamples(1, 20, 10)); //
