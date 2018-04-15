import React from 'react'

import '../sass/styles.scss'

import Header from './Header'
import Form from './Form'
import Content from './Content'
import Scroller from './Scroller'
import Footer from './Footer'

const App = () => (
  <div>
    <Header />
    <Form />
    <div className="column is-4 is-offset-4">
      <hr className="navbar-divider" />
    </div>
    <Content />
    <Scroller />
    <Footer />
  </div>
)

export default App
