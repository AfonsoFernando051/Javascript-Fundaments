//preventExtensions não permite que um objeto se extenda, crie novos atributos.

const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag: 'promoção'
})
console.log('Extensível', Object.isExtensible(produto))

produto.nome = 'Borracha'
produto.descricao = 'Borracha escolar branca'
delete produto.tag
console.log(produto)

const pessoa = { nome: 'Juliana', idade: 35}
Object.seal(pessoa)

//O seal não deixa criar e/ou deletar novos atributos, somente modificar valores que já existem.
