import React, { useState } from "react";

export function SaisiResult(){
    const [inputV1, setInputV] = useState(0);
    const [inputV2, setInputV2] = useState(0);
    const [result, setResult] = useState(0);
    let changeVname =(e) => {
        e.target.name === "nb1" ? setInputV(parseFloat(e.target.value)) : setInputV2(parseFloat(e.target.value));
    }
    return(
        <div>
            <input type="number" name="nb1" onChange={changeVname}/>
            <input type="number" name="nb2" onChange={changeVname}/>
            <button onClick={()=>setResult(inputV1+inputV2)}>Additionner</button><br />
            {result}
        </div>
    )
}

function Resultat2({result}){
    return(
        <div>
            {result}
        </div>
    )
}

export function SaisiR2(){
    const [inputV1, setInputV] = useState(0);
    const [inputV2, setInputV2] = useState(0);
    const [result, setResult] = useState(0);
    let changeVname =(e) => {
        e.target.name === "nb1" ? setInputV(parseFloat(e.target.value)) : setInputV2(parseFloat(e.target.value));
    }
    let calR = () =>{
        setResult(inputV1 + inputV2);
    }
    return(
        <div>
            <input type="number" name="nb1" onChange={changeVname}/>
            <input type="number" name="nb2" onChange={changeVname}/>
            <button onClick={calR}>Additionner</button><br />
            <Resultat2 result = {result}/>
        </div>
    )
}

function Saisi3({setResult}){
    const [inputV1, setInputV] = useState(0);
    const [inputV2, setInputV2] = useState(0);
    let changeVname =(e) => {
        e.target.name === "nb1" ? setInputV(parseFloat(e.target.value)) : setInputV2(parseFloat(e.target.value));
    }
    let calR = () =>{
        setResult(inputV1 + inputV2);
    }
    return(
        <div>
            <input type="number" name="nb1" onChange={changeVname}/>
            <input type="number" name="nb2" onChange={changeVname}/>
            <button onClick={calR}>Additionner</button><br />
        </div>
    )
}

export function ResultatS3(){
    const [result, setResult] = useState(0);
    return(
        <div>
            <Saisi3 setResult={setResult}/>
            <p>Résultat : {result}</p>
        </div>
    )
}



