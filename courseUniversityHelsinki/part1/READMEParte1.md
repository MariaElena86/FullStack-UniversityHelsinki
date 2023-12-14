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

# Ejercicios Parte 1 (1.3.-1.5)
__Description__: Seguimos construyendo la aplicación en la que empezamos a trabajar en los ejercicios anteriores. Puedes escribir el código en el mismo proyecto, ya que solo estamos interesados en el estado final de la aplicación enviada.


## 1.3: información del curso, paso 3
__Description__: RefactorizaAvancemos para usar objetos en nuestra aplicación. Modifica las definiciones de las variables del componente App de la siguiente manera y también refactoriza la aplicación para que siga funcionando:
const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }


## 1.4: información del curso paso 4
__Description__: Y luego coloca los objetos en un array. Modifica las definiciones de las variables de App de la siguiente forma y modifica las otras partes de la aplicación en respectivamente:
const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]
  Sin embargo, no pases diferentes objetos como props separados del componente App a los componentes Content y Total. En su lugar, pásalos directamente como una matriz:course={course}

  ## 1.5: información del curso paso 5
  __Description__: Llevemos los cambios un paso más allá. Cambia el curso y sus partes a un solo objeto JavaScript. Arregla todo lo que se rompa.
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
 