import React from 'react'
import { useState,useEffect} from 'react';
import css from './calculator.module.css'
const Calculator = () => {
  const [list, setlist] = useState();
  const [single, setsingle] = useState(" ");
  const singleHandler=(e)=>{


   setsingle(single.concat(e.target.textContent))

   
  }
  const submitHandler=(e)=>{
  setsingle(String(eval(single).toString()))
  }
  
  useEffect(() => {
    
  }, [singleHandler]);
  
  const AC=()=>{
    setsingle(" ")
  }
  
  return (
    <>
    <div className={css.submain}>
      <div className={css.display}><input name={single} value={single} type="text" /></div>
            <div className={css.button}>
                <div className={css.row}>
                    <div className={css.btn1} value={"AC"} onClick={AC}>AC</div>
                    <div className={css.btn1} value={"("} onClick={singleHandler}>(</div>

                    <div className={css.btn1} value={")"} onClick={singleHandler} >)</div>

                    <div className={css.btn1} value={"/"} onClick={singleHandler}>/</div>

                </div>
                <div className={css.row}>
                    <div className={css.btn1} value={7} onClick={singleHandler}>7</div>
                    <div className={css.btn1} value={8} onClick={singleHandler}>8</div>

                    <div className={css.btn1} value={9} onClick={singleHandler}>9</div>

                    <div className={css.btn1} value={"*"} onClick={singleHandler}>*</div>

                </div>
                <div className={css.row}>
                    <div className={css.btn1} value={4} onClick={singleHandler}>4</div>
                    <div className={css.btn1} value={5} onClick={singleHandler}>5</div>
                    <div className={css.btn1} value={6} onClick={singleHandler}>6</div>


                    <div className={css.btn1} value={"-"} onClick={singleHandler}>-</div>

                </div>
                <div className={css.row}>
                    <div className={css.btn1} value={1} onClick={singleHandler}>1</div>
                    <div className={css.btn1} value={2} onClick={singleHandler}>2</div>

                    <div className={css.btn1} value={3} onClick={singleHandler}>3</div>

                    <div className={css.btn1} value={"+"} onClick={singleHandler}>+</div>

                </div>
                <div className={css.row}>
                    <div className={css.btn1} value={0} onClick={singleHandler}>0</div>
                    <div className={css.btn1} value={"."} onClick={singleHandler}>.</div>

                    <div style={{width:"50%"}}  className={css.btn1} value={"="} onClick={submitHandler}>=</div>


                </div>
            
    </div>
    </div>
    </>
  )
}

export default Calculator
