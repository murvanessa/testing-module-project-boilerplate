'use strict';

console.log('--- loading: search.js');

const searchCountry = (query) => {
  debugger;

  if (query === null || query === '') {
    return 'You did not write any country!';
  }

  let searchResults = {};
  for (const key in countries) {
    const value = countries[key];
    const keyToLowerCase = key.toLowerCase();
    const queryToLowerCase = query.toLowerCase();
    const matchQuery = keyToLowerCase.includes(queryToLowerCase);
    if (matchQuery) {
      searchResults[key] = value;
    }
  }
  if (Object.keys(searchResults).length === 0) {
    return 'The country is not on the list. Please add first!';
  }
  return searchResults;
};

// write only one top-level describe in this file
describe('It will search the Object to check if the country is in the list', () => {
  // write as many it's as you want in each describe
  it('returns an error message if the user click cancel or did not write anything', () => {
    // have only one assertion inside each it
    const expected = 'You did not write any country!';
    const actual = searchCountry('');
    assert.deepStrictEqual(actual, expected);
  });
  it('returns one key value pair if there is one match', () => {
    // have only one assertion inside each it
    const expected = { Canada: 'Ottawa' };
    const actual = searchCountry('canada');
    assert.deepStrictEqual(actual, expected);
  });
  it('returns more key value pair if there is more matches', () => {
    // have only one assertion inside each it
    const expected = { Germany: 'Berlin', Greece: 'Athens' };
    const actual = searchCountry('g');
    assert.deepStrictEqual(actual, expected);
  });
});

const searchCountryHandler = (message = 'The result is:', returnResult) => {
  debugger;
  const query = prompt("Enter a country name to check if it's in the list");
  returnResult = searchCountry(query);
  displayHandler(message, returnResult);
};
