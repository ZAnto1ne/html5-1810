<?php
   
    $name = isset($_GET["name"])?$_GET["name"]:null;
    
    $sc = isset($_GET["sc"])?$_GET["sc"]:0;



    

    

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

        $res1 = $conn->query('select * from buy WHERE name="'.$name.'"AND idx = "'.$sc.'"');
        if($res1->num_rows>0){
            $res1 = $conn -> $query('delete from buy WHERE name="'.$name.'"AND idx = "'.$sc.'"');
            $res1 = $conn -> $query('select * from buy where name ="'.$name.'"AND buy="0"');
            if($res1 ->num_rows >0){
                $content = $res1 -> fetch_all(MYSQLI_ASSOC);
                $content = json_encode($content,JSON_UNESCAPED_UNICODE);
                echo $content;
            }
        }
    

    $newArr = array();
    while($arry = mysqli_fetch_array($info,MYSQLI_ASSOC))
    {
         array_push($newArr,$arry);
    }

    exit(json_encode($newArr));


    
    


?>