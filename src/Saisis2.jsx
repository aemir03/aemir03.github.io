import React, { Component } from "react";

class Saisis2 extends Component{

    constructor(props){
        super(props);
        this.state = {
            nb1 : 0,
            nb2 : 0,
        }
    }

    changeValue = (evt,nb) => {
        this.setState({[nb === 'nb1' ? 'nb1' : 'nb2']: Number(evt.target.value)}) 
    }

    add = () =>{
        this.props.additionner(this.state.nb1 + this.state.nb2);
    }

    render(){
        return(
            <div>
                <input type="number" onChange={(evt)=>this.changeValue(evt,'nb1')}/>
                <input type="number" onChange={(evt)=>this.changeValue(evt,'nb2')}/>
                <button onClick={this.add}> additionner</button>
            </div>
        )
    }
}

export default Saisis2;