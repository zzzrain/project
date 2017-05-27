<?php
	header('Access-Control-Allow-Origin:*');
	
	$username = $_GET['username'];
	$password = $_GET['password'];
	
	//准备好数据连接对象
    $con = new mysqli('localhost','root','root','douban'); 
  
    //获取所有用户信息
    $sql = 'select * from user';
    $res = $con->query($sql);

    //数据库查询结果的长度 $res->num_rows
    if($res->num_rows>0){
        //fetch_assoc() 执行第一次返回 第一条数据 执行第二次的时候返回第二数据
        //$row 当前获取到的每一行数据
        while ($row = $res->fetch_assoc()) {
            //判断用户是否正确            
            if($row['username'] == $username && $row['password'] == $password){
                echo $username;
            }
        }
    }

    //关闭数据库
    $con->close();
?>