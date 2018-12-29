<?php
$qty = isset($_GET["qty"])? $_GET["qty"]: 5;
$currentPage = isset($_GET["currentPage"])? $_GET["currentPage"]: 1;
$c = $_GET['c'];

$servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = 'user';
    $conn = new mysqli($servername, $username, $password, $dbname);
    if ($conn->connect_error) {
        var_dump($conn->connect_error);
    }

    //2.查询前设置编码，防止输出乱码
    $conn->set_charset('utf8');
    
    $info = mysqli_query($conn,'select * from list where goodname="Calvin Klein"');

    // $len=mysql_query("select count(*) from list"); //获得记录总数



    $newArr = array();

    while($arry = mysqli_fetch_array($info))
    {
         array_push($newArr,$arry);
    }
    // $len = count($newArr);
    // $data = array_slice($newArr,($currentPage-1)*$qty,$qty);
    // $res = array(
    //     "data" => $data,
    //     "len" => $len,
    //     "qty" => $qty,
    //     "currentPage" => $currentPage
    // );



    // var_dump($newArr);
    // $newArr = json_decode($newArr,true);
    // $len = count($newArr);
    // $data = array_slice($newArr,($currentPage-1)*$qty,$qty);
    // $res = array(
    //     "data" => $data,
    //     "len" => $len,
    //     "qty" => $qty,
    //     "currentPage" => $currentPage
    // );
    exit(json_encode($newArr,JSON_UNESCAPED_UNICODE));
?>