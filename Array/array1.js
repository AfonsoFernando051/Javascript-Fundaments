let aprovados = new Array('Bia','Carlos','Ana')

aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])

aprovados[3] = 'Paulo'
aprovados.push('Nando')
aprovados[9] = 'Doido'

delete aprovados[2]


console.log(aprovados.sort()
)
console.log(aprovados.length)

aprovados = ['Nando', 'Afonso', 'Maria']
aprovados.splice(3,1, 'AnaMaria')
console.log(aprovados)
