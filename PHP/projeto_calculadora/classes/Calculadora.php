<?php

class Calculadora {
	
	private $total;
	private $num1;
	private $num2;

	function __contrsuct() {
		$this->total = 0;
		$this->num1  = 0;
		$this->num2  = 0;
	}

	//Getters e Setters
	public function setNumero1($parametro_numero1) {
		$this->numero1 = $parametro_numero1;
	}

	public function setNumero2($parametro_numero2) {
		$this->numero2 = $parametro_numero2;
	}

	public function somar() {
		$this->total =  $this->numero1 + $this->numero2;
	}

	public function subtrair() {
		$this->total =  $this->numero1 - $this->numero2;
	}

	public function multiplicar() {
		$this->total =  $this->numero1 * $this->numero2;
	}

	public function dividir() {
		$this->total =  $this->numero1 / $this->numero2;
	}

	public function getTotal() {
		return $this->total;
	}
}

?>