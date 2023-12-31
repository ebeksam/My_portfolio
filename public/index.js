const contactForm = document.querySelector(".contact-foam");

 
let name = document.getElementById('name');
let email = document.getElementById('email');
let message = document.getElementById('message');


contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Collect form data
    let formData = {
        name: name.value,
        email: email.value,
        message: message.value
    }

    // Send data to server
    let xhr = new XMLHttpRequest();
    xhr.open('POST', '/');
    xhr.setRequestHeader('content-type', 'application/json');
    xhr.onload = function() {
        console.log(xhr.responseText);

        if(xhr.responseText == 'success'){
            alert('Email sent');
            name.value = '';
            email.value = '';
            message.value = '';
        }else{
            alert('something went wrong!')
        }
    }

    xhr.send(JSON.stringify(formData));
})