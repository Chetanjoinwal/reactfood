import React from 'react'
const MenuSection = ({ title, data, leftIcon, rightIcon }) => {
  return (
    <div className="col-md-6 col-lg-4">
      <div className="menu-wrap">
        <div className="heading-menu text-center ftco-animate">
          <h3>{title}</h3>
        </div>

        {data.map((menu, index) => (
          <div
            key={index}
            className={`menus d-flex ftco-animate ${index === data.length - 1 ? 'border-bottom-0' : ''}`}
          >
            <div className="menu-img img" style={{ backgroundImage: `url(${menu.img})` }}></div>
            <div className="text">
              <div className="d-flex">
                <div className="one-half"><h3>{menu.title}</h3></div>
                <div className="one-forth"><span className="price">{menu.price}</span></div>
              </div>
              <p>
                {menu.items.map((item, i) => (
                  <span key={i}>{item}{i < menu.items.length - 1 && ', '}</span>
                ))}
              </p>
            </div>
          </div>
        ))}

        <span className={`flat ${leftIcon}`} style={{ left: 0 }}></span>
        <span className={`flat ${rightIcon}`} style={{ right: 0 }}></span>
      </div>
    </div>
  )
}

export default MenuSection