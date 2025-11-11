# ðŸ“š GUÃA PARA EL INSTRUCTOR

## ConfiguraciÃ³n del Repositorio

### 1. Crear el Repositorio en GitHub

1. Ve a GitHub y crea un nuevo repositorio pÃºblico llamado `fundamentos-programacion-practica`
2. **NO** inicialices con README (ya lo tenemos)
3. Copia la URL del repositorio

### 2. Subir el cÃ³digo inicial

```bash
cd fundamentos-programacion
git init
git add .
git commit -m "ConfiguraciÃ³n inicial del repositorio de prÃ¡cticas"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/fundamentos-programacion-practica.git
git push -u origin main
```

### 3. Configurar el repositorio como plantilla (Opcional pero recomendado)

1. Ve a Settings del repositorio
2. Marca la opciÃ³n "Template repository"
3. Esto permitirÃ¡ a los estudiantes crear sus propias copias fÃ¡cilmente

### 4. Verificar que GitHub Actions funcione

1. Ve a la pestaÃ±a "Actions"
2. DeberÃ­as ver el workflow ejecutÃ¡ndose
3. Los tests fallarÃ¡n inicialmente (es normal, los ejercicios estÃ¡n vacÃ­os)

## Instrucciones para los Estudiantes

### OpciÃ³n A: Usar como Template (Recomendado)

1. Ir al repositorio del profesor
2. Hacer clic en "Use this template" â†’ "Create a new repository"
3. Nombrar su repositorio (ej: `mi-practica-programacion`)
4. Clonar su nuevo repositorio
5. Completar ejercicios
6. Hacer commit y push

### OpciÃ³n B: Fork tradicional

1. Hacer Fork del repositorio
2. Clonar su fork
3. Completar ejercicios
4. Hacer commit y push

## Sistema de CalificaciÃ³n

### DistribuciÃ³n de Puntos (100 puntos totales)

1. **Variables y Tipos de Datos**: 10 puntos
   - 1.1: 2 puntos
   - 1.2: 3 puntos
   - 1.3: 2 puntos
   - 1.4: 3 puntos

2. **Condicionales**: 15 puntos
   - 2.1: 3 puntos
   - 2.2: 4 puntos
   - 2.3: 4 puntos
   - 2.4: 4 puntos

3. **Funciones y Bucles**: 20 puntos
   - 3.1: 5 puntos
   - 3.2: 4 puntos
   - 3.3: 5 puntos
   - 3.4: 6 puntos

4. **Arrays**: 25 puntos
   - 4.1: 4 puntos
   - 4.2: 5 puntos
   - 4.3: 6 puntos
   - 4.4: 5 puntos
   - 4.5: 5 puntos

5. **Arrays Bidimensionales**: 30 puntos
   - 5.1: 6 puntos
   - 5.2: 6 puntos
   - 5.3: 5 puntos
   - 5.4: 7 puntos
   - 5.5: 6 puntos

### Escala de CalificaciÃ³n

- **90-100%**: A - Excelente
- **80-89%**: B - Muy Bien
- **70-79%**: C - Bien
- **60-69%**: D - Aprobado
- **0-59%**: F - Reprobado

## CÃ³mo Revisar las Entregas

### MÃ©todo 1: GitHub Actions (AutomÃ¡tico)

1. Ve al repositorio del estudiante
2. PestaÃ±a "Actions"
3. Ver el Ãºltimo workflow
4. La calificaciÃ³n aparece en los logs

### MÃ©todo 2: Clonar y revisar localmente

```bash
git clone https://github.com/ESTUDIANTE/su-repo.git
cd su-repo
npm install
npm test
```

### MÃ©todo 3: Revisar cÃ³digo manualmente

- Verifica que solo modificaron `ejercicios.js`
- Revisa la calidad y legibilidad del cÃ³digo
- Considera dar puntos extra por:
  - CÃ³digo bien comentado
  - Soluciones elegantes
  - Uso de conceptos avanzados

## Soluciones de Referencia

