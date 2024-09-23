document.getElementById("donate-input-button").addEventListener('click',function(event){
    event.defaultPrevented;
    let donateInputAmount = parseFloat(document.getElementById('donate-input-amount').value);
    let accountAmount = parseFloat(document.getElementById("accountBalance").innerText);

    // modal funcation
    
    if(!isNaN(donateInputAmount) && Number(donateInputAmount)>=1){
        let nokhaliAmount = parseFloat(document.getElementById('noakhaliDonate').innerText);
        if(accountAmount>=donateInputAmount)
        {
            updatedBalance = accountAmount-donateInputAmount;
            document.getElementById("accountBalance").innerText = updatedBalance;

            updatedNoakhaliAmoutn= nokhaliAmount+donateInputAmount;
            document.getElementById('noakhaliDonate').innerText =updatedNoakhaliAmoutn;

            document.getElementById('modal-form').classList.remove("hidden");
            document.getElementById('modal-amount').innerText=donateInputAmount;

            // history section addd
            let listHistorySection= document.getElementById('history-list-form');
            let createList = document.createElement('li');
            createList.classList.add('bg-gray-100','text-2xl','p-3','rounded', 'shadow');
            let currenttTime = new Date().toLocaleString();
            createList.innerText =`
            ${donateInputAmount} Taka is donated for flood at Noakhali,Bangladesh;
            Date:${currenttTime}; 
            `;
            listHistorySection.appendChild(createList);


        }
        else{
            alert("Your Account Balance insufficient")
        }  

    }
    else{
        alert("Please insert Correct input Amount")
    }

    document.getElementById('donate-input-amount').value ="";
})

// Modal close event
document.getElementById('modal-close-btn').addEventListener('click',function(event){
    event.preventDefault;
    document.getElementById('modal-form').classList.add("hidden");

})

// Transection history
document.getElementById('history-list-form').addEventListener('click',function(event){
    event.preventDefault;

})