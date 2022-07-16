


const firebaseConfig = {
    apiKey: "AIzaSyBz0TMDkz5rbi3SqiOYZspoPmQlLlxNmAA",
    authDomain: "resume2-968e7.firebaseapp.com",
    projectId: "resume2-968e7",
    storageBucket: "resume2-968e7.appspot.com",
    messagingSenderId: "104184162813",
    appId: "1:104184162813:web:0f9428dfb182ed21abd194",
    measurementId: "G-533NQJJRNJ"
  };

  var messagesRef = firebase.database();


document.getElementById('contactForm').addEventListener('submit', submitForm);

function submitForm(e){
    e.preventDefault();

    var name = getInputVal('name')
    var resume = getInputVal('resume')
    var email = getInputVal('email')
    var phone = getInputVal('phone')
    var message = getInputVal('message')

    console.log(resume);

   saveMessage(name, resume, email, phone, message);
}

function getInputVal(id){
    return document.getElementById(id).value;
}

function saveMessage(name, resume, email, phone, message){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        name: name,
        resume: resume,
        email: email,
        phone: phone,
        message: message

    })
}