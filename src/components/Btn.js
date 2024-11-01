function Btn({children, setCalcul, calcul, val, isOperator = false}){
    const handleClick = ()=>{
        if(val){
            if(isOperator){
                setCalcul("," + calcul + val + ",")
            }else{
                setCalcul(calcul + val)
            }
            
        }else{
            if(isOperator){
                setCalcul("," + calcul + children + ",")
            }else{
                setCalcul(calcul + children)
            }
            
        }
    }
    return(
        <button onClick={handleClick} className="button" >{children}</button>
    )
}

export default Btn;
