
// document.getElementById('btn-login')
//   .addEventListener('click',function(){})
// search : form submit the reloading page 
//step1 - set the event handler
document.getElementById('btn-login')
  .addEventListener('click',function(event){
      //step2- event prevent default
        event.preventDefault(); 
        console.log('Only Button clicked')

        //step3--> get the phone number
        const phoneNumber = document.getElementById('phone-number').value;

        console.log(phoneNumber)

  })