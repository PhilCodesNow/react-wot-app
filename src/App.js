import {useState, useEffect} from 'react'
import './App.css';
import Tankopedia from './Tankopedia'
require('dotenv').config()

const API_KEY = process.env.REACT_APP_API_KEY

function App() {
  const [tanksList, setTanksList] = useState([])


  useEffect(() =>{
    let callAPI = async () => {
      await fetch(`https://api.worldoftanks.com/wot/encyclopedia/vehicles/?application_id=${API_KEY}`)
        .then(response => response.json())
        .then(data => setTanksList([data.data][0]))
      }
    callAPI()

  }, [])









  return(
    <div className="app">

    <Tankopedia
    tanksList={tanksList}
    />

    </div>
  )




}

export default App;
