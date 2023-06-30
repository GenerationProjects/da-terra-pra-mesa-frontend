import { toast } from 'react-toastify';
import { Typography } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { cadastroUsuario } from '../../services/service';
import { ChangeEvent, useEffect, useState } from 'react';
import { Box, Button, Grid, TextField } from '@material-ui/core';
import Usuario from '../../models/Usuario';
import ImgCadas from '../../assets/img/cadastro.svg';
import './Cadastro.css';


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
            navigate('/login')

            toast.success('Usuario cadastrado com sucesso', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                progress: undefined,
                theme: "light",
            });

            alert('Usuario cadastrado com sucesso')
            navigate('/login')

        } else {
            toast.warn('Dados inconsistentes. Favor verificar as informações de cadastro.', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                progress: undefined,
                theme: "light",
            });
        }
    }

    function goLogin() {
        navigate('/login')
    }

    return (
        <> <Grid container direction='row' justifyContent='center' alignItems='center'>
            <Grid item xs={6} alignItems='center' ><img src={ImgCadas} alt="" className='imagemSignUp' /></Grid>
            <Grid item xs={6} alignItems='center'>
                <Box paddingX={10} className='box-singUp'>
                    <form onSubmit={onSubmit}>
                        <Typography
                            variant="h3"
                            gutterBottom

                            component="h3"
                            align="center"
                            className="textos2"
                        >
                            Cadastro
                        </Typography>
                        <TextField value={usuario.nome} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='nome' label='nome' variant='outlined' name='nome' margin='normal' fullWidth />
                        <TextField value={usuario.email} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='email' label='e-mail' variant='outlined' name='email' margin='normal' type='email' fullWidth />
                        <TextField value={usuario.senha} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='senha' label='senha' variant='outlined' name='senha' margin='normal' type='password' fullWidth />
                        <TextField value={confirmarSenha} onChange={(e: ChangeEvent<HTMLInputElement>) => confirmarSenhaHandle(e)} id='confirmarSenha' label='confirmar senha' variant='outlined' name='confirmarSenha' margin='normal' type='password' fullWidth />                        <Box marginTop={2} textAlign='center'>
                            <Link to='/login' className='text-decorator-none'>
                                <Button variant='contained' className='btnCancel'>
                                    Cancelar
                                </Button>
                            </Link>
                            <Button type='submit' variant='contained' className='btnCadastrar'>
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