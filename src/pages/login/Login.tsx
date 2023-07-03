import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { login } from "../../services/service";
import { Link, useNavigate } from "react-router-dom";
import { addToken } from "../../store/tokens/action";
import { ChangeEvent, useEffect, useState } from "react";
import { Box, Button, Grid, TextField, Typography } from "@material-ui/core";
import Arrow from "../../assets/img/Seta.svg";
import UsuarioLogin from "../../models/UsuarioLogin";
import ImgLogin from "../../assets/img/login-img.svg";
import "./Login.css";

export default function Login() {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [token, setToken] = useState("");
    const [usuarioLogin, setUserLogin] = useState<UsuarioLogin>({
        id: 0,
        email: "",
        senha: "",
        token: "",
    });

    function updatedModel(e: ChangeEvent<HTMLInputElement>) {
        setUserLogin({
            ...usuarioLogin,
            [e.target.name]: e.target.value,
        });
    }

    useEffect(() => {
        if (token != '') {
            dispatch(addToken(token))
            navigate('/home')
        }
    }, [token]);

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault();
        try {
            await login(`/usuarios/logar`, usuarioLogin, setToken);
            toast.success("Usuário logado com sucesso!", {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                progress: undefined,
                theme: "light",
            });
        } catch (error) {
            toast.warn("Dados do usuário inconsistentes. Erro ao logar!", {
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

    return (
        <>
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                className="box-principal"
            >
                <Grid xs={6} className="grid-left">
                    <Box className="box-container-left">
                        <Box></Box>
                        <Typography>
                            <h1>Divulgue aqui seus produtos</h1>
                            <p>
                                Faça parte do nosso catálogo de divulgação e aumente suas
                                vendas.
                            </p>
                        </Typography>
                        <Box className="box-img-login">
                            <img src={ImgLogin} alt="Desenho de rapaz fazendo login" />
                        </Box>
                    </Box>
                </Grid>

                <Grid xs={6} className="grid-right">
                    <Box className="box-container-right">
                        <Box>
                            <form onSubmit={onSubmit}>
                                <Typography
                                    variant="h3"
                                    gutterBottom
                                    color="textPrimary"
                                    component="h3"
                                    align="center"
                                >
                                    Entrar
                                </Typography>

                                <TextField
                                    value={usuarioLogin.email}
                                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                                        updatedModel(e)
                                    }
                                    id="email"
                                    label="Digite seu e-mail"
                                    variant="outlined"
                                    name="email"
                                    margin="normal"
                                    type="email"
                                    fullWidth
                                />

                                <TextField
                                    value={usuarioLogin.senha}
                                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                                        updatedModel(e)
                                    }
                                    id="senha"
                                    label="Digite sua senha"
                                    variant="filled"
                                    name="senha"
                                    margin="normal"
                                    type="password"
                                    fullWidth
                                />
                                <Button type="submit" className="btn-caixa">
                                    <Box className="btn-logar">
                                        <p>LOGAR</p>
                                        <Box className="btn-arrow-logar">
                                            <img src={Arrow} alt="" className="arrow-img" />
                                        </Box>
                                    </Box>
                                </Button>
                            </form>
                        </Box>

                        <Box display="flex" justifyContent="center" marginTop={2} className="caixa-cadastrase">
                            <Box marginRight={1}>
                                <Typography variant="subtitle1" gutterBottom align="center">
                                    Não tem uma conta?
                                </Typography>
                            </Box>

                            <Link to={`/cadastro`}>
                                <Typography className="text-decorator-none" variant="subtitle1" gutterBottom align="center" style={{ fontWeight: "bold" }}>
                                    Cadastre-se
                                </Typography>
                            </Link>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </>
    );
}