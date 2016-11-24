<?php
	$num= $_GET["num"];
	for($i=1;$i<=10;$i++){
		$pro = $num*$i;
		echo "$num x $i = $pro <br/>";	
	}
?>
