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

    $check_query = $conn->query('select * from user where uname="'.$name.'" and pwd="'.$pass.'"');
    // print_r($check_query);
    $res = mysqli_num_rows($check_query);
    // echo $res;
    if(empty($name)){
        echo "用户名不许为空";
    }else if(empty($pass)){
        echo "密码不许为空";
    }else if($res != 0){
        echo "登录成功";
    }else{
        echo "登录失败";
    }
    



?>