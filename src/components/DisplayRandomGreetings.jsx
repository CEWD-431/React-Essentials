import { useState } from 'react'
const greetings = ["Hola!", "Hi!", "Bonjour!"]; 

export default function DisplayRandomGreetings () {
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
