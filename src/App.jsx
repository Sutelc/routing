import { Link } from "react-router-dom"
import { useState } from "react"

//use state and use effect

export default function App(){
  const [state, setState] = useState("NO");
  const func = ()=>{
    setState("YES")
  }
  //create a state called "PINK" that carries the value "pink"
  //create a custom function that sets the value of the pink state to "blue"
  const [PINK, SetPINK]= useState(true);
  const pinky = ()=>{
    SetPINK((blue) => !blue)
  }
  const [Image, setImage]= useState(true);
  const newImage = ()=>{
    setImage((icon)=>!icon)
  }
  return(
    <>
      <h1>Home Page</h1>
      <a href="/about">About</a> <br />
      <Link to={"/about"}>About React</Link>
      <h1 className="state" onClick={func}>{state}</h1>
      <h1 onClick={pinky} style={{color:PINK?'pink':'blue'}}>Change</h1>
      <img onClick={newImage} src={Image? "/images 2.png":"/images.png"} alt="" />
    
    </>


  )
}