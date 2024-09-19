//add money to the account

/**
 * s-1:add event handeler
 * prevent page reload after form submit
 * s-2: get money to be added to the account balance
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
      console.log(pinNumberInput)

    })