"use strict";





// call remove handler

const removeCountryHandler = () => {
    debugger;
    let removeCountry = prompt("Which country do you want to remove?");

    if (removeCountry === null || removeCountry === '') {
        return;
    }

    let isMatch = Object.keys(countries).filter(element => element.toLocaleLowerCase() === removeCountry.toLocaleLowerCase());

    if (isMatch.length > 0) {

        delete countries[isMatch[0]];
        let message = `${capitalize(removeCountry)} has been removed from the database`;
        displayHandler(message, countries);
    }
    else {

        alert(`${capitalize(removeCountry)} does not exist in the database`);
    }
}

// make first letter to UpperCase
function capitalize(string) {
    return string[0].toUpperCase() + string.slice(1);
}
