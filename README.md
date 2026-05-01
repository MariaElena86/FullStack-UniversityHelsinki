# Course Inmersión Profunda en el Desarrollo Web Moderno. 
## Full Stack open
## From University of Helsinki [url](https://fullstackopen.com/es/)

# Parte 0
# Ejercicios Parte 0 (0.1-0.6)

## Exercises 0.1: HTML
__Description__: Revisa los conceptos básicos de HTML leyendo este tutorial de Mozilla: [Tutorial HTML](https://developer.mozilla.org/es/docs/Learn/Getting_started_with_the_web/HTML_basics).

__File__:"ejercicio01.html"

## Exercises 0.2: CSS
__Description__: Revisa los conceptos básicos de CSS leyendo este tutorial de Mozilla: [Tutorial CSS](https://developer.mozilla.org/es/docs/Learn/Getting_started_with_the_web/CSS_basics).

__File__:"ejercicio02.css"

## Exercises 0.3: Formularios HTML
__Description__: Aprende sobre los conceptos básicos de los formularios HTML leyendo el tutorial de Mozilla: [Mi primer formulario HTML](https://developer.mozilla.org/es/docs/Learn/Forms/Your_first_form).

__File__:"ejercicio03.html"

## Exercises 0.4: Nuevo diagrama de nota
__Description__: Crea un diagrama similar que describa la situación en la que el usuario crea una nueva nota en la [página] (https://studies.cs.helsinki.fi/exampleapp/notes) escribiendo algo en el campo de texto y haciendo clic en el botón Save.
Si es necesario, muestra las operaciones en el navegador o en el servidor como comentarios en el diagrama.
El diagrama no tiene por qué ser un diagrama de secuencia. Cualquier forma sensata de presentar los eventos está bien.
Toda la información necesaria para hacer esto, y los dos ejercicios siguientes, se pueden encontrar en el texto de [esta parte](https://fullstackopen.com/es/part0/fundamentos_de_las_aplicaciones_web#formularios-y-http-post). 
La idea de estos ejercicios es leer el texto una vez más y pensar en lo que está sucediendo allí. No es necesario leer el código de la aplicación pero, por supuesto, es posible.
Puedes crear los diagramas con cualquier programa, pero quizás la mejor y más fácil forma de hacer diagramas es utilizando la sintaxis de Mermaid que ahora está implementada en las páginas de Markdown de GitHub.

__File__:"ejercicio04.mmd"


## Exercises 0.5:Diagrama de aplicación de una sola página
__Description__: Crea un diagrama que describa la situación en la que el usuario accede a la versión de
[aplicación de una sola página](https://fullstackopen.com/es/part0/fundamentos_de_las_aplicaciones_web#aplicacion-de-una-sola-pagina)
de la aplicación de notas en [url](https://studies.cs.helsinki.fi/exampleapp/spa)

__File__:"ejercicio05.mmd"


## Exercises 0.6: Nueva nota en diagrama de aplicación de una sola pagina


# Parte 1
# Ejercicios Parte 1 (1.1-1.2)

## 1.1: información del curso, paso 1
__Description__: Usa Vite para inicializar una nueva aplicación. 
Refactoriza el código para que conste de tres componentes nuevos: Header, Content y Total. Todos los datos aún residen en el componente App, que pasa los datos necesarios a cada componente mediante props. Header se encarga de representar el nombre del curso, Content representa las partes y su número de ejercicios y Total representa el número total de ejercicios.
Define los nuevos componentes en el archivo App.jsx.

## 1.2: información del curso, paso 2
__Description__: Refactoriza el componente Content para que no renderice ningún nombre de partes o su número de ejercicios por sí mismo. En su lugar, solo representa tres componentes Part de los cuales cada uno representa el nombre y el número de ejercicios de una parte.
