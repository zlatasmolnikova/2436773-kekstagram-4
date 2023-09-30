const isShorter = (string, size) => string.length <= size;

const isPalindrom = (sentence) => {
  sentence.replaceAll(' ', '').toUpperCase();
  const original = sentence;
  sentence.split('').reverse().join();
return sentence == original;
}

isPalindrom('топор');
isShorter('Hello', 5)
