// script.js
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get form values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    // Log the form values (you can replace this with your desired logic)
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);

    // Clear form inputs
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';

    // Display a success message (you can replace this with your desired logic)
    alert('Message sent successfully!');
});
