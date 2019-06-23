import React from 'react'
import { Route } from 'react-router-dom'

//Import pages
import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Portfolio from './pages/Portfolio'

import Nav from `./components/Nav`

export default class Main extends React.Component {
  render () {
    return (
      <div className="wrapper">
        {/* <header>
          <nav>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>

              <li>
                <a href="/about">About</a>
              </li>

              <li>
                <a href="/portfolio">Portfolio</a>
              </li>

              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </nav>
        </header> */}

        <Nav />

        <Route exact={true} path="/" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/contact" component={Contact}/>
        <Route path="/portfolio" component={Portfolio}/>
      </div>
    )
  }
}