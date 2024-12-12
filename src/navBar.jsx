import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

export default function NavBar(){
    return(
        <div className="nav">
            <NavLink className={({isActive})=>(isActive?"active":"link")} to={"/"}>Home</NavLink>
            <NavLink className={({isActive})=>(isActive?"active":"link")} to={"/about"}>About</NavLink>
            <NavLink className={"link"} to={"/contact"}>Contact</NavLink>
            <NavLink className={"link"} to={"/why-us"}>Why Us</NavLink>
            <NavLink className={"link"} to={"/blog"}>Blog</NavLink>
        </div>
    )
}