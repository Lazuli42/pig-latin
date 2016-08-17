
$("#form").submit(function(event){
  event.preventDefault();
  // defines inputted string as a variable
  var userInput = $("#userInput").val();
  // var userInput = ""

  // converts string to an array of characters
  var characters = userInput.split("");
    console.log(characters)

  var pigLatin = []

  // stores vowels into an array for easy access
  var vowels = ["a", "e", "i", "o", "u", "y"]

  for (i=0; i < characters.length; i++) {
    if (vowels.includes(characters[0]) && (characters[characters.length-1] != "ay")) {
      characters.push("ay");
    console.log(characters)
    }
    else if (!vowels.includes(characters[0])) {
      characters.push(characters[0])
      characters.splice(0,1)
    }
    else {
      alert("oops!")
    }  
  }
  console.log(characters)
})

//   for (i = 0; i <= characters.length; i++) {
//
//       else if (characters[0] != vowel) {
//
//       }
//     });
//   };
// });
/*
for(start here; stop when this condition is false; change something every time through loop, affecting the condition)
*/
// var myFaveNumber = 10;
// for(var i = 0; i < myFaveNumber; myFaveNumber--){
  // loop from i = 0, decreasing myFaveNumber by 1 each time.
  // goes until myFaveNumber === 1 because then i is not < myFaveNumber.


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
