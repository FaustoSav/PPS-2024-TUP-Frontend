# PPS-2024-TUP - Requisitos y Pasos para levantar el Frontend



Requisitos Previos

- Node.js (v14 o superior)
- npm (v6 o superior) o yarn (opcional)

Instrucciones para Correr el Proyecto

1. Clonar el Repositorio

   ```bash
   git clone [https://github.com/tu_usuario/tu_repositorio.git](https://github.com/FaustoSav/PPS-2024-TUP-Frontend.git)
   cd PPS-2024-TUP-Frontend
   ```

2. Instalar Dependencias

   Si usas npm:

   ```bash
   npm install
   ```

   Si prefieres yarn:

   ```bash
   yarn install
   ```

3. Configurar Variables de Entorno

   Crea un archivo `.env` en la raíz del directorio `frontend` y configura las variables necesarias. Ejemplo:

   ```bash
   REACT_APP_API_URL=http://localhost:5000/api
   ```

4. Correr la Aplicación en Modo Desarrollo

   Si usas npm:

   ```bash
   npm start
   ```

   Si prefieres yarn:

   ```bash
   yarn start
   ```

   La aplicación estará disponible en `http://localhost:3000`.

5. Construir para Producción

   Si usas npm:

   ```bash
   npm run build
   ```

   Si prefieres yarn:

   ```bash
   yarn build
   ```

   Esto creará una versión optimizada de la aplicación en el directorio `build`.

6. Ejecución de Pruebas

   Si usas npm:

   ```bash
   npm test
   ```

   Si prefieres yarn:

   ```bash
   yarn test
   ```

Estructura de Directorios

- `src/`
  - `components/`: Componentes reutilizables.
  - `hooks/`: Custom hooks.
  - `pages/`: Páginas principales de la aplicación.
  - `services/`: Servicios para interactuar con la API.
  - `styles/`: Estilos globales y específicos.
  - `utils/`: Funciones utilitarias.

Dependencias Principales

- `react`
- `react-dom`
- `react-router-dom`
- `axios`
- `react-hook-form`
- `yup`
- `tailwindcss`

Guía de Contribución

1. Hacer un Fork del Repositorio
2. Crear una Rama para tu Funcionalidad (git checkout -b feature/tu-funcionalidad)
3. Commit tus Cambios (git commit -m 'Agregar nueva funcionalidad')
4. Hacer Push a la Rama (git push origin feature/tu-funcionalidad)
5. Crear un Pull Request

Contacto

Para cualquier duda o consulta, contacta al desarrollador principal en savoyafausto@gmail.com.

---

