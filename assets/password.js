
var letters = "abcdefghijklmnopqrstuvwxyz";
var uletters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var numbers = "0123456789";
var specChar = " !#$%&'()*+,-./:;<=>?@[]^_`{|}~";
var finalPassword = "";
var pwdQualities = {
    passwordLength: 0,
    pwdLower: false,
    pwdUpper: false,
    pwdSpec: false,
    pwdNum: false,
}

// START!


// NUMBER OF CHARACTERS
function passLength() {
    var pwdLength = parseInt(prompt("How many characters would you like your password to have? (8-128)"));

    if (pwdLength > 7 && pwdLength < 129) {
        alert("Your number (" + pwdLength + ") matches requirements");
        pwdQualities.passwordLength = pwdLength;
        pwdQualities.pwdLower = confirm("Do you want lowercase characters?")
        pwdQualities.pwdSpec = confirm("Do you want special characters?")
        pwdQualities.pwdNum = confirm("Do you want numeric characters?")
        pwdQualities.pwdUpper = confirm("Do you want uppercase characters?")
        console.log("password length = " + pwdQualities.passwordLength);
    }
    else if (isNaN(pwdLength)) {
        alert("It is not a number. Please enter a number from 8 to 128");
        passLength()
    }
    else {
        alert("Your number (" + pwdLength + ") is not a valid number. Please enter a number from 8 to 128");
        passLength()
    }
    var letnum = ""



    if (pwdQualities.pwdSpec == true) {
        letnum += "s"
    }
    if (pwdQualities.pwdLower == true) {
        letnum += "j"
    }
    if (pwdQualities.pwdNum == true) {
        letnum += "k"
    }
    if (pwdQualities.pwdUpper == true) {
        letnum += "u"
    }

    // pw generator
    function generate() {
        for (var i = 0; i < pwdQualities.passwordLength; ++i) {
            switch (letnum.charAt(Math.floor(Math.random() * letnum.length))) {
                case "j":
                    complete += genLetter();
                    lUsed = true;
                    break;

                case "k":
                    complete += genNumber();
                    nUsed = true;
                    break;

                case "s":
                    complete += genSpecial();
                    sUsed = true;
                    break;

                case "u":
                    complete += genUpper();
                    uUsed = true;
                    break;
            }
        }
    }

    // pairs of two
    if (pwdQualities.pwdLower == true && pwdQualities.pwdNum == true && pwdQualities.pwdSpec == false && pwdQualities.pwdUpper == false) {
        var nUsed = false;
        var lUsed = false;
        var complete = "";
        while (nUsed == false || lUsed == false) {
            generate()
        }
        finalPassword = complete
        console.log(finalPassword)
        printText()
    }
    else if (pwdQualities.pwdLower == true && pwdQualities.pwdNum == false && pwdQualities.pwdSpec == true && pwdQualities.pwdUpper == false) {
        var lUsed = false;
        var sUsed = false;
        var complete = "";
        while (lUsed == false || sUsed == false) {
            generate()
        }
        finalPassword = complete
        console.log(finalPassword)
        printText()
    }
    else if (pwdQualities.pwdLower == true && pwdQualities.pwdNum == false && pwdQualities.pwdSpec == false && pwdQualities.pwdUpper == true) {
        var lUsed = false;
        var uUsed = false;
        var complete = "";
        while (lUsed == false || uUsed == false) {
            generate()
        }
        finalPassword = complete
        console.log(finalPassword)
        printText()
    }
    else if (pwdQualities.pwdLower == false && pwdQualities.pwdNum == false && pwdQualities.pwdSpec == true && pwdQualities.pwdUpper == true) {
        var sUsed = false;
        var uUsed = false;
        var complete = "";
        while (sUsed == false || uUsed == false) {
            generate()
        }
        finalPassword = complete
        console.log(finalPassword)
        printText()
    }
    else if (pwdQualities.pwdLower == false && pwdQualities.pwdNum == true && pwdQualities.pwdSpec == false && pwdQualities.pwdUpper == true) {
        var nUsed = false;
        var uUsed = false;
        var complete = "";
        while (nUsed == false || uUsed == false) {
            generate()
        }
        finalPassword = complete
        console.log(finalPassword)
        printText()
    }
    else if (pwdQualities.pwdLower == false && pwdQualities.pwdNum == true && pwdQualities.pwdSpec == true && pwdQualities.pwdUpper == false) {
        var sUsed = false;
        var nUsed = false;
        var complete = "";
        while (sUsed == false || nUsed == false) {
            generate()
        }
        finalPassword = complete
        console.log(finalPassword)
        printText()
    }



    // triplets
    else if (pwdQualities.pwdLower == true && pwdQualities.pwdNum == true && pwdQualities.pwdSpec == true && pwdQualities.pwdUpper == false) {
        var nUsed = false;
        var lUsed = false;
        var sUsed = false;
        var complete = "";
        while (nUsed == false || lUsed == false || sUsed == false) {
            generate()
        }
        finalPassword = complete
        console.log(finalPassword)
        printText()
    }
    else if (pwdQualities.pwdLower == true && pwdQualities.pwdNum == true && pwdQualities.pwdSpec == false && pwdQualities.pwdUpper == true) {
        var nUsed = false;
        var lUsed = false;
        var uUsed = false;
        var complete = "";
        while (nUsed == false || lUsed == false || uUsed == false) {
            generate()
        }
        finalPassword = complete
        console.log(finalPassword)
        printText()
    }
    else if (pwdQualities.pwdLower == true && pwdQualities.pwdNum == false && pwdQualities.pwdSpec == true && pwdQualities.pwdUpper == true) {
        var uUsed = false;
        var lUsed = false;
        var sUsed = false;
        var complete = "";
        while (uUsed == false || lUsed == false || sUsed == false) {
            generate()
        }
        finalPassword = complete
        console.log(finalPassword)
        printText()
    }
    else if (pwdQualities.pwdLower == false && pwdQualities.pwdNum == true && pwdQualities.pwdSpec == true && pwdQualities.pwdUpper == true) {
        var nUsed = false;
        var uUsed = false;
        var sUsed = false;
        var complete = "";
        while (nUsed == false || uUsed == false || sUsed == false) {
            generate()
        }
        finalPassword = complete
        console.log(finalPassword)
        printText()
    }

    // all
    else if (pwdQualities.pwdLower == true && pwdQualities.pwdNum == true && pwdQualities.pwdSpec == true && pwdQualities.pwdUpper == true) {
        var nUsed = false;
        var lUsed = false;
        var sUsed = false;
        var uUsed = false;
        var complete = "";
        while (nUsed == false || lUsed == false || sUsed == false) {
            generate()
        }
        finalPassword = complete
        console.log(finalPassword)
        printText()
    }
    // none
    else if (pwdQualities.pwdLower == false && pwdQualities.pwdNum == false && pwdQualities.pwdSpec == false && pwdQualities.pwdUpper == false) {
        alert("no options were chosen. Please start again")
        console.log("restart")
        passLength()
    }

    // single
    else {
        var complete = "";
        generate()
        finalPassword = complete
        printText()
        console.log(finalPassword)
    }

}



