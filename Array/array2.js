const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() //remove último elemento do array

pilotos.push('Verstappen')

pilotos.shift() //remove o primeiro elemento
pilotos.unshift('Hamilton') //Adiciona no primeiro elemento

pilotos.splice(2,0,'Bottas', 'Massa')

const algunsPilotos = pilotos.slice(2) //Cria um novo array a partir de um definido
console.log(algunsPilotos)


console.log(pilotos)

