<?php

//Classe mãe ou superclasse
class Felino{

	var $mamifero = 'sim';

	function correr() {
		echo 'Correr como felino';
	}
}

//Classe filha ou subclasse
class Cheeta extends Felino {

	//Polimorfismo
	function correr() {
		echo 'Correr como Cheeta 100KM/h';
	}

}

$cheeta = new Cheeta();
echo $cheeta->mamifero . '<br>';
$cheeta->correr();

?>