console.log('--- loading: display countries and cities');


/**
 *
 *  @param {object} object contains cities and countries
 *  @return {string} list of countries and cities
 */
const displayCountries = (object) => {

    // check for empty object
    let isEmpty = Object.keys(object).length;
    if (!Boolean(isEmpty)) {
        return 'This is an empty object';
    }

    const checkJustLetter = new RegExp(/^[a-zA-Z\s]+$/);  //only works with character

    // check for empty keys and  values
    let message = ''
    for (key in object) {

        if (!Boolean(key) || key === 'undefined' || key === 'false' || key === 'null' || key === 'true') {
            return 'There is  invalidated country';
        }
        else if (!Boolean(object[key])) {
            return 'There is  invalidated city';
        }
        else if (!Number.isNaN(Number(key))) {

            return 'Number is not invalid country';

        }
        else if (!Number.isNaN(Number(object[key]))) {
            return 'Number is not invalid city';
        }
        else if (!checkJustLetter.test(key)) {
            return 'Country contains invalid character';
        }
        else if (!checkJustLetter.test(object[key])) {
            return 'City contains invalid character';
        }

        message += `${key} ==> ${object[key]}\n`;

    }


    return message;

};


// write only one top-level describe in this file
describe('It will check Object and display its content', () => {
    it('empty object give a string message', () => {

        const expect = 'This is an empty object';
        const actual = displayCountries({});
        assert.strictEqual(actual, expect);
    });
    it('it works for one property', () => {

        const expect = true;
        const actual = Boolean(displayCountries({ mame: 'tur' }));
        assert.strictEqual(actual, expect);
    });
    it('it gives an error for undefined keys', () => {
        const expect = 'There is  invalidated country';
        const actual = displayCountries({ mame: 'tur', undefined: 'yupi' });
        assert.strictEqual(actual, expect);
    });

    it('it gives an error for falsy keys', () => {
        const expect = 'There is  invalidated country';
        const actual = displayCountries({ mame: 'tur', false: 'youAreDirtyFalsy' });
        assert.strictEqual(actual, expect);
    });

    it('it gives an error for empty values', () => {

        const expect = 'There is  invalidated city';
        const actual = displayCountries({ mame: '', lastName: 'tur' });
        assert.strictEqual(actual, expect);
    });
    it('it gives an error for number keys', () => {

        const expect = 'Number is not invalid country';
        const actual = displayCountries({ mame: '', 12: 'tur' });
        assert.strictEqual(actual, expect);
    });
    it('it gives an error for numbers values', () => {

        const expect = 'Number is not invalid city';
        const actual = displayCountries({ name: 'mame', lastName: '63' });
        assert.strictEqual(actual, expect);
    });
    it('The keys contain only the letters', () => {

        const expect = 'Country contains invalid character';
        const actual = displayCountries({ nameà: 'mame', lastName: 'tur' });
        assert.strictEqual(actual, expect);
    });
    it('The values contain only the letters', () => {

        const expect = 'City contains invalid character';
        const actual = displayCountries({ name: 'mame?!', lastName: 'tur' });
        assert.strictEqual(actual, expect);
    });



});


const displayHandler = (message = 'Countries and Capitals:', objectToDisplay = countries) => {
    debugger;

    const alertMessage = displayCountries(countries);

    alert(`${message}\n${alertMessage}`);
};
