const chai = require('chai');
const assert = chai.assert;

const wordSearch = require('../wordsearch.js')

describe("#wordSearch()", function() {
  it("should return false if the word is not present", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'FRANK')

    assert.isFalse(result);
  });

  it("should return true if the word is present", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'SEINFELD')

    assert.isTrue(result);
  });

  it("should return true if the word is present", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L', 'S'],
      ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D', 'S'],
      ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L', 'S'],
      ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G', 'S'],
      ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L', 'S'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B', 'S'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I', 'S'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L', 'S'],
    ], 'SEINFELD')

    assert.isTrue(result);
  });

  it("should return false if the word is an empty string", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L', 'S'],
      ['S', 'E', 'I', 'E', 'F', 'N', 'I', 'E', 'S'],
      ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L', 'S'],
      ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G', 'S'],
      ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L', 'S'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B', 'S'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I', 'S'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L', 'S'],
    ], '  ')

    assert.isFalse(result);
  });
});
