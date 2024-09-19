document.getElementById('btn-cash-out')
  .addEventListener('click',function(event){
    event.preventDefault()
    console.log('cash out btn ')

    const cashOut = document.getElementById('input-cash-out').value ;
    const cashoutNumber = parseFloat(cashOut);
    const pinNumber = document.getElementById('input-cash-out-pin').value ;

    if(pinNumber === '1234'){
      const balance = document.getElementById('account-balance').innerText;
      const balanceNumber = parseFloat(balance);
      //reduce balance 
      const newBalance = balanceNumber - cashoutNumber;
      //ui update 
      document.getElementById('account-balance').innerText = newBalance;

    }else{
      alert('Failed to cash Out. please try Again')
    }
})