import {useState, useEffect} from 'react'
import './App.css';
require('dotenv').config()

const API_KEY = process.env.REACT_APP_API_KEY

function App() {
  let vals
  const [tanksList, setTanksList] = useState([])


  useEffect(() =>{
    let callAPI = async () => {
      await fetch(`https://api.worldoftanks.com/wot/encyclopedia/vehicles/?application_id=${API_KEY}`)
        .then(response => response.json())
        .then(data => setTanksList([data.data][0]))
      }
    callAPI()

  }, [])

  // useEffect(() =>{
  //   const newObj = [...tanksList]
  //   let vals = Object.values(newObj)
  // }, [tanksList])
  // useEffect(() =>{
  //   const newArray = [...tanksList]
  //   const newObj = newArray[0]
  //   console.log(newObj)
  //   if(newObj){
  //     let vals = Object.values(newObj)
  //     console.log(vals)
  //   }
  // }, [tanksList])






  // return(
  //   <div>
  //     {vals ?
  //     <div>loaded</div>
  //     : 
  //     <div>loading....</div>
  //   }
  //   </div>
  // )



  return(
    <div className="app">
  <h1>hello</h1>
     {
       Object.values(tanksList).map(tank =>{
         return(<div>
            {tank.name}
           </div>)
       })
   } 
    </div>
  )


// if(valsLoaded === true){
//   return(
//     <div className="app">
  
//      {
 
//          vals.map(val =>{
//            return(<div>
//                {val.name}
             
//              </div>)
//          })
//    } 
//      <h1>MOUSE OVA ME</h1>
//     </div>
//   )
// } else if(valsLoaded === false){
//   return(<div>
//     <h1>loading...</h1>
//   </div>)
// }



}

export default App;
