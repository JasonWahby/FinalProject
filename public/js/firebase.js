let firebaseConfig = {
    apiKey: "AIzaSyCRT5Xng-rGppVIg5J9f3_nNBJbCRFPyzM",
    authDomain: "csi-2520-blog.firebaseapp.com",
    projectId: "csi-2520-blog",
    storageBucket: "csi-2520-blog.appspot.com",
    messagingSenderId: "647625211877",
    appId: "1:647625211877:web:71bff16cc90a527e13390c"
};

firebase.initializeApp(firebaseConfig);

let database = firebase.firestore();
let auth = firebase.auth();

const logoutUser = () => {
    auth.signOut();
    location.reload();
}