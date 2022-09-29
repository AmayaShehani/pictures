
<?php
// load data from json file
$filename = 'data/data.json';

$data = file_get_contents($filename);

// get picture id from get request
$pic_id = $_GET['pic_id'];

// decode loaded data as JSON Array
$encoded_data = json_decode($data, true);

foreach($encoded_data as $values) {
    // find picture details
    if($values['photo_id'] == $pic_id){
        // add responce header
        header('Content-type:application/json;charset=utf-8');
        // encode picture data then sent as responce
        echo json_encode($values);
    }
}
 

?>