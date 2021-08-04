module.exports = function toReadable (number) {

    const numbersZeroToNineteen = {
        '0': 'zero',
        '1': 'one',
        '2': 'two',
        '3': 'three',
        '4': 'four',
        '5': 'five',
        '6': 'six',
        '7': 'seven',
        '8': 'eight',
        '9': 'nine',
        '10': 'ten',
        '11': 'eleven',
        '12': 'twelve',
        '13': 'thirteen',
        '14': 'fourteen',
        '15': 'fifteen',
        '16': 'sixteen',
        '17': 'seventeen',
        '18': 'eighteen',
        '19': 'nineteen'
    };

    const numbersTwentyToNinety = {
        '20': 'twenty',
        '30': 'thirty',
        '40': 'forty',
        '50': 'fifty',
        '60': 'sixty',
        '70': 'seventy',
        '80': 'eighty',
        '90': 'ninety'
    }

    let result = '';

    if (number > 99 && number < 1000 ) {
        result = `${numbersZeroToNineteen[(number % 1000 - number % 100) / 100]} hundred `
        number -= number % 1000 - number % 100;
        if (number === 0) {
            return result.trim();
        }
    }

    if (number > 19 && number < 100) {
        result += `${numbersTwentyToNinety[number % 100 - number % 10]} `;
        number -= number % 100 - number % 10;
        if (number === 0) {
            return result.trim();
        }
    }

    if (number < 20) {
        result += `${numbersZeroToNineteen[number]}`; 
    }

    return result;
}
