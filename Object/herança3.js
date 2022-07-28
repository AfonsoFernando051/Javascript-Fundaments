const pai = {
    nome: 'Pedro',
    corCabelo: 'preto'
}

//filha é criada com o protótipo pai

const filha1 = Object.create(pai, {
    nome: {value: 'Bia', writable: false, enumerable: true}
})
console.log(filha1.nome)
console.log(`${filha1.nome} tem cabelo ${filha1.corCabelo} `)
console.log(Object.keys(filha1) )


for(let key in filha1){
    filha1.hasOwnProperty(key) ?
    console.log(key) : console.log(`Por herança: ${key}`)
}