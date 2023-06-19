import { Box, Button, Grid, TextField, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import ImgLogin from "../../assets/img/Desenho.svg";
import "./style.css";

export default function Login() {
    return (
        <>
            <Grid container direction='row' justifyContent='center' alignItems='center' className="">
                <Grid xs={6} className='imagem'>
                    <Typography>
                        <h1>Divulgue seus produtos na nossa plataforma</h1>

                        Faça parte do nosso catálogo de divulgação e aumente a venda dos seus produtos.
                    </Typography>
                    <img src={ImgLogin} alt="" />
                </Grid>
                <Grid alignItems='center' xs={6}>
                    <Box paddingX={20} className="boxLogin">
                        <Box>
                            <form>
                                <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center' style={{ fontWeight: 'bold' }}>Entrar</Typography>
                                <TextField id='usuario' label='usuário (e-mail)' variant='filled' name='usuario' margin='normal' fullWidth />
                                <TextField id='senha' label='senha' variant='filled' name='senha' margin='normal' type='password' fullWidth />
                                <Box marginTop={2} textAlign='center'>
                                    <Link to='/home' className='text-decorator-none'>
                                        <Button type='submit' variant='contained' color='primary'>
                                            Logar
                                        </Button>
                                    </Link>
                                </Box>
                            </form>
                        </Box>
                        <Box display='flex' justifyContent='center' marginTop={2}>
                            <Box marginRight={1}>
                                <Typography variant='subtitle1' gutterBottom align='center'>Não tem uma conta?</Typography>
                            </Box>
                            <Typography variant='subtitle1' gutterBottom align='center' style={{ fontWeight: 'bold' }}>Cadastre-se</Typography>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}