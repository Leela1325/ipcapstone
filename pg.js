document.addEventListener('DOMContentLoaded', () => {
    const paymentMethod = document.getElementById('payment-method');
    const payNowButton = document.getElementById('pay-now');
    const modal = document.getElementById('payment-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalMessage = document.getElementById('modal-message');
    const form = document.getElementById('payment-form');

    // Ensure the modal is hidden initially
    modal.classList.add('hidden');

    // Function to check if the form is valid
    function checkFormValidity() {
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const address = document.getElementById('address').value.trim();
        const paymentMethodValue = paymentMethod.value;

        // Check if basic fields are filled
        if (!name || !email || !address || !paymentMethodValue) {
            return false; // Invalid form if any basic field is empty
        }

        // Check if the payment details are filled based on the selected method
        if (paymentMethodValue) {
            const detailsId = paymentMethodValue + '-details';
            const selectedDetails = document.getElementById(detailsId);
            if (selectedDetails) {
                const inputs = selectedDetails.querySelectorAll('input');
                // Validate if all inputs for the selected payment method are filled
                return Array.from(inputs).every(input => input.value.trim());
            }
        }
        return true; // Form is valid if all fields are filled
    }

    // Toggle payment details based on selected method
    paymentMethod.addEventListener('change', () => {
        // Hide all payment details initially
        document.querySelectorAll('.payment-details').forEach(detail => {
            detail.classList.add('hidden');
        });

        const selectedMethod = paymentMethod.value;

        if (selectedMethod) {
            // Show respective details based on the selected method
            const detailsId = selectedMethod + '-details';
            const detailsElement = document.getElementById(detailsId);
            if (detailsElement) {
                detailsElement.classList.remove('hidden');
            }
        }
    });

    // Add event listeners to all required inputs for real-time validation
    form.addEventListener('input', () => {
        // Check validity and enable/disable the Pay Now button accordingly
        payNowButton.disabled = !checkFormValidity();
    });

    // Handle payment process when "Pay Now" button is clicked
    payNowButton.addEventListener('click', (event) => {
        if (!checkFormValidity()) {
            // If the form is not valid, prevent the payment and show an alert
            event.preventDefault(); // Prevent form submission
            alert("Please fill in all the required details before proceeding with payment.");
            return;
        }

        // Show the processing modal
        modal.classList.remove('hidden');
        modalTitle.textContent = 'Processing Payment...';
        modalMessage.textContent = 'Please wait while we process your payment.';

        // Simulate payment processing delay (3 seconds)
        setTimeout(() => {
            modalTitle.textContent = 'Payment Successful!';
            modalMessage.textContent = 'Your payment has been processed successfully.';

            // Redirect to homepage.html after 3 seconds
            setTimeout(() => {
                window.location.href = 'homepage.html'; // Redirect to homepage
            }, 3000);
        }, 3000);
    });

    // Initial form validity check on page load (disable Pay Now initially)
    payNowButton.disabled = true;
    
});
