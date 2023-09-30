const isShorter = (string, size) => string.length <= size;

const isPalindrom = (sentence) => {
  const original = sentence;
  sentence.replaceAll(' ', '').toUpperCase();
return sentence == original;
}

isPalindrom('топор');
isShorter('Hello', 5)