// CHARACTER PICKERS
function genLetter() {
    var n = letters.length,
        letter = "";
    letter = letters.charAt(Math.floor(Math.random() * n));
    console.log(letter)
    return letter;
}

function genNumber() {
    var n = numbers.length,
        number = "";
    number = numbers.charAt(Math.floor(Math.random() * n));
    console.log(number)
    return number;
}

function genSpecial() {
    var n = specChar.length,
        character = "";
    character = specChar.charAt(Math.floor(Math.random() * n));
    console.log(character)
    return character;
}
function genUpper() {
    var n = uletters.length,
        letter = "";
    letter = uletters.charAt(Math.floor(Math.random() * n));
    console.log(letter)
    return letter;
}


console.log(finalPassword)


function printText() {
    var passPrint = document.querySelector("#pw");
    passPrint.textContent = finalPassword;

}

function CopyToClipboard() {
    if (document.selection) {
        var range = document.body.createTextRange();
        range.moveToElementText(document.getElementById("pw"));
        range.select().createTextRange();
        document.execCommand("copy");
        var copyText = document.getElementById("pw").textContent;
        alert("Copied the text: " + copyText);

    } else if (window.getSelection) {
        var range = document.createRange();
        range.selectNode(document.getElementById("pw"));
        window.getSelection().addRange(range);
        document.execCommand("copy");
        var copyText = document.getElementById("pw").textContent;
        alert("Copied the text: " + copyText);
    }
}