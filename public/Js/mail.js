const contactForm = document.getElementById('.contact-form');

let name = document.getElementById('name');
let email = document.getElementById('email');
let subject = document.getElementById('subject');
let message = document.getElementById('message');

// if(contactForm){
//     contactForm.addEventListener('submit', swapper, false);
// }

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    let formData = {
        name: name.value,
        email: email.value,
        subject: subject.value,
        message: message.value,
    }
    console.log(formData)
    let xhr = new XMLHttpRequest();
    xhr.open('POST', '/send')
    xhr.setRequestHeader('content-type', 'application/json');
    xhr.onload = function(){
        console.log(xhr.responseText);
        if (xhr.responseText == 'success'){
            alert('Email sent');
            name.value = '';
            email.value = '';
            subject.value = '';
            message.value = '';
        }else{
            alert('Email not sent')
        }
    }
    xhr.send(JSON.stringify(formData))
})