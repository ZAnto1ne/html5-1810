<?php
    $uname = isset($_GET["uname"])?$_GET["uname"]:null;
    $pwd = isset($_GET["pwd"])?$_GET["pwd"]:null;
//  $gender = isset($_GET["gender"])?$_GET["gender"]:null;
    $register = isset($_GET["register"])?$_GET["register"]:null;

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

    //3.执行查询语句，得到查询结果集(对象)
    $res = $conn->query('select * from user where uname="'.$uname.'"');
    if($res->num_rows > 0){
        echo "该用户名已被注册";
    }else if(empty($uname)){
            echo "用户名不许为空";
        }else{
        if($register){
            $res = $conn->query('insert into user (uname,pwd) values ("'.$uname.'",'.$pwd.')');
            if($res){
                echo "注册成功";
            }else{
                echo "插入失败";
            }
        }else{
            echo "用户名可用";
        }
    }




?>