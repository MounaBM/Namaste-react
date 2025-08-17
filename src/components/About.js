import { Component } from "react";
import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";

class About extends Component{
    constructor(probs){
        super(probs)
        console.log("Parent constructor")
    }

    componentDidMount(){
        console.log("Parent componentDidMount")
    }

    render(){
        console.log("Parent render")
        return (
        <div>
            <h1>About Us</h1>
            <UserClass name={"First"} location={"Mysore cl"} contact={"@mounabm011 cl"}/>
        </div>
    )
    }
}

export default About;