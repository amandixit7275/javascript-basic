//variable are used to store data, three types let,var,const
//var creates a functional scope variable
//Scope determins where variables are defined and where they can be accessed;
const globalVariable = "global";
function scope() {
  const functionVariable = "function";
  if (true) {
    const blockVariable = "block";
    console.log(globalVariable);
    console.log(functionVariable);
    console.log(blockVariable);
  }
  console.log("*********");
  console.log(globalVariable);
  console.log(functionVariable);
  console.log(blockVariable);
}

scope();


let name = 'aman'
