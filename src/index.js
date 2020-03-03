const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let result = [];
    let arrStr = [];
    expr.split('');
    for (let i = 0; i < expr.length / 10; i++) {
        arrStr[i] = expr.slice((i * 10), (i * 10) + 10);
    }
    for (let i = 0; i < arrStr.length; i++) {
        result += convertToStr(arrStr[i].split(''));
    }
    function convertToStr(arrStr){
        let subStr = "";
        arrStr.forEach(element => subStr += element);
        if (subStr == "**********") {
            return (" ");
        }
        let morseCode = "";
        let numbs = "";
        for (i = 0; i < 10; i += 2) {
            numbs = ""
            numbs = subStr[i] + subStr[i + 1];
            if (numbs == "10") {
               morseCode += ".";
            }
            if (numbs == "11") {
                morseCode += "-";
            }
        }
        return (MORSE_TABLE[morseCode]);
    }
    return result;
}

module.exports = {
    decode
}