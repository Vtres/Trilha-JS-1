console.log(`Minhas listas`);

const listaDeDestinos = new Array (
	`Tocantins`,
	`Rio Grande do Sul`,
	`Paraná`,
	`Santa Catarina`
);

console.log(listaDeDestinos);

listaDeDestinos.push(`São Paulo`);

console.log(listaDeDestinos);

listaDeDestinos.splice(2,1); 
// splice exclui, o 2 eh o indice e 1 eh a qntd de elementos que quero excluir
console.log(listaDeDestinos);
console.log(listaDeDestinos[1]);
console.log(listaDeDestinos[1] listaDeDestinos[0]);