### Ejercicio 1.1: Mi InformaciÃ³n
```javascript
function miInformacion() {
  const nombre = "Juan PÃ©rez";
  const edad = 20;
  const carrera = "Desarrollo de Software";
  return { nombre, edad, carrera };
}
```

### Ejercicio 1.2: Operaciones BÃ¡sicas
```javascript
function operacionesBasicas(a, b) {
  const suma = a + b;
  const resta = a - b;
  const multiplicacion = a * b;
  const division = a / b;
  return { suma, resta, multiplicacion, division };
}
```

### Ejercicio 1.3: Ãrea de RectÃ¡ngulo
```javascript
function areaRectangulo(base, altura) {
  return base * altura;
}
```

### Ejercicio 1.4: Celsius a Fahrenheit
```javascript
function celsiusAFahrenheit(celsius) {
  return celsius * 9/5 + 32;
}
```

### Ejercicio 2.1: Par o Impar
```javascript
function parOImpar(numero) {
  if (numero % 2 === 0) {
    return "par";
  } else {
    return "impar";
  }
}
```

### Ejercicio 2.2: Evaluar Nota
```javascript
function evaluarNota(nota) {
  if (nota >= 60) {
    return "Aprobado";
  } else {
    return "Reprobado";
  }
}
```

### Ejercicio 2.3: Mayor de Tres
```javascript
function mayorDeTres(a, b, c) {
  if (a >= b && a >= c) {
    return a;
  } else if (b >= a && b >= c) {
    return b;
  } else {
    return c;
  }
}
// Alternativa mÃ¡s elegante:
// return Math.max(a, b, c);
```

### Ejercicio 2.4: Clasificar Edad
```javascript
function clasificarEdad(edad) {
  if (edad <= 17) {
    return "menor";
  } else if (edad <= 64) {
    return "adulto";
  } else {
    return "mayor";
  }
}
```

### Ejercicio 3.1: Factorial
```javascript
function factorial(n) {
  let resultado = 1;
  for (let i = 2; i <= n; i++) {
    resultado *= i;
  }
  return resultado;
}
```

### Ejercicio 3.2: Suma Hasta N
```javascript
function sumaHastaN(n) {
  let suma = 0;
  for (let i = 1; i <= n; i++) {
    suma += i;
  }
  return suma;
}
// Alternativa matemÃ¡tica: return n * (n + 1) / 2;
```

### Ejercicio 3.3: Tabla de Multiplicar
```javascript
function tablaMultiplicar(numero) {
  const tabla = [];
  for (let i = 1; i <= 10; i++) {
    tabla.push(numero * i);
  }
  return tabla;
}
```

### Ejercicio 3.4: NÃºmeros Pares
```javascript
function numerosPares(n) {
  const pares = [];
  for (let i = 2; i <= n; i += 2) {
    pares.push(i);
  }
  return pares;
}
```

### Ejercicio 4.1: Suma de Array
```javascript
function sumaArray(numeros) {
  let suma = 0;
  for (let i = 0; i < numeros.length; i++) {
    suma += numeros[i];
  }
  return suma;
}
// Alternativa moderna: return numeros.reduce((a, b) => a + b, 0);
```

### Ejercicio 4.2: Promedio de Array
```javascript
function promedioArray(numeros) {
  if (numeros.length === 0) return 0;
  let suma = 0;
  for (let i = 0; i < numeros.length; i++) {
    suma += numeros[i];
  }
  return suma / numeros.length;
}
```

### Ejercicio 4.3: Encontrar MÃ¡ximo
```javascript
function encontrarMaximo(numeros) {
  let maximo = numeros[0];
  for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] > maximo) {
      maximo = numeros[i];
    }
  }
  return maximo;
}
// Alternativa: return Math.max(...numeros);
```

### Ejercicio 4.4: Filtrar Mayores
```javascript
function filtrarMayores(numeros, limite) {
  const mayores = [];
  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] > limite) {
      mayores.push(numeros[i]);
    }
  }
  return mayores;
}
// Alternativa: return numeros.filter(n => n > limite);
```

### Ejercicio 4.5: Invertir Array
```javascript
function invertirArray(arr) {
  const invertido = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    invertido.push(arr[i]);
  }
  return invertido;
}
// Alternativa: return [...arr].reverse();
```

