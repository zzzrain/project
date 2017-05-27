<?php	
	header('Access-Control-Allow-Origin:*');
	
	$username = $_POST['username'];
	$password = $_POST['password'];
	 
    //准备好数据连接对象
    $con = new mysqli('localhost','root','root','douban'); 
  
    //获取所有用户信息
    $sql = 'select * from user';
    $res = $con->query($sql);

    //获取的用户信息与注册信息进行比较
    $bool = true;
    //数据库查询结果的长度 $res->num_rows
    if($res->num_rows>0){
        //fetch_assoc() 执行第一次返回 第一条数据 执行第二次的时候返回第二数据
        //$row 当前获取到的每一行数据
        while ($row = $res->fetch_assoc()) {
            //判断用户是否注册
            if($row['username'] == $username){
                $bool = false; 
            }
        }
    }

    //通过判断是否插入新用户
    if($bool){
        //注册用户的sql语句
        $sql = 'insert into user(username,password) values("'.$username.'","'.$password.'")';
        if($con->query($sql)){
            echo $username;
        }
    }
    //关闭数据库
    $con->close();
?>