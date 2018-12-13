<?php
    $name = isset($_GET["name"])?$_GET["name"]:null;
    $pass = isset($_GET["pass"])?$_GET["pass"]:null;
    //  $gender = isset($_GET["gender"])?$_GET["gender"]:null;
    $login = isset($_GET["login"])?$_GET["login"]:null;

    // 1.创建连接,测试是否连接成功
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
    
    $info = mysqli_query($conn,'select * from aleftgoods');

    $newArr = array();
    while($arry = mysqli_fetch_array($info,MYSQLI_ASSOC))
    {
         array_push($newArr,$arry);
    }

    exit(json_encode($newArr));

?>