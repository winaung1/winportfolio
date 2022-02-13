const contactForm = document.getElementById('form');
let email = document.getElementById('email');
let name = document.getElementById('name');
let message = document.getElementById('message');
let subject = document.getElementById('subject');

contactForm.addEventListener('submit', (e) =>{
    e.preventDefault();
    
    let formData = {
        name: name.value,
        email: email.value,
        subject: subject.value,
        message: message.value
    }

    let xhr = new XMLHttpRequest();
    xhr.open('POST', '/');
    xhr.setRequestHeader('content-type', 'application/json');
    xhr.onload = function(){
        console.log(xhr.responseText);
        if(xhr.responseText == 'success'){
            alert('Email Sent');
            name.value = '';
            email.value = '';
            subject.value = '';
            message.value = '';

        } 
        else {
            alert('something went wrong')
        }
    }
    xhr.send(JSON.stringify(formData));
})