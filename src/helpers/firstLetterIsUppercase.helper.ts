export default function firstLetterIsUppercase(word) {
  if (typeof word !== "string" || word.length === 0) return false;
  if (word[0].toUpperCase() === word[0]) return true;

  return false;
}

// console.log(checkIfTheFirstLetterIsUppercase("Brasil"));
