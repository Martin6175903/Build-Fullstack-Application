function substr(str) {
  if (str.length < 5 || str.length > 1000000) return new Error('Invalid input data!');
  str = str.toLowerCase();
  let resStr = '';
  const resObj = {}

  for (const char of [...str].sort()) {
    if (!resObj[char]) resObj[char] = 0;
  }
  for (let i = 0; i < str.length; i++) {
    for (let j = i; j < str.length; j++) {
      resStr += str[j]
      console.log(resStr);
      [...resStr].forEach(char => resObj[char] += 1)
      if (j === str.length - 1) resStr = '';
    }
  }
  for (const resObjKey in resObj) {
    console.log(`${resObjKey}: ${resObj[resObjKey]}`)
  }
}

substr('hello');