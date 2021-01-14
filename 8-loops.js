console.log("Trabalhando com LOOPS");

const listaDeDestinos = new Array (
	`Tocantins`,
	`Rio Grande do Sul`,
	`Paraná`,
	`Santa Catarina`,
	`Acre`
);

const idadeComprador =17;
const estaAcompanhado = false;
let passagemComprada = false;
const destino = `Acre`;

console.log("Destinos Possiveis");
console.log(listaDeDestinos);

const podeComprar = idadeComprador >=18 || estaAcompanhado == true;	

let destinoExiste = false;
listaDeDestinos.forEach(function (listaDeDestinos) {
	if(listaDeDestinos == destino){
		destinoExiste = true;
		return;
	}
})

if(destinoExiste && podeComprar){
	console.log("\n...Boa Viagem...\n");	
}else{
	console.log("\nErro na Viagem......\n\n");
}