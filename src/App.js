import React from 'react'

const Hello = (props) => {
  return (
    <div>
      <p>Hello {props.name} u are {props.age} years old</p>
    </div>
  )
}
const App = () => {
  const now = new Date()
  const age = 10
  const a = 10
  const b = 20

  return (
    <div> {/* must be wrapped in a div element */}
      <p>Hello world, it is {now.toString()}</p>
      <p>{a} plus {b} is {a + b}</p>
      <Hello name ="meg" age={age + 19}/>
      <Hello name ="grep" age={age}/>
      <Hello name ="malcolm" age={age + 21} />
    </div>

  )
}

export default App