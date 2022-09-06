// Defina um número para variável progama:
programa = 3
// 1)Calculador de Área
// 2)Identificador de Número Positivo ou Negativo
// 3)Identificador de Número Par ou impar
'-------------------------------------------'
// Defina a configuração conforme programa selecionado
/***Config Programa 1***/
    const base = 5 
    const altura = 10 

/***Config Programa 2***/
    const numero_pn = -1

/***Config Programa 3***/
    const numero_pi = 2

switch(programa){
    case 1 :        
        area = base * altura
        console.log('## 1)Calculador de Área') 
        console.log('A area do retangulo informado é :' + area) 
        break;
    case 2:
        console.log('## 2)Identificador de Número Positivo ou Negativo')
        if(numero_pn < 0){
        console.log('Número negativo') 
        }else {
        console.log('Número positivo')
        }
        break;
    case 3:
        console.log('## 3)Identificador de Número Par ou impar')
        if(numero_pi % 2 == 0){
            console.log('Número par') 
        }else {
            console.log('Número impar')
        }
        break;
}
