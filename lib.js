import fetch from 'node-fetch';

function GetYourPhonesIden(myToken ="",cb){
    if(myToken == ""){
      cb("Token is required",null);
      return;
    } else {
        fetch(" https://api.pushbullet.com/v2/devices", {
            method: 'get',
            headers:{
             'Access-Token': myToken,
            }
          }).then(res => res.json())
          .catch(error => cb(error,null))
          .then(response => cb(null,response.devices.filter(d => d.active && d.has_sms).map(d => ({mode:d.model, nickname:d.nickname, iden:d.iden}))));
    }
  }
  
  //* params
  //* phoneNumbers: array of phone numbers: ['+11234567890','+112233445566']
  //* message: string : 'Hello World'
  //* cb: callback function: (error,response)=>{}
  function SendSMS(myToken,selectedIden,phoneNumbers,message,cb){
    if(myToken == ""){
      cb("Token is required",null);
      return;
    } else{
        if(selectedIden == ""){
          cb("Iden is required",null);
          return;
        } else{
            if(phoneNumbers.length == 0){
              cb("Phone numbers are required",null);
              return;
            } else{
                if(message == ""){
                  cb("Message is required",null);
                  return;
                } else{
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
            }
        }
    }
  
  }


  module.exports = {
    GetYourPhonesIden,
    SendSMS
    }