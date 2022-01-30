import getT9ExpansionsOfNumber from "../src/services/phoneword.service";

const inputExpectedMap = {
  "": [],
  "1": [],
  "2": ["a", "b", "c"],
  "23": ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"],
  "32": ["da", "db", "dc", "ea", "eb", "ec", "fa", "fb", "fc"],
};

describe("test getT9ExpansionsOfNumber function", () => {
  it.each(Object.entries(inputExpectedMap))(
    "shoud return the expected phoneword list for the input %s",
    (input, expected) => {
      expect(getT9ExpansionsOfNumber(input)).toStrictEqual(expected);
    }
  );
});
