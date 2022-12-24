import React, { Component } from 'react';
import { CreditPopup } from './Popups'
import menu4 from '../img/IMG_4350.jpg'
import './intro.css'


export class Intro extends Component {
  render() {
    return (
      <div id="intro">
        <div className="d-flex flex-column bd-highlight mb-3 intro-bg">
          <div className="flex-fill align-self-center">
          <div className="container text-center">
              <h3 className="display-4" id="introText">Welcome to</h3>
              <h3 className="display-1" id="introText">OH MY Goodieness!</h3>
              <img src={menu4} className="rounded-circle img-fluid" id="introIMG"/>
            </div>
          </div>
          <div className="ml-auto p-2 bd-highlight">
            <CreditPopup credit={<a id="photoCredit" href='https://unsplash.com/@nevenkrcmarek'>Photo by Kerry Peacock</a>}/>
          </div>
        </div>
      </div>
    )
  }
}
