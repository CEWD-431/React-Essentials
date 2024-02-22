
import CoreConcepts from './components/CoreConcepts';
import Examples from './components/Examples';
import Section from './components/Section';
import { CORE_CONCEPTS } from './components/data';
import './App.css';

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
      <Section title="Core Concepts" id = "core-concepts">
        {CORE_CONCEPTS.map((coreConceptItem) =>  <CoreConcepts key={coreConceptItem.title} {...coreConceptItem} />)}
      </Section>
      <Examples/>
      <h1>Basic React App</h1>
    </>
  )
}

export default App
