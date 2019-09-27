<?php

class Pessoa{

	//Atributos
	var $nome;


	//Métodos - Getters e Setters
	function setNome($nome_definido) {
		$this->nome = $nome_definido;
	}

	function getNome() {
		return $this->nome;
	}
}

$pessoa = new Pessoa();
$pessoa->setNome('Mateus');
echo $pessoa->getNome();

?>