<?php
	header('Access-Control-Allow-Origin:*');
	
	$src = isset($_GET['src']) ? $_GET['src'] : '';
	
	$url = 'http://api.douban.com/v2/movie/subject'.$src.'?apikey=0b2bdeda43b5688921839c8ecb20399b&&json=1&cb=getJson';
	$res = file_get_contents($url);

	// 解决乱码问题
	$res = mb_convert_encoding( $res, 'UTF-8', 'UTF-8,GBK,GB2312,BIG5');

	$res = str_replace(array('getJson(',');'), '', $res);

	echo $res;
?>