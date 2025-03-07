function verifyMessage (){
    let messageVerify = prompt('Enter a message to verify : ');

    if ((messageVerify.indexOf('FR') >= 0) && (messageVerify.indexOf('AI') >= 0 )) {
        document.getElementById('result').innerHTML = `The message ${messageVerify} is legitimate!`;
    }
        else if (messageVerify.indexOf('AI') >= 0 || messageVerify.indexOf('aI') >= 0 || messageVerify.indexOf('Ai') >= 0) {
        document.getElementById('result').innerHTML = `The message ${messageVerify} is tampered!`;
    }
        else if (messageVerify.indexOf('FR') >= 0) {
        document.getElementById('result').innerHTML = `The message ${messageVerify} is legitimate!`;
    }
        else {
        document.getElementById('result').innerHTML = `The message ${messageVerify} is yet to be encoded!`;
    }
}