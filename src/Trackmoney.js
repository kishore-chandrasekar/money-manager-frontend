import React from 'react'
import { Formik, useFormik } from 'formik'
import { Link } from 'react-router-dom'

function Trackmoney() {
    const formik = useFormik({
        initialValues: {
           startdate:"",
           enddate:""


        },
        onSubmit: (values) => {
            // await fetch("https://6196d2b3af46280017e7e2d0.mockapi.io/Userlist", {
            //     method: "POST",
            //     body: JSON.stringify(values),
            //     headers: {
            //         "Content-type": "application/json"
            //     }
            // })
            alert("Your income/expenses has been Updated ")


        }

    })
    return (
        <>
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 class="h3 mb-0 text-gray-800">Enter your Start and End Date</h1>

            </div>
            <div className='container'>
                <form id="form" onSubmit={formik.handleSubmit}>
                    <div className='column'>


                        <div class="placeholder col-6">
                            <input type="date" class="form-control" id="startdate" placeholder="Select Start Date"
                                onChange={formik.handleChange}
                                values={formik.values.startdate} required />

                        </div>

                        <div class="placeholder col-6">
                            <input type="date" class="form-control" id="enddate" placeholder='Select End Date'
                                onChange={formik.handleChange}
                                values={formik.values.enddate} required />

                        </div>

                        <div className="col-lg-6 mt-3">
                           <Link to="/TrackedResults"> <input type="submit" className='btn btn-primary btn-sm'>
                            </input></Link>

                        </div>

                    </div>
                </form>


            </div>


        </>
    )
}

export default Trackmoney
