
if ( isset( $_POST['submit'] ) ) {  
    $firstname = $_POST['name']; 
    $lastname = $_POST['email']; 
    echo '<h3>Form POST Method</h3>'; echo 'Your name is ' . $lastname . ' ' . $firstname; exit; } 