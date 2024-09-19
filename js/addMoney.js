/***
 * 1.add event Listener to add money button (form submit)
 * make sure  to preventdefault so that page doesn't reload
 * 2.get the money use wants to add
 * also get the pin number provided
 * 3.verify the pin number , for wrong pin number ===> failed to 
 * add for right pin number, allow to add thenumber to the * *
 * account balance
 * 
 * 4.get the current balance 
 * 5.add the money to the added with the current balance 
 * 6. display update the balance in the dom /Ui
 * 
 */

document.getElementById('btn-add-money')
  .addEventListener('click', function(event){
    event.preventDefault()
    console.log('added the eventr handeler')

    //get money pin number
    const addMoney = document.getElementById('input-add-money').value;
    const addMoneyNumber = parseFloat(addMoney);
    const pinNumber = document.getElementById('input-pin-number').value;

    if(pinNumber === '1234'){
        const balance = document.getElementById('account-balance').innerText;
        const balanceNumber = parseFloat(balance); 
        //new balance 
        const newBalance = balanceNumber + addMoneyNumber ; 

      // update the dom with new update
      document.getElementById('account-balance').innerText = newBalance;
      

    }else{
      alert('failed to add money, please try again')
    }


  }) 