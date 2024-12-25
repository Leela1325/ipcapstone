document.getElementById('form1').addEventListener('submit', function (event) {
    event.preventDefault();
    let isValid = true;

    document.getElementById('sp1').innerText = '';
    document.getElementById('sp2').innerText = '';
    document.getElementById('sp3').innerText = '';
    document.getElementById('sp4').innerText = '';
    document.getElementById('sp5').innerText = '';

    const nameField = document.getElementById('i1');
    if (nameField.value.trim().length < 5) {
        document.getElementById('sp1').innerText = 'Name must be at least 5 characters.';
        isValid = false;
    }

    const emailField = document.getElementById('i2');
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailField.value.trim())) {
        document.getElementById('sp2').innerText = 'Invalid email format.';
        isValid = false;
    }

    const mobileField = document.getElementById('i3');
    const mobilePattern = /^\d{10}$/;
    if (!mobilePattern.test(mobileField.value.trim())) {
        document.getElementById('sp3').innerText = 'Mobile number must be 10 digits.';
        isValid = false;
    }

    const passwordField = document.getElementById('i4');
    if (passwordField.value.trim().length < 8) {
        document.getElementById('sp4').innerText = 'Password must be at least 8 characters.';
        isValid = false;
    }

    const confirmPasswordField = document.getElementById('i5');
    if (confirmPasswordField.value.trim() !== passwordField.value.trim()) {
        document.getElementById('sp5').innerText = 'Passwords do not match.';
        isValid = false;
    }

    if (isValid) {
        window.location.href = 'loginpage.html';
    }
});

document.getElementById('id2').addEventListener('click', function (event) {
    event.preventDefault();
    window.location.href = 'loginpage.html';
});
