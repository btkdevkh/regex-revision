/**
 * RegEx Syntax : //gi
 * 
 * Examples :
 * 
 *  Exclude : [^abcdef<>]
 *  Character Sets : [abcdefghijklmnopqrstuvwxyz]
 *  Ranges : [a-zA-Z]
 *  Repeating Characters : [0-9]{10}
 * 
 *  Metacharacters :
 *    \d match any digit character
 *    \w match any word character
 *    \w match any word character
 *    \t match a tab character only
 * 
 *  Special Characters :
 *    '+'   The one or more quantifier
 *    '\'   The escape character
 *    '[]'  The character set
 *    '[^]' The negate symobol in a character set
 *    '?'   The zero or one quantifier (optional)
 *    '.'   Any character whatsoever
 *    '*'   The 0 or more quantifier
 * 
 *  Alternate Characters :
 *    '|'   Or // (p|t)yre
 */

const inputs = document.querySelectorAll('input');

// Validation
const patterns = { 
  username: /^[a-z\d]{5,12}$/i,
  email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/,
  password: /^[\w@-_*]{8,20}$/i,
  telephone: /^\d{10}$/,
  slug: /^[a-z\d-]{8,20}$/,
}

function validate(input, regex) {
  regex.test(input.value) ? 
  input.className = 'valid' : 
  input.className = 'invalid'
}

inputs.forEach(input => {
  input.addEventListener('keyup', e => {
    validate(e.target, patterns[e.target.name]);
  })
})
