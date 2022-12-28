const key = 0x90;

function protect_email(email) {
    bytes = []
    for (char of email) {
        bytes.push(String.fromCharCode(char.charCodeAt(0) ^ key));
    }
    return btoa(bytes.join(''));
}

function reveal_email(cipher) {
    chars = []
    for (byte of atob(cipher)) {
        chars.push(String.fromCharCode(byte.charCodeAt(0) ^ key));
    }
    return chars.join('');
}

for (tag of document.querySelectorAll('a.email')) {
    if (!('cipher' in tag.dataset)) continue;
    const email = reveal_email(tag.dataset.cipher);
    tag.textContent = email;
    tag.setAttribute('href', 'mailto:'+email);
}