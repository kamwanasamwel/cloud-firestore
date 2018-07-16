// Initialize Firebase
let config = {
    apiKey: "AIzaSyCby0lBsEtADjRL0odxx5uaqCZKVA0KGHk",
    authDomain: "gdgmoipwa.firebaseapp.com",
    databaseURL: "https://gdgmoipwa.firebaseio.com",
    projectId: "gdgmoipwa",
    storageBucket: "gdgmoipwa.appspot.com",
    messagingSenderId: "202011378148"
};

firebase.initializeApp(config);
let firestore = firebase.firestore();
console.log("Cloud Firestores Loaded")

var db = firebase.firestore();

const timestamps = firebase.firestore();
const settings = {
    timestampsInSnapshots: true
};
firestore.settings(settings);

// Enable offline capabilities
firebase.firestore().enablePersistence()
    .then(function() {
        // Initialize Cloud Firestore through firebase
        var db = firebase.firestore();
    })
    .catch(function(err) {
        if (err.code == 'failed-precondition') {
            // Multiple tabs open, persistence can only be enabledin one tab at a a time.

        } else if (err.code == 'unimplemented') {
            // The current browser does not support all of the
            // features required to enable persistence
            // ...
        }
    });

var docRef = db.collection('meetups').doc('categ');
// Update the timestamp field with the value from the server
var updateTimestamp = docRef.update({
    timestamp: firebase.firestore.FieldValue.serverTimestamp()
});
console.log(updateTimestamp)

// Read firestore data from database in the meetups collection
db.collection("meetups").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} =>`, doc.data());
        const meetups = doc.data();
        next_title.innerText = meetups.next_title;
        next_desc.innerText = meetups.next_desc;
        recent_title.innerText = meetups.recent_title;
        recent_desc.innerText = meetups.recent_desc;
    });
});