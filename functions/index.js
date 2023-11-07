const functions = require('firebase-functions');
const admin = require('firebase-admin');
const express = require('express');
const cors = require('cors');
const UserController = require("./UserController/UserController");
// const {ipMiddleware, requestLimitMiddleware} = require("./midleware/IpReqLimt");

admin.initializeApp();

const firestore = admin.firestore();
// module.exports = firestore

const main = express();
const router_User = express();

// CORS 미들웨어를 사용하여 특정 출처에서의 요청만 허용합니다.
const allowedOrigins =
    ['http://localhost:3000',
        'https://opensourcefestival2023-dev.web.app',
        'https://opensourcefestival2023.web.app',
        'https://ossfestival.kr',
        'https://asia-northeast3-opensourcefestival2023-dev.cloudfunctions.net',
        'https://asia-northeast3-opensourcefestival2023.cloudfunctions.net'
    ];
main.use(cors({ origin: allowedOrigins }));
// main.use(ipMiddleware);
// main.use(requestLimitMiddleware);


UserController(router_User, firestore)

main.use(express.json())
main.use('/User', router_User)

exports.api = functions.region("asia-northeast3").https.onRequest(main);