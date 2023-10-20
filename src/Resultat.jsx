import React, { Component } from "react";

class Resultat extends Component{

    render(){
        return(
            <div>
                <p>Résultat : {this.props.resultat}</p>
            </div>
        );
    }
}


export default Resultat;