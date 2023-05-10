// Definimos arreglos vacíos para almacenar los nombres y las notas de los alumnos hombres o mujeres
let nombresMujeres = [];
let notasMujeres = [];
let nombresHombres = [];
let notasHombres = [];

// Le pedimos al usuario que ingrese la cantidad de alumnos que quiere promediar
let cantidadAlumnos = prompt("Ingrese la cantidad de alumnos que desea promediar:");

// Usamos un ciclo (for) para pedir los nombres y las notas de cada alumno
for (let i = 0; i < cantidadAlumnos; i++) {
    // Pedimos el nombre del alumno y lo agregamos al arreglo correspondiente según su género
    let nombreAlumno = prompt(`Ingrese el nombre del alumno ${i+1}:`);
    let generoAlumno = prompt(`Ingrese el género del alumno ${i+1}: (M para masculino, F para femenino)`);

    if (generoAlumno === 'M' || generoAlumno === 'm') {
        nombresHombres.push(nombreAlumno);
        let notaAlumno = prompt(`Ingrese la nota del alumno ${i+1}:`);
        notasHombres.push(parseFloat(notaAlumno));
    } else if (generoAlumno === 'F' || generoAlumno === 'f') {
        nombresMujeres.push(nombreAlumno);
        let notaAlumno = prompt(`Ingrese la nota del alumno ${i+1}:`);
        notasMujeres.push(parseFloat(notaAlumno));
    } else {
        console.log(`Género no válido. Ingrese M o F para el alumno ${i+1}.`);
        i--;
    }
}

// Definimos una función para calcular el promedio de las notas
function calcularPromedio(notas) {
    // Uso "reduce" para sumar todas las notas y luego divido por la cantidad de notas
    let sumaNotas = notas.reduce((a, b) => a + b, 0);
    let promedio = sumaNotas / notas.length;
    return promedio;
}

// Calculamos el promedio de notas de los hombres y mujeres por separado
let promedioNotasMujeres = calcularPromedio(notasMujeres);
let promedioNotasHombres = calcularPromedio(notasHombres);

// Mostramos consola los promedios de notas de las mujeres y los hombres
console.log(`El promedio de notas de las alumnas es: ${promedioNotasMujeres}`);
console.log(`El promedio de notas de los alumnos es: ${promedioNotasHombres}`);