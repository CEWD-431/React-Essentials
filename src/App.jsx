import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

//Exercise.. create a MyLearning component to print out a paragraph describing what new things
//you've learned in this course so far.

const greetings = ["Hola!", "Hi!", "Bonjour!"]; 

function DisplayRandomGreetings () {
  const [greet, setGreetingMessage] = useState("Hello World!")
  return  (
    <div className="card">
     <button onClick={() => setGreetingMessage(greetings[Math.floor(Math.random() * greetings.length)])}>
      Greeting of the day: {greet}
    </button>
    <p>
      Edit <code>src/App.jsx</code> and save to test HMR
    </p>
  </div>
  )
}

function CountCard() {
  const [count, setCount] = useState(0)
  return (
    <div className="card">
    <button onClick={() => setCount((count) => count + 1)}>
      count is {count}
    </button>
    <p>
      Edit <code>src/App.jsx</code> and save to test HMR
    </p>
  </div>
  )
}


function App() {

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" /> {/* setting HTML attributes dynamically */}
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <DisplayRandomGreetings />
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
