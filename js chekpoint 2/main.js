function reversestring(string) {
    return string.split("").reverse().join("")
}
//---------------------------------------------------
function lenghstring(string) {
    return string.length
}
//---------------------------------------------------
function capitalizeWords(sentence) {
  return sentence
    .toLowerCase()
    .split(" ")
    .map(word => word ? word[0].toUpperCase() + word.slice(1) : "")
    .join(" ");
}
console.log(capitalizeWords("hello world"))
//------------------------------------------------------
function getMinMax(arr) {
  return arr.reduce(
    ([min, max], val) => [Math.min(min, val), Math.max(max, val)],
    [arr[0], arr[0]]
  );
}
//-------------------------------------------------------
function sumArray(numbers) {
  return numbers.reduce((total, current) => total + current, 0);
}
//----------------------------------------------------------
function factorial(n) {  
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}
//----------------------------------------------------------------
function generateFibonacci(n) {
  if (n <= 0) return [];
  if (n === 1) return [0];
  const sequence = [0, 1];
  for (let i = 2; i < n; i++) {
    sequence.push(sequence[i - 1] + sequence[i - 2]);
  }

  return sequence;
}