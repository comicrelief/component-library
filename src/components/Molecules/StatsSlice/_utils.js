/**
 * check whether a string character is a number or a string
 * @param {string} character
 * @returns {'string' | 'number'}
 */
function getValueType(character) {
  return Number.isNaN(parseInt(character, 10)) ? 'string' : 'number';
}

/**
 * split a string into a list of words objects,
 * each containing a list of character objects with their string character and string/number type
 */
export default function splitStatString(stat) {
  return stat
    // split at spaces to get words
    .split(' ')
    // split words into characters
    .map(word => word.split('').map(character => {
      const type = getValueType(character);
      return {
        character,
        type
      };
    }));
}
