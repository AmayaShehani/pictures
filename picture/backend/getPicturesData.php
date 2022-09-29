
<?php
// load data from json file
$filename = 'data/data.json';

$data = file_get_contents($filename);

 // add responce header
 header('Content-type:application/json;charset=utf-8');
 // encode picture data then sent as responce
 echo json_encode($data);
 

?>