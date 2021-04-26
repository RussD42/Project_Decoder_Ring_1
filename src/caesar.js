// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    let answer = "";
    //Ignore capital letters by changing whole input to lowercase
    input = input.toLowerCase();
    //reverse shift direction if decoding (encode = false)
    if (encode === false) {
      shift *= -1;
    }
    /*
    If the shift value is not present, equal to 0, 
    less than -25, or greater than 25, the function should return false 
    */
    if (!shift || shift === 0 || shift < -25 || shift > 25) {
      return false;
    }
    //loop string until length, get each character
    for (let i = 0; i < input.length; i++) {
      //translate string into UTF-16 code units (a-z equals 97-122)
      let char = input.charCodeAt(i);
      //add shift
      let newChar = char + shift;
      //Spaces should be maintained throughout, as should other non-alphabetic symbols.
      if (97 > char || char > 122) {
        answer += String.fromCharCode(char);
      } else if (97 <= newChar && newChar <= 122) {
        answer += String.fromCharCode(newChar);
        //ensure it wraps around if going past a or z in either direction
      } else if (97 > newChar) {
        newChar += 26;
        answer += String.fromCharCode(newChar);
      } else if (122 < newChar) {
        newChar -= 26;
        answer += String.fromCharCode(newChar);
      }
    }
    return answer;
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
