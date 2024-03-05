import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState('yellow')

  return (
    <div className='w-full h-screen duration-200 flex justify-center items-center' style={{ background: color }}>
      <h1>Background Changer App</h1>
      <div className='fixed flex flex-wrap justify-center  items-center bottom-12 insert-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-10 shadow-lg bg-white px-3 py-2 rounded-3xl'>
          <button onClick={() => setColor('purple')} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{background:'Purple'}}>Purple</button>
          <button onClick={() => setColor('red')} className='outline-none px-4 py-1 rounded-full text-white shadow-lg'style={{background:'red'}}>Red</button>
          <button onClick={() => setColor('blue')} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{background:'blue'}}>Blue</button>
          <button onClick={() => setColor('green')} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{background:'green'}}>Green</button>
        </div>
      </div>
    </div>
  )
}

export default App


