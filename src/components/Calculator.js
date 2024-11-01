import { useState } from "react";
import Btn from "./Btn";
import fetchAPI from "../utils/fetch/fetchAPI"

function Calculator() {//3,55,9,:,*
    const [calcul, setCalcul] = useState('')
    const [result, setResult] = useState("")

    var url = "http://localhost:8000"
    var fetch = new fetchAPI(url)
    const handelClick = ()=>{
        setCalcul((calcul.split(",").filter(it=>it.length > 0).join(" ")))
        const res = fetch.post(calcul);
        res.then((response) => setResult(response))
    }
    return (
        <div className="calculator" >
            <div style={{border: "solid", height: "50px"}}>
                <p>{result.message}</p>
            </div>
            <div style={{border: "solid"}}>
                {calcul.replaceAll(',', " ")}
            </div>
            <div>
                <Btn calcul={calcul} setCalcul={setCalcul}>7</Btn>
                <Btn calcul={calcul} setCalcul={setCalcul}>8</Btn>
                <Btn calcul={calcul} setCalcul={setCalcul}>9</Btn>
            </div>
            <div>
                <Btn calcul={calcul} setCalcul={setCalcul}>4</Btn>
                <Btn calcul={calcul} setCalcul={setCalcul}>5</Btn>
                <Btn calcul={calcul} setCalcul={setCalcul}>6</Btn>
            </div>
            <div>
                <Btn calcul={calcul} setCalcul={setCalcul}>3</Btn>
                <Btn calcul={calcul} setCalcul={setCalcul}>2</Btn>
                <Btn calcul={calcul} setCalcul={setCalcul}>1</Btn>
            </div>
            <div>
                <Btn calcul={calcul} setCalcul={setCalcul}>0</Btn>
                <Btn isOperator={true} val="," calcul={calcul} setCalcul={setCalcul}>space</Btn>
            </div>
            <div>
                <Btn isOperator={true} calcul={calcul} setCalcul={setCalcul}>+</Btn>
                <Btn isOperator={true} calcul={calcul} setCalcul={setCalcul}>-</Btn>
                <Btn isOperator={true} calcul={calcul} val="*" setCalcul={setCalcul}>X</Btn>
                <Btn isOperator={true} calcul={calcul} val=":" setCalcul={setCalcul}>/</Btn>
            </div>
            <div>
                <button onClick={handelClick} className="button" >=</button>
            </div>
        </div >
    )
}

export default Calculator;
