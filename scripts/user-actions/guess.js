'use strict';
console.log('--- loading: guess.js ---');


/**
 * This function simply show each time one randomly country to guess it's capital.
 *
 * @param {object} allCountriesArr - the object of countries from which one randomly country will be returned
 * @returns {string} one randomly country
 *
 * @example
 *
 * const oneCountry = Guess(countries)
 * console.log(oneCountry); // 'Belgium'
 *
 */

const Guess = (allCountriesArr) => {
    //countriesArr = Object.entries(countriesObj);
    const randomNumber = GetRandomNumber();
    const oneCountryArr = Object.entries(allCountriesArr[randomNumber])
    return oneCountryArr

};

const GetRandomNumber = () => {
    return Math.floor(Math.random() * allCountries.length);
};

// write only one top-level describe in this file
describe('show one country', () => {
  // write as many nested describes as you would like
  describe('show one randomly country', () => {
    // write as many it's as you want in each describe
    it('show one randomly country', () => {
      // have only one assertion inside each it
      const randomCountry = Guess(allCountries);
      console.log(randomCountry[0][1]);
      assert.strictEqual(randomCountry[0][1], randomCountry[0][1]);
    });
  });
});


const guessCountryHandler = () => {
    debugger;
    const rndCountryArr = Guess(allCountries);
    const userGuess = prompt(`What is the capital of ${rndCountryArr[0][1]}`);

    if (userGuess === null) {
        return;}
    if(userGuess === ""){
        alert('Please press Guess button again and enter the answer');
        return
    }
    if(userGuess.toLowerCase() === rndCountryArr[1][1].toLowerCase()){
        alert('wow! you did it')
    }
    else alert(`Sorry! \n The capital of ${rndCountryArr[0][1]} is ${rndCountryArr[1][1]} \n Try again`);
};
