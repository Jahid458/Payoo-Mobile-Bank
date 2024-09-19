
// // document.getElementById('btn-login')
// //   .addEventListener('click',function(){})
// // search : form submit the reloading page 
// //step1 - set the event handler
// document.getElementById('btn-login')
//   .addEventListener('click',function(event){
//       //step2- event prevent default
//         event.preventDefault(); 
//         // console.log('Only Button clicked')

//         //step3--> get the phone number
//         const phoneNumber = document.getElementById('phone-number').value;
//         const pinNumber = document.getElementById('pin-number').value;
//         console.log(phoneNumber,pinNumber);

//         //step-4:validate phone and pin
//         //Temporary , you should like this 
//         if(phoneNumber === '5' && phoneNumber === '1234'){
//             console.log('Logged in');
//             //step-5:allow use to use the website
//         }else{
//           alert('wrong phone number or pin')
//         }

//   })

document.getElementById('btn-login')
    .addEventListener('click', function(event){
      event.preventDefault();

      //get Phone Number and Pin
      const phoneNumber = document.getElementById('phone-number').value;
      const pinNumber = document.getElementById('pin-number').value;
      // console.log(phoneNumber, pinNumber)

      //bad way to validate
      if(phoneNumber === '5'  & pinNumber === '1234'){
            console.log('You are logged in!!')
            window.location.href = '/home.html'
      }
      else{
        alert("Wrong Phone Number and Password!")
      }

})