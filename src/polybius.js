// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  const square = [
    ["A", "B", "C", "D", "E"],
    ["F", "G", "H", "(I/J)", "K"],
    ["L", "M", "N", "O", "P"],
    ["Q", "R", "S", "T", "U"],
    ["V", "W", "X", "Y", "Z"],
  ];
  //helper function to encode messages
  function encodeMessage(input) {
    let code = "";
    //maintain spaces
    for (let i = 0; i < input.length; i++) {
      if (input[i].includes(" ")) {
        code += input[i];
      }
      /*first digit in code is the index number of the letter inside nested array + 1,
       second digit is square array index number + 1 */
      for (let j = 0; j < square.length; j++) {
        let row = square[j];
        for (let rowIndex = 0; rowIndex < row.length; rowIndex++) {
          /*ignore capitalized letters and check to see if letters match 
          add digits to code string in correct order */
          let letter = row[rowIndex].toLowerCase();
          if (letter.includes(input[i].toLowerCase())) {
            code += rowIndex + 1;
            code += j + 1;
          }
        }
      }
    }
    return code;
  }
  // helper function to decode messages
  function decodeMessage(input) {
    let message = "";
    //loops by pair and maintains spaces in message
    for (let i = 0; i < input.length - 1; i += 2) {
      if (input[i].includes(" ")) {
        message += input[i];
        i--;
      } else {
        //translate code digits by reversing digit positions and subtract 1 from each digit
        let letter = square[input[i + 1] - 1][input[i] - 1];
        message += letter.toLowerCase();
      }
    }
    return message;
  }

  //helper function to check for incorrect input length.
  function inputLengthOdd(input) {
    answer = false;
    let spaces = 0;
    for (let i = 0; i < input.length; i++) {
      if (input[i].includes(" ")) {
        spaces++;
      }
    }
    if ((input.length - spaces) % 2 === 1) {
      answer = true;
    }
    return answer;
  }

  function polybius(input, encode = true) {
    if (encode === false) {
      if (inputLengthOdd(input)) {
        return false;
      } else {
        return decodeMessage(input);
      }
    }
    if (encode) {
      return encodeMessage(input);
    }
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
