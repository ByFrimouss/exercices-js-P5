//votre code ici

function printNumbers(n) {
  let result = "";
  for (let i = 1; i <= n; i++) {
    result += i;
    if (i < n) result += " ";
  }
  return result;
}

// console.log(printNumbers(5)); // <== Ajout temporaire pour test navigateur
export default printNumbers;
