module.exports = function solveEquation(equation) {
  // your implementation
  var arr = equation.split(' ');
  var a = arr[0];
  var b = arr[4];
  var c = arr[8];
  var signB = arr[3];
  var signC = arr[7];
  var discr;
  var result = [];
  if(signB == '-' && signC != '-') {
    discr = b*b - 4*a*c;
    return orderRoots((b - Math.sqrt(discr))/(2*a), (Number(b) + Math.sqrt(discr))/(2*a), result);
  } else if(signB == '-' && signC == '-') {
    discr = b*b + 4*a*c;
    return orderRoots((b - Math.sqrt(discr))/(2*a), (Number(b) + Math.sqrt(discr))/(2*a), result);
  } else if(signB != '-' && signC == '-') {
    discr = b*b + 4*a*c;
    return orderRoots(((-1)*b - Math.sqrt(discr))/(2*a), (Number((-1)*b) + Math.sqrt(discr))/(2*a), result);
  } else {
    discr = b*b - 4*a*c;
    return orderRoots(((-1)*b - Math.sqrt(discr))/(2*a), (Number((-1)*b) + Math.sqrt(discr))/(2*a), result);
  }
}

function orderRoots(a, b, arr) {
  a = Math.round(a);
  b = Math.round(b);
  if(a > b) {
    arr.push(b, a);
  } else {
    arr.push(a, b);
  }
  return arr;
}
