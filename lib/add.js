function add(num1, num2) {
  // 实现该函数
  var a1 = num1.split('').reverse();
  var a2 = num2.split('').reverse();
  var c1 = [];
  var l = a1.length > a2.length ? a1.length : a2.length;
  var flag = 0;
  for (var i = 0; i < l; i++) {
    var n = (Number(a1[i]) || 0) + (Number(a2[i]) || 0) + flag;
    flag = 0;
    if (n > 10) {
      n = n -10;
      flag = 1;
    }
    c1.push(n)
  }
  return c1.reverse().join('');
}

module.exports = add