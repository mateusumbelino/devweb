<?php

Class Pessoa{
	private $nome;

	function __construct($parametro_nome) {
		$this->nome = $parametro_nome;
		echo "Construtor iniciado </br>";
	}

	public function correr() {
		echo $this->nome . " correndo. </br>";
	}

	function __destruct() {
		echo "Objeto removido. </br>";
	}
}

$pessoa = new Pessoa("Mateus");
$pessoa->correr();

?>