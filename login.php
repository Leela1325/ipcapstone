<?php
session_start(); // Start the session for user
// Database connection
$host = 'localhost'; // Hostname (change if needed)
$dbname = 'leela'; // Database name
$username = 'root'; // Your database username
$password = ''; // Your database password

// Create a connection to the database
$conn = new mysqli($host, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // Get form data
    $user = $_POST['username'];
    $pass = $_POST['password'];
    
    // Validate the input
    if (empty($user) || empty($pass)) {
        echo "Username and password are required.";
    } else {
        // Check credentials in the database
        $stmt = $conn->prepare("SELECT * FROM users WHERE username = ?");
        $stmt->bind_param("s", $user);
        $stmt->execute();
        $result = $stmt->get_result();
        
        if ($result->num_rows > 0) {
            $row = $result->fetch_assoc();
            // Verify the password (assuming password is stored hashed)
            if (password_verify($pass, $row['password'])) {
                $_SESSION['username'] = $user; // Store username in session
                header("Location: welcome.php"); // Redirect to a protected page
                exit;
            } else {
                echo "Incorrect password.";
            }
        } else {
            echo "User not found.";
        }
        $stmt->close();
    }
}

$conn->close();
?>
