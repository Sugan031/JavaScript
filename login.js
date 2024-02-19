$(document).ready(function() {
    // This block of code runs when the document (web page) has fully loaded

    $('#loginForm').submit(function(e) {
        // This block of code is executed when the form with the ID 'loginForm' is submitted

        e.preventDefault(); // prevent the form from submitting in the traditional way

        // Validate email format
        var email = $('#email').val();
        if (!isValidEmail(email)) {
            // If the email is not in a valid format, show an alert and stop further execution
            alert('Please enter a valid email address.');
            return;
        }

        // Perform form submission using jQuery AJAX
        $.post('login.php', { email: email, password: $('#password').val() }, function(response) {
            // This block is executed when the AJAX request is completed

            if (response === 'exists') {
                // If the response from the server is 'exists', it means the email exists in the database
                // Proceed with the form submission (unbind the submit event and trigger the submit)
                $('#loginForm').unbind('submit').submit();
            } else {
                // If the response is not 'exists', show an alert indicating that the email is not found in the database
                alert('Email not found in the database.');
            }
        });
    });

    // Function to validate email format
    function isValidEmail(email) {
        // This function checks if the provided email follows a basic email format using a regular expression
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
});
