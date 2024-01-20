export function pxToNum(exp){
  exp = exp.slice(0, (exp.length - 2));
  exp = Number(exp).toFixed(0);
  exp = Number(exp);

  return exp;
}