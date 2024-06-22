# API REST para Red Social (Backend)

Este proyecto es una API REST desarrollada con el Stack MERN (MongoDB, Express.js, React.js, Node.js) para una aplicación de Red Social. La autenticación se realiza utilizando JWT (JSON Web Tokens).

## Instalación

Para ejecutar este proyecto en tu máquina local, sigue estos pasos:

1. Clona este repositorio en tu máquina local:

    ```
    git clone https://github.com/inesmariao/api-social-network.git
    ```

2. Navega al directorio del proyecto:

    ```
    cd api-social-network
    ```

3. Instala las dependencias del proyecto utilizando npm:

    ```
    npm install
    ```

## Ejecución de Servidores

Para ejecutar los servidores necesarios, sigue estos pasos:

### Para Windows:

1. En el el archivo *start-project.bat* ubicado en el directorio raíz del proyecto, ajusta las rutas de los comandos mongod, npm y la ubicación de la base de datos, según la configuración de tu equipo.
2. Ejecuta el archivo *start-project.bat*. Este archivo se encarga de iniciar el servidor de MongoDB y el servidor Node.js con vigilancia de archivos: 

```
.\start-project.bat
```


### Para Linux y Mac:

1. Edita el archivo *start-project.sh* (cambia la extensión a .sh) y ajusta las rutas de los comandos `mongod` y `npm` según sea necesario para tu sistema operativo.

2. Ejecuta el archivo *start-project.sh* utilizando el siguiente comando:

    ```
    sh start-project.sh
    ```

