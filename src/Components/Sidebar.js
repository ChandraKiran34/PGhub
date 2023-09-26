import React from 'react'
import '../App.css'
import { SidebarData } from './SidebarData'
import { Link,useLocation } from 'react-router-dom';
function Sidebar() {

  const location = useLocation();

  return (
    <div className="Sidebar">
    <ul className='SidebarList'>
      {
        SidebarData.map((val,key)=>{
            return(
              
                <li 
                    key={key} 
                    className="row"
                    id={location.pathname === val.link ? "active" : ""}
                    onClick={()=>{
                    window.location.pathname = val.link
                    }}
                >
                 <Link to="/">
                      {" "}
                      <div id="icon">
                          {val.icon}{" "}
                      </div>
                      <div id="title">
                        {val.title} 
                      </div>
                 </Link>
                </li>
            )
        })
      }

    </ul>
    </div>
  )
}

export default Sidebar
