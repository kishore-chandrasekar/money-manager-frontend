import React from 'react'
import { useState, useEffect } from "react"
import { Link } from 'react-router-dom'

function Transactions() {
    const [translist, settranslist]  = useState([])
    useEffect(async () => {
        try {
            let trans = await fetch("https://moneyvaish.herokuapp.com/userall")
            let transdata = await trans.json();
            settranslist(transdata)
        } catch (error) {
            console.log(error)
        }

    }, [])


    return (
        <>
            <div class="d-sm-flex align-items-center justify-content-between mb-4">
                <h3>Your Transactions</h3>
                <select >
                <option>sort by category(Fuel)</option>
                <option>sort by category(Movie)</option>
                <option>sort by category(Food)</option>
                <option>sort by category(Loan)</option>
                <option>sort by category(Medical Expense)</option>
                <option>sort by category(Others)</option>
                <option>sort by Type(Office)</option>
                <option>sort by Type(Personal)</option>
                </select>
                <button className='btn btn-primary sm'>submit</button>
                </div>
            <div class="card shadow mb-4">
                <div class="card-header py-3">
                    <h6 class="m-0 font-weight-bold text-primary"></h6>
                </div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                            <thead>
                                <tr>
                                    <th>Date</th>
                                    <th>Time</th>
                                    <th>Income</th>
                                    <th>Expendidture</th>
                                    <th>Edit</th>

                                </tr>
                            </thead>

                            <tbody>
                                {
                                    translist.map((element)=>{
                                        return<tr>
                                            
                                            <td>{element.date}</td>
                                            <td>{element.time}</td>
                                            <td>{element.income}</td>
                                            <td>{element.expense}</td>
                                            <td><Link to={`/Edit/${element._id}`}><button className='btn btn-primary sm'>EDIT</button></Link></td>
                                        </tr>
                                    })
                                }
                               
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Transactions
