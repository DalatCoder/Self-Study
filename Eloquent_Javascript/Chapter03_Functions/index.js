
/*
  Function Min: return smallest number of two
*/
function Minimum(a, b) {
  return a < b ? a : b;
}
console.log(Minimum(3, 4));

/*
  Function to check if the given number is even or odd
*/
function IsEven(n) {
  if (n < 0)
    n = -n;
  if (n == 0)
    return true;
  else if (n == 1)
    return false;
  else
    return IsEven(n - 2);
}
console.log(IsEven(100));
console.log(IsEven(-100));

/*
  Count how many times the given character occurs
*/
function CountBs(string) {
  let count = 0;
  for (let ch of string)
    if (ch == 'B')
      count++;
  return count;
}
console.log(CountBs('ABCADASEFBADSB')); 


