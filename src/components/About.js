import { Component } from "react";
import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";
import UserContext from "../utils/UserContext";

class About extends Component{
    constructor(probs){
        super(probs)
        // console.log("Parent constructor")
    }

    componentDidMount(){
        // console.log("Parent componentDidMount")
    }

    render(){
        // console.log("Parent render")
        return (
        <div>
            <h1>About Us</h1>
            <div>LoggedIn User :
                <UserContext.Consumer>
                    {({loggedInUser})=><h1 className="font-bold">{loggedInUser}</h1>}
                </UserContext.Consumer>
            </div>
            <UserClass name={"First"} location={"Mysore cl"} contact={"@mounabm011 cl"}/>
        </div>
    )
    }
}

export default About;