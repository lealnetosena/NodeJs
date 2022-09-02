const saudacao = 'Olá tudo bem, eu me chamo'
const nome = 'José'
const espaço = ' '
const sobrenome = 'Leal'
const idade = '28 anos'
const hobbie = 'toco teclado e aprendi primeiramente violão'
const hobbie2 =  'comer carne assada na chácara do meu pai'
const ocupacao = 'Analista do Sucesso do Cliente'
const stacks = 'SQL, VBA, Excel Avançado, Python, PowerBI, VB.Net'
const cidade = 'Brasília-DF'
const curiosidade = 'sempre onde passo as pessoas dizem que aprendo as coisas rapidamente'
/* , -> adiciona espaço 
 * + -> não adiciona espaço
 * template string `${variavel1} texto texto ${variavel2}`
 * a.concat(b)
 */

console.log(saudacao + espaço + nome + espaço + sobrenome + espaço + 'tenho ' + idade)
console.log('Trabalho na Oi no cargo de' , ocupacao , 'utilizando as seguintes stacks' , stacks ,'e moro em' , cidade)
console.log(`Eu ${hobbie} e gosto também de ${hobbie2}`)
console.log('Uma curiosidade sobre mim é que:'.concat(curiosidade))
