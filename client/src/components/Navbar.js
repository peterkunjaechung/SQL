import React from 'react'
import { Menu, } from 'semantic-ui-react'
import { Link, withRouter } from 'react-router-dom'

const Navbar = () => {

  return (
    <div>
      <Menu pointing secondary>
        <Menu.Item as={Link} to='/' name="home" />
        <Menu.Item as={Link} to='/dashboard' name="dashboard" />
      </Menu>
    </div>
  )
}

export default withRouter(Navbar)
