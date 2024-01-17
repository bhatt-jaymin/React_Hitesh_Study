import { useState } from 'react'
import './App.css'
import Cards from './components/Cards'

function App() {
  const [count,setCount]=useState(0)
  let myObj={
    Name:"Jaimin",
    Age:30
  }
  return (
    <>
      <h1 className="bg-orange-300 text-red-100 text-5xl rounded-xl font-bold underline mb-4">
      Hello React || Vite Dev Community world!</h1>
      <Cards Name="Rect-Devloper" /><Cards Name="Java-Devloper" btnText="View CV"/>
      
     {/*  <figure className="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
  <img className="w-24 h-24 rounded-full mx-auto" src="https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" width="384" height="512"/>
  <div className="pt-6 space-y-4">
    <blockquote>
      <p className="text-lg font-medium">
        “Tailwind CSS is the only framework that I've seen scale
        on large teams. It’s easy to customize, adapts to any design,
        and the build size is tiny.”
      </p>
    </blockquote>
    <figcaption>
      <div>
        Sarah Dayan
      </div>
      <div>
        Staff Engineer, Algolia
      </div>
    </figcaption>
  </div>
</figure> */}
    </>
  )
}

export default App
