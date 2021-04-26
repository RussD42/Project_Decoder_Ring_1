// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  //helper function to check duplicate characters
  function checkDups(alphabet) {
    count = 0; 
    for (i = 0; i < alphabet.length; i++){
      for (j = 0; j < alphabet.length; j++){
        if (alphabet[i] === alphabet[j] && i != j) {
          return true;
        }
      }
    }
  }

  function substitution(input, alphabet, encode = true) {
    const decodedAlpha = "abcdefghijklmnopqrstuvwxyz";
    //capital letters can be ignored
    input = input.toLowerCase();
    let answer = "";
    if (!alphabet || alphabet.length < 26 || alphabet.length > 26) {
      return false;
    }
    //all characters need to be unique, should return false if duplicate characters exist in string
    if (checkDups(alphabet)){
      return false;
    }
    //spaces should be maintained 
    for (i = 0; i < input.length; i++) {
      if (input[i] === " ") {
        answer += input[i];
      }
      for (j = 0; j < alphabet.length; j++) {
        for (jDecoded = 0; jDecoded < decodedAlpha.length; jDecoded++) {
          //compare index positions with coded and encoded alphabets to translate or encode.
          if (encode === false) {
            if (input[i] === alphabet[j] && j === jDecoded) {
              answer += decodedAlpha[jDecoded];
            }
          }else if (encode === true) {
            if(input[i] === decodedAlpha[jDecoded] && jDecoded === j) {
              answer += alphabet[j];
            }
          }
        }
      }
    }
    return answer;
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
