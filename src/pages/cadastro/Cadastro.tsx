import { Box, Button, Grid, TextField, Typography } from '@material-ui/core'
import { Link, useNavigate } from 'react-router-dom'
import { ChangeEvent, useEffect, useState } from 'react';
import { cadastroUsuario } from '../../services/service';
import ImgCadas from '../../assets/img/cadastro.svg'
import Usuario from '../../models/Usuario';
import './cadastro.css'


export default function Cadastro() {

    const navigate = useNavigate();
    const [confirmarSenha, setConfirmarSenha] = useState<string>("")
    const [usuario, setUser] = useState<Usuario>(
        {
            id: 0,
            nome: '',
            email: '',
            senha: ''
        })

    const [userResult, setUserResult] = useState<Usuario>(
        {
            id: 0,
            nome: '',
            email: '',
            senha: ''
        })

    useEffect(() => {
        if (userResult.id != 0) {
            navigate("/login")
        }
    }, [userResult])


    function confirmarSenhaHandle(e: ChangeEvent<HTMLInputElement>) {
        setConfirmarSenha(e.target.value)
    }

    function updatedModel(e: ChangeEvent<HTMLInputElement>) {

        setUser({
            ...usuario,
            [e.target.name]: e.target.value
        })

    }

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        if (confirmarSenha == usuario.senha) {
            cadastroUsuario(`/usuarios/cadastrar`, usuario, setUserResult)
            alert('Usuario cadastrado com sucesso')
        } else {
            alert('Dados inconsistentes. Favor verificar as informações de cadastro.')
        }
    }

    return (
        <> <Grid container direction='row' justifyContent='center' alignItems='center'>
            <Grid item xs={6} alignItems='center' ><img src={ImgCadas} alt="" className='imagemSignUp' /></Grid>
            <Grid item xs={6} alignItems='center'>
                <Box paddingX={10} className='box-singUp'>
                    <form onSubmit={onSubmit}>
                        <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center' className='textos2'>Cadastrar</Typography>
                        <TextField value={usuario.nome} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='nome' label='nome' variant='outlined' name='nome' margin='normal' fullWidth />
                        <TextField value={usuario.email} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='email' label='e-mail' variant='outlined' name='email' margin='normal' type='email' fullWidth />
                        <TextField value={usuario.senha} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='senha' label='senha' variant='outlined' name='senha' margin='normal' type='password' fullWidth />
                        <TextField value={confirmarSenha} onChange={(e: ChangeEvent<HTMLInputElement>) => confirmarSenhaHandle(e)} id='confirmarSenha' label='confirmar senha' variant='outlined' name='confirmarSenha' margin='normal' type='password' fullWidth />                        <Box marginTop={2} textAlign='center'>
                            <Link to='/login' className='text-decorator-none'>
                                <Button variant='contained' color='secondary' className='btnCancel'>
                                    Cancelar
                                </Button>
                            </Link>
                            <Button type='submit' variant='contained' color='primary'>
                                Cadastrar-se
                            </Button>
                        </Box>
                    </form>
                </Box>
            </Grid>
        </Grid>
        </>
    )
}