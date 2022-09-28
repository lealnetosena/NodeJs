// #1 - Exercício
// Crie uma variável nome e substitua o texto abaixo com o valor da variável, faça a substituição com pelo menos duas formas, com vírgula, com o operador + ou com template string (``)
const nome = 'João'
console.log(nome +" nasceu em 2000");
console.log("Em 2019", nome, "começou a programar");
console.log(`Em 2020 ${nome} ingressou na faculdade`);
console.log("Em 2022 como programador, ".concat(nome).concat(" conquistou seu primeiro emprego"));


// #2 - Exercício
// - Declare uma const meuAnodeNascimento que recebe o ano de seu nascimento Ex: 2001
const meuAnodeNascimento = 2001
// - Declare uma const anoAtual que recebe o ano atual Ex: 2022
const anoAtual = 2022
// - Exiba as constantes meuAnodeNascimento e anoAtual uma ao lado da outra no console.log()
console.log("Nascimento :", meuAnodeNascimento, "Ano atual:",anoAtual)
// - Declare uma variável chamada minhaIdade que recebe anoAtual subtraído a meuAnodeNascimento. Imprima o valor no console. (Não digite o valore da varíavel minhaIdade de forma manual)
const minhaIdade = anoAtual - meuAnodeNascimento
console.log("Minha idade é:",minhaIdade)
// - Declare uma variável chamada numeroCinco, que recebe 5 e:
const numeroCinco = 5
      // - Descomente o console.log abaixo na terceira linha, Os números não devem ser digitados manualmente;
      // 1) Substitua a palavra "valor1" pelo anoAtual somado à 5;
      // 2) Substitua a palavra "valor2" pela minhaIdade somada à 5;
      // 3)console.log(`Em ${valor1}, estarei com ${valor2} anos.`)
const valor1 = anoAtual + 5
const valor2 = minhaIdade + 5

console.log(`Em ${valor1}, estarei com ${valor2} anos.`)


/* 3# - Exercício
/* 
  Aqui no Brasil a temperatura é medida em Celsius. Porém, você foi contratado para uma empresa americana para trabalhar com programação JavaScript e agora deverá utilizar Fahrenheit no seu novo lar. Crie uma calculadora que faça essa conversão e escreva no terminal a seguinte mensagem.

  RETORNO:
  "A temperatura de **VARIAVEL_EM_CELSIUS**°C é igual a Fahrenheit: **VARIAVEL_QUE_FAZ_A_CONTA**°F"
  
  OBS:
  1) Fórmula para o cálculo ||  °F = °C x 9 ÷ 5 + 32
  2) Para ver se seu algoritmo está correto, utilize o site https://www.metric-conversions.org/pt-br/temperatura/celsius-em-fahrenheit.htm
*/
const tempCelsus = 30.9
const tempFahren = tempCelsus * 9 / 5 + 32  
console.log(`A temperatura de ${tempCelsus}°C é igual a Fahrenheit: ${tempFahren.toFixed(2)}°F`)

/* 4# - Exercício
Crie uma calculadora de IMC que imprima a frase abaixo. Onde tem **___** substitua por variáveis.

  RETORNO ESPERADO:
  "
  **NOME** tem **IDADE** anos, pesa **KILOS** kg
  tem **ALTURA** de altura e seu IMC é de **IMC**
  **NOME** nasceu em **ANO_NASCIMENTO**
  "
  OBS:
    1 - Crie variáveis(let/const) para nome, idade, peso, altura, imc e ano de nascimento
    2 - Para o resultado de altura utiliza em metros, exemplo: 1.63 | 1.85 | 1.76 e etc...
    3 - O cálculo do IMC é peso / (alturaEmMetros * alturaEmMetros)
*/
const nomePessoa = "Gabriela"
const idadePessoa = 28
const pesoPessoa = 65
const alturaPessoa = 1.65
const anoNascPessoa = 1994
const imcPessoa = pesoPessoa / (alturaPessoa * alturaPessoa)
const retorno = 
`${nomePessoa} tem ${idadePessoa} anos, pesa ${pesoPessoa} kg
tem ${alturaPessoa} de altura e seu IMC é de ${imcPessoa.toFixed(2)}
${nomePessoa} nasceu em ${anoNascPessoa}
`
console.log(retorno)

/* 5# - Exercício
/* 
  Hoje em dia no Brasil os combustíveis estão bem caros, diante disso, precisamos desenvolver um novo sistema para os carros em que o usuário digita o valor que ele tem em mãos para o abastecimento em um app e o computador de bordo diz a ele quantos litros ele vai colocar de combustível e quantos KM ele poderá percorrer com esse combustível, queremos que o usuário tenha a informação por tipo de combustível, para que ele possa tomar a melhor decisão de qual combustível escolher.

  Escreva no console:
  "COLOCANDO R$**VALOR_** é possível:"
  "GASOLINA: Percorrer **___**KM e colocar **___** litros"
  "  ÁLCOOL: Percorrer **___**KM e colocar **___** litros"

  OBS:
   - Carros andam 10.2KM com gasolina
   - Carros andam 9.8KM com alcool
   - Os valores por litro atuais nos postos estão:  
        - GASOLINA = R$5.966
        - ÁLCOOL   = R$4.632
*/
const valorAbastecimento = 50

const consumoGasolina = 10.2
const precoGasolina = 5.966
const litrosGasolina = (valorAbastecimento / precoGasolina )
const kmGasolina = litrosGasolina * consumoGasolina  

const consumoAlcool = 9.8
const precoAlcool = 4.632
const litrosAlcool = (valorAbastecimento / precoAlcool )
const kmAlcool = litrosAlcool * consumoAlcool  

console.log(`COLOCANDO R$ ${valorAbastecimento} é possível:`)
console.log(`GASOLINA: Percorrer ${kmGasolina.toFixed(2)} KM e colocar ${litrosGasolina.toFixed(2)} litros`)
console.log(`  ÁLCOOL: Percorrer ${kmAlcool.toFixed(2)} KM e colocar ${litrosAlcool.toFixed(2)} litros`)