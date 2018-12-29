<?php
    $idx = isset($_GET["idx"])?$_GET["idx"]:null;
    // $idx =   $_POST['idx']

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

    //3.执行插入语句
    $res = $conn->query('update buy SET buy = 1 WHERE idx = "'.$idx.'"');

    $newArr = array();
    while($arry = mysqli_fetch_array($info,MYSQLI_ASSOC))
    {
         array_push($newArr,$arry);
    }

    exit(json_encode($newArr));
    


?>