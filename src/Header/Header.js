import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import PropTypes from 'prop-types'

class Header extends React.Component {
  render () {
    return (
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Malaria Modeling</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link
            href="#home"
            onClick={() => {
              this.props.click('home')
            }}
          >
            Home
          </Nav.Link>
          <Nav.Link
            href="#Model"
            onClick={() => {
              this.props.click('model')
            }}
          >
            Model
          </Nav.Link>
          <Nav.Link
            href="#Paper"
            onClick={() => {
              this.props.click('paper')
            }}
          >
            Paper
          </Nav.Link>
          <Nav.Link
            href="#Vector"
            onClick={() => {
              this.props.click('vector')
            }}
          >
            Vector
          </Nav.Link>
          <Nav.Link
            href="#Intervention"
            onClick={() => {
              this.props.click('intervention')
            }}
          >
            Intervention
          </Nav.Link>
        </Nav>
      </Navbar>
    )
  }
}

Header.propTypes = {
  click: PropTypes.func
}

export default Header
