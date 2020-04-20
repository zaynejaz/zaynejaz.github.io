<?php $name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];
$formcontent="From: $name \n Message: $message";
$recipient = "hello@zaynejaz.com";
$subject = "CVPortfolio Contact Form";
$mailheader = "From: $email \r\n";
mail($recipient, $subject, $formcontent, $mailheader) or die("Oops! There seems to be an problem! Please recheck your fields and try again. If the problem persists, please contact me using the details provided above. Thank you.");
echo "Your message sent successfully. I will get back to you as soon as I can. Thank you!";
?>