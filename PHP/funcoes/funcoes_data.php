<?php
	//date
	echo $data = date("Y/m/d H:i");
	echo "<br>";

	//strtotime
	$data_inicial = '2015-04-01';
	$data_final  = '2015-04-05';

	$time_inicial = strtotime($data_inicial);
	$time_final = strtotime($data_final);

	$diferenca_time = $time_final - $time_inicial;

	$diaSegundos = 24*60*60;
	$diferencaDias = $diferenca_time/$diaSegundos;
	echo $diferencaDias . " dias";
?>