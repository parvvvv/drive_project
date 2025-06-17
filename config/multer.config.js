const multer = require('multer');
const firebaseStorage = require('multer-firebase-storage');
const firebase = require('./firebase.config');
const serviceAccount = require('../drive-4975f-firebase-adminsdk-fbsvc-0245bf337a.json');

const storage = firebaseStorage({
    credentials: firebase.credential.cert(serviceAccount),
    bucketName: 'drive-4975f.firebasestorage.app',
    unique: true
})

const upload = multer({
    storage: storage
})

module.exports = upload;