import React, { useState } from 'react'
import styled from 'styled-components'
import {
  AppBar,
  Toolbar as MaterialToolbar,
  IconButton,
  Typography,
  Menu,
  MenuItem,
} from '@material-ui/core'
import { Settings } from '@material-ui/icons'
// import { ReactComponent as MainLogo } from '../../images/logo.svg'
// import { AuthContext } from '../../contexts/auth'

const Header = () => {
  const [anchorElement, setAnchorElement] = useState()
//   const { userInfo, } = useContext(AuthContext)
  //   const userName = userInfo.user.displayName.split(" ")[0];

  const handleOpenMenu = (e) => {
    setAnchorElement(e.target)
  }

  const handleClose = () => {
    setAnchorElement(null)
  }
  const handleAlow = () => {
    console.log('go')
  }

  return (
    <HeaderMenu>
      <Toolbar>
        <LogoContainer>
          admBizz
        </LogoContainer>
        <Typography color="inherit"> Olá Jonathan</Typography>
        <IconButton color="inherit" onClick={handleOpenMenu}>
          <Settings />
        </IconButton>
        <Menu
          open={!!anchorElement}
          onClose={handleClose}
          anchorEl={anchorElement}
        >
          <MenuItem onClick={handleAlow}>Sair </MenuItem>
        </Menu>
      </Toolbar>
    </HeaderMenu>
  )
}

const HeaderMenu = styled(AppBar)`
 /* height: 62px; */
 /* border-radius: 15px 15px  0 0; */
 background-color: #2D2C29;
 box-shadow:none
`
const Toolbar = styled(MaterialToolbar)`
  margin: 0 auto;
  max-width: 960px;
  width: 100%;
`

const LogoContainer = styled.div`
  flex-grow: 1;
`

// const Logo = styled(MainLogo)`
//   width: 200px;
//   height: 50px;
// `

export default Header
