$("#form").submit(function(event){
  event.preventDefault();

  var userInput = $("#userInput").val();

  var inputArray = userInput.split("");
    console.log(inputArray)

  var vowels = ["a", "e", "i", "o", "u", "y"]

  var test = vowels.forEach(function(vowel) {
    if (inputArray[0].includes(vowel,0)) {
    inputArray.push("ay");
    }
    console.log(inputArray)
  })

    });






// 1. The program converts inputs in an array of characters.
// ex input: "String"
// ex output: S, t, r, i, n, g
//
// 2. The program does nothing to non-alphabetical characters, since they do not contain consonants or vowels.
// Example Input: 3
// Example Output: 3
//
// 3. The program adds "ay" to single-letter words beginning with a vowel.
// Example Input: i
// Example Output: iay
//
// 4. The program adds "ay" to multiple-letter words beginning with a vowel.
// Example Input: alert
// Example Output: alertay
//
// 5. For words that begin with one or more consonant, place consonants at the end of the word, and then add "ay".
//   Example Input: tradition
//   Example Output: aditiontray
//
// 6.  If the first consonants contain "qu", move the "u" along with the "q" to the end of the word.
//   Example Input: squeal
//   Example Output: ealsquay
//
// 7. For words beginning with a "y", treat "y" as a consonant.
//   Example Input: yellow
//   Example Output: elllowyay