### Ejercicio 5.1: Crear Matriz
```javascript
function crearMatriz(filas, columnas) {
  const matriz = [];
  for (let i = 0; i < filas; i++) {
    const fila = [];
    for (let j = 0; j < columnas; j++) {
      fila.push(0);
    }
    matriz.push(fila);
  }
  return matriz;
}
```

### Ejercicio 5.2: Suma de Matriz
```javascript
function sumaMatriz(matriz) {
  let suma = 0;
  for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
      suma += matriz[i][j];
    }
  }
  return suma;
}
```

### Ejercicio 5.3: Obtener Fila
```javascript
function obtenerFila(matriz, indiceFila) {
  return matriz[indiceFila];
}
```

### Ejercicio 5.4: Obtener Columna
```javascript
function obtenerColumna(matriz, indiceColumna) {
  const columna = [];
  for (let i = 0; i < matriz.length; i++) {
    columna.push(matriz[i][indiceColumna]);
  }
  return columna;
}
```

### Ejercicio 5.5: Transponer Matriz
```javascript
function transponer(matriz) {
  const filas = matriz.length;
  const columnas = matriz[0].length;
  const transpuesta = [];
  
  for (let j = 0; j < columnas; j++) {
    const fila = [];
    for (let i = 0; i < filas; i++) {
      fila.push(matriz[i][j]);
    }
    transpuesta.push(fila);
  }
  
  return transpuesta;
}
```

## Consejos PedagÃ³gicos

### Para Estudiantes con Dificultades

1. **Comenzar con los ejercicios mÃ¡s simples**
   - Los de la SecciÃ³n 1 son los mÃ¡s bÃ¡sicos
   - Ganar confianza antes de avanzar

2. **Usar console.log para debug**
   ```javascript
   function miFuncion(a, b) {
     console.log("Valores recibidos:", a, b);
     const resultado = a + b;
     console.log("Resultado:", resultado);
     return resultado;
   }
   ```

3. **Probar funciones en Node.js**
   ```bash
   node
   > const ejercicios = require('./ejercicios.js');
   > ejercicios.sumaArray([1, 2, 3]);
   ```

### Extensiones Opcionales

Para estudiantes avanzados, puedes agregar:

1. **Ejercicios bonus**
   - MultiplicaciÃ³n de matrices
   - Determinante de matriz 2x2
   - NÃºmeros primos

2. **Optimizaciones**
   - Pedir versiones con reduce, map, filter
   - Complejidad temporal

3. **DocumentaciÃ³n**
   - Pedir que agreguen JSDoc completo
   - Ejemplos de uso

## Problemas Comunes y Soluciones

### "npm install falla"
- Verificar que Node.js estÃ© instalado: `node --version`
- Borrar node_modules y package-lock.json, volver a instalar

### "Los tests no corren"
- Verificar que estÃ©n en el directorio correcto
- Revisar que no hayan modificado los archivos de test

### "GitHub Actions no funciona"
- Verificar que el archivo .github/workflows/test.yml estÃ© presente
- Revisar que el repositorio tenga Actions habilitado

### "Mi cÃ³digo funciona local pero falla en GitHub"
- Puede ser diferencias en Node.js
- Revisar que no usen rutas absolutas
- Verificar que no dependan de archivos no subidos

## PrÃ³ximos Pasos (Para despuÃ©s de esta prÃ¡ctica)

1. **Calculadora Matricial**
   - Suma de matrices
   - Resta de matrices
   - MultiplicaciÃ³n de matrices
   - Determinante
   - Inversa

2. **Editor de ImÃ¡genes**
   - ManipulaciÃ³n de pÃ­xeles como matrices
   - Filtros (blur, sharpen)
   - Transformaciones

3. **EncriptaciÃ³n Matricial**
   - Cifrado Hill
   - Transformaciones lineales
   - AplicaciÃ³n prÃ¡ctica de Ã¡lgebra

---

**Â¡Buena suerte con tu clase!** ðŸŽ“
