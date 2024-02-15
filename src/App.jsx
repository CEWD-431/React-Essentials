import { useState } from 'react'
import reactImg from './assets/react-core-concepts.png'
import './App.css'
import { CORE_CONCEPTS } from './data'

//Exercise.. create a MyLearning component to print out a paragraph describing what new things
//you've learned in this course so far.

//Exercise.. create User component and define userData obj to output dynamic values 


function CoreConcepts ({image, title, description}) {
  return (
    <div>
      <img src={image} alt={title} width="200" height="200" />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
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
        <CoreConcepts title = {CORE_CONCEPTS[0].title} 
                      description = {CORE_CONCEPTS[0].description} 
                      image = {CORE_CONCEPTS[0].image} 
        />
        <CoreConcepts {...CORE_CONCEPTS[1]} />
        <CoreConcepts {...CORE_CONCEPTS[2]} />
        <CoreConcepts {...CORE_CONCEPTS[3]} />
      </div>
      <h1>Using Props - Core Concepts</h1>
    </>
  )
}

export default App
