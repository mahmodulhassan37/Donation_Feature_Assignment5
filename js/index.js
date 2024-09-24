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

// Feni function here
document.getElementById("feni-input-button").addEventListener('click',function(event){
    event.defaultPrevented;
    let donateInputAmount = parseFloat(document.getElementById('feni-input-amount').value);
    let accountAmount = parseFloat(document.getElementById("accountBalance").innerText);

    // modal funcation
    
    if(!isNaN(donateInputAmount) && Number(donateInputAmount)>=1){
        let nokhaliAmount = parseFloat(document.getElementById('feni-Donate').innerText);
        if(accountAmount>=donateInputAmount)
        {
            updatedBalance = accountAmount-donateInputAmount;
            document.getElementById("accountBalance").innerText = updatedBalance;

            updatedNoakhaliAmoutn= nokhaliAmount+donateInputAmount;
            document.getElementById('feni-Donate').innerText =updatedNoakhaliAmoutn;

            document.getElementById('my_modal_5').showModal()
            document.getElementById('my_modal_5').classList.remove("hidden");
            document.getElementById('modal-amount-show').innerText=donateInputAmount;

            // history section addd
            let listHistorySection= document.getElementById('history-list-form');
            let createListt = document.createElement('li');
            createListt.classList.add('bg-gray-100','text-2xl','p-3','rounded', 'shadow');
            let currentTime = new Date().toLocaleString();
            createListt.innerText =`
            ${donateInputAmount} Taka is donated for flood at Feni,Bangladesh;
            Date:${currentTime}; 
            `;
            listHistorySection.appendChild(createListt);


        }
        else{
            alert("Your Account Balance insufficient")
            
        }  

    }
    else{
        alert("Please insert Correct input Amount")
        
    }

    document.getElementById('feni-input-amount').value ="";
})
// Feni function end here

// Qutoa Element start Here
document.getElementById("quota-input-button").addEventListener('click',function(event){
    event.defaultPrevented;
    let donateInputAmount = parseFloat(document.getElementById('quota-input-amount').value);
    let accountAmount = parseFloat(document.getElementById("accountBalance").innerText);

    // modal funcation
    
    if(!isNaN(donateInputAmount) && Number(donateInputAmount)>=1){
        let nokhaliAmount = parseFloat(document.getElementById('quota-Donate').innerText);
        if(accountAmount>=donateInputAmount)
        {
            updatedBalance = accountAmount-donateInputAmount;
            document.getElementById("accountBalance").innerText = updatedBalance;

            updatedNoakhaliAmoutn= nokhaliAmount+donateInputAmount;
            document.getElementById('quota-Donate').innerText =updatedNoakhaliAmoutn;

            document.getElementById('quota-modal').showModal()
            document.getElementById('quota-modal').classList.remove("hidden");
            document.getElementById('quota-modal-amount-show').innerText=donateInputAmount;

            // history section addd
            let listHistorySection= document.getElementById('history-list-form');
            let createListt = document.createElement('li');
            createListt.classList.add('bg-gray-100','text-2xl','p-3','rounded', 'shadow');
            let currentTime = new Date().toLocaleString();
            createListt.innerText =`
            ${donateInputAmount} Taka is donated for for Injured in the Quota Movement;
            Date:${currentTime}; 
            `;
            listHistorySection.appendChild(createListt);


        }
        else{
            alert("Your Account Balance insufficient")
            
        }  

    }
    else{
        alert("Please insert Correct input Amount")
        
    }

    document.getElementById('quota-input-amount').value ="";
})
// Quota Element End


// Modal close event
document.getElementById('modal-close-btn').addEventListener('click',function(event){
    event.preventDefault;
    document.getElementById('modal-form').classList.add("hidden");

})

// Top donation Button secton
document.getElementById('donation-top-button').addEventListener('click',function(event){
    event.preventDefault;
    document.getElementById('noakhali-card').classList.remove('hidden');
    document.getElementById('feni-card').classList.remove('hidden');
    document.getElementById('quota-card').classList.remove('hidden');
    document.getElementById('history-list-form').classList.add('hidden');
    

})

//Top History Section
document.getElementById('add-history-btn').addEventListener('click',function(event){
    event.preventDefault;
    document.getElementById('history-list-form').classList.remove('hidden');
    document.getElementById('noakhali-card').classList.add('hidden');
    document.getElementById('feni-card').classList.add('hidden');
    document.getElementById('quota-card').classList.add('hidden');

})

