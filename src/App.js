import React, { Component } from 'react';
import { Navbar } from './Components/Navbar'
import { Intro } from './Components/Intro'
import { About } from './Components/About'
import { Menu } from './Components/Menu'
import { Footer } from './Components/Footer'
import { SocialFollow } from './Components/socialFollow'

export class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Intro />
        <About />
        <Menu />
        <SocialFollow />
        <Footer />
      </div>
    )
  }
}
