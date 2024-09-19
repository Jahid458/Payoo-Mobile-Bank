//add money to the account

/**
 * s-1:add event handeler
 * prevent page reload after form submit
 * s-2: get money to be added to the account balance , get the pin number
 * c-3: verify the pin number
 */
//step-1: add an event handeler to the add money  button inside the form
document.getElementById('btn-add-money')
    .addEventListener('click', function(event){
      //prevent page 
      event.preventDefault();
      //step-2: get money to be added the account
      const addMoneyInput = document.getElementById('input-add-money').value;
      console.log(addMoneyInput);
      //get the pin number provide 
      const pinNumberInput = document.getElementById('input-pin-number').value;
      
      //step3: verify pin Number
      //wrong way to the validate
      if(pinNumberInput === '1234'){
        console.log("adding money to your account");
        //step-4: Get the current Balance
        const balance = document.getElementById('account-balance').innerText;
        console.log(balance)

        //step-5: add Money input the balance
        const addMoneyNumber = parseFloat(addMoneyInput);
        const balanceNumber = parseFloat(balance)
        const newBalance = addMoneyNumber + balanceNumber;
        console.log(newBalance);

        //step-6: update the balance the UI/DOM
        document.getElementById('account-balance').innerText = newBalance;
        

      }else{
        alert('Failed add money! Please Try again')
      }
    })