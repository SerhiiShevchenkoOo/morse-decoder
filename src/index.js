const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    let arr = []

    expr
        .match(/.{1,10}/g)
        .map(code => {
            return code.replace(/11/g, "-")
                .replace(/10/g, ".")
                .replace(/0/g, "")

        })
        .forEach(str => {

            for (key in MORSE_TABLE) {
                if (str == key) arr.push(MORSE_TABLE[key])
                if (str == "**********") arr.push(' ')
            }

        })
    return arr
        .join('')
        .replace(/ +/g, ' ')
        .trim();
}
/*   expr
      .split('')
      .forEach(str => getMorse(str));//to morse code
  arr = arr
      .join('')
      .replace(/-/g, "11")
      .replace(/[.]/g, "10")
      .split('+')
      .map(item => item.split(''))
      .map(item => {
          if (item.length < 10) {
              while (item.length < 10) {
                  item.unshift('0')
              }
 
          }
          return item.join('')
      })
      .join(' ')
      .replace(/[ ]/g, "**********")
  return arr */

function getMorse(str) {
    for (let i = 0; i <= str.length; i++) {
        for (key in MORSE_TABLE) {
            if (str[i] == MORSE_TABLE[key]) arr.push(key)
        }
        if (str[i] == ' ') arr.push('+')
    }
}

module.exports = {
    decode
}