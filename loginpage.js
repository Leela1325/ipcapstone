document.addEventListener('DOMContentLoaded', function() {
    const loginButton = document.getElementById('log'); // Login button
    const usernameInput = document.getElementsByClassName('i1')[0]; // Username input
    const passwordInput = document.getElementsByClassName('i2')[0]; // Password input
    const checkbox = document.getElementsByClassName('t1')[0]; // Remember me checkbox

    // Function to check if all fields are filled
    function checkFields() {
        const username = usernameInput.value.trim(); // Get username value
        const password = passwordInput.value.trim(); // Get password value
        const isChecked = checkbox.checked; // Get checkbox value

        // Enable the login button only if all fields are filled
        if (username && password && isChecked) {
            loginButton.disabled = false; // Enable the button
        } else {
            loginButton.disabled = true; // Keep it disabled
        }
    }

    // Add event listeners for input changes to trigger the checkFields function
    usernameInput.addEventListener('input', checkFields);
    passwordInput.addEventListener('input', checkFields);
    checkbox.addEventListener('change', checkFields);

    // Form submit handler
    const form = document.getElementById('loginform');
    form.addEventListener('submit', function(e) {
        e.preventDefault(); // Prevent form submission to avoid page refresh
        window.location.href = 'mainpage.html'; // Redirect to main page
    });
});
