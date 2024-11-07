
function sumArray(numbers: number[]): number {
  return numbers.reduce((AllStore, current) => 
    AllStore + current);
}


console.log(sumArray([1, 2, 3, 4, 5])); // Output: 15
