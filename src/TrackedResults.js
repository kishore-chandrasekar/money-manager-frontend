import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useEffect } from "react"

function TrackedResults() {
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
    return (
        <>

            <div class="d-sm-flex align-items-center justify-content-between mb-4">

                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                            <thead>
                                <tr>
                                    <th>Date</th>
                                    <th>Time</th>
                                    <th>Income</th>
                                    <th>Expenditure</th>


                                </tr>
                            </thead>

                            <tbody>

                                {translist.map((element)=>{
                                    return <tr>
                                    <td>{element.date}</td>
                                    <td>{element.time}</td>
                                    <td>{element.income}</td>
                                    <td>{element.expense}</td>

                                </tr>
                                })}

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </>
    )
}

export default TrackedResults
