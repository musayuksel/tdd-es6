export function isAnagram(string1,string2) {
    return string1.split('').sort().join('') === string2.split('').sort().join('');
}