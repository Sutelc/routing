import { Link } from "react-router-dom"

export default function About(){
    return(
        <>
        <h1>About page</h1>
        <a href="/">Home</a><br />
        <Link to={"/"}>Home React</Link>
        <img src="/images 2.png" alt="" />
        </>
    )
}