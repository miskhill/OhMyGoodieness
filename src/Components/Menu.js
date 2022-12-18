import React  from 'react'
import ModalImage from "react-modal-image";
import menu1 from '../img/IMG_4353.jpg'
import menu2 from '../img/IMG_4352.jpg'
import menu3 from '../img/IMG_4351.jpg'
import menu4 from '../img/IMG_4350.jpg'
import menu5 from '../img/IMG_4349.jpg'
import menu6 from '../img/IMG_4354.jpg'
import './menu.css'

const menuDescription = 'Our exciting menu of delicious desserts'

export const Menu = () => (
  <div className="container" id="menu">
    <h3 className="col text-center">Menu</h3>
    <p className="col text-center lead">{menuDescription}</p>
    <div className="row menuContainer" >
      <div className="col-md-4">
        <ModalImage small={menu1} large={menu1} className="menuImage"/>
      </div>
      <div className="col-md-4">
        <ModalImage small={menu2} large={menu2} className="menuImage"/>
      </div>
      <div className="col-md-4">
        <ModalImage small={menu3} large={menu3} className="menuImage"/>
      </div>
      <div className="col-md-4">
        <ModalImage small={menu5} large={menu5} className="menuImage"/>
      </div>
      <div className="col-md-4">
        <ModalImage small={menu4} large={menu4} className="menuImage"/>
      </div>
      <div className="col-md-4">
        <ModalImage small={menu6} large={menu6} className="menuImage"/>
      </div>
    </div>
    <div className="container text-center">
    </div>
  </div>
)
