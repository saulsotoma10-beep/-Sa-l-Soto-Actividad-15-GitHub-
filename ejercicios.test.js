// ============================================
// TESTS AUTOMATIZADOS - NO MODIFICAR
// ============================================

const {
  miInformacion,
  operacionesBasicas,
  areaRectangulo,
  celsiusAFahrenheit,
  parOImpar,
  evaluarNota,
  mayorDeTres,
  clasificarEdad,
  factorial,
  sumaHastaN,
  tablaMultiplicar,
  numerosPares,
  sumaArray,
  promedioArray,
  encontrarMaximo,
  filtrarMayores,
  invertirArray,
  crearMatriz,
  sumaMatriz,
  obtenerFila,
  obtenerColumna,
  transponer
} = require('./ejercicios');

// Sistema de puntuación
let puntosTotales = 0;
const puntosMaximos = 100;

// ============================================
// SECCIÓN 1: VARIABLES Y TIPOS DE DATOS (10 puntos)
// ============================================

describe('Sección 1: Variables y Tipos de Datos (10 puntos)', () => {
  
  test('1.1 Mi Información (2 puntos)', () => {
    const info = miInformacion();
    expect(info).toHaveProperty('nombre');
    expect(info).toHaveProperty('edad');
    expect(info).toHaveProperty('carrera');
    expect(typeof info.nombre).toBe('string');
    expect(typeof info.edad).toBe('number');
    expect(typeof info.carrera).toBe('string');
    expect(info.nombre.length).toBeGreaterThan(0);
    expect(info.edad).toBeGreaterThan(0);
    expect(info.carrera.length).toBeGreaterThan(0);
    puntosTotales += 2;
  });

  test('1.2 Operaciones Básicas (3 puntos)', () => {
    const resultado = operacionesBasicas(10, 5);
    expect(resultado.suma).toBe(15);
    expect(resultado.resta).toBe(5);
    expect(resultado.multiplicacion).toBe(50);
    expect(resultado.division).toBe(2);
    
    const resultado2 = operacionesBasicas(20, 4);
    expect(resultado2.suma).toBe(24);
    expect(resultado2.division).toBe(5);
    puntosTotales += 3;
  });

  test('1.3 Ãrea de Rectángulo (2 puntos)', () => {
    expect(areaRectangulo(5, 10)).toBe(50);
    expect(areaRectangulo(7, 3)).toBe(21);
    expect(areaRectangulo(12, 8)).toBe(96);
    puntosTotales += 2;
  });

  test('1.4 Conversión Celsius a Fahrenheit (3 puntos)', () => {
    expect(celsiusAFahrenheit(0)).toBe(32);
    expect(celsiusAFahrenheit(100)).toBe(212);
    expect(celsiusAFahrenheit(25)).toBeCloseTo(77, 1);
    expect(celsiusAFahrenheit(-40)).toBe(-40);
    puntosTotales += 3;
  });
});

// ============================================
// SECCIÓN 2: CONDICIONALES (15 puntos)
// ============================================

describe('Sección 2: Condicionales (15 puntos)', () => {
  
  test('2.1 Par o Impar (3 puntos)', () => {
    expect(parOImpar(4)).toBe('par');
    expect(parOImpar(7)).toBe('impar');
    expect(parOImpar(0)).toBe('par');
    expect(parOImpar(101)).toBe('impar');
    expect(parOImpar(1000)).toBe('par');
    puntosTotales += 3;
  });

  test('2.2 Evaluar Nota (4 puntos)', () => {
    expect(evaluarNota(60)).toBe('Aprobado');
    expect(evaluarNota(100)).toBe('Aprobado');
    expect(evaluarNota(59)).toBe('Reprobado');
    expect(evaluarNota(0)).toBe('Reprobado');
    expect(evaluarNota(75)).toBe('Aprobado');
    puntosTotales += 4;
  });

  test('2.3 Mayor de Tres (4 puntos)', () => {
    expect(mayorDeTres(5, 3, 8)).toBe(8);
    expect(mayorDeTres(10, 10, 5)).toBe(10);
    expect(mayorDeTres(1, 2, 3)).toBe(3);
    expect(mayorDeTres(100, 50, 75)).toBe(100);
    puntosTotales += 4;
  });

  test('2.4 Clasificar Edad (4 puntos)', () => {
    expect(clasificarEdad(10)).toBe('menor');
    expect(clasificarEdad(17)).toBe('menor');
    expect(clasificarEdad(18)).toBe('adulto');
    expect(clasificarEdad(64)).toBe('adulto');
    expect(clasificarEdad(65)).toBe('mayor');
    expect(clasificarEdad(80)).toBe('mayor');
    puntosTotales += 4;
  });
});

