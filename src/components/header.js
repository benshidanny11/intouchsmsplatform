import React from 'react'
import headerimage from './../imageassets/headerimage.jpg';
export default function Header() {
    return (
        <nav className="navbar  header">
          <div className="companysessage">
              <h5 className="companyname">IntouchSMS Communication Platform</h5>
          </div>
          <div className="userinfocontainer">
              <p className="companyname">Welcome, William Muganwa</p>
               <button className="btn btn-light btns">Top up</button>
               <button className="btn btn-light btns">Logout</button>
          </div>
      </nav>
    )
}
