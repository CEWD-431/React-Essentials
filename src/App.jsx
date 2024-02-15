
import CoreConcepts from './components/CoreConcepts';
import DisplayRandomGreetings from './components/DisplayRandomGreetings';
import {CORE_CONCEPTS} from './components/data';
import './App.css';


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
