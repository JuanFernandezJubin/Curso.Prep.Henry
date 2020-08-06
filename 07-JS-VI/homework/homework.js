// Do not change any of the function names

function invocarCallback(cb) {
  // Invoca al callback `cb`
  return cb()
}

function sumarArray(numeros, cb) {
  // Suma todos los números enteros (int/integers) de un array ("numeros")
  // Pasa el resultado a `cb`
  // No es necesario devolver nada
  cb(
    numeros.reduce(function(acumulador,elemento){
      return acumulador + elemento
    }, 0)
  )
}

function forEach(array, cb) {
  // Itera sobre la matriz "array" y pasa los valores al callback uno por uno
  // Pista: Estarás invocando a `cb` varias veces (una por cada valor en la matriz)
  for (let index = 0; index < array.length; index++) {
    cb(array[index])
  }
}


function map(array, cb) {
  // Crea un nuevo array
  // Itera sobre cada valor en "array", pásalo a `cb` y luego ubicar el valor devuelto por `cb` en un nuevo array
  // El nuevo array debe tener la misma longitud que el array del argumento
  
  // var arreglo = []
  // for ( let i = 0; i < array.length; i++){
  //   arreglo.push(cb(array[i]))
  // }
  // return arreglo
  
  var arreglo = array.map(function(valor){
    return cb(valor)
  })
  return arreglo
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  invocarCallback,
  sumarArray,
  forEach,
  map,
};
