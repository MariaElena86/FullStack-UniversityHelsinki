# Course Inmersión Profunda en el Desarrollo Web Moderno. 
## Full Stack open
## From University of Helsinki [url](https://fullstackopen.com/es/)

# Ejercicios Parte 1 (1.1-1.2)

## 1.1: información del curso, paso 1
__Description__: Usa Vite para inicializar una nueva aplicación. 
Refactoriza el código para que conste de tres componentes nuevos: Header, Content y Total. Todos los datos aún residen en el componente App, que pasa los datos necesarios a cada componente mediante props. Header se encarga de representar el nombre del curso, Content representa las partes y su número de ejercicios y Total representa el número total de ejercicios.
Define los nuevos componentes en el archivo App.jsx.

## 1.2: información del curso, paso 2
__Description__: Refactoriza el componente Content para que no renderice ningún nombre de partes o su número de ejercicios por sí mismo. En su lugar, solo representa tres componentes Part de los cuales cada uno representa el nombre y el número de ejercicios de una parte.