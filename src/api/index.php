<?php
    session_start();
    //获取session中保存的username
    $uname = $_SESSION['name'];
    //将获取值以JS的结构传回
    echo $uname;

}
?>