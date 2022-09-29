
<?php
// load data from json file
$filename = 'data/user_data.json';

$data = file_get_contents($filename);

// get picture id from get request
$email = $_GET['email'];
$password = $_GET['password'];

// decode loaded data as JSON Array
$encoded_data = json_decode($data, true);

// login check status
$login_status = false;

foreach($encoded_data as $values) {

    if($values['email'] == $email && $values['password'] == $password){
       
        // add responce header
        header('Content-type:application/json;charset=utf-8');
        echo json_encode(array("status"=> "success", "message"=>"Welcome to Institute of Art Design ! ", "data"=>$values));       
        // change login status
        $login_status = true;
        break;

    }
}

// if user email or password is worng then send this responce
if( !$login_status ){
    header('Content-type:application/json;charset=utf-8');
    echo json_encode(array("status"=> "fail", "message"=>"User Email or Password is Invalid! ", "data"=>null));
}

?>