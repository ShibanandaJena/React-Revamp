import { useState } from 'react'
import './App.css'
import {Header,Slogan,Time,CarItems,ErrorMessage} from './components/index'
import "bootstrap/dist/css/bootstrap.min.css"
import Employee from './components/Employee'
import Input from './components/Input'

function App() {
  const [count, setCount] = useState(0)
  // const carModels = [
  //   "Toyota Corolla",
  //   "Honda Civic",
  //   "Ford Mustang",
  //   "Tesla Model S",
  //   "Chevrolet Camaro",
  //   "BMW 3 Series",
  //   "Mercedes-Benz C-Class",
  //   "Audi A4",
  //   "Jeep Wrangler",
  //   "Porsche 911"
  // ];

  const employees = [
    {
        "name": "Haria",
        "tag": "Lead",
        "id": "EMP001",
        "email": "haria.lead@company.com"
    },
    {
        "name": "Rajesh",
        "tag": "Manager",
        "id": "EMP002",
        "email": "rajesh.manager@company.com"
    }
]

const [carModels,setcarModels]=useState(["Toyota Corolla",
    "Honda Civic",
    "Ford Mustang",
    "Tesla Model S",
    "Chevrolet Camaro"])

const handleKeyDown = (e)=>{
    if(e.key==='Enter'){
      let newModel = e.target.value
      e.target.value=""
      setcarModels([...carModels,newModel])
    }
}
  return (
    <>
    {/* <Header></Header>
    <Slogan></Slogan>
    <Time></Time> */}

    <h1>Props in React: </h1>
    <p>Mechanism for passing the data</p>
    <Input handleKeyDown={handleKeyDown}></Input>     
    <ErrorMessage items={carModels}></ErrorMessage>
    <CarItems items={carModels} ></CarItems>

{/* <Employee name="Haria" tag="Lead" ></Employee> */}

{/* {employees.map((emp)=>(
  <Employee name={emp.name} 
            tag={emp.tag} 
            id={emp.id} 
            email={emp.email}
            length={employees.length} />
))} */}
    </>
  )
}

export default App
