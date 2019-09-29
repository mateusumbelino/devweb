var timerId = null; //variável que armazena a chamada da função timeout

function iniciaJogo() {
	var url = window.location.search;
	var nivel_jogo = parseInt(url.replace("?", ""));
	var tempo_segundos = 0;

	switch(nivel_jogo) {
		case 1:
			tempo_segundos = 120; //1 fácil   -> 120 segundos
			break;
		case 2:
			tempo_segundos = 60; //2 médio   -> 60  segundos
			break;
		case 3:
			tempo_segundos = 30; //3 difícil -> 30  segundos
			break;
	}
	//inserindo segundos no spam
	document.getElementById('cronometro').innerHTML = tempo_segundos;

	//quantidade dos balões
	var qtde_baloes = 80;
	//imprimir baloes inteiros
	document.getElementById('baloes_inteiros').innerHTML = qtde_baloes;
	//cria os baloes na tela
	criaBaloes(qtde_baloes);

	//quantidade dos balões estourados
	var qtde_baloes_estourados = 0;
	//imprimir baloes inteiros
	document.getElementById('baloes_estourados').innerHTML = qtde_baloes_estourados;

	contagem_tempo(tempo_segundos);

}

function contagem_tempo(segundos) {
	document.getElementById('cronometro').innerHTML = segundos;
	segundos--;
	if(segundos == -1) {
		parar_jogo();
		game_over();
		return false;
	}
	timerId = setTimeout("contagem_tempo("+segundos+")", 1000)
}

function game_over() {
	alert("Fim de jogo. Você não conseguiu estourar todos os balões à tempo.");
}

function criaBaloes(qtde_baloes) {
	for(var i = 1; i<=qtde_baloes; i++) {
		var balao = document.createElement("img");
		balao.src = 'imagens/balao_azul_pequeno.png';
		balao.style.margin = '10px';
		balao.id = 'b'+i;
		balao.onclick = function() {estourar(this)};

		document.getElementById('cenario').appendChild(balao);
	}

}

function estourar(balao) {
	var id_balao = balao.id;
	document.getElementById(id_balao).setAttribute("onclick", "");
	document.getElementById(id_balao).src = 'imagens/balao_azul_pequeno_estourado.png';
	pontuacao(-1);
}

function pontuacao(acao) {
	var baloes_inteiros = parseInt(document.getElementById('baloes_inteiros').innerHTML);
	var baloes_estourados = parseInt(document.getElementById('baloes_estourados').innerHTML);

	baloes_inteiros = baloes_inteiros + acao;
	baloes_estourados = baloes_estourados - acao;

	document.getElementById('baloes_inteiros').innerHTML = baloes_inteiros;
	document.getElementById('baloes_estourados').innerHTML = baloes_estourados;

	situacao_jogo(baloes_inteiros);
}

function situacao_jogo(baloes_inteiros) {
	if(baloes_inteiros == 0) {
		alert('Parabéns, você conseguiu estourar todos os balões à tempo.');
		parar_jogo();
	}
}

function parar_jogo() {
	remove_eventos_baloes();
	clearTimeout(timerId); //para a execução da função timeOut
}

function remove_eventos_baloes() {
    var i = 1; //contado para recuperar balões por id
    
    //percorre os elementos de acordo com o id e só irá sair do laço quando não houver correspondência com elemento
    while(document.getElementById('b'+i)) {
        //retira o evento onclick do elemnto
        document.getElementById('b'+i).onclick = '';
        i++; //faz a iteração da variávei i
    }
}