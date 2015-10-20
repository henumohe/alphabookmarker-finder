function print(alphaUsers) {
  var map = new Map();
  alphaUsers.forEach(user => {
    if(map.has(user)) {
      map.set(user, map.get(user)+1);
    } else {
      map.set(user, 1);
    }
  });

  console.log('username,times');
  [...map.entries()].sort((a,b) => b[1] > a[1] ? 1 : -1).forEach(entry=> {
    console.log(entry[0] + ',' + entry[1]);
  });
}

export default {
  print: print
};
