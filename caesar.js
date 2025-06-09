export function caesarCipher(str, shiftFactor = 3) {
    const encrypter = getEncrypter(shiftFactor);
    let encryptedStr = "";
    for (let char of str){
        if(encrypter[char.toLowerCase()]) {
            if(char == char.toUpperCase()) {
                encryptedStr = encryptedStr + encrypter[char.toLowerCase()].toUpperCase();
            } else {
                encryptedStr = encryptedStr + encrypter[char.toLowerCase()];
            }
        } else {
            encryptedStr = encryptedStr + char;
        }
    } 
    return encryptedStr
}

function getEncrypter(key) {
    let encrypter = {};
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    for(let letter of alphabet) {
        let index = alphabet.indexOf(letter) + key;
        if(index > 25) index = index - alphabet.length;
        encrypter[letter] = alphabet.split("")[index];
    }
    return encrypter;
}