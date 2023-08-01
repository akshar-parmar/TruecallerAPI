-First install truecallerjs package 
 -npm install -g truecallerjs
-You need to first login to truecaller from command line
 -truecallerjs login

-After successfull login you will get installationId , create a .env file and store it there
-Install dotenv, configure it and from process.env.installationId extract it.
-Inside phone-number.js there is a searchData object, in the number attribute place the phone number of user you want to get detail of.
