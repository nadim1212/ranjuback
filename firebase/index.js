
var admin = require("firebase-admin");

var serviceAccount = require("../config/fbservice.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://ranjubd-a697c-default-rtdb.firebaseio.com"
});
