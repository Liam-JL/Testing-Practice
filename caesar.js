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