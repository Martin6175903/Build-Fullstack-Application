function communication(n, a, t) {
  let endCom = null;
  for (let i = 0; i < t.length; i++) {
    endCom = t[i] + a;
    if (endCom > t[i+1]) {
      t[i+1] = endCom;
    }
    console.log(endCom);
  }
}

// n - количество друзей, а - количество минут на разговор, t - момент времени, в который приходит друг
communication(3, 3, [1,6,5])