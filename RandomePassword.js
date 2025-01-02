function generatePassword(length, includeLowercase, includeUppercase, includeNumber, includeSymbol) {
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()_+=";

    let allowedChars = "";
    let password = "";

    allowedChars += includeLowercase ? lowercaseChars : "";
    allowedChars += includeUppercase ? uppercaseChars : "";
    allowedChars += includeNumber ? numberChars : "";
    allowedChars += includeSymbol ? symbolChars : "";

    if (length <= 0) {
        return "Password length must be at least 1";
    }

    if (allowedChars.length == 0) {
        return "At least one character set must be selected";
    }

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }

    return password;
}

document.getElementById("generate-btn").addEventListener("click", () => {
    const length = parseInt(document.getElementById("password-length").value);
    const includeLowercase = document.getElementById("include-lowercase").checked;
    const includeUppercase = document.getElementById("include-uppercase").checked;
    const includeNumber = document.getElementById("include-number").checked;
    const includeSymbol = document.getElementById("include-symbol").checked;

    const password = generatePassword(length, includeLowercase, includeUppercase, includeNumber, includeSymbol);
    document.getElementById("generated-password").value = password;
});
