# Proyecto construido con Astro

Este proyecto ha sido desarrollado utilizando la tecnología de **Astro**. A continuación, se detallan los pasos y requisitos necesarios para ejecutar y desplegar el proyecto correctamente.

## Requisitos principales

- **Node.js**  
- **NPM**

## Pasos para ejecutar el proyecto

1. **Iniciar el proyecto en desarrollo**  
   Para ejecutar el proyecto en modo desarrollo, utiliza el siguiente comando:
   ```bash
   npm run dev
   ```

2. **Construir el proyecto para producción**  
   Para construir el proyecto y desplegarlo en un ambiente de producción local, utiliza:
   ```bash
   npx astro build
   ```

3. **Desplegar en un servidor**  
   Para desplegar el proyecto en un servidor, sigue estos pasos:
   - Primero, ejecuta el comando de construcción:
     ```bash
     npx astro build
     ```

   - Después, comprime la carpeta `dist` generada.
   
   - Sube la carpeta comprimida a la máquina en el servidor.
   
   - Es importante copiar el archivo `package.json` dentro de la carpeta `dist/server`, ya que dentro del servidor necesitaremos ejecutar un `npm i` para instalar las dependencias.
   
4. **Construir y ejecutar el proyecto en el servidor**  
   Una vez que las dependencias se han instalado, ejecuta el siguiente comando para iniciar el servidor:
   ```bash
   node entry.mjs --host=<IP_del_servidor> --port=<puerto>
   ```

¡Y eso es todo! Con estos pasos deberías poder ejecutar y desplegar el proyecto sin inconvenientes.
