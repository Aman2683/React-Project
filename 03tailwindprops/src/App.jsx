import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username: 'Aman Kumar',
    age:22
  }

  let newArr =[1 ,2 ,3]

  return (
    <>
      <h1 className='bg-green-400 text-white p-4 rounded-xl mb-4'>Tailwind Test</h1>
      <Card username ="chai aur code" btnText="click me"/>
      <Card username ="Aman"/>
    </>
  )
}
export default App
