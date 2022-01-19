import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useEffect } from "react"

function Home() {
    const [translist, settranslist] = useState([])
    
    useEffect(async () => {
        try {
            let trans = await fetch("https://moneyvaish.herokuapp.com/userall")
            let transdata = await trans.json();
            settranslist(transdata)
        } catch (error) {
            console.log(error)
        }

    }, [])
    {{let  res=translist.reduce((acc,ele)=> { return  acc+ele.income},0);
    console.log(res)}}
                


    return (
        <>
        
            <div class="d-sm-flex align-items-center justify-content-between mb-4">
           
               <div>
                    <h3>Total Income=<span> {translist.reduce((acc,ele)=>    (acc*1)+(ele.income*1),0)} </span></h3>
                </div>

                <div>
                    <h3>Total Expense=<span>{translist.reduce((acc,ele)=>    (acc*1)+(ele.expense*1),0)} </span></h3>
                </div>

            </div>

            <div class="d-sm-flex align-items-center justify-content-between mb-4">
                <Link to="/Addincome"><button className='btn btn-primary '>ADD INCOME</button></Link>
                <Link to="/Addexpense"><button className='btn btn-primary '>ADD EXPENSE</button></Link>
            </div>



        </>
    )
}

export default Home
