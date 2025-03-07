function messageVerify (){
    let verifyMes = prompt('Please enter a message to verify.');

    if ((verifyMes.indexOf('FR') >= 0) && (verifyMes.indexOf('AI') >= 0 )) {
        document.getElementById('result').innerHTML = `The message ${verifyMes} is legitimate!`;
    }
        else if (verifyMes.indexOf('AI') >= 0 || verifyMes.indexOf('aI') >= 0 || verifyMes.indexOf('Ai') >= 0) {
        document.getElementById('result').innerHTML = `The message ${verifyMes} is tampered!`;
    }
        else if (verifyMes.indexOf('FR') >= 0) {
        document.getElementById('result').innerHTML = `The message ${verifyMes} is legitimate!`;
    }
        else {
        document.getElementById('result').innerHTML = `The message ${verifyMes} is yet to be encoded!`;
    }
}