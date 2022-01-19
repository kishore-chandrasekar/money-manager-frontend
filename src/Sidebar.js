import React from 'react'
import { Link } from 'react-router-dom';
function Sidebar() {
    return (

        <ul class="navbar-nav bg-gradient-success sidebar sidebar-dark accordion" id="accordionSidebar">

            <Link class="sidebar-brand d-flex align-items-center justify-content-center" to="/Home">
                <div class="sidebar-brand-icon rotate-n-15">
                   
                </div>
                <div class="sidebar-brand-text mx-3">MONEY MANAGER PRO</div>
               
            </Link>

            
            <hr class="sidebar-divider my-0" />
            <li class="nav-item active">
                <Link class="nav-link" to="/Home">
                <i class="fa fa-home" aria-hidden="true"></i>
                    <span>Home</span></Link>
            </li>

            <li class="nav-item active">
                <Link class="nav-link" to="/Dashboard">
                    <i class="fas fa-fw fa-tachometer-alt"></i>
                    <span>Dashboard</span></Link>
            </li>
            <li class="nav-item active">
                <Link class="nav-link" to="/Transactions">
                <i class="fa fa-exchange" aria-hidden="true"></i>
                    <span>Transactions</span></Link>
            </li>
            <li class="nav-item active">
                <Link class="nav-link" to="/Trackmoney">
                <i class="fa fa-search" aria-hidden="true"></i>
                    <span>Track money</span></Link>
            </li>


            <hr class="sidebar-divider" />


            <div class="sidebar-heading">
                Quick Links
            </div>


            <li class="nav-item">
                <Link class="nav-link" to="/Addincome" >
                   <i class="fa fa-inr" aria-hidden="true"></i>
                    <span>ADD INCOME</span>
                </Link>
                <Link class="nav-link " to="/Addexpense" >
                   <i class="fa fa-money" aria-hidden="true"></i>
                    <span>ADD EXPENSE</span>
                </Link>
                <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                    <div class="bg-white py-2 collapse-inner rounded">
                        <h6 class="collapse-header">Custom Components:</h6>
                        <a class="collapse-item" href="buttons.html">Buttons</a>
                        <a class="collapse-item" href="cards.html">Cards</a>
                    </div>
                </div>
            </li>


            <li class="nav-item">
               
                <div id="collapseUtilities" class="collapse" aria-labelledby="headingUtilities"
                    data-parent="#accordionSidebar">
                    <div class="bg-white py-2 collapse-inner rounded">
                        <h6 class="collapse-header">Custom Utilities:</h6>
                        <a class="collapse-item" href="utilities-color.html">Colors</a>
                        <a class="collapse-item" href="utilities-border.html">Borders</a>
                        <a class="collapse-item" href="utilities-animation.html">Animations</a>
                        <a class="collapse-item" href="utilities-other.html">Other</a>
                    </div>
                </div>
            </li>


            <hr class="sidebar-divider" />


        </ul>

    )
}

export default Sidebar
