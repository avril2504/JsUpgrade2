/* eslint-disable camelcase */
// Importar el módulo readFileSync
import { readFileSync } from 'fs'

// Leer el archivo JSON
// TO-DO - Agregar la ruta relativa desde la carpeta del proyecto
const dataJson = readFileSync('./snorlax.json', 'utf8')

// Convertir JSON a Object
const data = JSON.parse(dataJson)

// Usa for...in para recorrer las propiedades del objeto principal
// y muestra su tipo de dato. Usa for...of para iterar sobre los índices de juegos
// (game_indices) y mostrar los nombres de las versiones.

for (const key in data) {
  console.log(key + ' : ' + typeof data[key])
}

for (const { version } of data.game_indices) {
  console.log(version.name)
}

// Obtén un array con los nombres de todas las habilidades (abilities) del Pokémon,
// añadiendo el prefijo "Ability: " a cada nombre. (Posible requisito: Map)

const abilityNames = data.abilities.map(a => `Ability: ${a.ability.name}`)
console.log(abilityNames)

// Filtra los movimientos (moves) que se pueden aprender en el nivel inicial (level_learned_at: 0).
// Devuelve un array con los nombres de estos movimientos. (Posible requisito: Filter, Some, Map)

const initialLevelMoves = data.moves
  .filter(move =>
    move.version_group_details.some(detail => detail.level_learned_at === 0)
  )
  .map(move => move.move.name)

console.log(initialLevelMoves)

// Encuentra las habilidades que tenga is_hidden igual a true y devuelve sus nombres.
// Si no existe, devuelve un mensaje indicando que no hay habilidades ocultas.
// (Posible requisito: Filter, Map)

const hiddenAbility = data.abilities.filter(a => a.is_hidden)
console.log(hiddenAbility.length ? hiddenAbility.map(elem => elem.ability.name) : 'No hidden abilities')

// Calcula el número total de juegos (game_indices) en los que aparece este Pokémon.
// (Posible requisito: Reduce)

const totalGames = data.game_indices.reduce((acc, elem) => acc + 1, 0)
console.log(totalGames)

// Recorre el array de held_items y muestra por consola el nombre de cada ítem
// junto con las versiones en las que está disponible. El output tiene que tener el
// formato Item: <Nombre del Item>, Versiones: <Nombres de las versiones>
// (Posible requisito: forEach, Map)

data.held_items.forEach(item => {
  const versions = item.version_details.map(v => v.version.name).join(', ')
  console.log(`Item: ${item.item.name}, Versions: ${versions}`)
})

// Verifica si todas las habilidades (abilities) no son ocultas (is_hidden).
// Además, verifica si al menos un movimiento tiene el método de aprendizaje "machine".
// (Posible requisito: every, some)

const allVisible = data.abilities.every(a => !a.is_hidden)
const hasMachineLearnMethod = data.moves.some(move =>
  move.version_group_details.some(detail => detail.move_learn_method.name === 'machine')
)

console.log(allVisible)
console.log(hasMachineLearnMethod)

// Convierte el array de habilidades (abilities) en un objeto donde las claves
// sean los nombres de las habilidades y los valores indiquen si son ocultas (is_hidden).
// (Posible requisito: Object.fromEntries)

const abilityObject = Object.fromEntries(
  data.abilities.map(({ ability, is_hidden }) => [ability.name, is_hidden])
)

console.log(abilityObject)

// Crea una función autoejecutable que recorra los movimientos (moves)
// y retorne un array con objetos que contengan el nombre del movimiento
// y su primer método de aprendizaje (move_learn_method).
// (Posible requisito: Funcion autejecutable, map)

const processedMoves = (() =>
  data.moves.map(({ move, version_group_details }) => ({
    name: move.name,
    method: version_group_details[0].move_learn_method.name,
  }))
)()

console.log(processedMoves)
