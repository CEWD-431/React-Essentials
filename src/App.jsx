
import CoreConcepts from './components/CoreConcepts';
import Examples from './components/Examples';
import { CORE_CONCEPTS } from './components/data';
import './App.css';
import { useState } from 'react';

// function CountCard() {
//   const [count, setCount] = useState(0)
//   return (
//     <div className="card">
//     <button onClick={() => setCount((count) => count + 1)}>
//       count is {count}
//     </button>
//     <p>
//       Edit <code>src/App.jsx</code> and save to test HMR
//     </p>
//   </div>
//   )
// }


function App() {
  return (
    <>
      <div>
        <section id = "core-concepts">
          <h2>Core Concepts</h2>
          {CORE_CONCEPTS.map((coreConceptItem) =>  <CoreConcepts key={coreConceptItem.title} {...coreConceptItem} />)}
        </section>
        <Examples/>
      </div>
      <h1>Basic React App</h1>
    </>
  )
}

export default App
