const alunos = [
    {nome: 'João', nota: 7.3, bolsista: false},
    {nome: 'Maria', nota: 9.2, bolsista: true},
    {nome: 'Pedro', nota: 9.8, bolsista: false},
    {nome: 'Ana', nota: 8.7, bolsista: true}
]

const todosBolsistas = (resultado, bolsista) => resultado && bolsista;
console.log(alunos.map(a => a.bolsista).reduce(todosBolsistas))

const bols = alunos.map(a => a.bolsista == true)
const nomeBolsista = alunos.filter(a => a.bolsista == true). map(a => {return a.nome})

console.log(`${nomeBolsista} são bolsistas`)

const bols2 = (resultado, bolsista) => resultado || bolsista;
const bolsistas = alunos.map(a => a.bolsista).reduce( bols2)

console.log(`${bolsistas}`)
