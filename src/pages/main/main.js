import React from 'react'
import { Grid } from '@material-ui/core'
import styled from 'styled-components'

const Main = () => {
    return(
        <ContainerDashboard>
            <GridDashboard container spacing={1}>
                <h1>Dashboard</h1>
            </GridDashboard>
        </ContainerDashboard>
        
    )
}

const ContainerDashboard = styled.div`
    height: 100vh;
    width: 100vw;
    padding: 15px;
`
const GridDashboard = styled(Grid)`
    border: 1px solid #a6a6a6;
    margin: 0 auto
`


export default Main