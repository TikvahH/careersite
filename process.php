<?php
$subject = 'form submission';
$firstName=$_POST['firstName'];
$lastName=$_POST['lastName'];
$phoneNumber=$_POST['phoneNumber'];
$email=$_POST['email'];
$headers = 'From:'. $email . "\r\n";
$expLevel=$_POST['expLevel'];
$contactPref=$_POST['contactPref'];
$message= "Name:" . $firstName . " " . $lastName . "\r\n" . "Phone Number: " . $phoneNumber . "\r\n" . "Email: " . $email . "\r\n" . "Experience Level: " . $expLevel . "\r\n" . "Contact Preference: " . $contactPref . "\r\n" . "Message: " . $_POST['message'];
  mail("t.harr@live.com", $subject, $message, $headers);
?>