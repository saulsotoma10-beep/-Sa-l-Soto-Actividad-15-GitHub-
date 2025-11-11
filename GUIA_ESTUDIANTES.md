# GuÃ­a RÃ¡pida para Estudiantes

## InstalaciÃ³n y ConfiguraciÃ³n (Solo la primera vez)

### 1. Instalar las herramientas necesarias

#### Git
- **Windows**: Descarga de [git-scm.com](https://git-scm.com/download/win)
- **Mac**: Viene preinstalado o instalar con `brew install git`
- **Linux**: `sudo apt install git`

#### Node.js
- Descarga de [nodejs.org](https://nodejs.org) (versiÃ³n LTS recomendada)
- Verifica la instalaciÃ³n: `node --version`

#### Editor de CÃ³digo
- Recomendado: [Visual Studio Code](https://code.visualstudio.com)

### 2. Configurar Git (Primera vez)

```bash
git config --global user.name "Tu Nombre"
git config --global user.email "tu-email@ejemplo.com"
```

### 3. Crear cuenta en GitHub

1. Ve a [github.com](https://github.com)
2. Haz clic en "Sign up"
3. Completa el registro

## Comenzar la PrÃ¡ctica

### Paso 1: Obtener el cÃ³digo

**OpciÃ³n A: Fork (recomendado)**
1. Ve al repositorio del profesor
2. Clic en "Fork" (arriba a la derecha)
3. Se crearÃ¡ una copia en tu cuenta

**OpciÃ³n B: Use this template**
1. Ve al repositorio del profesor
2. Clic en "Use this template"
3. Dale un nombre a tu repositorio

### Paso 2: Clonar a tu computadora

```bash
# Reemplaza TU-USUARIO con tu nombre de usuario
git clone https://github.com/TU-USUARIO/fundamentos-programacion.git

# Entrar al directorio
cd fundamentos-programacion

# Instalar dependencias
npm install
```

### Paso 3: Abrir en tu editor

```bash
# Si usas VS Code
code .

# O abre la carpeta manualmente desde tu editor
```

### Paso 4: Completar los ejercicios

1. Abre el archivo `ejercicios.js`
2. Lee las instrucciones de cada funciÃ³n
3. Completa el cÃ³digo donde dice `// TODO:`
4. Â¡No modifiques los archivos de test!

### Paso 5: Probar tu cÃ³digo

```bash
# Correr los tests
npm test

# Ver quÃ© ejercicios pasaron y cuÃ¡les no
```

### Paso 6: Guardar tus cambios

```bash
# Ver quÃ© archivos cambiaron
git status

# Agregar tus cambios
git add ejercicios.js

# Crear un commit con un mensaje descriptivo
git commit -m "Completar ejercicios de la secciÃ³n 1"

# Subir a GitHub
git push origin main
```

## Verificar tu CalificaciÃ³n

1. Ve a tu repositorio en GitHub
2. Clic en la pestaÃ±a "Actions"
3. VerÃ¡s tu Ãºltimo push
4. Clic en Ã©l para ver los resultados
5. Â¡Tu calificaciÃ³n aparecerÃ¡ en los logs!

## Comandos Git MÃ¡s Usados

```bash
# Ver el estado de tus archivos
git status

# Ver cambios especÃ­ficos
git diff ejercicios.js

# Agregar archivos al commit
git add ejercicios.js

# Hacer un commit
git commit -m "DescripciÃ³n de lo que hiciste"

# Subir a GitHub
git push

# Ver el historial de commits
git log

# Descargar cambios del profesor (si actualiza algo)
git pull
```

## Consejos para Resolver los Ejercicios

### 1. Lee cuidadosamente las instrucciones
Cada funciÃ³n tiene:
- Una descripciÃ³n de quÃ© debe hacer
- Los parÃ¡metros que recibe
- Lo que debe retornar
- A veces, ejemplos

### 2. Prueba tu cÃ³digo paso a paso

```javascript
// Usa console.log para ver quÃ© estÃ¡ pasando
function sumaArray(numeros) {
  console.log("Array recibido:", numeros);
  let suma = 0;
  for (let i = 0; i < numeros.length; i++) {
    suma += numeros[i];
    console.log("Suma actual:", suma);
  }
  return suma;
}
```

### 3. Ejecuta funciones individuales

```bash
# Abre la consola de Node.js
node

# Carga tu archivo
const ejercicios = require('./ejercicios.js');

# Prueba una funciÃ³n
ejercicios.sumaArray([1, 2, 3]);
```

### 4. Lee los mensajes de error

Los tests te dirÃ¡n:
- QuÃ© pasÃ³
- QuÃ© fallÃ³
- QuÃ© se esperaba vs. quÃ© obtuviste

### 5. Empieza por lo fÃ¡cil

Los ejercicios estÃ¡n ordenados de fÃ¡cil a difÃ­cil:
1. Empieza con la SecciÃ³n 1
2. Avanza cuando te sientas cÃ³modo
3. No te preocupes si no completas todo

## Recursos de Ayuda

### DocumentaciÃ³n de JavaScript
- [MDN Web Docs](https://developer.mozilla.org/es/docs/Web/JavaScript) (en espaÃ±ol)
- [JavaScript.info](https://es.javascript.info/) (tutorial completo)

### Para buscar errores
- [Stack Overflow](https://stackoverflow.com) (en inglÃ©s, pero muy Ãºtil)
- Pregunta a tus compaÃ±eros
- Pregunta al profesor

### Videos tutoriales
- [FreeCodeCamp](https://www.youtube.com/freecodecamp)
- [Fazt](https://www.youtube.com/c/FaztTech) (en espaÃ±ol)

## Preguntas Frecuentes

### Â¿Puedo hacer mÃºltiples commits?
**SÃ­!** De hecho, es recomendado. Haz un commit cada vez que completes una secciÃ³n.

### Â¿QuÃ© pasa si borro algo por error?
```bash
# Ver cambios no guardados
git diff

# Descartar cambios en un archivo
git checkout -- ejercicios.js

# Si ya hiciste commit, volver al anterior
git reset --hard HEAD~1
```

### Â¿Puedo copiar cÃ³digo de Internet?
SÃ­, **pero** debes entenderlo. El objetivo es que aprendas, no solo que pases los tests.

### Â¿QuÃ© pasa si no completo todos los ejercicios?
Cada ejercicio vale puntos individuales. Completa los que puedas, Â¡algo de calificaciÃ³n es mejor que nada!

### Los tests fallan localmente pero no sÃ© por quÃ©
1. Lee el mensaje de error completo
2. Usa `console.log` para debug
3. Verifica que tu funciÃ³n retorne el tipo correcto
4. Compara con los ejemplos en los comentarios

### Â¿Puedo usar mÃ©todos modernos de JavaScript?
Â¡Claro! Puedes usar:
- `.map()`, `.filter()`, `.reduce()`
- Arrow functions `() => {}`
- Destructuring
- Spread operator `...`

Pero asegÃºrate de entender tambiÃ©n cÃ³mo hacerlo con bucles tradicionales.

## Checklist Final

Antes de hacer tu entrega final, verifica:

- [ ] Todos los tests que quieres pasar estÃ¡n pasando localmente
- [ ] Solo modificaste `ejercicios.js`
- [ ] Tu cÃ³digo estÃ¡ bien indentado y es legible
- [ ] Hiciste commit de tus cambios
- [ ] Hiciste push a GitHub
- [ ] GitHub Actions corriÃ³ exitosamente
- [ ] Viste tu calificaciÃ³n en la pestaÃ±a Actions

---

**Â¡Mucho Ã©xito! Recuerda: el objetivo es aprender, no solo pasar los tests. TÃ³mate tu tiempo y entiende cada concepto.**
