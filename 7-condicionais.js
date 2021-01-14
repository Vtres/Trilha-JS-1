console.log(`Trabalhando com Condicionais`);

const listaDeDestinos = new Array (
	`Tocantins`,
	`Rio Grande do Sul`,
	`Paraná`,
	`Santa Catarina`,
	`Acre`
);

const idadeComprador =18;
const estaAcompanhado = false;
let passagemComprada = false;
console.log("Destinos Possiveis");
console.log(listaDeDestinos);

if(idadeComprador >=18 || estaAcompanhado == true){
	console.log("Processando...");
	const comprado =  listaDeDestinos.splice(2,1);
	console.log("Comprado com Sucesso!");
	console.log(comprado);
	passagemComprada = true;
}else{
	console.log("Não podemos concluir sua compra");
	console.log(listaDeDestinos);
}

if(idadeComprador >=18 && passagemComprada == true){
	console.log("...Boa Viagem... \n\n");
}else{
	console.log("Você não pode embarcar");
}