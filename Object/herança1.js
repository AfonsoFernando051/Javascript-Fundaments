//herança é princípio da OO que permite que você possa reutilizar um código.

const ferrari = {
    modelo: 'F40',
    velMax: 324
}

const volvo = {
    modelo: 'V40',
    velMax: 200
}

console.log(ferrari.__proto__)
console.log(ferrari.__proto__ === Object.prototype)
console.log(volvo.__proto__ === Object.prototype)
console.log( Object.prototype.__proto__)

function meuObjeto(){
    console.log(typeof Object, typeof meuObjeto)
    console.log(Object.prototype, meuObjeto.prototype)
}

//__proto__ isto é usado para acessar o atributo dentro de um objeto

const dest = {a:1}
const o1 = {b:2}
const o2 = {c:3, a:4}
const obj = Object.assign(dest, o1, o2)

console.log(obj)

//Object.assign isto concatena os objetos.

Object.freeze(obj)
obj.c = 1234
console.log(obj)