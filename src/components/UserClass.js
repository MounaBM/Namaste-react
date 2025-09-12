import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            userInfo : {
                name:'Dummy',
                location:'Dummy'
            }
        }
        // console.log(this.props.name +"Child constructor")
    }

    async componentDidMount(){
        const data = await fetch("https://api.github.com/users/akshaymarch7");

        const json = await data.json();

        this.setState ({
            userInfo : json
        })
    }

    componentDidUpdate(){
        // console.log("component did update")
    }

    componentWillUnmount(){
        // console.log("component will unmount")
    }

    render(){
        // console.log(this.state.userInfo)
    const {name , location , avatar_url} = this.state.userInfo
    // console.log(this.props.name  + "Child render")
    return (
        <div className="user-card">
            <img src={avatar_url}/>
            <h2>Name: {name}</h2>
            <h3>Location: {location}</h3>
        </div>
    )
    }
}

export default UserClass;