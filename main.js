// Initialize Firebase
  var config = {
    apiKey: "AIzaSyAD5_stumVWvMIA4UgtYsEJ_-zdCQ3iSu8",
    authDomain: "contact-form-296ab.firebaseapp.com",
    databaseURL: "https://contact-form-296ab.firebaseio.com",
    projectId: "contact-form-296ab",
    storageBucket: "contact-form-296ab.appspot.com",
    messagingSenderId: "126201235971"
  };
  firebase.initializeApp(config);

//Reference messages collection
var messagesRef = firebase.database().ref('messages');

//Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

//submit form
function submitForm(e){
    e.preventDefault();

    //Get values
var name = getInputVal('name');
var company = getInputVal('company');
var email = getInputVal('email');
var phone = getInputVal('phone');
var message = getInputVal('message');


//Save message
saveMessage(name, company, email, phone, message);

//show alert
document.querySelector('.alert').style.display = 'block';

//hide alert 

setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';

},3000);

document.getElementById('contactForm').reset();

}
//function to get get form values
function getInputVal(id){
    return document.getElementById(id).value;
}

function saveMessage(name, company, email, phone, message){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        name: name,
        company: company,
        email: email,
        phone: phone,
        message: message
    });
}