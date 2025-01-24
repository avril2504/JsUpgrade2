/** const var1 = 'aprendiendo JavaScript'

console.log(var1.length)
console.log(var1.includes('Java'))
console.log(var1.toUpperCase())
console.log(var1.replace('JavaScript', 'Python'))
console.log(var1.slice(0, 10))
console.log(var1.slice(10))
console.log(var1.repeat(3))

const fecha1 = new Date(2024, 0, 10, 14, 30, 0)
const fecha2 = new Date(2024, 1, 10, 14, 30, 0)
const diferencia = fecha1 - fecha2

console.log(diferencia / (1000 * 60 * 60 * 24))
console.log(Math.ceil(Math.random() * 10))

const lista = [90, 'texto', Date.now(), NaN, null]

console.log(lista)
console.log(lista[1])
console.log(lista.length)

const lista2 = [90, 'texto', Date.now(), NaN, null, true - true]

console.log(lista2)
*/

const ciudades = ['Madrid', 'Paris', 'La guaira', 'Barcelona']

console.log(ciudades.length)
console.log(ciudades[ciudades.length - 1])
console.log(ciudades[0])
ciudades.push('Malaga')
ciudades.unshift('Belgica')
console.log(ciudades)
ciudades.pop()
ciudades.shift()
console.log(ciudades)

const paises = ['España', 'Italia', 'Francia', 'Alemania']

console.log(...ciudades, ...paises)
