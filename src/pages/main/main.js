import React, {useState} from 'react'
import { Grid, withStyles, BottomNavigation, BottomNavigationAction  } from '@material-ui/core'
import styled from 'styled-components'
import Header from './Header'
// import Menu from './Menu'

const Main = () => {
    const [value, setValue] = useState(0)
    return(
        <ContainerDashboard>
            <GridDashboard container spacing={1}>
                <Header />
                
                <DashboardRoutes>
                    <Spacer />

                    <MenuDashboard>
                        <NavigationBottom
                            value={value}
                            onChange={(event, newValue) => {
                                setValue(newValue);
                            }}
                            showLabels
                            >
                            <BottomNavigationAction label="Área 1" />
                            <BottomNavigationAction label="Área 2" />
                            <BottomNavigationAction label="Área 3" />
                        </NavigationBottom>

                        <ContainerRouter>
                            olá
                        </ContainerRouter>
                    </MenuDashboard>

                    
                </DashboardRoutes>
                

                
            </GridDashboard>
        </ContainerDashboard>
        
    )
}


const ContainerDashboard = styled.div`
    height: 100vh;
    width: 100%;
    padding: 0;
`
const GridDashboard = styled(Grid)`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    height: 100vh;
    /* border-radius: 15px; */
    width: 100%;
`
const style = (theme) => ({
    main: theme.mixins.toolbar,
})
const Spacer = withStyles(style)(({ classes }) => (
    <div className={classes.main} />
))
const DashboardRoutes = styled.div`
    display:flex;
    flex-direction: column;
`
const MenuDashboard = styled.section`
    display:flex;
    height: 100%;
    padding-top:15px;

`
const NavigationBottom = styled(BottomNavigation)`
    display:flex;
    flex-direction:column;
    width: 25%;
    height: 50%;
    margin: 15px 25px;
`
const ContainerRouter = styled.div`
    width: 75%;
    background-color: #fff;
    margin: 15px 25px;
    border-radius: 15px;


`


export default Main