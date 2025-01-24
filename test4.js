function balance(n, m, k, arrStr) {
  const arr = [];
  arrStr.sort((a,b) => a[0] - b[0]).forEach(item => arr.push(...new Array(item[1]).fill(item[0])))

}

balance(3, 5, 2, [[9, 4],[7, 6],[5, 5]]);