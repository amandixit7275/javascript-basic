// window.a = 5;
// function greet() {
//   console.log(this.a);
// }
// greet();

let obj = {
  test() {
    console.log(this);
  },
};
obj.test();
