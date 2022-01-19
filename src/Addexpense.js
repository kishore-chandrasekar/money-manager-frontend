import React from 'react'
import { useFormik } from 'formik'
import { isDisabled } from '@testing-library/user-event/dist/utils'

function Addexpense() {
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
        onSubmit: async (values) => {
            await fetch("https://moneyvaish.herokuapp.com/userpost", {
                method: "POST",
                body: JSON.stringify(values),
                headers: {
                    "Content-type": "application/json"
                }
            })
            alert("Your income/expenses has been recorded ")


        }

    })
    return (
        <>
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 class="h3 mb-0 text-gray-800">Enter your Expenses</h1>

            </div>
            <div className='container'>
                <form id="form" onSubmit={formik.handleSubmit}>
                    <div className='column'>
                        <div class="placeholder col-6">
                            <select class="placeholder col-12" id="type" type="text" class="form-control"  placeholder='type'
                                onChange={formik.handleChange}
                                values={formik.values.type} required>
                                <option>Select Your income/expense type</option>
                                <option>Office</option>
                                <option>Personal</option>

                            </select>
                        </div>

                        <div class="placeholder col-6">
                            <input type="number" class="form-control" id="income" placeholder="Income in INR"
                                onChange={formik.handleChange}
                                values={formik.values.income} disabled />
                               
                        </div>

                        <div class="placeholder col-6">
                            <input type="number" class="form-control" id="expense" placeholder='Expense in INR'
                                onChange={formik.handleChange}
                                values={formik.values.expense} required  />

                        </div>
                        
                        <div class="placeholder col-6">


                            
                                <select class="placeholder col-12" id="category" type="text" class="form-control"  placeholder='Category'
                                    onChange={formik.handleChange}
                                    values={formik.values.category} required>
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
                            <input type="text" class="form-control" id="description" placeholder="Description"
                                onChange={formik.handleChange}
                                values={formik.values.description} required />

                        </div>
                        <div class="placeholder col-6">
                            <input type="date" class="form-control" id="date" placeholder=" Date"
                                onChange={formik.handleChange}
                                values={formik.values.date} required />

                        </div>
                        <div class="placeholder col-6">
                            <input type="time" class="form-control" id="time" placeholder=" Time"
                                onChange={formik.handleChange}
                                values={formik.values.time} required />

                        </div>
                        <div className="col-lg-6 mt-3">
                            <input type="submit" className='btn btn-primary btn-sm'>
                            </input>

                        </div>

                    </div>
                </form>


            </div>
            <form onClick={formik.values.handleReset} >
                <div className="col-lg-6 mt-3">
                    <button id="clear" className='btn btn-secondary btn-sm'
                        onClick={function (e) {
                            return formik.values.handleReset(e)
                        }} >Add New Expense</button>

                </div>
            </form>

           
        </>
    )
}

export default Addexpense
