import { useState } from 'react'
import reactImg from './assets/react-core-concepts.png'
import './App.css'

//Exercise.. create a MyLearning component to print out a paragraph describing what new things
//you've learned in this course so far.

//Exercise.. create User component and define userData obj to output dynamic values 



function CoreConcepts (props) {
  return (
    <li>
      <img src={props.image} alt={props.title} width="200" height="200" />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
  );
}


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
        <ul>
        <CoreConcepts title = "Components" 
                      description = "The Core UI Building Block" 
                      image = {reactImg}
        />
        <CoreConcepts />
        <CoreConcepts />
        <CoreConcepts />
        </ul>
      </div>
      <h1>Using Props - Core Concepts</h1>
    </>
  )
}

export default App
