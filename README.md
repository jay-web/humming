# Humming
Humming is the blogging project in which most the instructing advance node with react has been implemented.

Some library which I tried to implement init are ( continuing to integrate more ):

* React
* Passport
* Passport google oauth
* Redis
* Express
* Mongoose
* More will be added here as per requirement


To run the project on local development environment:

* Run npm install 
* After installing all the required packages, run npm run dev
* Both the client side and server side server will run concurrently, and will open the client on localhost://3000
* You need to add config folder on root of the project, in which create dev.js file and include below keys 
  * module.exports = {
       googleClientID: 'your key will here',
       googleClientSecret: 'your secret will here',
       mongoURI: 'MongoDB uri to connect to database',
       cookieKey: '123123123',
};

**Note: When connecting to mongoDB database to application, choose driver version 2.2.12 or later**

