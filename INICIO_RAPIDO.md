# 🚀 INICIO RÁPIDO - Configuración del Repositorio

## ✅ Estado Actual del Proyecto

El proyecto está **100% listo** para ser usado. Todos los archivos están en su lugar:

- ✅ `ejercicios.js` - Ejercicios para los estudiantes
- ✅ `ejercicios.test.js` - Tests automatizados
- ✅ `.github/workflows/test.yml` - GitHub Actions configurado
- ✅ `package.json` - Configuración de Node.js
- ✅ `.gitignore` - Archivos a ignorar
- ✅ `README.md` - Documentación principal
- ✅ `GUIA_ESTUDIANTES.md` - Guía para estudiantes
- ✅ `GUIA_INSTRUCTOR.md` - Guía completa con soluciones
- ✅ Tests funcionando correctamente (22 tests)

## 📋 Pasos para Subir a GitHub

### 1. Crear el repositorio en GitHub

```bash
# Ve a https://github.com/new
# Nombre sugerido: fundamentos-programacion-practica
# Tipo: Público
# NO marques "Initialize with README"
```

### 2. Subir el código

```bash
cd /ruta/a/tu/proyecto
git init
git add .
git commit -m "Configuración inicial del repositorio de prácticas"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/fundamentos-programacion-practica.git
git push -u origin main
```

### 3. Configurar como Template Repository (Recomendado)

1. Ve a tu repositorio en GitHub
2. Clic en **Settings**
3. En la sección "General", marca **"Template repository"**
4. Guarda los cambios

Esto permitirá a los estudiantes crear su propia copia fácilmente.

## 👨‍🎓 Instrucciones para los Estudiantes

### Opción A: Usar Template (si configuraste el repo como template)

1. Ir al repositorio: `https://github.com/TU-USUARIO/fundamentos-programacion-practica`
2. Clic en **"Use this template"** → **"Create a new repository"**
3. Nombrar su repo (ej: `mi-practica-fundamentos`)
4. Clonar su nuevo repositorio:
   ```bash
   git clone https://github.com/ESTUDIANTE/mi-practica-fundamentos.git
   cd mi-practica-fundamentos
   npm install
   ```

### Opción B: Fork tradicional

1. Ir al repositorio del profesor
2. Clic en **"Fork"**
3. Clonar su fork:
   ```bash
   git clone https://github.com/ESTUDIANTE/fundamentos-programacion-practica.git
   cd fundamentos-programacion-practica
   npm install
   ```

### Completar los ejercicios

1. Abrir `ejercicios.js`
2. Completar cada función donde dice `// TODO:`
3. Probar localmente: `npm test`
4. Hacer commit y push:
   ```bash
   git add ejercicios.js
   git commit -m "Completar sección 1"
   git push
   ```

### Ver su calificación

1. Ir a su repositorio en GitHub
2. Pestaña **"Actions"**
3. Ver el último workflow
4. La calificación aparece en los logs

## 📊 Sistema de Calificación

| Sección | Puntos | Temas |
|---------|--------|-------|
| 1. Variables y Tipos de Datos | 10 | Variables, operaciones básicas |
| 2. Condicionales | 15 | if/else, comparaciones |
| 3. Funciones y Bucles | 20 | for, while, funciones |
| 4. Arrays | 25 | Manipulación de arrays |
| 5. Arrays Bidimensionales | 30 | Matrices, preparación para álgebra |
| **TOTAL** | **100** | |

### Escala de Calificación

- **90-100%**: A - Excelente
- **80-89%**: B - Muy Bien
- **70-79%**: C - Bien
- **60-69%**: D - Aprobado
- **0-59%**: F - Reprobado

## 🔍 Verificar que Todo Funciona

### Probar localmente (antes de subir)

```bash
cd fundamentos-programacion-practica
npm install
npm test
```

Deberías ver:
```
Tests:       22 failed, 22 total
Puntos obtenidos: 0/100
Calificación: F - Reprobado
```

Esto es **normal** - los ejercicios están vacíos.

### Después de subir a GitHub

1. Ve a tu repositorio
2. Pestaña "Actions"
3. Deberías ver un workflow ejecutándose
4. Clic en él para ver los detalles

## 📚 Recursos Adicionales

- **GUIA_ESTUDIANTES.md**: Guía paso a paso para estudiantes
- **GUIA_INSTRUCTOR.md**: Incluye todas las soluciones
- **ejercicios.js**: Tiene comentarios detallados en cada función

## 🎯 Próximos Pasos para tus Estudiantes

1. **Noviembre**: Completar estos ejercicios básicos
2. **Diciembre**: Implementar calculadora matricial con:
   - Suma y resta de matrices
   - Multiplicación de matrices
   - Determinantes
   - Inversa de matrices
3. **Proyecto Final**: Aplicación práctica usando matrices:
   - Editor de imágenes simple
   - Sistema de encriptación Hill
   - Transformaciones gráficas

## ⚠️ Notas Importantes

- Los estudiantes **SOLO** deben modificar `ejercicios.js`
- **NO** deben modificar los archivos de test
- **NO** deben modificar el workflow de GitHub Actions
- Cada push ejecutará los tests automáticamente
- La calificación se genera automáticamente

## 🆘 Soporte

Si los estudiantes tienen problemas:

1. **Errores de instalación**: Verificar Node.js y Git instalados
2. **Tests no corren**: Asegurar que ejecutan `npm install` primero
3. **GitHub Actions no funciona**: Verificar que el repo es público
4. **Dudas de código**: Consultar la GUIA_INSTRUCTOR.md con soluciones

---

**¡Éxito con tu clase!** 🎓

Si necesitas ayuda, revisa:
- `GUIA_INSTRUCTOR.md` - Guía completa con soluciones
- `GUIA_ESTUDIANTES.md` - Para compartir con estudiantes
