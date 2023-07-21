import React from 'react'

const MenuCard = ({ menuData }) => {
  // console.log(menuData);
  return (
    <>
        <section className="menuCard">

          {menuData.map((curElem) =>{
            const {id, name, image, category, description} = curElem;

           return ( 
            <div className="card_container" key={id}>
                <div className="card">
                    <h5>{category}</h5>
                    <div className="food_details">
                      <h1>{name}</h1>
                      <p>{description}</p>
                    </div>

                    <div className="card_img_btn">
                      <img src={image} alt="" className="card_img" />
                      <button className="card_btn">Order Now</button>
                    </div>

                </div>
            </div>)

          })}
         
        </section>
    </>
  )
}

export default MenuCard