import fetch from 'node-fetch';
let myToken = 'YOUR_TOKEN';
let selectedIden = 'YOUR_DEVICE_IDEN';

function GetYourPhones(cb){
  fetch(" https://api.pushbullet.com/v2/devices", {
    method: 'get',
    headers:{
     'Access-Token': myToken,
    }
  }).then(res => res.json())
  .catch(error => cb(error,null))
  .then(response => cb(null,response.devices.filter(d => d.active && d.has_sms).map(d => ({mode:d.model, nickname:d.nickname, iden:d.iden}))));
}

//* params
//* phoneNumbers: array of phone numbers: ['+11234567890','+112233445566']
//* message: string : 'Hello World'
//* cb: callback function: (error,response)=>{}
function SendSMS(phoneNumbers,message,cb){
  var url = 'https://api.pushbullet.com/v2/texts';
  var data = {
     "addresses":phoneNumbers,
     "message":message,
     "target_device_iden":selectedIden
  };
  
  fetch(url, {
    method: 'POST',
    body: JSON.stringify({data}),
    headers:{
     'Access-Token': myToken,
     'Content-Type': 'application/json'
    }
  }).then(res => res.json())
  .catch(error => cb(error,null))
  .then(response => cb(null,response));

}

// First Step: Get Your Phones Iden
// Comment the line below after you have added your selected Iden
GetYourPhonesIden((err,phones)=>{
  if(err) console.log({err});
  else console.log({phones});
});

// Second Step: Send SMS
// After First Step: Uncomment the line below and add your text and phone numbers
// let text = 'Hello World';
// let phoneNumbers = ['+11234567890','+112233445566'];
// SendSMS(phoneNumbers,text,(err,response)=>{
//   if(err) console.log({err});
//   else console.log({response});
// });