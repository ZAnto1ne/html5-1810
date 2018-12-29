<?php
    $id = isset($_GET["id"])?$_GET["id"]:null;
    $uname = isset($_GET["uname"])?$_GET["uname"]:null;
    $imgurl = isset($_GET["imgurl"])?$_GET["imgurl"]:null;
    $name = isset($_GET["name"])?$_GET["name"]:null;
    $price = isset($_GET["price"])?$_GET["price"]:null;
    $allqty = isset($_GET["allqty"])?$_GET["allqty"]:null;
    $allprice = isset($_GET["allprice"])?$_GET["allprice"]:null;
    $buy = isset($_GET["buy"])?$_GET["buy"]:0;
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
    if($sc==0){

        $cx = $conn->query('select * from buy where name ="'.$name.'"AND id="'.$id.'"');
        
        if($cx ->num_rows > 0){
            $res = $conn->query('update buy set qty=qty+'.$allqty.',allprice=allprice+'.$allprice.'wheere name ="'.$name.'"AND id="'.$id.'"AND buy="0"');
            
        }else{
            
            $res = $conn->query('insert into buy (id,uname,imgurl,name,price,qty,allprice,buy) VALUES ("'.$id.'","'.$uname.'","'.$imgurl.'","'.$name.'","'.$price.'","'.$allqty.'","'.$allprice.'","'.$buy.'")');
        }
        
    

        $info = $conn->query('select * from buy where name ="'.$name.'"AND buy="0"');


        $newArr = array();
        while($arry = mysqli_fetch_array($info,MYSQLI_ASSOC))
        {
             array_push($newArr,$arry);
        }

        exit(json_encode($newArr));
    }
    

    if($sc!=null){
        $res1 = $conn->query('select * from buy WHERE name="'.$name.'"AND idx = "'.$sc.'"');
        if($res1 ->num_rows >0){
            $res1 = $conn -> query('delete from buy WHERE name="'.$name.'"AND idx = "'.$sc.'"');
            $res1 = $conn -> query('select * from buy where name ="'.$name.'"AND buy="0"');
            if($res1 ->num_rows >0){
                $newArr = array();
                while($arry = mysqli_fetch_array($res1,MYSQLI_ASSOC))
                {
                     array_push($newArr,$arry);
                }
                exit(json_encode($newArr));
                    }
                }
    }
    

    
    


?>