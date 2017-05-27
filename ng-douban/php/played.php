<?php
	//header('Access-Control-Allow-Origin:*');
	
	$city = isset($_GET['city']) ? $_GET['city'] : '';
	$start = isset($_GET['start']) ? $_GET['start'] : '';
	$count = isset($_GET['count']) ? $_GET['count'] : '';
	$call = isset($_GET['callback']) ? $_GET['callback'] : '';
	
	$url = 'https://api.douban.com/v2/movie/in_theaters?apikey=0b2bdeda43b5688921839c8ecb20399b&city='.$city.'&start='.$start.'&count='.$count.'&json=1&cb=getJson';

	$res = file_get_contents($url);

	// 解决乱码问题
	$res = mb_convert_encoding( $res, 'UTF-8', 'UTF-8,GBK,GB2312,BIG5');

	$res = str_replace(array('getJson(',');'), '', $res);

	echo $call.'('.$res.')';
?>