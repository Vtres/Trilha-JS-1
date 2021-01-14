console.log("Atribuicao de variáveis");
//variavel do tipo const (constante) não pode ser sobre escrita. 
const nome = "Vinicius";
const sobrenome = "Tres";

console.log(nome, sobrenome);
console.log(nome + " " + sobrenome);
console.log(`Meu nome completo é ${nome} ${sobrenome}`);

let contador =0;
contador += 1;
console.log(contador);

//nome = nome + " " +sobrenome; // Erro
const nomeCompleto = nome + " " +sobrenome;
console.log(nomeCompleto);