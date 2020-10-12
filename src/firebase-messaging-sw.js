importScripts("https://www.gstatic.com/firebasejs/7.23.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/7.23.0/firebase-messaging.js");

firebase.initializeApp(
    {
        apiKey: "AIzaSyAFtfVXeL9Oz0t1R4QTh0kUHXtPRQql04s",
        authDomain: "fuckyncode.firebaseapp.com",
        databaseURL: "https://fuckyncode.firebaseio.com",
        projectId: "fuckyncode",
        storageBucket: "fuckyncode.appspot.com",
        messagingSenderId: "31417481552",
        appId: "1:31417481552:web:94ec2797a0fb494aba1455"
      }
)
const messaging= firebase.messaging();