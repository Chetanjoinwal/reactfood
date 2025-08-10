import React from 'react'
import Innerbanner from '../Component/Innerbanner'
import MenuSection from '../Component/MenuSection'

// Import all images
import breakfast1 from '../../public/images/breakfast-1.jpg'
import breakfast2 from '../../public/images/breakfast-2.jpg'
import breakfast3 from '../../public/images/breakfast-3.jpg'
import breakfast4 from '../../public/images/breakfast-4.jpg'
import breakfast5 from '../../public/images/breakfast-5.jpg'
import breakfast6 from '../../public/images/breakfast-6.jpg'
import breakfast7 from '../../public/images/breakfast-7.jpg'
import breakfast8 from '../../public/images/breakfast-8.jpg'

import lunch1 from '../../public/images/lunch-1.jpg'
import lunch2 from '../../public/images/lunch-2.jpg'
import lunch3 from '../../public/images/lunch-3.jpg'
import lunch4 from '../../public/images/lunch-4.jpg'
import lunch5 from '../../public/images/lunch-5.jpg'
import lunch6 from '../../public/images/lunch-6.jpg'
import lunch7 from '../../public/images/lunch-7.jpg'
import lunch8 from '../../public/images/lunch-8.jpg'
import dessert1 from '../../public/images/dessert-1.jpg'
import dessert2 from '../../public/images/dessert-2.jpg'
import dessert3 from '../../public/images/dessert-3.jpg'
import dessert4 from '../../public/images/dessert-4.jpg'
import dessert5 from '../../public/images/dessert-5.jpg'


const Services = () => {
  const breakfastMenu = [
    { img: breakfast1, title: 'Beef Roast Source', price: '$29', items: ['Meat', 'Potatoes', 'Rice', 'Tomatoe'] },
    { img: breakfast2, title: 'Beef Roast Source', price: '$29', items: ['Meat', 'Potatoes', 'Rice', 'Tomatoe'] },
    { img: breakfast3, title: 'Beef Roast Source', price: '$29', items: ['Meat', 'Potatoes', 'Rice', 'Tomatoe'] },
    { img: breakfast4, title: 'Beef Roast Source', price: '$29', items: ['Meat', 'Potatoes', 'Rice', 'Tomatoe'] },
    { img: breakfast5, title: 'Beef Roast Source', price: '$29', items: ['Meat', 'Potatoes', 'Rice', 'Tomatoe'] },
    { img: breakfast6, title: 'Beef Roast Source', price: '$29', items: ['Meat', 'Potatoes', 'Rice', 'Tomatoe'] },
    { img: breakfast7, title: 'Beef Roast Source', price: '$29', items: ['Meat', 'Potatoes', 'Rice', 'Tomatoe'] },
    { img: breakfast8, title: 'Beef Roast Source', price: '$29', items: ['Meat', 'Potatoes', 'Rice', 'Tomatoe'] }
  ]
 

const lunchMenu = [
  { img: lunch1, title: 'Beef Roast Source', price: '$29', items: ['Meat', 'Potatoes', 'Rice', 'Tomatoe'] },
  { img: lunch2, title: 'Beef Roast Source', price: '$29', items: ['Meat', 'Potatoes', 'Rice', 'Tomatoe'] },
  { img: lunch3, title: 'Beef Roast Source', price: '$29', items: ['Meat', 'Potatoes', 'Rice', 'Tomatoe'] },
  { img: lunch4, title: 'Beef Roast Source', price: '$29', items: ['Meat', 'Potatoes', 'Rice', 'Tomatoe'] },
  { img: lunch5, title: 'Beef Roast Source', price: '$29', items: ['Meat', 'Potatoes', 'Rice', 'Tomatoe'] },
  { img: lunch6, title: 'Beef Roast Source', price: '$29', items: ['Meat', 'Potatoes', 'Rice', 'Tomatoe'] },
  { img: lunch7, title: 'Beef Roast Source', price: '$29', items: ['Meat', 'Potatoes', 'Rice', 'Tomatoe'] },
  { img: lunch8, title: 'Beef Roast Source', price: '$29', items: ['Meat', 'Potatoes', 'Rice', 'Tomatoe'] }
]

const dessertsMenu = [
  { img: dessert1, title: 'Beef Roast Source', price: '$29', items: ['Meat', 'Potatoes', 'Rice', 'Tomatoe'] },
  { img: dessert2, title: 'Beef Roast Source', price: '$29', items: ['Meat', 'Potatoes', 'Rice', 'Tomatoe'] },
  { img: dessert3, title: 'Beef Roast Source', price: '$29', items: ['Meat', 'Potatoes', 'Rice', 'Tomatoe'] },
  { img: dessert4, title: 'Beef Roast Source', price: '$29', items: ['Meat', 'Potatoes', 'Rice', 'Tomatoe'] },
  { img: dessert5, title: 'Beef Roast Source', price: '$29', items: ['Meat', 'Potatoes', 'Rice', 'Tomatoe'] }
]


return (
  <>
    <Innerbanner/>
    <section className="ftco-section">
      <div className="container">
        <div className="row justify-content-center mb-5 pb-2">
          <div className="col-md-7 text-center heading-section ftco-animate">
            <span className="subheading">Specialties</span>
            <h2 className="mb-4 z-index-1">Our Menu</h2>
          </div>
        </div>

        <div className="row">
          <MenuSection title="Breakfast" data={breakfastMenu} leftIcon="flaticon-bread" rightIcon="flaticon-breakfast" />
          <MenuSection title="Lunch" data={lunchMenu} leftIcon="flaticon-pizza" rightIcon="flaticon-chicken" />
          <MenuSection title="Desserts" data={dessertsMenu}  leftIcon="flaticon-cupcake"  rightIcon="flaticon-ice-cream"/>
        </div>
      </div>
    </section>
  </>
)

}

export default Services
