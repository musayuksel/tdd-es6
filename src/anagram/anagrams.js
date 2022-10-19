export function isAnagram(string1,string2) {
    return string1.split('').filter(letter=>letter!==' ').sort().join('') === string2.split('').filter(letter=>letter!==' ').sort().join('');
}