import React from 'react'

function Navbar() {
    return (
        <div>

            <nav className="navbar bg-primary text-white            ">
                <div className="container-fluid">
                <a  href='/'><span className="navbar-brand mb-0 h1 ">Navbar</span></a>
                
               <button className='btn btn-primary'> <a  href='/adduser'><span className=" text-light my-2 ">AddUser</span></a></button>
                
                </div>
            </nav>
        </div>
    )
}

export default Navbar
