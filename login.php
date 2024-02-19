<?php
include("./PHP_practiceCodes/connect.php");
// Assuming you have a database connection established

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $email = $_POST['email'];

    // Validate email format on the server side as well
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo 'invalid_format';
        exit;
    }

    // Check if the email exists in the database (replace with your database logic)
    $query = "SELECT * FROM users WHERE email = '$email'";
    // Execute the query and check for the email existence

    if ($emailExists) {
        echo 'exists';
    } else {
        echo 'not_exists';
    }
}
?>
