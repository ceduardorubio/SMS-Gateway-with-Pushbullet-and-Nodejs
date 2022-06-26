# Send SMS with Nodejs and PushBullet
## Instructions
- Clone this repo
- make npm install inside this repo folder
- Install Pushbullets on your phone(s)
- Install PushBullet Extension on your browser
- Go to https://www.pushbullet.com/#settings/account
- Click on the "Create Acces Token" button
- Copy the token and paste it in the `token` variable in the code [index.js](index.js)
- Get you phone iden by executing the function GetYourPhonesIden
- Copy the phone iden you want to use to send sms
- Comment the line below after you have added your selected Iden
- paste your phone iden in the selectedIden variable in the code [index.js](index.js)
- Uncomment the second step code
- Add the text you want to send and the phone(s) number(s) you want to send it to
- ( After you have get your phone iden you can reuse the code to send sms to multiple phones and automate the process using node )
 
## Important:
The sms are not free. The use of sms will have the cost according to the phone carrier of the phone you use to send the messages. This code is a gateway so you can send sms with nodejs and your phone throught pushbullet

## Read the code!!!