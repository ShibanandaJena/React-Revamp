import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import styles from './App.module.css'
// import Button from './components/Button'
import { Button, ButtonContainer, Display } from './components/index'

function App() {
  const [count, setCount] = useState(0)
  const buttonTexts = [
    'C', '1', '2',
    '+', '3', '4',
    '-', '5', '6',
    '*', '7', '8',
    '/', '=', '9',
    '0', '.'
  ];
  return (
    <>
      <h3>My calculator</h3>

      <div className='calculator'>
        <Display></Display>
        <ButtonContainer>
          <Button buttonTexts={buttonTexts}></Button>
        </ButtonContainer>
      </div>
    </>
  )
}

export default App
