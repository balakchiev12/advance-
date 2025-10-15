function wordsUppercase(input) {
  let words = input.split(/\W+/).filter(Boolean);
  let uppercasedWords = words.map((word) => word.toUpperCase());
  console.log(uppercasedWords.join(", "));
}
wordsUppercase("Hi, how are you?"); // HI, HOW, ARE, YOUs
