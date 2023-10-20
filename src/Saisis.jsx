import React, { Component } from "react";
import Resultat from "./Resultat";

class Saisi extends Component{

    constructor(props){
        super(props);
        this.state = {
            nb1 : 0,
            nb2 : 0,
            resultat : 0
        }
    }

    changeValue = (evt,nb) => {
        this.setState({[nb === 'nb1' ? 'nb1' : 'nb2']: Number(evt.target.value)}) 
    }

    add = () =>{
        this.setState({resultat : this.state.nb1 + this.state.nb2})
    }

    render(){
        
        return(
            <div>
                <input type="number" onChange={(evt)=>this.changeValue(evt,'nb1')}/>
                <input type="number" onChange={(evt)=>this.changeValue(evt,'nb2')}/>
                <button onClick={this.add}> additionner</button>
                <Resultat resultat = {this.state.resultat}/>
            </div>
        );
    }
}

export default Saisi;