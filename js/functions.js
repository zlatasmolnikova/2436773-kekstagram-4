const isShorter = (string, size) => string.length <= size;

const isPalindrom = (sentence) => {
  sentence.replaceAll(' ', '').toUpperCase();
  const original = sentence;
  sentence.split('').reverse().join();
  if (sentence == original){
    return true;
  }
  else{
    return false;
  }
}

const findNumber = (line) => {
  let result = '';
  line = line.toString();

  for (let i = 0; i < line.length; i++){
    const currentSymbol = parseInt(line[i], 10);
    if(!isNaN(currentSymbol)){
      result += currentSymbol;
    }
  }
  return parseInt(result, 10);
}

isPalindrom('топор');
isShorter('Hello', 5)
findNumber('s!2')
