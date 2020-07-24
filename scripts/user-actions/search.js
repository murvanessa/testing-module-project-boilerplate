const searchCountryHandler = (query) => {
  debugger;
  query = prompt("Enter a country name to check if it's in the list");
  if (query === null || query === '') {
    return alert('You did not write any country!');
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
    return alert('The country is not on the list. Please add first!');
  }
  displayHandler(`Search results for "${query}"`, searchResults);
};
