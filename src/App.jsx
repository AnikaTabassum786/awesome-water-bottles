import { Suspense } from 'react'
import './App.css'
import Bottles from './components/Bottles/Bottles'

function App() {

  const bottlesPromise = fetch('../public/bottles.json')
  .then(res=>res.json())

  return (
    <>
      <h1>Buy Awesome Water Bottles</h1>
      <Suspense fallback={<h4>Bottles are Loading</h4>}>
          <Bottles bottlesPromise={bottlesPromise}></Bottles>
      </Suspense>
    </>
  )
}

export default App
