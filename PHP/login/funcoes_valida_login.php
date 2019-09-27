<?php

	function valida_login($login, $senha) {
		//Validar direto em um Banco de Dados
		$login_bd = 'mateus.umbelino';
		$senha_bd = '123';

		if($login == $login_bd && $senha == $senha_bd) {
			return true;
		} else return false;
	}

?>