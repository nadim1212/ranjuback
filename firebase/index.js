
var admin = require("firebase-admin");

var serviceAccount = require("../config/fbservice.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://bdbazar-6bed4-default-rtdb.firebaseio.com"
});

module.exports = admin;