function z() {
  var b = 900;
  function x() {
    let a = 10;
    function y() {
      console.log(a, b);
    }

    y();
  }
  x();
}

z();
