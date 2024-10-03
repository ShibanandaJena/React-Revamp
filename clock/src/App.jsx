import { useState } from 'react'
import './App.css'
import {Header,Slogan,Time,CarItems,ErrorMessage} from './components/index'
import "bootstrap/dist/css/bootstrap.min.css"

function App() {
  const [count, setCount] = useState(0)
  const carModels = [
    "Toyota Corolla",
    "Honda Civic",
    "Ford Mustang",
    "Tesla Model S",
    "Chevrolet Camaro",
    "BMW 3 Series",
    "Mercedes-Benz C-Class",
    "Audi A4",
    "Jeep Wrangler",
    "Porsche 911"
  ];

  return (
    <>
    {/* <Header></Header>
    <Slogan></Slogan>
    <Time></Time> */}

    <h1>Props in React: </h1>
    <p><h3>Mechanism for passing the data</h3></p>
    <ErrorMessage items={carModels}></ErrorMessage>
    <CarItems items={carModels}></CarItems>
    </>
  )
}

export default App
