//Impar ou par
//Crie um programa que determine se um número é impar ou par
//Dica do sucesso: todo número par é divisível por 2



const numero = prompt("Digite um número: ");
console.log(numero);

if(numero%2 == 0){
  console.log("PAR");
}else {
  console.log("ÍMPAR");
}