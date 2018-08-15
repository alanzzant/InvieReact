import React, { Component } from 'react';

import TitlePage from './components/TitlePage'
import Guitars from './components/Guitars'
import Contact from './components/Contact'

// import './css/index.css'


class Invie extends Component {
  render() {
    return (
      <section className="Invie">
        {/* Title page */}
        <TitlePage />
        {/* Guitars */}
        <Guitars />
        {/* Contact */}
        <Contact />
      </section>
    );
  }
}

export default Invie;
