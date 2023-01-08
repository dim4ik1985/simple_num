function getPrime(n) {
  const result = [];

  function isSimple(num) {
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }

  let counter = 0;
  for (let i = 2; n > counter; i++) {
    if (isSimple(i)) {
      result.push(i);
      counter++;
    }
  }
  return result;
}


console.time('getPrime');
console.log(getPrime(process.argv[2]));
console.timeEnd('getPrime')







