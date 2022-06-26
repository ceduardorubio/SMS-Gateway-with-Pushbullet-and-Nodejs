import { GetYourPhonesIden,SendSMS } from './lib';
let myToken = '';
let selectedIden = '';



// First Step: Get Your Phones Iden
// Comment the line below after you have added your selected Iden
GetYourPhonesIden(myToken,(err,phones)=>{
  if(err) console.log({err});
  else console.log({phones});
});

// Second Step: Send SMS
// After First Step: Uncomment the line below and add your text and phone numbers
// let text = 'Hello World';
// let phoneNumbers = ['+11234567890','+112233445566'];
// SendSMS(myToken,selectedIden,phoneNumbers,text,(err,response)=>{
//   if(err) console.log({err});
//   else console.log({response});
// });