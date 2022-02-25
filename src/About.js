import React from "react";
//class component
class About extends React.Component{
    constructor(){
        super();
        this.state={
            name:'disha',
            age:25
        }
        console.warn('Constructor called');
    }
    componentDidMount(){
        console.warn('componentDidMount called');
    }
    componentDidUpdate(){
        alert('Data updated');
    }
    render(){
        console.warn('render')
        return(
            <div>
                <h1>About Us Page</h1> 
                <h3>{this.state.name}</h3>
                <h3>{this.state.age}</h3>
                <button onClick={()=>{this.setState({name:"disha pandey"})}}>Update Now</button>
            </div>
        );
    }
}
export default About;

//Life cycle methods are used with class Components only.
