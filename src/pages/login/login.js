import React from 'react'
import { Grid, Typography, Card } from '@material-ui/core'
import {useForm} from 'react-hook-form'
import styled from 'styled-components'



const Login = () =>{

    const { register, handleSubmit, errors, } = useForm()
    const handleSubmitForm = (data) =>{
        console.log('opa')
    }
    
    return(
        <Grid container spacing={8}>
            <Content>
                <Typography variant="h3">Login</Typography>
                <CardLogin>
                    <form onSubmit={handleSubmit(handleSubmitForm)}>
                        <div>
                            <p>Email</p>
                            <input
                                placeholder="Email"
                                className="input"
                                name="email"
                                ref={register({
                                required: "Digite seu email",
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                    message: "Digite um endereço de email válido",
                                },
                                })}
                            />  
                            {errors.email && <p>{errors.email.message}</p>}

                        </div>
                        <div>
                            <p>Senha</p>
                            <input
                                placeholder="Digite sua senha"
                                className="input"
                                name="password"
                                type="password"
                                ref={register({
                                required: "Digite sua senha",
                                pattern: {
                                    // value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                    message: "Digite um endereço de email válido",
                                },
                                })}
                            />  
                            {errors.email && <p>{errors.email.message}</p>}
                                
                        </div>
                        <button type="submit">Entrar</button>
                    </form>

                </CardLogin>
            </Content>
            
        </Grid>
    )
}

const Content = styled.main`
    padding: 16px;
    max-width: 1200px;
    margin: 0 auto;
`
const CardLogin = styled(Card)`
    padding: 20px;
`

export default Login