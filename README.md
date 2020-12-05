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

## Observaciones
- El servidor está alojado en un equipo móvil (notebook), no siempre accesible, no siempre corriendo :+1:
- Método `POST` inserta objetos y devuelve url al objeto como Location del Header
- Método `PUT` no inserta objetos, a partir que el ID es autogenerado
- ~~Métodos `PUT/PATCH` no devuelve contenido (`status 204`) a modo de prueba~~

