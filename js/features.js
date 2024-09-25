 function donate_input_amount(id){
     let inputvalue =document.getElementById(id).value;
     let input = parseFloat(inputvalue);
     return input;
}

parseFloat(document.getElementById("accountBalance").innerText)

function donteFromAccount(id){
    let mainBalance = document.getElementById(id).innerText;
    let currentBalance = parseFloat(mainBalance);
    return currentBalance;
}