function getPrime(n) {
  const counter = [];

  function isSimple(num) {
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }

  for (let i = 2; i <= n; i++) {
    if (isSimple(i)) {
      counter.push(i);
    }
  }

  return counter
}


console.time('getPrime');
console.log(`Список простых чисел ${getPrime(process.argv[2])}`);
console.timeEnd('getPrime')







