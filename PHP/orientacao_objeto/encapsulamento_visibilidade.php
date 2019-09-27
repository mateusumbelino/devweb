<?php

class Veiculo {
	/*
	public
	private
	protected
	*/

	private $placa;
	private $cor;
	protected $tipo='Caminhonete';

	public function setPlaca($parametro_placa) {
		//Validação da placa
		$this->placa = $parametro_placa;
	}

	public function getPlaca() {
		return $this->placa;
	}
}

class Carro extends Veiculo {
	public function exibirTipo() {
		echo $this->tipo;
	}
}

$veiculo = new Carro();
$veiculo->setPlaca('JAM845');

echo $veiculo->exibirTipo();

?>