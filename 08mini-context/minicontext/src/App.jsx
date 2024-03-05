import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Profile from './componets/Profile'
import Login from './componets/Login'
import UserContextProvider from './context/UserContextProvider'

function App() {
  const [count, setCount] = useState(0)

  return (
    <UserContextProvider>
      <h1>React Video for API context</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App
