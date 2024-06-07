<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

# Descripción

El presente proyecto fue realizado con NestJS configurado para trabajar con una base de datos MySQL.
La API fue construida utilizando TypeORM por ser el ORM con más trayectoria entre sus competidores, además de ofrecer una implementación que resulta más simple que la de otros anteriormente usados. Dicha contiene los siguientes métodos:

## createTask(createTaskDto: CreateTaskDto)

Crea una tarea (Task) haciendo uso del patrón DTO (en inglés *Data Transfer Object*), que se trata de encapsular los datos a esperar en las peticiones en un archivo separado del modelo.

## getAllTasks()
Obtiene todas las tareas.

## getTaskById(id: number)
Obtiene una tarea según su id.

## updateTask(id: number, updateTaskDto: CreateTaskDto)
Actualiza una tarea según su id, reutilizando **CreateTaskDto** como parámetro para el cuerpo de la petición.

## deleteTask(id: number)
Elimina una tarea según su id.

# Cómo probar

Las pruebas se deberán realizar en una plataforma de APIs, como Insomnia o Postman. Alternativamente, puede acceder a la interfaz de Swagger desde ```http://localhost:3000/api```.
La URL es ```http://localhost:3000/tasks``` para las peticiones que no requieran un parámetro **id**, y ```http://localhost:3000/tasks/:id``` para las que lo requieran, como se muestra en los siguientes ejemplos.

![image](https://github.com/ezqHerrera/tasksjs/assets/72275360/77b9b539-e61d-4634-a93d-c041585f4217)

![image](https://github.com/ezqHerrera/tasksjs/assets/72275360/1bcea79b-f46b-4414-b17b-1dc34d87a639)


### License

Nest is [MIT licensed](LICENSE).
