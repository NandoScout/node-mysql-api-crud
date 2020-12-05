# API CRUD Node.js-MySql
API de CRUD con Node.js y MySql de pruebas.

## Dependencias
- express
- body-parser
- mysql

## Puntos de Entrada / Entry Points
Mediante `Express.Router()` se configuraron múltiples entry points para la misma API:
- Contacts url base:    http://fbroqua.sytes.net/contacts
- Contactos url base:   http://fbroqua.sytes.net/contactos
- Employees url base:   http://fbroqua.sytes.net/employees

## Entry Points RESTful
- Traer todos:	GET http://fbroqua.sytes.net/contacts
- Traer un recurso:	GET http://fbroqua.sytes.net/contacts/11
- Insertar un recurso:	POST http://fbroqua.sytes.net/contacts
- Modificar un recurso completo:	PUT http://fbroqua.sytes.net/contacts/11
- Modificar parcialmente un recurso:	PATCH http://fbroqua.sytes.net/contacts/11
- Eliminar un recurso:	DELETE http://fbroqua.sytes.net/contacts/11

## Otros Entry Points
- Insertar un recurso:	POST http://fbroqua.sytes.net/contacts/agregar
- Modificar un recurso completo:	PUT http://fbroqua.sytes.net/contacts/modificar/11
- Eliminar un recurso:	DELETE http://fbroqua.sytes.net/contacts/eliminar/11

## Cambios pendientes
- [ ] PUT no debe aceptar objetos parciales (exigir objetos completos)
- [ ] Emplear metodos de datos desde contactosModel (migrar métodos)

## Base de Datos
El servicio fue montado sobre XAMPP con MySql / MariaDB 10.4.13
- Backup disponible en [carpeta mysql_backup](/mysql_backup)

## Probar API con Postman
Se brinda un backup de la colección de Postman para probar todos los entries de la API REST.
- Backup disponible en [carpeta postman_backup](/postman_backup)

La colección posee 3 variables que pueden configurarse según la configuración. Valores por defecto:
```
url: fbroqua.sytes.net
port: 3000
entry: contactos
```

## Observaciones
- El servidor está alojado en un equipo móvil (notebook), no siempre accesible, no siempre corriendo :+1:
- Método `POST` inserta objetos y devuelve url al objeto como Location del Header
- Método `PUT` no inserta objetos, a partir que el ID es autogenerado
- Método `PUT` devuelve como contenido la cantidad de modificaciones (registros) en la base de datos; si valor nuevo es igual a preexistente, muestra:
> 0 registro/s actualizado/s
- ~~Métodos `PUT/PATCH` no devuelve contenido (`status 204`) a modo de prueba~~

