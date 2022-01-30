const digitLetterMap: Record<string, string[]> = {
  "1": [],
  "2": ["a", "b", "c"],
  "3": ["d", "e", "f"],
  "4": ["g", "h", "i"],
  "5": ["j", "k", "l"],
  "6": ["m", "n", "o"],
  "7": ["p", "q", "r", "s"],
  "8": ["t", "u", "v"],
  "9": ["w", "x", "y", "z"],
};

export default function getT9ExpansionsOfNumber(numberString: string) {
  if (!numberString) return [];
  let phoneWords = [...digitLetterMap[numberString[0]]];
  numberString
    .slice(1)
    .split("")
    .reverse()
    .forEach((digitFromQueryString) => {
      const newArray = [];
      phoneWords.forEach((temporaryPhoneWord) => {
        digitLetterMap[digitFromQueryString].forEach((letterFromDigit) => {
          newArray.push(`${temporaryPhoneWord}${letterFromDigit}`);
        });
      });
      phoneWords = newArray;
    });
  return phoneWords;
}
