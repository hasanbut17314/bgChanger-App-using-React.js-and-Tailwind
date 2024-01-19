import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("white")

  return (
    <div className='w-full h-screen' style={{ backgroundColor: color }}>
      <div className='fixed flex flex-wrap flex-col px-3 py-2 top-6 right-5 bg-slate-500 rounded-lg transition-all duration-100'>
        <button className='text-white bg-red-700 px-3 py-1 rounded-2xl my-2'
          onClick={() => setColor("red")}
        >Red</button>
        <button className='text-white bg-blue-700 px-3 py-1 rounded-2xl my-2'
          onClick={() => setColor("blue")}
        >Blue</button>
        <button className='text-white bg-green-700 px-3 py-1 rounded-2xl my-2'
          onClick={() => setColor("green")}
        >Green</button>
        <button className='text-white bg-black px-3 py-1 rounded-2xl my-2'
          onClick={() => setColor("black")}
        >Black</button>
        <button className='text-white bg-yellow-700 px-3 py-1 rounded-2xl my-2'
          onClick={() => setColor("yellow")}
        >Yellow</button>
        <button className='text-white bg-purple-700 px-3 py-1 rounded-2xl my-2'
          onClick={() => setColor("purple")}
        >Purple</button>
        <button className='text-white bg-pink-700 px-3 py-1 rounded-2xl my-2'
          onClick={() => setColor("pink")}
        >Pink</button>
        <button className='text-white bg-orange-600 px-3 py-1 rounded-2xl my-2'
        onClick={() => setColor("orange")}
        >Orange</button>
      </div>

    </div>
  )
}

export default App
