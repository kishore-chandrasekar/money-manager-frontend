import React from 'react'
import { Formik, useFormik } from 'formik'
import { Params, useParams } from 'react-router-dom'
import { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'

function Edit() {
    let params = useParams()
    const formik = useFormik({
        initialValues: {
            type: "",
            income: "",
            expense: "",
            category: "",
            description: "",
            date: "",
            time: ""

        },
        onSubmit: async (values ) => {
            await fetch(`https://moneyvaish.herokuapp.com/userput/${params.id}`, {
                method: "PUT",
                body: JSON.stringify(values),
                headers: {
                    "content-type": "application/json"
                }
            })
            alert("Your income/expenses has been  Updated ")


        }

    })
    const [translist, settranslist] = useState([])
    useEffect(async () => {
        let userdata = await fetch(`https://moneyvaish.herokuapp.com/user/${params.id}`)
        var user = await userdata.json()
        settranslist(user)
        formik.setValues(user)
        console.log(user)


    }, [])
    return (
        <>
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 class="h3 mb-0 text-gray-800">Enter your Income and Expenses</h1>

            </div>
            <div className='container'>
                <form id="form" onSubmit={formik.handleSubmit}>



                    <div className='column'>
                        <div class="placeholder col-6">
                            <select class="placeholder col-12" id="type" name="type" type="text" class="form-control" placeholder={translist.type}
                                onChange={formik.handleChange}
                                values={formik.values.type} >
                                <option>Select Your income/expense type</option>
                                <option>Office</option>
                                <option>Personal</option>

                            </select>
                        </div>

                        <div class="placeholder col-6">
                            <input type="number" class="form-control"  name="income"id="income" placeholder={translist.income}
                                onChange={formik.handleChange}
                                values={formik.values.income} />

                        </div>

                        <div class="placeholder col-6">
                            <input type="number" class="form-control" id="expense" placeholder={translist.expense}
                                onChange={formik.handleChange}
                                values={formik.values.expense} />

                        </div>
                        <div class="placeholder col-6">



                            <select class="placeholder col-12" id="category" type="text" class="form-control" placeholder='Category'
                                onChange={formik.handleChange}
                                values={formik.values.category} >
                                <option>Select Your Category</option>
                                <option>Fuel</option>
                                <option>Movie</option>
                                <option>Food</option>
                                <option>Loan</option>
                                <option>Medical Expense</option>
                                <option>Others</option>
                            </select>



                        </div>


                        <div class="placeholder col-6">
                            <input type="text" class="form-control" id="description" placeholder={translist.description}
                                onChange={formik.handleChange}
                                values={formik.values.description} />

                        </div>
                        <div class="placeholder col-6">
                            <input type="date" class="form-control" id="date" placeholder={translist.date}
                                onChange={formik.handleChange}
                                values={formik.values.date} />

                        </div>
                        <div class="placeholder col-6">
                            <input type="time" class="form-control" id="time" placeholder={translist.time}
                                onChange={formik.handleChange}
                                values={formik.values.time} />

                        </div>
                        <div className="col-lg-6 mt-3">
                            <input type="submit" className='btn btn-primary btn-sm'>
                            </input>

                        </div>
                    </div>


                </form>


            </div>




        </>
    )
}

export default Edit
