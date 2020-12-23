$('.navbar a').on('click',function(e){
    if(this.hash !== ''){
        e.preventDefault();
        const hash = this.hash;
    
    
        $('html').animate({
          scrollTop: $(hash).offset().top
        },
        800
        );
    }
    });
    
    
    $('.scroll a').on('click',function(e){
      if(this.hash !== ''){
          e.preventDefault();
          const hash = this.hash;
      
      
          $('html').animate({
            scrollTop: $(hash).offset().top
          },
          800
          );
      }
      });
  
      


// Initialize Firebase 
var firebaseConfig = {
  apiKey: "AIzaSyCJHS46Cw5oZvURLgWskzV9aF3WR19Smg0",
  authDomain: "contactform-c0a0c.firebaseapp.com",
  databaseURL: "https://contactform-c0a0c.firebaseio.com",
  projectId: "contactform-c0a0c",
  storageBucket: "contactform-c0a0c.appspot.com",
  messagingSenderId: "846497232685",
  appId: "1:846497232685:web:d9fbe7b0137a66b3cf05a4",
  measurementId: "G-0F2RR4BBYD"
};
firebase.initializeApp(firebaseConfig);

// Reference messages collection
var messagesRef = firebase.database().ref('messages');
      
document.getElementById('contactForm').addEventListener('submit',submitForm);

function submitForm(e){
  e.preventDefault();
 var name = getInputVal('name');
 var email = getInputVal('email');
 var message = getInputVal('message');

 saveMessage(name,email,message);
// Show alert
document.querySelector('.alert').style.display = 'block';
  
// Hide alert after 3 seconds
setTimeout(function(){
  document.querySelector('.alert').style.display = 'none';
},3000);

// Clear form
document.getElementById('contactForm').reset();
}


function getInputVal(id){
  return document.getElementById(id).value;
}

function saveMessage(name, email, message){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    email:email,
    message:message
  });
}
