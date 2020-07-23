'use strict';

console.log('--- loading add countries and capital');

const addCountriesCapital= (object) => {

};

const addCountryHandler= () => {
    debugger;
    const userInput = prompt('add a new country:');
    if(userInput === null || userInput === 'number'){
        return;
    }
    const userinput1 = prompt('add the capital of the country')
    if(userInput1 === null || userInput1 === 'number'){
        return;
    }
    const message = `"${userInput}" "${userinput1}" has been added:`
    console.log(message)

};