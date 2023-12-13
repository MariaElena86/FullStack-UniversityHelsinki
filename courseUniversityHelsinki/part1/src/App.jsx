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
      <p>Part: {props.part}  ----  Exercises:  {props.exercises}</p>
    </div>
  )
}
const Content = (props) => {
  return (
    <div>
      <Parte part={props.content[0].part} exercises={props.content[0].exercises} />  
      <Parte part={props.content[1].part} exercises={props.content[1].exercises} />
      <Parte part={props.content[2].part} exercises={props.content[2].exercises} />    
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p>Number of exercises: {props.content[0] + props.content[1] + props.content[2]}</p>
    </div>
  )
}


const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
       <Header course={course}/>
       <Content  content={[
        { part: [part1], exercises: [exercises1] },
        { part: [part2], exercises: [exercises2] },
        { part: [part3], exercises: [exercises3] },
      ]}        
      />      
      <Total content={[[exercises1],[exercises2],[exercises3]]}/>
    </div>
  )
}

export default App