import React, { Component } from "react";
import Saisis2 from "./Saisis2";

class Resultat2 extends Component{
    
    constructor(props){
        super(props);
        this.state = {
            resultat : 0,
        };
    }

    additionnerCallBack = (res) => {
        this.setState({resultat : res})
    }

    render(){
        return(
            <div>
                <Saisis2 additionner = {this.additionnerCallBack} />
                <p>Résultat : {this.state.resultat}</p>
            </div>
        )
    }
}

export default Resultat2;