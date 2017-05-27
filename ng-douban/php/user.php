<?php
	header('Access-Control-Allow-Origin:*');
	
	$username = $_POST['username'];
	$imgUrl = $_POST['imgUrl'];
	
	//准备好数据连接对象
    $con = new mysqli('localhost','root','root','douban'); 
  	
  	//修改数据
    $sql = 'update user set imgUrl=' .$imgUrl. 'where username='.$username;
  	
	if($con->query($sql)){
        echo $imgUrl;
   	}
    //关闭数据库
    $con->close();
?>