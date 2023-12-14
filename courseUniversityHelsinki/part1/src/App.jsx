const Header = (props) => {
  console.log('Header '+props.course);
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}
const Parte = (props) => {
  return (
    <div>
      <p>Part: {props.name}  ----  Exercises:  {props.exercises}</p>
    </div>
  )
}
const Content = (props) => {
  return (
    <div>
      <Parte name={props.content[0].name} exercises={props.content[0].exercises} />  
      <Parte name={props.content[1].name} exercises={props.content[1].exercises} />
      <Parte name={props.content[2].name} exercises={props.content[2].exercises} />    
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p>Number of exercises: {props.content[0].exercises + props.content[1].exercises + props.content[2].exercises}</p>
    </div>
  )
}


const App = () => {
  
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
  
  return (
    <div>
      <Header course={course.name}/>
      <Content  content={course.parts}/>      
      <Total content={course.parts}/>
    </div>
    
  )
}

export default App