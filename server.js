const express=require('express');
const bodyParser=require('body-parser');
const admin = require("firebase-admin");

var serviceAccount = require("./firebaseApp.json");
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://menutium-319d0.firebaseio.com",
    databaseAuthVariableOverride: {
      uid: "my-service-worker"
    }
  });
const app=express();
const port=8000;

require('./app/routes')(app,admin,{});
app.listen(port,()=>{
    console.log('We are live on '+port)
 
})


