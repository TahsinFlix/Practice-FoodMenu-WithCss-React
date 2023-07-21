import React, { useState } from 'react'
import Menu from './menuApi'
import "./style.css"
import Navbar from './Navbar'
import MenuCard from './MenuCard'


const uniqueList = [...new Set(Menu.map((curElem) =>{
  return curElem.category;
})), "All"];

// console.log(uniqueList);

const FoodItems = () => {

  const [menuData, setMenuData] = useState(Menu)
  const [menuList, setMenuList] = useState(uniqueList)


  const filterItems = (category) =>{
    if (category === "All") {
      setMenuData(Menu);
      return
    }

    let updateList = Menu.filter((curElem) =>{
      return curElem.category === category;
    }); 
    setMenuData(updateList)
};

  return (
    <>
        <Navbar filterItems={filterItems} menuList={menuList} />
        <MenuCard menuData={menuData} />
    </>
  )
}

export default FoodItems