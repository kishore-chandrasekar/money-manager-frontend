import React from 'react'

function Dashboard() {
    return (

        <>
            <div class="d-sm-flex align-items-center justify-content-between mb-4">
                <h3>Your Total Income and Expenses</h3>
                <a href="#" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                    class="fas fa-download fa-sm text-white-50"></i> Generate Report</a>
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
                                    <th>Select-Period</th>
                                    <th>Income</th>
                                    <th>Expendidture</th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <td><div class="form-group">
                                        <label for="year">Select year:</label>
                                        <select class="form-control" id="year">
                                            <option>2022</option>
                                            <option>2021</option>
                                            <option>2020</option>
                                            <option>2019</option>
                                            <option>2018</option>
                                        </select>
                                    </div></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td><div class="form-group">
                                        <label for="year">Select month:</label>
                                        <select class="form-control" id="year">
                                            <option>January</option>
                                            <option>February</option>
                                            <option>March</option>
                                            <option>April</option>
                                            <option>May</option>
                                            <option>June</option>
                                            <option>July</option>
                                            <option>August</option>
                                            <option>September</option>
                                            <option>October</option>
                                            <option>November</option>
                                            <option>December</option>
                                        </select>
                                    </div></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>This Week</td>
                                    <td></td>
                                    <td></td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </>





    )
}

export default Dashboard
