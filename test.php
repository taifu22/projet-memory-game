<?php


$array= ['toto','tata','popo'];
$number = [1,2,3,4,5];

foreach($array as $a){

    for($i=0;$i<5;$i++){
        for($y=0;$y<3;$y++){
            echo $y;
        }

        echo $a;
    }
    echo $number[$i].'<br>';
}

$test = [
    'card1' => 'number1',
    'card2' => 'number2'

]; 
foreach($test as $cards => $number) {
    echo $cards.$number;
}