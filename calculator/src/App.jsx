import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import styles from './App.module.css'
// import Button from './components/Button'
import { Button, ButtonContainer, Display } from './components/index'

function App() {
  const [calVal, setcalVal] = useState("")

  const buttonTexts = [
    'C', '1', '2',
    '+', '3', '4',
    '-', '5', '6',
    '*', '7', '8',
    '/', '=', '9',
    '0', '.'
  ];

  const operator=[ '+','-','*','/']

  const onButtonClick = (btnText) => {
    if(btnText==='C'){
      setcalVal("")
    }
    else if(btnText=== '='){
      const result = eval(calVal)
      // const resDisplay = `${calVal} = ${result}`

      setcalVal(result)
      // console.log(resDisplay)
    }
    else{

      const newDisplayValue = calVal + btnText
      setcalVal(newDisplayValue)
      console.log(newDisplayValue)
    }
  }

  


  return (
    <>
      <h3>My calculator</h3>

      <div className='calculator'>
        <Display calVal={calVal}></Display>
        <ButtonContainer >
          <Button buttonTexts={buttonTexts}
              onButtonClick={onButtonClick}></Button>
        </ButtonContainer>
      </div>
    </>
  )
}

export default App
