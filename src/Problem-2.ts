
function removeDuplicates<T>(array: T[]): T[] {
    return array.filter((value, index) => array.indexOf(value) === index);
}


console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // Output: [1, 2, 3, 4, 5]
console.log(removeDuplicates(['a', 'b', 'a', 'c', 'b'])); // Output: ['a', 'b', 'c']
console.log(removeDuplicates(['Emon', 'Emon', 'Jhankar sir', 'Jhankar sir', 'Persian sir'])); // Output: [ 'Emon', 'Jhankar sir', 'Persian sir' ]
