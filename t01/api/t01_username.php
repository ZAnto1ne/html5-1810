<?php
    $exist = array("qwe","asd","zxc");
    $username = $_GET["username"];
    if(in_array($username,$exist)){
        echo "用户名已存在";
    }else{
        echo "可用";
    }

?>