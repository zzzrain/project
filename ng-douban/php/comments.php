<?php
	header('Access-Control-Allow-Origin:*');
	
	$username =  $_GET['username'];
	$text =  $_GET['text'];
	$now =  $_GET['now'];
	
	//准备好数据连接对象
    $con = new mysqli('localhost','root','root','douban');   
    //插入数据
    $sql = 'insert into comments(username,text,now) values("'.$username.'","'.$text.'","'.$now.'")';
    
	if($con->query($sql)){
		$res = 'select * from comments';
		$data = $con->query($res)->fetch_all(MYSQLI_ASSOC);
	    echo json_encode($data,JSON_UNESCAPED_UNICODE);
   	}  
    
    //关闭数据库
    $con->close();
?>