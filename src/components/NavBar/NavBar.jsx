import { useState } from 'react'

import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import { Menu, MenuItem } from '@mui/material'

function NavBar() {
  const menuElements = [
    'Home',
    'Products',
    'About',
    'nuevo',
    'elemnto nuevo',
    'Casa'
  ]

  const [anchorEl, setAnchorEl] = useState(null)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  function handleClick(e) {
    setAnchorEl(e.currentTarget)
    setIsMenuOpen(true)
  }

  function handleClose() {
    setAnchorEl(null)
    setIsMenuOpen(false)
  }

  function createMenuItems() {
    const menuItems = menuElements.map((item) => {
      return <MenuItem>{item}</MenuItem>
    })
    return menuItems
  }

  return (
    <AppBar position="static">
      <Toolbar variant="dense">
        <IconButton
          onClick={handleClick}
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Menu open={isMenuOpen} anchorEl={anchorEl} onClose={handleClose}>
          {createMenuItems()}
        </Menu>
        <Typography variant="h6" color="inherit" component="div">
          Reboot Academy
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default NavBar
