

function countWordOccurrences(sentence: string, word: string): number {
   
    const lowerSentence = sentence.toLowerCase();
    const lowerWord = word.toLowerCase();

    // Split the sentence into words...............
    const words = lowerSentence.split(" ");

    // Count occurrences of the target word............
    return words.filter(w => w === lowerWord).length;
}


console.log(countWordOccurrences("I love typescript", "typescript")); // Output: 1
