"use strict";

// reset global variable

const resetCountryHandler = () => {

    // reassign empty object
    countries = {};

    const message = "Database has been reset";

    displayHandler(message, countries);

}