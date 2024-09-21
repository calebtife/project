function handleSubmit() {
    const emailField = document.getElementById('emailField');
    const submitButton = document.getElementById('submitButton');
    const thankYouMessage = document.getElementById('thankYouMessage');

    // Change button text to 'Please wait' and disable it
    submitButton.innerHTML = 'Please wait...';
    submitButton.disabled = true;

    // Simulate a delay (for example, waiting for a server response)
    setTimeout(function() {
        // Hide the input and button, and display the Thank You message
        emailField.style.display = 'none';
        submitButton.style.display = 'none';
        thankYouMessage.style.display = 'block';
    }, 2000); // Simulates a 2-second wait
};

function showSidebar() {
const sidebar = document.querySelector('.sidebar')
sidebar.style.display = 'flex'
}
function hideSidebar() {
const sidebar = document.querySelector('.sidebar')
sidebar.style.display = 'none'
};

function handleSubmit() {
    const email = document.getElementById('emailField').value;

    // Regular expression for email validation
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    // Check if the email matches the pattern
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address!");
    } else {
        alert("Email is valid! Form can be submitted.");
        // You can proceed with form submission or other actions here
    }
};
