function sqr(a, cb) {
  setTimeout(() => {
    cb(a * a);
  }, 1000);
}

console.log(
  sqr(2, (ele) => {
    console.log(ele);
    sqr(ele, function (ele1) {
      console.log(ele1);
      sqr(ele1, function (ele2) {
        console.log(ele2);
        sqr(ele2, function (ele3) {
          console.log(ele3);
        });
      });
    });
  })
);
