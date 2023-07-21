import React from 'react'

const Navbar = ({ filterItems, menuList }) => {
  return (
    <>
        <nav className="navbar">
            <div className="nav_items">
            {menuList.map((curElem, indx) =>{
              return(
                <button className="nav_links" key={indx} onClick={() =>{filterItems(curElem)}}>{curElem}</button>
              )
            })}
               
              {/* <button className="nav_links">All</button>
                <button className="nav_links">Lunch</button>
                <button className="nav_links">Evening</button>
                <button className="nav_links">Dinner</button> */}

            </div>

        </nav>
    </>
  )
}

export default Navbar