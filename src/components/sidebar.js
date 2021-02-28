import React from 'react'

export default function Sidebar() {
    return (
        <div className="wrapper ">
      
        <nav id="sidebar " className="sidebarcustom">
           <div className="sideheader">
               <p>My Account</p>
           </div>
            <ul className="list-unstyled components">
                <li className="active parentitems">
                    <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Account info</a>
                    <ul className="collapse list-unstyled" id="homeSubmenu">
                        <li>
                            <a href="#">My profile</a>
                        </li>
                        <li>
                            <a href="#">My clients</a>
                        </li>
                        <li>
                            <a href="#">My cledit transfer</a>
                        </li>
                        <li>
                            <a href="#">My transactions</a>
                        </li>
                    </ul>
                </li>
                <li className="active">
                    <a href="#addressSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Address book</a>
                    <ul className="collapse list-unstyled" id="addressSubmenu">
                        <li>
                            <a href="#">Contacts</a>
                        </li>
                        <li>
                            <a href="#">Groups</a>
                        </li>
                    </ul>
                </li>
                <li className="active">
                    <a href="#messagingSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Messaging</a>
                    <ul className="collapse list-unstyled" id="messagingSubmenu">
                        <li>
                            <a href="#">My profile</a>
                        </li>
                        <li>
                            <a href="#">My clients</a>
                        </li>
                        <li>
                            <a href="#">My cledit transfer</a>
                        </li>
                        <li>
                            <a href="#">My transactions</a>
                        </li>
                    </ul>
                </li>
                <li className="active">
                    <a href="#smsSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">SMS Manager</a>
                    <ul className="collapse list-unstyled" id="smsSubmenu">
                        <li>
                            <a href="#">My profile</a>
                        </li>
                        <li>
                            <a href="#">My clients</a>
                        </li>
                        <li>
                            <a href="#">My cledit transfer</a>
                        </li>
                        <li>
                            <a href="#">My transactions</a>
                        </li>
                    </ul>
                </li>
                <li className="active">
                    <a href="#admnistrationSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Admnistration</a>
                    <ul className="collapse list-unstyled" id="admnistrationSubmenu">
                        <li>
                            <a href="#">My profile</a>
                        </li>
                        <li>
                            <a href="#">My clients</a>
                        </li>
                        <li>
                            <a href="#">My cledit transfer</a>
                        </li>
                        <li>
                            <a href="#">My transactions</a>
                        </li>
                    </ul>
                </li>
            </ul>
    
        </nav>
    </div>
    )
}
