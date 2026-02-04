// 39. Implement the Caesar Cipher.
// (Shift each character by a fixed number)
// Example (shift = 1):
// Input: "abc"
// Output: "bcd"


function Cipher(str, shift) {
  let result = "";

  shift = shift % 26;

  for (let i = 0; i < str.length; i++) {
    let char = str[i];

    if (char >= "A" && char <= "Z") {
      let code = char.charCodeAt(0);
      result += String.fromCharCode(
        ((code - 65 + shift) % 26) + 65
      );
    }
    else if (char >= "a" && char <= "z") {
      let code = char.charCodeAt(0);
      result += String.fromCharCode(
        ((code - 97 + shift) % 26) + 97
      );
    }
    else {
      result += char;
    }
  }

  return result;
}
let str ="abc";
result=Cipher(str,1)
console.log("string = "+str)
console.log("Caesar Cipher by 1 = "+result)
document.getElementById("demo1").innerHTML="string = "+str
document.getElementById("demo2").innerHTML="Caesar Cipher by 1 = "+result