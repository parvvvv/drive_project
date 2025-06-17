const Firebase= require('firebase-admin')
const serviceAccount = require('../drive-4975f-firebase-adminsdk-fbsvc-0245bf337a.json');

const firebase= Firebase.initializeApp({
    credential: Firebase.credential.cert(serviceAccount),
    storageBucket: "drive-4975f.firebasestorage.app"
})


module.exports=Firebase;