// ============================================
// SECCIÓN 3: FUNCIONES Y BUCLES (20 puntos)
// ============================================

describe('Sección 3: Funciones y Bucles (20 puntos)', () => {
  
  test('3.1 Factorial (5 puntos)', () => {
    expect(factorial(5)).toBe(120);
    expect(factorial(3)).toBe(6);
    expect(factorial(0)).toBe(1);
    expect(factorial(1)).toBe(1);
    expect(factorial(7)).toBe(5040);
    puntosTotales += 5;
  });

  test('3.2 Suma Hasta N (4 puntos)', () => {
    expect(sumaHastaN(5)).toBe(15);
    expect(sumaHastaN(10)).toBe(55);
    expect(sumaHastaN(1)).toBe(1);
    expect(sumaHastaN(100)).toBe(5050);
    puntosTotales += 4;
  });

  test('3.3 Tabla de Multiplicar (5 puntos)', () => {
    expect(tablaMultiplicar(3)).toEqual([3, 6, 9, 12, 15, 18, 21, 24, 27, 30]);
    expect(tablaMultiplicar(5)).toEqual([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);
    expect(tablaMultiplicar(1)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    puntosTotales += 5;
  });

  test('3.4 Números Pares (6 puntos)', () => {
    expect(numerosPares(10)).toEqual([2, 4, 6, 8, 10]);
    expect(numerosPares(5)).toEqual([2, 4]);
    expect(numerosPares(20)).toEqual([2, 4, 6, 8, 10, 12, 14, 16, 18, 20]);
    expect(numerosPares(1)).toEqual([]);
    puntosTotales += 6;
  });
});

// ============================================
// SECCIÓN 4: ARRAYS (25 puntos)
// ============================================

describe('Sección 4: Arrays (25 puntos)', () => {
  
  test('4.1 Suma de Array (4 puntos)', () => {
    expect(sumaArray([1, 2, 3, 4, 5])).toBe(15);
    expect(sumaArray([10, 20, 30])).toBe(60);
    expect(sumaArray([5])).toBe(5);
    expect(sumaArray([])).toBe(0);
    puntosTotales += 4;
  });

  test('4.2 Promedio de Array (5 puntos)', () => {
    expect(promedioArray([1, 2, 3, 4, 5])).toBe(3);
    expect(promedioArray([10, 20, 30])).toBe(20);
    expect(promedioArray([5, 5, 5, 5])).toBe(5);
    expect(promedioArray([100])).toBe(100);
    puntosTotales += 5;
  });

  test('4.3 Encontrar Máximo (6 puntos)', () => {
    expect(encontrarMaximo([1, 5, 3, 9, 2])).toBe(9);
    expect(encontrarMaximo([10, 20, 30, 25])).toBe(30);
    expect(encontrarMaximo([5])).toBe(5);
    expect(encontrarMaximo([100, 200, 150, 250, 50])).toBe(250);
    puntosTotales += 6;
  });

  test('4.4 Filtrar Mayores (5 puntos)', () => {
    expect(filtrarMayores([1, 5, 3, 8, 2], 4)).toEqual([5, 8]);
    expect(filtrarMayores([10, 20, 30, 5, 15], 15)).toEqual([20, 30]);
    expect(filtrarMayores([1, 2, 3], 10)).toEqual([]);
    expect(filtrarMayores([10, 20, 30], 5)).toEqual([10, 20, 30]);
    puntosTotales += 5;
  });

  test('4.5 Invertir Array (5 puntos)', () => {
    expect(invertirArray([1, 2, 3, 4])).toEqual([4, 3, 2, 1]);
    expect(invertirArray([5])).toEqual([5]);
    expect(invertirArray(['a', 'b', 'c'])).toEqual(['c', 'b', 'a']);
    expect(invertirArray([10, 20, 30, 40, 50])).toEqual([50, 40, 30, 20, 10]);
    puntosTotales += 5;
  });
});

// ============================================
// SECCIÓN 5: ARRAYS BIDIMENSIONALES (30 puntos)
// ============================================

describe('Sección 5: Arrays Bidimensionales - Matrices (30 puntos)', () => {
  
  test('5.1 Crear Matriz (6 puntos)', () => {
    const matriz2x3 = crearMatriz(2, 3);
    expect(matriz2x3).toEqual([[0, 0, 0], [0, 0, 0]]);
    
    const matriz3x2 = crearMatriz(3, 2);
    expect(matriz3x2).toEqual([[0, 0], [0, 0], [0, 0]]);
    
    const matriz1x1 = crearMatriz(1, 1);
    expect(matriz1x1).toEqual([[0]]);
    puntosTotales += 6;
  });

  test('5.2 Suma de Matriz (6 puntos)', () => {
    expect(sumaMatriz([[1, 2], [3, 4]])).toBe(10);
    expect(sumaMatriz([[5, 5], [5, 5]])).toBe(20);
    expect(sumaMatriz([[1, 2, 3], [4, 5, 6]])).toBe(21);
    expect(sumaMatriz([[10]])).toBe(10);
    puntosTotales += 6;
  });

  test('5.3 Obtener Fila (5 puntos)', () => {
    const matriz = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
    expect(obtenerFila(matriz, 0)).toEqual([1, 2, 3]);
    expect(obtenerFila(matriz, 1)).toEqual([4, 5, 6]);
    expect(obtenerFila(matriz, 2)).toEqual([7, 8, 9]);
    
    const matriz2 = [[10, 20], [30, 40]];
    expect(obtenerFila(matriz2, 1)).toEqual([30, 40]);
    puntosTotales += 5;
  });

  test('5.4 Obtener Columna (7 puntos)', () => {
    const matriz = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
    expect(obtenerColumna(matriz, 0)).toEqual([1, 4, 7]);
    expect(obtenerColumna(matriz, 1)).toEqual([2, 5, 8]);
    expect(obtenerColumna(matriz, 2)).toEqual([3, 6, 9]);
    
    const matriz2 = [[10, 20], [30, 40], [50, 60]];
    expect(obtenerColumna(matriz2, 0)).toEqual([10, 30, 50]);
    expect(obtenerColumna(matriz2, 1)).toEqual([20, 40, 60]);
    puntosTotales += 7;
  });

  test('5.5 Transponer Matriz (6 puntos)', () => {
    expect(transponer([[1, 2, 3], [4, 5, 6]])).toEqual([[1, 4], [2, 5], [3, 6]]);
    expect(transponer([[1, 2], [3, 4], [5, 6]])).toEqual([[1, 3, 5], [2, 4, 6]]);
    expect(transponer([[5]])).toEqual([[5]]);
    expect(transponer([[1, 2], [3, 4]])).toEqual([[1, 3], [2, 4]]);
    puntosTotales += 6;
  });
});

// ============================================
// REPORTE FINAL
// ============================================

afterAll(() => {
  console.log('\n' + '='.repeat(50));
  console.log('REPORTE DE CALIFICACIÓN');
  console.log('='.repeat(50));
  console.log(`Puntos obtenidos: ${puntosTotales}/${puntosMaximos}`);
  console.log(`Porcentaje: ${((puntosTotales/puntosMaximos) * 100).toFixed(2)}%`);
  
  let calificacion;
  const porcentaje = (puntosTotales/puntosMaximos) * 100;
  
  if (porcentaje >= 90) {
    calificacion = 'A - Excelente';
  } else if (porcentaje >= 80) {
    calificacion = 'B - Muy Bien';
  } else if (porcentaje >= 70) {
    calificacion = 'C - Bien';
  } else if (porcentaje >= 60) {
    calificacion = 'D - Aprobado';
  } else {
    calificacion = 'F - Reprobado';
  }
  
  console.log(`“ Calificación: ${calificacion}`);
  console.log('='.repeat(50) + '\n');
  
  // Para GitHub Actions
  if (process.env.GITHUB_ACTIONS) {
    console.log(`::notice title=Calificación::${puntosTotales}/${puntosMaximos} puntos (${porcentaje.toFixed(2)}%) - ${calificacion}`);
  }
});
