
<?php
// load data from json file
$filename = 'data/user_data.json';

$data = file_get_contents($filename);
 
// get name password email from get request
$email = $_GET['email'];
$password = $_GET['password'];
$name = $_GET['name'];

// decode loaded data as JSON Array
$encoded_data = json_decode($data, true);

// login check status
$login_status = false;

// new data recode
$new_data = array("name"=> $name, "email"=> $email , "password"=> $password);

// print_r( $encoded_data );

// combine with old data
array_push($encoded_data , $new_data);

// print_r( $encoded_data );


$fp = fopen('data/user_data.json', 'w');
fwrite($fp, json_encode($encoded_data));
fclose($fp);

header('Content-type:application/json;charset=utf-8');
echo json_encode(array("status"=> "success", "message"=>"User Registration is  Successful !"));

?>