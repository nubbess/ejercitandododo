// 1. funcion que crea un factorial del número dado ✅

function factorial (n) {

    let resultado = n

    for (let i = 2; i < n; i++) {

        resultado = resultado * i

    } 

    return resultado

}

// Crea una función que determine si un número dado es primo.

/*propiedad de los números primos, que dice que si un número "A" es primo, 
entonces cualquier número "B" tal que "A" sea divisor de "B" debe ser menor o 
igual a la raíz cuadrada de "B".*/

function esPrimo (n) {
    if (n <= 1) {

        return ("el número no es primo por convenio matemático")

    }

    for (let i = 2; i <= Math.sqrt(n); i++) {

        if( n % i === 0) {

            return ("el número no es primo")

        }

    }

    return ("el numero es primo") 
}


// Crea una función que convierta un número dado en un número romano.

function arabigoARomano(num) {

    const romanos = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];

    const valores = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

    let resultado = '';

    for (let i = 0; i < valores.length; i++) {

        while (num >= valores[i]) {

            resultado += romanos[i];

            num -= valores[i];

        }

    }

    return resultado;
}


// Crea una función que devuelva el número máximo y mínimo de un array dado.

let array = [0, 12, 13, 189, 11, 1441, 1239, 1, -8];

function maxMin (a){

        return(`el valor máximo en el array es ${Math.max.apply(null, a)}, y el valor mínimo en el array es ${Math.min.apply(null, a)}.`)

    }


// Crea una función que calcule el área y el perímetro de un círculo dado su radio.

function areaDeCirculo (radio) {

    let numeroUnidad= radio.split(" ");

    let numero = parseFloat(numeroUnidad[0]);

    let unidad = numeroUnidad[1];

    let validUnits = ['mm', 'cm', 'm', 'km'];

    if (!validUnits.includes(unidad)) {

        return 'Error: la unidad introducida es inválida. Las unidades válidas son mm, cm, m y km.';

    }

    return(`El área del círculo es de ${Math.PI * numero ** 2} ${unidad}², y, el perímetro es de ${2 * Math.PI * numero} ${unidad}`)

}

// Crea una función que convierta una cadena dada en una cadena invertida.

function invertirString (str) {

    let strArr = str.split('');

    return strArr.reverse().join('');

}

// Crea una función que determine si una cadena dada es un palíndromo.


function invertasdirString(str) {

    let strArr = str.split('');

    let strAlReves = strArr.reverse().join('');
  
    if (str.toLowerCase() === strAlReves.toLowerCase()) {

      return 'es palíndromo';

    } else {

      return 'no es palíndromo';
      
    }
}

// Crea una función que calcule el valor total de una lista de compras dada.

let listaDeCompras = [

    "manzanas: 1000",

    "pan: 600",

    "leche: 320",

    "huevos: 480",

    "queso: 1200",

    "yogurt: 240",

    "arroz: 280",

    "carne: 1800",

    "pescado: 2000",

    "verduras: 800",

    "frutas: 1200",

    "alcohol: 2200",

    "refresco: 400",

    "café: 800",

    "té: 600"

  ];
  

function sumalista (lista) {

    let total = 0;
    
    for (let item of lista) {

        let [, valor] = item.split(':');        

        valor = parseInt(valor);

        total += valor
    }

    return total

}

/*
!mi error en el ejercicio: no habia inicializado la variable total, y
!la trabajé hasta el resultado sin inicializar.
& lo que pasó: NaN. Porque, trabaja con Undefined.
*/

// Crea una función que calcule el promedio de una lista de calificaciones dadas.

let notas = [

    "Matemáticas: 8",

    "Ciencias: 9",

    "Historia: 7",

    "Geografía: 8",

    "Inglés: 10",

    "Español: 9",

    "Programación: 8",

    "Literatura: 7",

    "Arte: 9",

    "Educación Física: 8",

    "Química: 8",

    "Física: 9",

    "Biología: 7",

    "Música: 10",

    "Filosofía: 8"

    ];

function promedio (ns) {

    let promedio = 0;

    for (let valor of ns){

        let [, nota] = valor.split(":");

        nota = parseInt(nota)

        promedio += nota / ns.length

    }

    return promedio

}

// ! mi error fue en vez de iterar el "valor" quise iterar ns, por desatento.

// Crea una función que devuelva una cadena con todas las vocales removidas de una cadena dada.

function sacaLengua (cadena) {

    return cadena.replace(/[aeiouáéíóúäëïöüâêîôû]+/gi)
    
}

// aaaaaaaaaaaaaaaaaaaaaaaa

// Crear una función que calcule la suma de dos números y devuelva el resultado.
// Crear una función que calcule el promedio de un array de números.
// Crear una función que determine si un número es primo o no.
// Crear una función que convierta un número a su equivalente en binario.
// Crear una función que devuelva la suma de los elementos de un objeto.
// Crear una función que elimine elementos duplicados en un array.
// Crear una página web que muestre una lista de tareas y permita agregar, marcar como completadas y eliminar tareas.
// Crear una función que determine si una palabra o frase es un palíndromo.
// Crear una aplicación que consuma una API externa y muestre los resultados en una página web.